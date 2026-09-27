import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MissionSelector from './components/MissionSelector';
import StoryPlayer from './components/StoryPlayer';
import ClassHeatmap from './components/TeacherDashboard/ClassHeatmap';
import StudentDetailModal from './components/TeacherDashboard/StudentDetailModal';
import WhatsAppPromptGenerator from './components/WhatsAppPromptGenerator';
import TelemetryInspector from './components/TelemetryInspector';
import { INITIAL_STUDENTS } from './data/mockData';
import { seedInitialStudentsIfEmpty } from './services/db';

export default function App() {
  const [role, setRole] = useState('child'); // 'child' | 'teacher' | 'parent' | 'debug'
  const [lang, setLang] = useState('hi'); // 'hi' | 'en' | 'mr'
  const [selectedMission, setSelectedMission] = useState(null);
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [apiKey, setApiKey] = useState('');

  // Seed IndexedDB student roster on mount
  useEffect(() => {
    seedInitialStudentsIfEmpty(INITIAL_STUDENTS)
      .then((loadedStudents) => {
        if (loadedStudents && loadedStudents.length > 0) {
          setStudents(loadedStudents);
        }
      })
      .catch((err) => console.warn('IndexedDB seed warning:', err));
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      {/* Universal Multi-Language Navbar */}
      <Navbar
        currentRole={role}
        setRole={(r) => {
          setRole(r);
          setSelectedMission(null);
        }}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        lang={lang}
        setLang={setLang}
      />

      {/* Main View Area */}
      <main style={{ flex: 1, paddingBottom: '40px' }}>
        {role === 'child' && (
          selectedMission ? (
            <StoryPlayer
              mission={selectedMission}
              onBackToMissions={() => setSelectedMission(null)}
              onCompleteMission={() => {
                // Mission complete callback
              }}
              soundEnabled={soundEnabled}
              lang={lang}
            />
          ) : (
            <MissionSelector
              onSelectMission={(mission) => setSelectedMission(mission)}
              lang={lang}
            />
          )
        )}

        {role === 'teacher' && (
          <ClassHeatmap
            students={students}
            onSelectStudent={(student) => setSelectedStudent(student)}
            apiKey={apiKey}
            lang={lang}
          />
        )}

        {role === 'parent' && (
          <WhatsAppPromptGenerator apiKey={apiKey} lang={lang} />
        )}

        {role === 'debug' && (
          <TelemetryInspector apiKey={apiKey} setApiKey={setApiKey} />
        )}
      </main>

      {/* Student Profile Modal for Teacher View */}
      {selectedStudent && (
        <StudentDetailModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}

      {/* Persistent Footer */}
      <footer style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '20px',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#64748B'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <b>PRABODH AI (प्रबोध AI / प्रबोध)</b> • AI for Foundational Learning Hackathon 2026
          </div>
          <div>
            Active Language: <b>{lang.toUpperCase()}</b> • FLN Grades 2–3
          </div>
        </div>
      </footer>
    </div>
  );
}
