import React from 'react';

export function Button({ children, variant = 'primary', size = 'md', className = '', style = {}, ...props }) {
  const baseStyle = {
    borderRadius: '18px',
    fontWeight: 800,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    border: 'none',
    outline: 'none',
    userSelect: 'none',
    ...style
  };

  const variants = {
    primary: { background: '#0284C7', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(2, 132, 199, 0.3)' },
    secondary: { background: '#EFF6FF', color: '#0284C7', border: '1px solid #BFDBFE' },
    sunrise: { background: '#F59E0B', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)' },
    growth: { background: '#16A34A', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(22, 163, 74, 0.3)' },
    ghost: { background: 'transparent', color: '#475569' }
  };

  const sizes = {
    sm: { padding: '6px 14px', fontSize: '0.85rem', minHeight: '38px' },
    md: { padding: '10px 20px', fontSize: '0.95rem', minHeight: '48px' },
    lg: { padding: '14px 28px', fontSize: '1.1rem', minHeight: '56px' }
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...variants[variant],
        ...sizes[size]
      }}
      {...props}
    >
      {children}
    </button>
  );
}
