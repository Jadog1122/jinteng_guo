// src/pages/SubPage3.jsx
import React from "react";

const experiences = [
  {
    title: "Founder and Devloper",
    company: "Univisor",
    date: "2024.10 - Present",
    description: "designed to assist College students with academic planning, professor evaluations and college community building."
  },
  {
    title: "Full Stack Developer",
    company: "ALMS",
    date: "2024.5 - 2024.11",
    description: "Developed scalable web applications using React, Node.js, and MongoDB.",
  },
  {
    title: "Summer Intern",
    company: "Bunge Limited",
    date: "2023.6 - 2023.8",
    description: "Design Python-based conversion application for dinancial documents and tax reports into SAP compatible formats;",
  },
  {
    title: "Risk Management Intern",
    company: "Bank of Communications",
    date: "2022.9 - 2023.5",
    description: "Conducted credit risk analysis and due diligence on loans to ensure compliance",
  },
];

const Experience = () => {
  return (
    <div style={styles.timelineContainer}>
      {experiences.map((exp, index) => (
        <div key={index} style={styles.timelineItem}>
          {/* Marker */}
          <div style={styles.marker}></div>

          {/* Content */}
          <div style={styles.content}>
            <h3 style={styles.title}>{exp.title}</h3>
            <h4 style={styles.company}>{exp.company}</h4>
            <p style={styles.date}>{exp.date}</p>
            <p style={styles.description}>{exp.description}</p>
          </div>
        </div>
      ))}

      {/* Vertical Line */}
      <div style={styles.verticalLine}></div>
    </div>
  );
};

const styles = {
  timelineContainer: {
    position: "relative",
    margin: "2rem auto",
    padding: "2rem 0",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  verticalLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "4px",
    backgroundColor: "#FFE6A9",
    zIndex: 0,
  },
  timelineItem: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    width: "100%",
    zIndex: 1,
  },
  marker: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    width: "20px",
    height: "20px",
    backgroundColor: "#DEAA79",
    borderRadius: "50%",
    zIndex: 2,
  },
  content: {
    backgroundColor: "#FFFFFF",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    marginLeft: "2rem", // Adjust for content positioning
    textAlign: "left",
  },
  title: {
    margin: "0",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#333",
  },
  company: {
    margin: "0",
    fontSize: "1rem",
    color: "#555",
  },
  date: {
    margin: "0.5rem 0",
    fontSize: "0.9rem",
    color: "#777",
  },
  description: {
    margin: "0",
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default Experience;
