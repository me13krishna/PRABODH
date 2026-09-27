import React from 'react';
import { X, Award, BarChart2, Heart, ShieldCheck } from 'lucide-react';

export default function StudentDetailModal({ student, onClose }) {
  if (!student) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '20px'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '32px',
        maxWidth: '650px',
        width: '100%',
        padding: '32px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#64748B'
          }}
        >
          <X size={20} />
        </button>

        {/* Profile Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            fontWeight: 800
          }}>
            👧
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {student.student_id}
              </h3>
              <span style={{ background: '#EFF6FF', color: '#2563EB', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', fontSize: '0.8rem' }}>
                Grade {student.grade}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0, fontWeight: 500 }}>
              Assigned Name: <b>{student.name}</b> • Last Assessed: {new Date(student.last_assessed).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* TaRL Level Badges */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>साक्षरता स्तर (Literacy):</span>
            <div style={{ marginTop: '4px' }}>
              <span className={`badge-${student.literacy_level?.toLowerCase()}`} style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 800 }}>
                {student.literacy_level}
              </span>
            </div>
          </div>

          <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>संख्यात्मकता स्तर (Numeracy):</span>
            <div style={{ marginTop: '4px' }}>
              <span className="badge-subtraction" style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 800 }}>
                {student.numeracy_level}
              </span>
            </div>
          </div>
        </div>

        {/* Micro-Skills Radar & Scores */}
        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BarChart2 size={18} color="#2563EB" />
          <span>सूक्ष्म-कौशल मूल्यांकन (Micro-Skill Competencies):</span>
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {Object.entries(student.micro_skills || {}).map(([skill, val]) => (
            <div key={skill} style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                <span style={{ color: '#334155' }}>{skill}</span>
                <span style={{ color: '#2563EB' }}>{typeof val === 'number' && val <= 1 ? `${Math.round(val * 100)}%` : `${val} WPM`}</span>
              </div>
              <div style={{ background: '#E2E8F0', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  background: 'linear-gradient(90deg, #2563EB 0%, #16A34A 100%)',
                  height: '100%',
                  width: typeof val === 'number' && val <= 1 ? `${val * 100}%` : `${Math.min(100, val * 2)}%`
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Living Interest Profile */}
        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Heart size={18} color="#EC4899" />
          <span>रुचि और रचनात्मक प्रोफ़ाइल (Living Interest Profile):</span>
        </h4>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {Object.entries(student.interest_tags || {}).map(([tag, score]) => (
            <div key={tag} style={{
              background: '#FCE7F3',
              color: '#BE185D',
              padding: '8px 16px',
              borderRadius: '16px',
              fontWeight: 800,
              fontSize: '0.85rem',
              border: '1px solid #FBCFE8'
            }}>
              🐾 {tag.toUpperCase()}: {Math.round(score * 100)}% affinity
            </div>
          ))}
        </div>

        {/* Diagnostic Error Pattern */}
        <div style={{
          background: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '16px',
          padding: '16px',
          fontSize: '0.9rem',
          color: '#1E40AF'
        }}>
          <strong>🔍 Primary Diagnostic Error Pattern:</strong>
          <p style={{ margin: '4px 0 0 0', fontWeight: 600 }}>{student.primary_error_pattern}</p>
        </div>
      </div>
    </div>
  );
}
