// src/components/Navbar.jsx
import React from "react";
import PillNav from './PillNav';
import './Navbar.css';

const Navbar = () => {
  const activeHref = '/';

  return (
    <nav className="navbar-wrapper">
      <PillNav
        logo="/me_p1.jpg"
        logoAlt="Jinteng Guo"
        items={[
          { label: 'Info', href: '/' },
          { label: 'Contact', href: '/contact' },
          { label: 'Resume', href: '/CV_Jinteng Guo_Sep2.pdf' }
        ]}
        activeHref={activeHref}
        className="custom-nav"
        ease="power3.easeOut"
        baseColor="#0a0a0a"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#0a0a0a"
      />
    </nav>
  );
};

export default Navbar;
