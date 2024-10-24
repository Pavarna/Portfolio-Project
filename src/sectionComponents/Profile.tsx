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
        }, 1000); // Change role every 2 seconds

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [roles.length]); // Only depend on the length of 'roles'

    useEffect(() => {
        setRole(roles[index]); // Update the role when index changes
    }, [roles, index]); // Only depend on 'index' since 'roles' is memoized

    return (
        <div className="overview-container">
            {/* Profile Card */}
            <Card className="overview-card">
                <div className="flex overview-content align-items-stretch flex-wrap">
                    {/* Bitmoji on the left */}
                    <div className="flex-grow-2 flex align-items-center justify-content-center bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="bitmoji-gif" />
                    </div>

                    {/* Title, Role, and PrimeReact Cards for Each Description */}
                    <div className="flex-grow-4 flex align-items-start justify-content-start content-section">
                        <div className="grid">
                            {/* Title and Role */}
                            <div className="overview-title col-12">
                                <h1> Pavarna S - <span className="overview-title-role">{role}</span></h1>
                            </div>

                            {/* PrimeReact Cards for Each List Item (2 in each row) */}
                            <div className="description-section grid">
                                <div className="col-6">
                                    <Card className="description-card">
                                        Dynamic and result-driven experienced ReactJS developer with over 2 years of experience specializing in <b>ReactJS, TypeScript, and UI/UX design</b>.
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card">
                                        Strong expertise in <b>Agile development, DevSecOps, and collaborating with cross-functional teams</b> to deliver high-quality software solutions.
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card">
                                        <b>Expanding knowledge</b> in <b>Docker and Kubernetes</b>, with additional capability in <b>performing Software Business Analyst</b> responsibilities.
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card">
                                        Experienced in working <b>solely on the UI, taking full ownership</b> of the front-end development lifecycle.
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card">
                                        Proven track record of building responsive, user-friendly web applications within timelines that meet business objectives while ensuring <b>code quality, security, and scalability</b>.
                                    </Card>
                                </div>
                                <div className="col-6">
                                    <Card className="description-card">
                                        YT channel with 20k+ subscribers, <b>sharing free courses, internships, & masterclasses</b> in Tamil, making career opportunities accessible for non-English speakers.
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
