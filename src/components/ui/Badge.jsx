import React from 'react';

export function Badge({ children, variant = 'sky', className = '', style = {}, ...props }) {
  const variants = {
    sky: { background: '#E0F2FE', color: '#0369A1', border: '1px solid #7DD3FC' },
    sunrise: { background: '#FEF3C7', color: '#92400E', border: '1px solid #FCD34D' },
    growth: { background: '#DCFCE7', color: '#166534', border: '1px solid #86EFAC' },
    red: { background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5' },
    purple: { background: '#F3E8FF', color: '#6B21A8', border: '1px solid #D8B4FE' },
    neutral: { background: '#F1F5F9', color: '#475569', border: '1px solid #E2E8F0' }
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 12px',
        borderRadius: '12px',
        fontSize: '0.8rem',
        fontWeight: 800,
        ...variants[variant],
        ...style
      }}
      {...props}
    >
      {children}
    </span>
  );
}
