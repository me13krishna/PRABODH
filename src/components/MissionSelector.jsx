import React from 'react';
import { Play, Star, Sparkles, MapPin, Lock, Award, Compass } from 'lucide-react';
import { STORY_MISSIONS } from '../data/mockData';
import { t } from '../i18n/translations';
import { sfx } from '../services/soundEffects';

export default function MissionSelector({ onSelectMission, lang = 'hi' }) {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px' }}>
      {/* Hero Welcome Adventure Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        borderRadius: '32px',
        padding: '32px',
        color: '#FFFFFF',
        boxShadow: '0 16px 32px rgba(37, 99, 235, 0.25)',
        marginBottom: '36px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 800,
            marginBottom: '12px'
          }}>
            <Compass size={16} />
            <span>{t('storyMapTitle', lang)}</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>
            {t('storyMapSubtitle', lang)}
          </h2>

          <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '650px', margin: 0, fontWeight: 500 }}>
            "Bachcha game khelega; PRABODH samjhega ki woh kya jaanta hai aur aage kya seekhne ke liye ready hai."
          </p>
        </div>
      </div>

      {/* Story Adventure Map Road */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <MapPin color="#2563EB" size={22} />
        <span>{t('chooseMission', lang)}</span>
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '28px'
      }}>
        {STORY_MISSIONS.map((m, idx) => {
          const titleText = m.title[lang] || m.title.hi;
          const categoryText = m.category[lang] || m.category.hi;
          const diffText = m.difficulty[lang] || m.difficulty.hi;
          const descText = m.description[lang] || m.description.hi;

          return (
            <div
              key={m.id}
              className="glass-card"
              style={{
                padding: '28px',
                borderRadius: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                border: '2px solid rgba(37, 99, 235, 0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => {
                sfx.playClick();
                onSelectMission(m);
              }}
            >
              {/* Level Badge Number */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#EFF6FF',
                color: '#2563EB',
                fontWeight: 800,
                fontSize: '0.8rem',
                padding: '4px 12px',
                borderRadius: '16px',
                border: '1px solid #BFDBFE'
              }}>
                LEVEL {idx + 1}
              </div>

              <div>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '24px',
                  background: '#FEF3C7',
                  border: '3px solid #F59E0B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  marginBottom: '20px',
                  boxShadow: '0 8px 16px rgba(245, 158, 11, 0.2)'
                }} className="bounce-anim">
                  {m.icon}
                </div>

                <span className="badge-word" style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800, display: 'inline-block', marginBottom: '8px' }}>
                  {diffText}
                </span>

                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  {titleText}
                </h4>

                <p style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 500, lineHeight: '1.6', marginBottom: '20px' }}>
                  {descText}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid #F1F5F9'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <button
                  className="child-btn"
                  style={{
                    background: '#2563EB',
                    color: '#FFFFFF',
                    padding: '10px 20px',
                    minHeight: '48px',
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
                  }}
                >
                  <span>{t('playMission', lang)}</span>
                  <Play size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
