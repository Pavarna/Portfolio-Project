import React from 'react';
import './sectionCssStyles/Overview.css'; // Import your custom styles
import Skills from './Skills'; // Import other components
import Experience from './Experience';
import Awards from './Awards';
import Contact from './Contact';
import 'primeflex/primeflex.css';
import Profile from './Profile';
import Projects from './Projects';

interface OverviewProps {
    profileRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    awardsRef: React.RefObject<HTMLDivElement>;
    projectRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Overview: React.FC<OverviewProps> = ({ profileRef, skillsRef, experienceRef, awardsRef, projectRef, contactRef }) => {

    return (
        <div className="overview-container">
            {/* Profile Card */}
            <div className="profile-content" ref={profileRef}>
                <Profile />
            </div>

            <div className="skills-content" ref={skillsRef}>
                <Skills />
            </div>

            <div className="experience-content" ref={experienceRef}>
                <Experience />
            </div>

            <div className="projects-content" ref={projectRef}>
                <Projects />
            </div>

            <div className="awards-content" ref={awardsRef}>
                <Awards />
            </div>
            
            <div className="contact-content" ref={contactRef}>
                <Contact />
            </div>
        </div>
    );
};

export default Overview;
