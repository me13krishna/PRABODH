import React from 'react';

export function ProgressBar({ value = 0, max = 100, color = '#0284C7', height = '10px', label }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px', color: '#475569' }}>
          <span>{label}</span>
          <span style={{ color }}>{Math.round(percentage)}%</span>
        </div>
      )}
      <div style={{
        background: '#E2E8F0',
        borderRadius: '999px',
        height,
        width: '100%',
        overflow: 'hidden'
      }}>
        <div style={{
          background: color,
          height: '100%',
          width: `${percentage}%`,
          borderRadius: '999px',
          transition: 'width 0.4s ease'
        }} />
      </div>
    </div>
  );
}
