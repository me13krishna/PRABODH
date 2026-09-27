import React, { useState } from 'react';
import { Users, Sparkles, AlertCircle, RefreshCw, ChevronRight, CheckCircle2, Info } from 'lucide-react';
import { CLASS_SUMMARY, PRESET_ACTIVITIES } from '../../data/mockData';
import { generateTeacherActivity } from '../../services/aiService';
import WhatToTeachTomorrow from './WhatToTeachTomorrow';
import { t } from '../../i18n/translations';

export default function ClassHeatmap({ students, onSelectStudent, apiKey, lang = 'hi' }) {
  const [selectedCluster, setSelectedCluster] = useState('ALL');
  const [activeActivity, setActiveActivity] = useState(PRESET_ACTIVITIES[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [targetLevel, setTargetLevel] = useState('CONCRETE_SUBTRACTION');

  const handleGenerateAIActivity = async (level) => {
    setIsGenerating(true);
    const activity = await generateTeacherActivity({
      targetLevel: level || targetLevel,
      studentCount: 8,
      errorPattern: "Struggles with abstract subtraction symbols (-); succeeds when using physical objects.",
      dominantInterest: "animals",
      apiKey: apiKey
    });
    setActiveActivity(activity);
    setIsGenerating(false);
  };

  const filteredStudents = selectedCluster === 'ALL'
    ? students
    : students.filter(s => s.literacy_level === selectedCluster || s.numeracy_level === selectedCluster);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      {/* Top Banner Header */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              {t('teacherTitle', lang)}
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0, fontWeight: 600 }}>
              {t('teacherSubtitle', lang)}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              background: '#DCFCE7',
              color: '#15803D',
              fontWeight: 800,
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              ● {t('syncedAgo', lang)}
            </span>
          </div>
        </div>

        {/* 4 Color-Coded Literacy Level Clusters */}
        <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#475569', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {t('literacyClusters', lang)}:
        </h4>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {/* Beginner */}
          <div
            onClick={() => setSelectedCluster('BEGINNER')}
            style={{
              background: '#FEE2E2',
              border: selectedCluster === 'BEGINNER' ? '3px solid #DC2626' : '1px solid #FCA5A5',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.15s ease'
            }}
          >
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#991B1B' }}>{t('beginner', lang)}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#991B1B', margin: '4px 0' }}>6</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#7F1D1D' }}>Children</div>
          </div>

          {/* Letter Reader */}
          <div
            onClick={() => setSelectedCluster('LETTER')}
            style={{
              background: '#FEF3C7',
              border: selectedCluster === 'LETTER' ? '3px solid #D97706' : '1px solid #FCD34D',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.15s ease'
            }}
          >
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#92400E' }}>{t('letterReader', lang)}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#92400E', margin: '4px 0' }}>10</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#78350F' }}>Children</div>
          </div>

          {/* Word Reader */}
          <div
            onClick={() => setSelectedCluster('WORD')}
            style={{
              background: '#DBEAFE',
              border: selectedCluster === 'WORD' ? '3px solid #2563EB' : '1px solid #93C5FD',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.15s ease'
            }}
          >
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E40AF' }}>{t('wordReader', lang)}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1E40AF', margin: '4px 0' }}>12</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E3A8A' }}>Children</div>
          </div>

          {/* Paragraph */}
          <div
            onClick={() => setSelectedCluster('PARAGRAPH')}
            style={{
              background: '#DCFCE7',
              border: selectedCluster === 'PARAGRAPH' ? '3px solid #16A34A' : '1px solid #86EFAC',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.15s ease'
            }}
          >
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#166534' }}>{t('paragraph', lang)}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#166534', margin: '4px 0' }}>4</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#14532D' }}>Children</div>
          </div>
        </div>

        {/* Highlight Banner: Recommended 10-Min Micro-Coaching Activity Card */}
        <div style={{
          background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
          border: '2px solid #93C5FD',
          borderRadius: '20px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1, minWidth: '280px' }}>
            <span style={{ fontSize: '1.6rem' }}>💡</span>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1E40AF', margin: 0 }}>
                {t('recommendedActivity', lang)}
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#1E3A8A', fontWeight: 600, margin: '4px 0 0 0' }}>
                "Group B (Letter Readers) needs 5 mins of syllable-matching using flashcards before starting Subtraction."
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => handleGenerateAIActivity('CONCRETE_SUBTRACTION')}
              disabled={isGenerating}
              style={{
                background: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '14px',
                padding: '10px 20px',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
              }}
            >
              <Sparkles size={16} />
              <span>{isGenerating ? 'AI Generating...' : t('viewActivityCard', lang)}</span>
            </button>
          </div>
        </div>
      </div>

      {/* "What Should I Teach Tomorrow?" AI Class Plan Module */}
      <WhatToTeachTomorrow students={students} lang={lang} />

      {/* Generated Micro-Coaching Activity Card Details */}
      {activeActivity && (
        <div style={{
          background: '#FFFFFF',
          border: '2px solid #2563EB',
          borderRadius: '24px',
          padding: '24px',
          boxShadow: '0 10px 30px rgba(37, 99, 235, 0.1)',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <span className="badge-subtraction" style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800 }}>
                {activeActivity.group_name}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginTop: '6px', margin: '6px 0 0 0' }}>
                📋 {activeActivity.activity_title}
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <select
                value={targetLevel}
                onChange={(e) => {
                  setTargetLevel(e.target.value);
                  handleGenerateAIActivity(e.target.value);
                }}
                style={{
                  padding: '8px 12px',
                  borderRadius: '12px',
                  border: '1px solid #CBD5E1',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <option value="BEGINNER">Group A (Beginner)</option>
                <option value="LETTER">Group B (Letter Reader)</option>
                <option value="CONCRETE_SUBTRACTION">Group C (Concrete Subtraction)</option>
                <option value="ABSTRACT_SUBTRACTION">Group D (Abstract Subtraction)</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <strong style={{ color: '#475569', fontSize: '0.85rem' }}>🎯 Skill Focus:</strong>
              <div style={{ fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>{activeActivity.skill_focus}</div>
            </div>
            <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <strong style={{ color: '#475569', fontSize: '0.85rem' }}>📦 Materials Needed:</strong>
              <div style={{ fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>{activeActivity.materials_needed}</div>
            </div>
          </div>

          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
            📝 Step-by-Step Instructions:
          </h4>
          <ol style={{ paddingLeft: '20px', margin: 0 }}>
            {activeActivity.step_by_step_instructions?.map((step, idx) => (
              <li key={idx} style={{ fontSize: '1rem', color: '#334155', fontWeight: 600, marginBottom: '8px' }}>
                {step}
              </li>
            ))}
          </ol>

          <div style={{
            marginTop: '20px',
            padding: '12px 16px',
            background: '#FEF3C7',
            border: '1px solid #FCD34D',
            borderRadius: '16px',
            fontSize: '0.85rem',
            color: '#92400E',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Info size={18} />
            <span><b>Explainable AI Trigger Tag:</b> {activeActivity.why_recommended}</span>
          </div>
        </div>
      )}

      {/* Student Roster Table */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
        {t('studentRoster', lang)} ({filteredStudents.length} Students):
      </h3>

      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>ANONYMOUS ID</th>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>LITERACY LEVEL</th>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>NUMERACY LEVEL</th>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>INTEREST TAGS</th>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.student_id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#0F172A' }}>
                  {s.student_id} <span style={{ color: '#64748B', fontWeight: 500, fontSize: '0.85rem' }}>({s.name})</span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span className={`badge-${s.literacy_level?.toLowerCase()}`} style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800 }}>
                    {s.literacy_level}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span className="badge-subtraction" style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800 }}>
                    {s.numeracy_level}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {Object.entries(s.interest_tags || {}).map(([tag, score]) => (
                      <span key={tag} style={{ background: '#F1F5F9', color: '#334155', padding: '2px 8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>
                        {tag}: {Math.round(score * 100)}%
                      </span>
                    ))}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <button
                    onClick={() => onSelectStudent(s)}
                    style={{
                      background: '#EFF6FF',
                      color: '#2563EB',
                      border: '1px solid #BFDBFE',
                      borderRadius: '10px',
                      padding: '6px 14px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {t('viewProfile', lang)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
