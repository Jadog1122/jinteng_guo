// src/pages/SubPage1.jsx
import React from "react";

const About = () => {
  return (
    <div style={styles.subPage}>
      <h1>About</h1>
      <p>This is the content of Sub Page 1.</p>
    </div>
  );
};

const styles = {
  subPage: { textAlign: "center", padding: "2rem" },
};

export default About;
