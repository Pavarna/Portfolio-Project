import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card'; // Import PrimeReact Card
import BitmojiGIF from '../assets/images/Bitmoji standing.png'; // Adjust the path to your GIF
import './sectionCssStyles/Overview.css'; // Import your custom styles
import Skills from './Skills'; // Import other components
import Experience from './Experience';
import Expertise from './Expertise';
import Awards from './Awards';
import Contact from './Contact';
import 'primeflex/primeflex.css';

interface OverviewProps {
    skillsRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    expertiseRef: React.RefObject<HTMLDivElement>;
    awardsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Overview: React.FC<OverviewProps> = ({ skillsRef, experienceRef, expertiseRef, awardsRef, contactRef }) => {
    const roles = ["Frontend Developer", "ReactJs Developer", "Software Developer","Educational YouTuber"]; // Array of roles
    const [role, setRole] = useState(roles[0]); // Initial role state
    const [index, setIndex] = useState(0); // Index for tracking current role
   
    useEffect(() => {
        // Function to change role every 2 seconds
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length); // Cycle through roles sequentially
        }, 1000); // Change role every 2 seconds

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [roles.length]); // Depend on roles length

    useEffect(() => {
        setRole(roles[index]); // Update the role when index changes
    }, [index, roles]);

    return (
        <div className="overview-container">
            {/* Overview Card */}
            <Card className="overview-card">
                <div className="overview-title">
                    <h1 className="overview-title-name"> Pavarna  S - <span className="overview-title-role"> {role}</span></h1>
                </div>
                <div className="flex overview-content">
                    <div className="flex-grow-2 flex align-items-center justify-content-center bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="bitmoji-gif" />
                    </div>

                    <div className="flex-grow-4 flex align-items-center justify-content-start content-section">
                        <p>
                            Dynamic and results-driven Front-End Developer with 2+ years of experience specializing in ReactJS, TypeScript, and UI/UX design. Proven track record of building responsive, user-friendly web applications that meet business objectives while ensuring code quality, security, and scalability. Strong expertise in Agile development, DevSecOps, and collaborating with cross-functional teams to deliver high-quality software solutions.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Skills Card */}
            <Card className="skills-card">
                <div className="skills-content" ref={skillsRef}>
                    <h2>Skills</h2>
                    <Skills />
                </div>
            </Card>

            {/* Experience Card */}
            <Card className="experience-card">
                <div className="experience-content" ref={experienceRef}>
                    <h2>Experience</h2>
                    <Experience />
                    {/* Bitmoji GIF for Experience */}
                    <div className="bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="bitmoji-gif" />
                    </div>
                </div>
            </Card>

            {/* Expertise Card */}
            <Card className="expertise-card">
                <div className="expertise-content" ref={expertiseRef}>
                    <h2>Expertise</h2>
                    <Expertise />
                    {/* Bitmoji GIF for Expertise */}
                    <div className="bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="bitmoji-gif" />
                    </div>
                </div>
            </Card>

            {/* Awards Card */}
            <Card className="awards-card">
                <div className="awards-content" ref={awardsRef}>
                    <h2>Awards</h2>
                    <Awards />
                    {/* Bitmoji GIF for Awards */}
                    <div className="bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="bitmoji-gif" />
                    </div>
                </div>
            </Card>

            {/* Contact Card */}
            <Card className="contact-card">
                <div className="contact-content" ref={contactRef}>
                    <h2>Contact</h2>
                    <Contact />
                    {/* Bitmoji GIF for Contact */}
                    <div className="bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="bitmoji-gif" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Overview;
