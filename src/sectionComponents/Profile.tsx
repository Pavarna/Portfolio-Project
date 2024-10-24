import React, { useEffect, useState, useMemo } from 'react';
import { Card } from 'primereact/card'; // Import PrimeReact Card
import BitmojiGIF from '../assets/images/Bitmoji from laptop.png'; // Adjust the path to your GIF
import './sectionCssStyles/Profile.css'; // Import your custom styles
import 'primeflex/primeflex.css';

const Profile: React.FC = () => {
    const roles = useMemo(() => ["Frontend Developer", "ReactJs Developer", "Software Developer", "Educational YouTuber"], []); // Memoized array to avoid recreation on every render
    const [role, setRole] = useState(roles[0]); // Initial role state
    const [index, setIndex] = useState(0); // Index for tracking current role

    useEffect(() => {
        // Function to change role every 2 seconds
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length); // Cycle through roles sequentially
        }, 2000); // Change role every 2 seconds

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [roles.length]); // Only depend on the length of 'roles'

    useEffect(() => {
        setRole(roles[index]); // Update the role when index changes
    }, [index, roles]); // Only depend on 'index' since 'roles' is memoized

    return (
        <div className="overview-container" role="main" aria-labelledby="profile-title">
            <Card className="overview-card">
                <div className="flex overview-content align-items-stretch flex-wrap">
                    {/* Bitmoji on the left */}
                    <div className="flex-grow-2 flex align-items-center justify-content-center bitmoji-container">
                        <img src={BitmojiGIF} alt="Bitmoji of Pavarna" className="bitmoji-gif" />
                    </div>

                    {/* Title, Role, and PrimeReact Cards for Each Description */}
                    <div className="flex-grow-4 flex align-items-start justify-content-start content-section" role="region" aria-labelledby="description-section">
                        <div className="grid">
                            {/* Title and Role */}
                            <div className="overview-title col-12" id="profile-title">
                                <h1>Pavarna S - <span className="overview-title-role" aria-live="polite">{role}</span></h1>
                            </div>

                            {/* PrimeReact Cards for Each List Item (2 in each row) */}
                            <div className="description-section grid" id="description-section" aria-label="Skills and expertise">
                                <div className="col-6">
                                    <Card className="description-card" aria-labelledby="description-1">
                                        <span id="description-1">Dynamic and result-driven ReactJS developer with 2+ years of experience specializing in <b>ReactJS, TypeScript, and UI/UX design</b>.</span>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card" aria-labelledby="description-2">
                                        <span id="description-2">Strong expertise in <b>Agile development, DevSecOps, and collaboration with cross-functional teams</b> to deliver high-quality software solutions.</span>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card" aria-labelledby="description-3">
                                        <span id="description-3"><b>Expanding knowledge</b> in <b>Docker and Kubernetes</b>, with additional capability in <b>Software Business Analyst</b> responsibilities.</span>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card" aria-labelledby="description-4">
                                        <span id="description-4">Experienced in working <b>solely on the UI</b>, taking full ownership of the front-end development lifecycle.</span>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card" aria-labelledby="description-5">
                                        <span id="description-5">Proven track record of building responsive, user-friendly web applications while ensuring <b>code quality, security, and scalability</b>.</span>
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card" aria-labelledby="description-6">
                                        <span id="description-6">YT channel with 20k+ subscribers, <b>sharing free courses, internships, & masterclasses</b> in Tamil, helping non-English speakers access career opportunities.</span>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Profile;
