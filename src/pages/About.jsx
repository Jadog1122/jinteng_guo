// src/pages/SubPage1.jsx
import React from "react";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiC } from "react-icons/si";
import { SiR } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
const About = () => {
  return (
    <div style={styles.subPage}>
      <h1>Skills</h1>
      <div style={styles.skillsGrid}>
          {/* First Row */}
          <div style={styles.skillRow}>
            <div style={styles.skillItem}>
              <FaJava style={styles.icon}/>
            </div>
            <div style={styles.skillItem}>
              <IoLogoJavascript style={styles.icon} />
            </div>
          </div>
          {/* Second Row */}
          <div style={styles.skillRow}>
            <div style={styles.skillItem}>
              <FaReact style={styles.icon}/>
            </div>
            <div style={styles.skillItem}>
              <SiC style={styles.icon}/>
            </div>
          </div>
          {/* Third Row */}
          <div style={styles.skillRow}>
            <div style={styles.skillItem}>
              <SiR style={styles.icon}/>
            </div>
            <div style={styles.skillItem}>
              <AiOutlineConsoleSql style={styles.icon}/>
            </div>
          </div>
      </div>
    </div>
  );
};

const styles = {
  subPage: { 
    textAlign: "center", 
    padding: "3rem",


  },
  skillsGrid:{
    display:"flex",
    flexDirection:"column",
    gap:"2rem",
    marginTop:"2rem",
  },
  skillRow:{
    display:"flex",
    justifyContent:"center",
    gap:"4rem",
  },
  skillItem:{
    margin:"4rem",
    
  },
  icon:{
    fontSize:"4rem",
    color:"#DEAA79"
  }

};

export default About;
