// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Jinteng Guo</h1>
      <ul style={styles.navLinks}>
        {/* Anchor links to sections */}
        <li><a href="#bio" style={styles.link}>Bio</a></li>
        <li><a href="#skill" style={styles.link}>Skills</a></li>
        <li><a href="#workexperience" style={styles.link}>Work Experience</a></li>
        <li><a href="#paper" style={styles.link}>Papers</a></li>
        {/* Resume button */}
        <li>
          <a
            href="/CV_Jinteng Guo_Sep2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#B1C29E",
    color: "white"
  },
  logo: { fontSize: "1.5rem", fontWeight: "bold" },
  navLinks: { 
    listStyle: "none", 
    display: "flex", 
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none", // Removes underline
    color: "#FFFFFF", // Link text color to white
    fontWeight: "bold", // Makes links bold
    transition: "color 0.3s ease", // Smooth hover effect
    cursor: "pointer",
  },
};

export default Navbar;
