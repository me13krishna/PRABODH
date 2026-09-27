import React from 'react';
import { Play, Star, BookOpen, Trophy } from 'lucide-react';
import { STORY_MISSIONS } from '../data/mockData';

export default function MissionSelector({ onSelectMission }) {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px' }}>
      {/* Hero Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        borderRadius: '32px',
        padding: '32px',
        color: '#FFFFFF',
        boxShadow: '0 16px 32px rgba(37, 99, 235, 0.25)',
        marginBottom: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            padding: '4px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 800,
            marginBottom: '12px'
          }}>
            🌟 प्रबोध कहानी मिशन (Interactive FLN Story Missions)
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>
            कहानी खेलें और नया सीखें!
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: 0, fontWeight: 500 }}>
            "बच्चा गेम खेलेगा; PRABODH समझेगा कि वो क्या जानता है और आगे क्या सीखने के लिए ready है।"
          </p>
        </div>
      </div>

      {/* Story Missions Grid */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
        उपलब्ध मिशन (Choose Your Mission):
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {STORY_MISSIONS.map((m) => (
          <div
            key={m.id}
            className="glass-card"
            style={{
              padding: '24px',
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            onClick={() => onSelectMission(m)}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '3rem' }}>{m.icon}</span>
                <span className="badge-word" style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800 }}>
                  {m.difficulty}
                </span>
              </div>

              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                {m.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 500, marginBottom: '16px' }}>
                {m.description}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={18} fill="#F59E0B" color="#F59E0B" />
                <span style={{ fontWeight: 800, color: '#D97706', fontSize: '0.95rem' }}>3 Stars</span>
              </div>

              <button
                className="child-btn"
                style={{
                  background: '#2563EB',
                  color: '#FFFFFF',
                  padding: '8px 18px',
                  minHeight: '44px',
                  fontSize: '0.95rem'
                }}
              >
                <span>शुरू करें (Play)</span>
                <Play size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
