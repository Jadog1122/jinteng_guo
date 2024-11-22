// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Jinteng Guo</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/About" style={styles.link}>Skills</Link></li>
        <li><Link to="/Blog" style={styles.link}>Work Experience</Link></li>
        <li><Link to="/Ex" style={styles.link}>Papers</Link></li>
        {/* resume button */}
        <li>
            <a
                href="/CV_Jinteng Guo_Sep2.pdf"
                tartet="_blank"
                rel="noopener noreferrer"
                style={styles.link}
            >Resume</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { 
    display: "flex", 
    justifyContent: "space-between", 
    padding: "1rem",
    backgroundColor: "#A7BEAE",
    color: "white"
    },
  logo: { fontSize: "1.5rem", fontWeight: "bold" },
  navLinks: { listStyle: "none", display: "flex", gap: "1rem"},
  link: {
    textDecoration: "none", // Removes underline
    color: "#FFFFFF", // Changes link text color to white
    fontWeight: "bold", // Optional: Makes links bold
    transition: "color 0.3s ease", // Smooth transition effect on hover
  },
};

export default Navbar;
