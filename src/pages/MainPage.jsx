// src/pages/MainPage.jsx
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Navbar from "../components/Navbar";
import SpotlightCard from "../components/SpotlightCard";
import SimpleMusicPlayer from "../components/SimpleMusicPlayer";
import LogoLoop from "../components/LogoLoop";

const MainPage = () => {
    const [showNewsletter, setShowNewsletter] = useState(false);

    // Show newsletter after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNewsletter(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            id: 1,
            title: "Univisor",
            company: "Startup",
            description: "Founded and developed Univisor, a platform designed to assist college students with academic planning, professor evaluations, and community building.",
            tech: ["React", "Node.js", "MongoDB"],
            status: "Active",
            logo: "🚀",
            spotlightColor: "rgba(0, 229, 255, 0.2)"
        },
        {
            id: 2,
            title: "Financial Analyst",
            company: "Bunge",
            description: "Analyzed financial data and created forecasting models for commodity trading. Developed Python scripts for data automation and processed trading documents into SAP formats.",
            tech: ["Python", "SAP", "Financial Analysis"],
            status: "Completed",
            logo: "📊",
            spotlightColor: "rgba(0, 229, 255, 0.2)"
        },
        {
            id: 3,
            title: "ALMS Platform",
            company: "Full Stack Developer",
            description: "Developed scalable web applications using React, Node.js, and MongoDB as a Full Stack Developer.",
            tech: ["React", "Node.js", "MongoDB"],
            status: "Completed",
            logo: "💻",
            spotlightColor: "rgba(0, 229, 255, 0.2)"
        }
    ];

    // Educational and Work Experience Logos
    const educationWorkLogos = [
        { 
            src: "/logos/NYU_logo.svg", 
            alt: "NYU", 
            title: "New York University",
            href: "https://www.nyu.edu"
        },
        { 
            src: "/logos/Brown Logo_2016_2 Color Process HZ_2400.png", 
            alt: "Brown University", 
            title: "Brown University",
            href: "https://www.brown.edu"
        },
        { 
            node: <div style={{ fontWeight: 700, color: 'white', fontSize: '5vh', }}>UCL</div>, 
            title: "University College London",
            href: "https://www.ucl.ac.uk"
        },
        { 
            src: "/logos/Bunge_Limited_Logo.svg", 
            alt: "Bunge Limited", 
            title: "Bunge Limited",
            href: "https://www.bunge.com"
        },
    ];
    
    return (
    <div style={styles.container}>
            
            {/* Top Navigation */}
        <Navbar />

            {/* Main Content */}
            <div style={styles.mainContainer}>
                {/* Sidebar Music Player */}
                <aside style={styles.sidebar}>
                        <SimpleMusicPlayer />
                </aside>

                {/* Content Area */}
                <main style={styles.contentArea}>
                    <div style={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <SpotlightCard 
                                key={project.id}
                                spotlightColor={project.spotlightColor}
                                className="custom-spotlight-card"
                            >
                                <div style={styles.spotlightCardContent}>
                                    <div style={styles.spotlightCardHeader}>
                                        <div style={styles.spotlightCardLogo}>
                                            {project.logo}
                                        </div>
                                        <div style={styles.spotlightCardStatus}>
                                            {project.status}
                                        </div>
                                    </div>
                                    <div style={styles.spotlightCardBody}>
                                        <h3 style={styles.spotlightCardTitle}>{project.title}</h3>
                                        <div style={styles.spotlightCardCompany}>{project.company}</div>
                                        <p style={styles.spotlightCardDescription}>{project.description}</p>
                                        <div style={styles.spotlightCardTech}>
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} style={styles.spotlightCardTag}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>

                    {/* Logo Loop Section */}
                    <div style={styles.logoLoopSection}>
                        <h3 style={styles.logoLoopTitle}>Education & Work Experience</h3>
                        <div style={styles.logoLoopWrapper}>
                            <LogoLoop
                                logos={educationWorkLogos}
                                speed={5}
                                direction="left"
                                logoHeight={60}
                                gap={50}
                                pauseOnHover
                                scaleOnHover
                                fadeOut
                                fadeOutColor="#0a0a0a"
                                ariaLabel="Education and work experience"
                            />
                        </div>
                    </div>
                </main>
            </div>

            {/* Newsletter Modal */}
            {showNewsletter && (
                <div style={styles.newsletterModal}>
                    <button 
                        style={styles.closeNewsletter}
                        onClick={() => setShowNewsletter(false)}
                    >
                        ×
                    </button>
                    <div style={styles.newsletterContent}>
                        <h3>Connect with me for collaboration opportunities!</h3>
                        <input 
                            type="email" 
                            style={styles.emailInput} 
                            placeholder="Enter Email" 
                            required 
                        />
                        <button 
                            style={styles.subscribeBtn}
                            onClick={() => {
                                alert('Thanks for your interest! (Demo)');
                                setShowNewsletter(false);
                            }}
                        >
                            Subscribe <span>→</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Footer Bar */}
            <div style={styles.footerBar}>
                <a href="mailto:jg6902@stern.nyu.edu" style={styles.contactEmail}>
                    jg6902@stern.nyu.edu
                </a>
                <div style={styles.socialIcons}>
                    <a href="https://github.com/Jadog1122" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/jinteng-guo-14079a26b/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:jg6902@stern.nyu.edu" style={styles.socialIcon}>
                        <HiOutlineMail />
                    </a>
                </div>
            </div>
    </div>
  );
};

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "SF Pro Display", "Segoe UI", sans-serif',
        color: '#ffffff',
        lineHeight: 1.5,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        position: 'relative',
    },
    
    // Main Layout
    mainContainer: {
        display: 'flex',
        maxWidth: '1440px',
        margin: '2rem auto',
        padding: '0 2rem',
        gap: '2rem',
        position: 'relative',
        zIndex: 10,
    },

    // Sidebar Music Player
    sidebar: {
        width: '280px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    profileCard: {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
    },

    profileAvatar: {
        width: '120px',
        height: '120px',
        margin: '0 auto 1.5rem',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    },

    profileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    profileContent: {
        textAlign: 'center',
    },

    profileBio: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: '#6b6b6b',
        marginBottom: '1.5rem',
        textAlign: 'left',
    },

    companyTags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #e5e5e5',
        justifyContent: 'center',
    },

    companyTag: {
        padding: '0.35rem 0.75rem',
        background: '#f3f3f3',
        borderRadius: '8px',
        fontSize: '0.75rem',
        fontWeight: 500,
        color: '#1a1a1a',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
    },

    // Content Area
    contentArea: {
        flex: 1,
        minWidth: 0,
    },

    contentHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '1.5rem',
    },

    timestamp: {
        fontFamily: '"SF Mono", "Monaco", monospace',
        fontSize: '0.875rem',
        color: '#999999',
    },

    // Projects Grid
    projectsGrid: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1.5rem',
        alignItems: 'stretch',
        flexWrap: 'wrap',
    },

    projectCard: {
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        opacity: 0,
        animation: 'fadeInUp 0.5s ease forwards',
        width: '100%',
    },

    projectVisual: {
        height: '200px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    projectIcon: {
        fontSize: '4rem',
        opacity: 0.8,
        transition: 'all 0.3s ease',
    },

    projectStatus: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '0.25rem 0.75rem',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: 500,
    },

    projectHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
    },

    projectType: {
        background: '#f3f3f3',
        color: '#6b6b6b',
        padding: '0.25rem 0.5rem',
        borderRadius: '6px',
        fontSize: '0.75rem',
        fontWeight: 500,
        textTransform: 'capitalize',
    },

    techStack: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginTop: '1rem',
    },

    techTag: {
        background: '#f0f0f0',
        color: '#6b6b6b',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: 500,
    },

    // Gradient backgrounds
    'gradient-1': {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    'gradient-2': {
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    'gradient-3': {
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    'gradient-4': {
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    'gradient-5': {
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    'gradient-6': {
        background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },

    // SpotlightCard Styles
    spotlightCardContent: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    spotlightCardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
    },

    spotlightCardLogo: {
        fontSize: '2.5rem',
        filter: 'brightness(0.9)',
    },

    spotlightCardStatus: {
        background: 'rgba(0, 229, 255, 0.2)',
        color: '#00e5ff',
        padding: '0.25rem 0.625rem',
        borderRadius: '6px',
        fontSize: '0.7rem',
        fontWeight: 600,
        border: '1px solid rgba(0, 229, 255, 0.3)',
    },

    spotlightCardBody: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },

    spotlightCardTitle: {
        fontSize: '1.1rem',
        fontWeight: 600,
        color: '#ffffff',
        marginBottom: '0.4rem',
    },

    spotlightCardCompany: {
        background: 'rgba(0, 229, 255, 0.15)',
        color: '#00e5ff',
        padding: '0.25rem 0.625rem',
        borderRadius: '6px',
        fontSize: '0.75rem',
        fontWeight: 600,
        marginBottom: '0.75rem',
        width: 'fit-content',
        border: '1px solid rgba(0, 229, 255, 0.2)',
    },

    spotlightCardDescription: {
        fontSize: '0.8rem',
        lineHeight: 1.5,
        color: '#a0a0a0',
        marginBottom: '1rem',
        flex: 1,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
    },

    spotlightCardTech: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },

    spotlightCardTag: {
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#ffffff',
        padding: '0.25rem 0.625rem',
        borderRadius: '5px',
        fontSize: '0.7rem',
        fontWeight: 500,
        border: '1px solid rgba(255, 255, 255, 0.1)',
    },

    projectContent: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 200px)',
        justifyContent: 'space-between',
    },

    projectTitle: {
        fontSize: '1rem',
        fontWeight: 600,
        marginBottom: '0.5rem',
        color: '#1a1a1a',
    },

    projectDescription: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
        color: '#6b6b6b',
        marginBottom: '1rem',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },

    // Newsletter Modal
    newsletterModal: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '380px',
        background: '#1a1a1a',
        color: 'white',
        borderRadius: '16px',
        padding: '1.75rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        transform: 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    closeNewsletter: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
        opacity: 0.6,
        transition: 'opacity 0.2s',
        padding: 0,
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    newsletterContent: {
        // Add any additional styles for newsletter content
    },

    emailInput: {
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #333',
        background: '#2a2a2a',
        borderRadius: '8px',
        color: 'white',
        fontSize: '0.875rem',
        marginBottom: '1rem',
        transition: 'border-color 0.2s',
        outline: 'none',
        boxSizing: 'border-box',
    },

    subscribeBtn: {
        width: '100%',
        padding: '0.75rem',
        background: '#ff0099',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '0.875rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
    },

    // Footer Bar
    footerBar: {
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#ffffff',
        padding: '0.625rem 1.25rem',
        borderRadius: '24px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    },

    contactEmail: {
        fontSize: '0.8125rem',
        color: '#6b6b6b',
        textDecoration: 'none',
        transition: 'color 0.2s',
    },

    socialIcons: {
        display: 'flex',
        gap: '0.75rem',
    },

    socialIcon: {
        width: '28px',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: '#6b6b6b',
        transition: 'all 0.2s',
    },

    // Logo Loop Section
    logoLoopSection: {
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },

    logoLoopTitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#ffffff',
        marginBottom: '1.5rem',
        textAlign: 'center',
    },

    logoLoopWrapper: {
        height: '100px',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '12px',
        padding: '20px 0',
        border: '1px solid rgba(255, 255, 255, 0.05)',
    },
};

// Add CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);

export default MainPage;