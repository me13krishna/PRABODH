import React from 'react';
import { Sparkles, BookOpen, Users, HeartHandshake, Settings, Volume2, VolumeX, Wifi } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { t } from '../i18n/translations';
import { Badge } from './ui/Badge';

export default function Navbar({ currentRole, setRole, soundEnabled, setSoundEnabled, lang, setLang }) {
  return (
    <>
      {/* Desktop & Tablet Header Navigation */}
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
          {/* Brand Logo & Tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setRole('child')}>
            <img
              src="/logo.jpg"
              alt="PRABODH AI Logo"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25)',
                border: '2px solid #0284C7'
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: 0 }}>
                  PRABODH AI
                </h1>
                <Badge variant="sky">{lang.toUpperCase()}</Badge>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748B', margin: 0, fontWeight: 500 }}>
                {t('subTagline', lang)}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="desktop-nav" style={{
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
                background: currentRole === 'child' ? '#0284C7' : 'transparent',
                color: currentRole === 'child' ? '#FFFFFF' : '#475569',
                boxShadow: currentRole === 'child' ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <BookOpen size={18} />
              <span>{t('navChild', lang)}</span>
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
                background: currentRole === 'teacher' ? '#0284C7' : 'transparent',
                color: currentRole === 'teacher' ? '#FFFFFF' : '#475569',
                boxShadow: currentRole === 'teacher' ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Users size={18} />
              <span>{t('navTeacher', lang)}</span>
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
                background: currentRole === 'parent' ? '#0284C7' : 'transparent',
                color: currentRole === 'parent' ? '#FFFFFF' : '#475569',
                boxShadow: currentRole === 'parent' ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <HeartHandshake size={18} />
              <span>{t('navParent', lang)}</span>
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
              <span>{t('navDebug', lang)}</span>
            </button>
          </nav>

          {/* Right Controls: i18n switcher, sync badge & sound toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />

            <Badge variant="growth">
              <Wifi size={14} />
              <span>{t('syncReady', lang)}</span>
            </Badge>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: soundEnabled ? '#E0F2FE' : '#F1F5F9',
                border: '1px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: soundEnabled ? '#0284C7' : '#64748B'
              }}
              aria-label={soundEnabled ? "Mute audio" : "Enable audio"}
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Mobile Bottom Navigation Bar for Rural Mobile Classrooms */}
      <div className="mobile-bottom-nav" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        zIndex: 90,
        padding: '8px 12px',
        justifyContent: 'space-around',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.06)'
      }}>
        <button
          onClick={() => setRole('child')}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: currentRole === 'child' ? '#0284C7' : '#64748B',
            fontWeight: currentRole === 'child' ? 800 : 600,
            fontSize: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <BookOpen size={22} color={currentRole === 'child' ? '#0284C7' : '#64748B'} />
          <span>Child</span>
        </button>

        <button
          onClick={() => setRole('teacher')}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: currentRole === 'teacher' ? '#0284C7' : '#64748B',
            fontWeight: currentRole === 'teacher' ? 800 : 600,
            fontSize: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <Users size={22} color={currentRole === 'teacher' ? '#0284C7' : '#64748B'} />
          <span>Teacher</span>
        </button>

        <button
          onClick={() => setRole('parent')}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: currentRole === 'parent' ? '#0284C7' : '#64748B',
            fontWeight: currentRole === 'parent' ? 800 : 600,
            fontSize: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <HeartHandshake size={22} color={currentRole === 'parent' ? '#0284C7' : '#64748B'} />
          <span>Parent</span>
        </button>

        <button
          onClick={() => setRole('debug')}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: currentRole === 'debug' ? '#0F172A' : '#64748B',
            fontWeight: currentRole === 'debug' ? 800 : 600,
            fontSize: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <Settings size={22} color={currentRole === 'debug' ? '#0F172A' : '#64748B'} />
          <span>Telemetry</span>
        </button>
      </div>
    </>
  );
}
