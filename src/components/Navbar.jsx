// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Info');

  return (
    <nav style={styles.topNav}>
      <div style={styles.navLeft}>
        <div style={styles.logoAvatar}></div>
        <div style={styles.navPills}>
          <button
            type="button"
            style={{
              ...styles.navPill, 
              ...(activeTab === 'Info' ? styles.navPillActive : {}),
              background: activeTab === 'Info' ? styles.navPillActive.background : styles.navPill.background,
              color: activeTab === 'Info' ? styles.navPillActive.color : styles.navPill.color,
            }}
            onClick={() => setActiveTab('Info')}
          >
            Info <span>⊖</span>
          </button>
          <button
            type="button"
            style={{
              ...styles.navPill, 
              ...(activeTab === 'Contact' ? styles.navPillActive : {}),
              background: activeTab === 'Contact' ? styles.navPillActive.background : styles.navPill.background,
              color: activeTab === 'Contact' ? styles.navPillActive.color : styles.navPill.color,
            }}
            onClick={() => setActiveTab('Contact')}
          >
            Contact <span>⊕</span>
          </button>
          <a 
            href="/CV_Jinteng Guo_Sep2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.navPill, 
              ...(activeTab === 'Resume' ? styles.navPillActive : {})
            }}
            onClick={() => setActiveTab('Resume')}
          >
            <span>⊡</span> Resume
          </a>
        </div>
      </div>
      <div style={styles.langToggle}>
        <span>EN</span>
        <span style={styles.inactive}>CN</span>
      </div>
    </nav>
  );
};

const styles = {
  topNav: {
    background: '#ffffff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e5e5e5',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },

  logoAvatar: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #ff0099 0%, #ffeb3b 50%, #00bcd4 100%)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },

  navPills: {
    display: 'flex',
    gap: '0.75rem',
  },

  navPill: {
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    background: '#f3f3f3',
    color: '#1a1a1a',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    transition: 'all 0.2s ease',
    border: '1px solid transparent',
  },

  navPillActive: {
    background: '#ff0099',
    color: 'white',
  },

  langToggle: {
    color: '#6b6b6b',
    fontSize: '0.875rem',
    display: 'flex',
    gap: '0.5rem',
  },

  inactive: {
    opacity: 0.4,
  },
};

export default Navbar;
