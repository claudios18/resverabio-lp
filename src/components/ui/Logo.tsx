import React from 'react';

interface LogoProps {
  variant?: 'gold' | 'white' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'gold', 
  className = '',
  size = 'md'
}) => {
  // Define dimensions based on size
  const dimensions = {
    sm: { width: 140, height: 36 },
    md: { width: 180, height: 46 },
    lg: { width: 220, height: 56 }
  };

  const { width, height } = dimensions[size];

  // Define colors based on variant
  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          text: '#ffffff',
          registered: '#ffffff',
          useGradient: false
        };
      case 'dark':
        return {
          text: '#1a1a1a',
          registered: '#1a1a1a',
          useGradient: false
        };
      case 'gold':
      default:
        return {
          text: 'url(#goldGradient)',
          registered: '#c9a962',
          useGradient: true
        };
    }
  };

  const colors = getColors();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      <defs>
        {/* Metallic Gold Gradient */}
        {colors.useGradient && (
          <linearGradient
            id="goldGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#bf9b30" />
            <stop offset="20%" stopColor="#e8d5a3" />
            <stop offset="40%" stopColor="#c9a962" />
            <stop offset="60%" stopColor="#e8d5a3" />
            <stop offset="80%" stopColor="#bf9b30" />
            <stop offset="100%" stopColor="#8b7355" />
          </linearGradient>
        )}
      </defs>

      {/* Main Text - Resverabio - Estilo Vogue Sans */}
      <text
        x="6"
        y="42"
        fill={colors.text}
        style={{
          fontFamily: 'Montserrat, "Futura PT", "Century Gothic", "Avant Garde", "Helvetica Neue", sans-serif',
          fontSize: '42px',
          fontWeight: 400,
          letterSpacing: '-0.03em',
          fontStyle: 'normal',
        }}
      >
        Resverabio
      </text>

      {/* Registered Trademark Symbol - Superscript */}
      <text
        x="196"
        y="24"
        fill={colors.registered}
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px',
          fontWeight: 300,
          letterSpacing: '0',
        }}
      >
        ®
      </text>
    </svg>
  );
};

export default Logo;
