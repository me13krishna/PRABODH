import React from 'react';

export function Card({ children, variant = 'default', style = {}, className = '', ...props }) {
  const baseStyle = {
    background: '#FFFFFF',
    borderRadius: '24px',
    border: '1px solid #E2E8F0',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    ...style
  };

  const variants = {
    default: {},
    glass: {
      background: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(226, 232, 240, 0.8)'
    },
    accent: {
      border: '2px solid #0284C7',
      boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.1)'
    },
    sunrise: {
      background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 100%)',
      border: '2px solid #FDE68A'
    }
  };

  return (
    <div style={{ ...baseStyle, ...variants[variant] }} {...props}>
      {children}
    </div>
  );
}
