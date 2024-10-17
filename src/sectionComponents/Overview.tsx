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
import Profile from './Profile';

interface OverviewProps {
    profileRef:React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    expertiseRef: React.RefObject<HTMLDivElement>;
    awardsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Overview: React.FC<OverviewProps> = ({ profileRef,skillsRef, experienceRef, expertiseRef, awardsRef, contactRef }) => {
    const roles = ["Frontend Developer", "ReactJs Developer", "Software Developer", "Educational YouTuber"]; // Array of roles
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
            {/* Profile Card */}           
            <div className="profile-content" ref={profileRef}>
                <Profile />
            </div>

            <div className="skills-content" ref={skillsRef}>
                <Skills />
            </div>


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
