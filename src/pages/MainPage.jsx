// src/pages/MainPage.jsx
import React from "react";
import useGreeting from "../hooks/useGreeting";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // For GitHub and LinkedIn
import { HiOutlineMail } from 'react-icons/hi'; // For Email
import Experience from "./Experience"; //work experience
import Blog from "./Blog"; //paper
import About from "./About"; //skills
import Navbar from "../components/Navbar";
const MainPage = () => {
    const greeting = useGreeting();
    
    
    
    
    
    return (
    <div style={styles.container}>
        {/* Navigation Bar */}
        <Navbar />

        <header style={styles.header}>
            <h2>{greeting}</h2>
            <h2>Welcome to My Portfolio!</h2>
            <p>Explore my work and learn more about me.</p>
            {/* need to change font */}
        </header>

            {/* Bio */}
            <section id="bio" style={styles.bioSection}>
                <div style={styles.profileContainer}>
                    {/* my_picture */}
                    <img 
                        src= "/me_p1.jpg"
                        alt="self pic"
                        style={styles.profileImage}
                    />
                    {/* social media icon */}
                    <div style={styles.iconContainer}>
                        <a 
                            href="https://github.com/Jadog1122" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={styles.iconLink}
                        >
                            <FaGithub style={styles.icon} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/jinteng-guo-14079a26b/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={styles.iconLink}
                        >
                            <FaLinkedin style={styles.icon} />
                        </a>
                        <a 
                            href="mailto:jg6902@stern.nyu.edu" 
                            style={styles.iconLink}
                        >
                            <HiOutlineMail style={styles.icon} />
                        </a>
                    </div>
                </div>

                {/* my description */}
                <div style={styles.bioContent}>
                    <h3>Jinteng (Jase) Guo</h3>
                    <h4>NYU | Economics and Computer Science 25'| Business Studies</h4>
                    <p style={{textAlign: "left"}}>Econ and CS major in NYU CAS. Strong interest in econometrics, 
                        portfolio optimization, and web app development.Been Served as Financial Analyst, 
                        full stack developer, and risk management during college summer intern experience.
                        Like to explore new tech business idea, recently started a new application, Univisor, 
                        aim to help US university student better get adpated in new school life, 
                        and find target when enrolling course based on different professor and futuer career path.
                        "Due to my personal design taste, you won't find dark mode in my any applications!"
                    </p>
                    <ul style={styles.InterestList}>
                        <li><b>Research Interest:</b> Trading Strategies; Portfolio Optimization</li>
                        <li><b>Programing Language:</b> Java, C, JavaScript</li>
                        
                    </ul>
                </div>
            </section>
            {/* Skill Section */}
            <section id="skill" style={styles.section}>
                <About />
            </section>
            {/* Work Experience Section */}
            <section id = "workexperience" style={styles.section}>
                <Experience />
            </section>
            {/* Paper Section */}
            <section id="paper" style={styles.section}>
                <Blog />
            </section>
    </div>
    
  );
};

const styles = {
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "2rem",
      fontFamily: "Montserrat",
      
      
      
    },
    header: {
      marginBottom: "2rem",
      textAlign: "center",
      fontFamily: "'Montserrat', sans-serif",
    },
    bioSection: {
        display: "flex",//horizontal layout for img and bio
        alignItems: "flex-start",
        backgroundColor: "white",
        gap: "2rem",
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "2rem", // Padding inside the bio section
        fontFamily: "'Montserrat', sans-serif",
      },
    bioContent: {
        flex: 1,
      },
    InterestList: {
        margin: "0", // Remove top and bottom margin
        paddingLeft: "0", // Remove default left padding of the list
        listStylePosition: "inside", // Optional: Moves the bullet inside the list
        textAlign: "left", // Ensure list is aligned to the left
      },
    profileContainer:{
        display: "flex", // Vertical stacking for image and icons
        flexDirection: "column", // Make items stack vertically
        alignItems: "center", // Center the image and icons horizontally
        gap: "1rem", // Space between the image and icons
    },
    profileImage: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",//circular image
        marginTop: "2rem",
        objectFit: "cover",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    iconContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        marginTop: "3rem",
    
      },
    iconLink: {
        textDecoration: "none",
        color: "black", // Default color for icons
        transition: "color 0.3s ease",
      },
      icon: {
        fontSize: "2rem", // Icon size
      },
    section:{
        marginTop: "2rem",
        padding: "2rem",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }
  };

export default MainPage;
