import React from 'react';
import './LogoLoop.css';

const LogoLoop = ({ 
  logos = [], 
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo loop'
}) => {
  const [isPaused, setIsPaused] = React.useState(false);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  if (!logos || logos.length === 0) return null;

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div 
      className="logo-loop-container"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`logo-loop-track ${direction}`}
        style={{
          '--speed': isPaused ? '0s' : `${speed}s`,
        }}
      >
        {duplicatedLogos.map((logo, index) => {
          const logoContent = logo.node || (
            <img 
              src={logo.src} 
              alt={logo.alt || logo.title || 'Logo'} 
              style={{ height: logoHeight }}
            />
          );

          return logo.href ? (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`logo-item ${scaleOnHover ? 'scale-on-hover' : ''} clickable`}
              style={{
                '--logo-height': `${logoHeight}px`,
                marginRight: gap,
                textDecoration: 'none',
                color: 'inherit',
              }}
              title={logo.title}
            >
              {logoContent}
            </a>
          ) : (
            <div 
              key={index}
              className={`logo-item ${scaleOnHover ? 'scale-on-hover' : ''}`}
              style={{
                '--logo-height': `${logoHeight}px`,
                marginRight: gap,
              }}
              title={logo.title}
            >
              {logoContent}
            </div>
          );
        })}
      </div>
      {fadeOut && (
        <>
          <div 
            className="fade-out fade-left"
            style={{ background: `linear-gradient(to right, ${fadeOutColor}, transparent)` }}
          />
          <div 
            className="fade-out fade-right"
            style={{ background: `linear-gradient(to left, ${fadeOutColor}, transparent)` }}
          />
        </>
      )}
    </div>
  );
};

export default LogoLoop;
