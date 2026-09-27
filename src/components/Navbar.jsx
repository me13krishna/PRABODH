import React from 'react';
import { Sparkles, BookOpen, Users, HeartHandshake, Settings, Volume2, VolumeX, Wifi } from 'lucide-react';

export default function Navbar({ currentRole, setRole, soundEnabled, setSoundEnabled, syncStatus }) {
  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #E2E8F0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '12px 24px'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Logo & Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setRole('child')}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
          }}>
            <Sparkles size={24} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: 0 }}>
                PRABODH AI
              </h1>
              <span style={{
                background: '#EFF6FF',
                color: '#2563EB',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '12px',
                border: '1px solid #BFDBFE'
              }}>
                प्रबोध
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#64748B', margin: 0, fontWeight: 500 }}>
              FLN Stealth Assessment Engine • Grades 2–3
            </p>
          </div>
        </div>

        {/* Role Navigation Tabs */}
        <nav style={{
          display: 'flex',
          background: '#F1F5F9',
          padding: '4px',
          borderRadius: '16px',
          gap: '4px'
        }}>
          <button
            onClick={() => setRole('child')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: currentRole === 'child' ? '#2563EB' : 'transparent',
              color: currentRole === 'child' ? '#FFFFFF' : '#475569',
              boxShadow: currentRole === 'child' ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <BookOpen size={18} />
            <span>👧 child story</span>
          </button>

          <button
            onClick={() => setRole('teacher')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: currentRole === 'teacher' ? '#2563EB' : 'transparent',
              color: currentRole === 'teacher' ? '#FFFFFF' : '#475569',
              boxShadow: currentRole === 'teacher' ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Users size={18} />
            <span>👩‍🏫 Teacher View</span>
          </button>

          <button
            onClick={() => setRole('parent')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: currentRole === 'parent' ? '#2563EB' : 'transparent',
              color: currentRole === 'parent' ? '#FFFFFF' : '#475569',
              boxShadow: currentRole === 'parent' ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <HeartHandshake size={18} />
            <span>👨‍👩‍👧 Parent View</span>
          </button>

          <button
            onClick={() => setRole('debug')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              background: currentRole === 'debug' ? '#0F172A' : 'transparent',
              color: currentRole === 'debug' ? '#FFFFFF' : '#475569',
              boxShadow: currentRole === 'debug' ? '0 4px 12px rgba(15, 23, 42, 0.25)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Settings size={18} />
            <span>⚙️ Telemetry</span>
          </button>
        </nav>

        {/* System Controls & Offline Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Offline Sync Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: '#DCFCE7',
            color: '#15803D',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 700,
            border: '1px solid #86EFAC'
          }}>
            <Wifi size={14} />
            <span>IndexedDB Sync</span>
          </div>

          {/* Audio Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: soundEnabled ? '#EFF6FF' : '#F1F5F9',
              border: '1px solid #CBD5E1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: soundEnabled ? '#2563EB' : '#64748B'
            }}
            title={soundEnabled ? "Audio Audio Sound ON" : "Mute Sound"}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
