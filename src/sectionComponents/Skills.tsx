import React, { useEffect, useState } from 'react';
import './sectionCssStyles/Skills.css';
import BitmojiGIF from '../assets/images/Bitmoji look.png'; // Adjust the path to your GIF
import { Card } from 'primereact/card'; // Import PrimeReact Card


const Skills: React.FC = () => {
    return (
        <div className="skills-container">
            <Card className="skills-card">
                {/* Title with Animation */}
                <div className="skills-title-container flex-grow-4 flex align-items-center justify-content-center">
                    <h1 className="skills-title">
                        <div className='grid'>
                            <span className="col-6 col-offset-4 ">Discover my superpowers!</span>
                        </div>
                        <div className='grid'>
                            <span className="col-12">Frontend magic, UI/UX wizardry, DevOps mastery, and leadership expertise.</span>
                        </div>
                    </h1>
                </div>

                <div className="flex skills-content align-items-stretch flex-wrap">
                    {/* Title with Animation and PrimeReact Cards for Each List Item */}
                    <div className="flex-grow-4 flex align-items-start justify-content-start content-section">
                        {/* PrimeReact Cards for Each List Item */}
                        <div className="description-section grid">
                            <div className="col-6">
                                <Card className="skills-description-card">
                                    <b>Front-End Development: </b>ReactJS, HTML5, CSS3, JavaScript (ES6+), TypeScript
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card">
                                    <b>Frameworks/Libraries: </b>Redux, React Router, Bootstrap, React Saga, Prime React
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card">
                                    <b>Version Control: </b>Git, GitHub, Jenkins (Basics)
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card">
                                    <b> UI/UX Design: </b>Figma, Responsive Web Design, Wireframe
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card">
                                    <b>Testing:  </b>Unit Testing, Chrome DevTools, Cypress & Jest (Basics)
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card">
                                    <b> DevOps Tools: </b>Docker, Kubernetes (Basics)
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card">
                                    <b> Agile Project Management: </b>Jira, User Stories, Business Communication
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card">
                                    <b> Business & Team Management: </b>Event Organization, Confluence Tracker, Leave Tracker, eTime Submission, Team Structure Management
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Bitmoji on the right */}
                    <div className="flex-grow-2 flex skills-bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="skills-bitmoji-gif" />
                    </div>

                </div>
            </Card>
        </div>
    );
}

export default Skills;
