import React, { useState } from 'react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';
import { sfx } from '../services/soundEffects';
import { t } from '../i18n/translations';

export default function MangoCountersTray({ initialCount = 8, subtractCount = 3, onAnswerChange, lang = 'hi' }) {
  const [subtractedIndices, setSubtractedIndices] = useState([]);

  const toggleMango = (index) => {
    sfx.playPop(); // Play joyful pop sound effect!
    let newSubtracted = [...subtractedIndices];
    if (newSubtracted.includes(index)) {
      newSubtracted = newSubtracted.filter(i => i !== index);
    } else {
      newSubtracted.push(index);
    }
    setSubtractedIndices(newSubtracted);
    const remaining = initialCount - newSubtracted.length;
    if (onAnswerChange) {
      onAnswerChange({
        remainingCount: Math.max(0, remaining),
        subtractedCount: newSubtracted.length
      });
    }
  };

  const resetTray = () => {
    sfx.playClick();
    setSubtractedIndices([]);
    if (onAnswerChange) {
      onAnswerChange({
        remainingCount: initialCount,
        subtractedCount: 0
      });
    }
  };

  const remainingCount = Math.max(0, initialCount - subtractedIndices.length);

  return (
    <div style={{
      background: 'linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%)',
      border: '3px dashed #F59E0B',
      borderRadius: '24px',
      padding: '20px',
      margin: '20px 0',
      boxShadow: '0 8px 20px rgba(245, 158, 11, 0.15)'
    }}>
      {/* Tray Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.8rem' }}>🧺</span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#92400E', margin: 0 }}>
            {lang === 'mr' ? 'आम्यांची टोपली (Mango Tray)' : lang === 'en' ? 'Mango Counters Tray' : 'आम की टोकरी (Mango Counters Tray)'}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            background: '#FFFFFF',
            color: '#D97706',
            fontWeight: 800,
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '1.05rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            border: '2px solid #FCD34D'
          }}>
            {t('remainingMangoes', lang)} {remainingCount} 🥭
          </span>

          <button
            onClick={resetTray}
            style={{
              background: '#FFFFFF',
              border: '2px solid #FCD34D',
              borderRadius: '12px',
              padding: '6px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#92400E',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            <RefreshCw size={14} /> Reset
          </button>
        </div>
      </div>

      <p style={{ fontSize: '0.95rem', color: '#B45309', fontWeight: 600, marginBottom: '16px' }}>
        👉 <b>{t('subtractionInstruction', lang)}</b>
      </p>

      {/* Mangoes Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '20px'
      }}>
        {Array.from({ length: initialCount }).map((_, idx) => {
          const isSubtracted = subtractedIndices.includes(idx);
          return (
            <div
              key={idx}
              onClick={() => toggleMango(idx)}
              className={`drag-object ${isSubtracted ? 'subtracted' : 'bounce-anim'}`}
              style={{
                animationDelay: `${idx * 0.1}s`,
                position: 'relative'
              }}
              title="Tap mango"
            >
              🥭
              {isSubtracted && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: '#EF4444',
                  color: 'white',
                  borderRadius: '50%',
                  width: '22px',
                  height: '22px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  ✕
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Subtraction Equation Visualization */}
      <div style={{
        marginTop: '16px',
        textAlign: 'center',
        background: '#FFFFFF',
        padding: '10px 16px',
        borderRadius: '16px',
        fontWeight: 800,
        fontSize: '1.3rem',
        color: '#78350F',
        border: '2px solid #FDE68A'
      }}>
        {initialCount} - {subtractedIndices.length} = <span style={{ color: '#2563EB', fontSize: '1.5rem' }}>{remainingCount}</span>
      </div>
    </div>
  );
}
