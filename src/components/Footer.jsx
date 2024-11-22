// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: { textAlign: "center", padding: "1rem", background: "#f4f4f4" },
};

export default Footer;
