import React from 'react';
import './MagicBento.css';

const MagicBento = ({ children, className = '', gridSpan = '1 1' }) => {
  return (
    <div 
      className={`magic-bento ${className}`}
      style={{ gridArea: gridSpan }}
    >
      {children}
    </div>
  );
};

export default MagicBento;
