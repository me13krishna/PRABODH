import React from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ currentLang, onLanguageChange }) {
  const languages = [
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'mr', label: 'मराठी', flag: '🚩' }
  ];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      background: '#F1F5F9',
      padding: '4px',
      borderRadius: '16px',
      border: '1px solid #E2E8F0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 6px', color: '#64748B' }}>
        <Globe size={16} />
      </div>
      {languages.map((l) => {
        const isActive = currentLang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => onLanguageChange(l.code)}
            style={{
              padding: '6px 12px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              background: isActive ? '#2563EB' : 'transparent',
              color: isActive ? '#FFFFFF' : '#475569',
              boxShadow: isActive ? '0 2px 8px rgba(37, 99, 235, 0.25)' : 'none',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
          </button>
        );
      })}
    </div>
  );
}
