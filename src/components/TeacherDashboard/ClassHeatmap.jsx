import React, { useState } from 'react';
import { Users, Sparkles, AlertCircle, RefreshCw, ChevronRight, CheckCircle2, Info, TrendingUp, HelpCircle, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { CLASS_SUMMARY, PRESET_ACTIVITIES } from '../../data/mockData';
import { generateTeacherActivity } from '../../services/aiService';
import WhatToTeachTomorrow from './WhatToTeachTomorrow';
import { t } from '../../i18n/translations';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

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

  const totalStudents = students.length || 32;
  const needingSupportCount = students.filter(s => s.literacy_level === 'BEGINNER' || s.literacy_level === 'LETTER').length;
  const avgProgress = 74;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
      {/* High-Level Overview Stat Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <motion.div whileHover={{ y: -4 }}>
          <Card style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: '#E0F2FE',
              color: '#0284C7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B' }}>TOTAL STUDENTS</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0F172A' }}>{totalStudents}</div>
            </div>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -4 }}>
          <Card style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: '#DCFCE7',
              color: '#166534',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TrendingUp size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B' }}>AVG FLN MASTERY</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#166534' }}>{avgProgress}%</div>
            </div>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -4 }}>
          <Card style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: '#FEF3C7',
              color: '#92400E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <HelpCircle size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B' }}>NEEDING SUPPORT</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#D97706' }}>{needingSupportCount} Kids</div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Top Banner Header */}
      <Card style={{ marginBottom: '24px' }}>
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

          <Badge variant="growth">
            ● {t('syncedAgo', lang)}
          </Badge>
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedCluster('BEGINNER')}
            style={{
              background: '#FEE2E2',
              border: selectedCluster === 'BEGINNER' ? '3px solid #DC2626' : '1px solid #FCA5A5',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#991B1B' }}>{t('beginner', lang)}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#991B1B', margin: '4px 0' }}>6</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#7F1D1D' }}>Children</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedCluster('LETTER')}
            style={{
              background: '#FEF3C7',
              border: selectedCluster === 'LETTER' ? '3px solid #D97706' : '1px solid #FCD34D',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#92400E' }}>{t('letterReader', lang)}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#92400E', margin: '4px 0' }}>10</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#78350F' }}>Children</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedCluster('WORD')}
            style={{
              background: '#E0F2FE',
              border: selectedCluster === 'WORD' ? '3px solid #0284C7' : '1px solid #7DD3FC',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0369A1' }}>{t('wordReader', lang)}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0369A1', margin: '4px 0' }}>12</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#075985' }}>Children</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedCluster('PARAGRAPH')}
            style={{
              background: '#DCFCE7',
              border: selectedCluster === 'PARAGRAPH' ? '3px solid #16A34A' : '1px solid #86EFAC',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#166534' }}>{t('paragraph', lang)}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#166534', margin: '4px 0' }}>4</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#14532D' }}>Children</div>
          </motion.div>
        </div>

        {/* Highlight Banner: Recommended Activity */}
        <div style={{
          background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
          border: '2px solid #7DD3FC',
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
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0369A1', margin: 0 }}>
                {t('recommendedActivity', lang)}
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#075985', fontWeight: 600, margin: '4px 0 0 0' }}>
                "Group B (Letter Readers) needs 5 mins of syllable-matching using flashcards before starting Subtraction."
              </p>
            </div>
          </div>

          <Button variant="primary" size="md" onClick={() => handleGenerateAIActivity('CONCRETE_SUBTRACTION')} disabled={isGenerating}>
            <Sparkles size={16} />
            <span>{isGenerating ? 'Generating...' : t('viewActivityCard', lang)}</span>
          </Button>
        </div>
      </Card>

      {/* "What Should I Teach Tomorrow?" AI Class Plan Module */}
      <WhatToTeachTomorrow students={students} lang={lang} />

      {/* Student Roster Table & Smart Quick Insights */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
        {t('studentRoster', lang)} ({filteredStudents.length} Students):
      </h3>

      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>ANONYMOUS ID</th>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>LITERACY LEVEL</th>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>NUMERACY LEVEL</th>
              <th style={{ padding: '16px 20px', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>TEACHER QUICK INSIGHT</th>
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
                  <Badge variant="purple">{s.numeracy_level}</Badge>
                </td>
                <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Lightbulb size={16} color="#F59E0B" />
                    <span>{s.primary_error_pattern || "Needs 5 mins concrete practice."}</span>
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <Button variant="secondary" size="sm" onClick={() => onSelectStudent(s)}>
                    {t('viewProfile', lang)}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
