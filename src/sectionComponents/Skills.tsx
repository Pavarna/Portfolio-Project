import React from 'react';
import './sectionCssStyles/Skills.css';
import BitmojiGIF from '../assets/images/Bitmoji look.png';
import { Card } from 'primereact/card'; // Import PrimeReact Card

const Skills: React.FC = () => {
    return (
        <div className="skills-container" role="region" aria-labelledby="skills-title">
            <Card className="skills-card">
                {/* Title with Animation */}
                <div className="skills-title-container flex-grow-4 flex align-items-center justify-content-center">
                    <h1 className="skills-title" id="skills-title">
                        <div className='grid'>
                            <span className="col-6 offset-class" role="heading" aria-level={1}>
                                Discover my superpowers!
                            </span>
                        </div>
                        <div className='grid'>
                            <span className="col-12" role="heading" aria-level={2}>
                                Frontend magic, UI/UX wizardry, DevOps mastery, and leadership expertise.
                            </span>
                        </div>
                    </h1>
                </div>

                <div className="flex skills-content align-items-stretch flex-wrap">
                    {/* Title with Animation and PrimeReact Cards for Each List Item */}
                    <div className="flex-grow-4 flex align-items-start justify-content-start content-section">
                        {/* PrimeReact Cards for Each List Item */}
                        <div className="description-section grid">
                            <div className="col-6">
                                <Card className="skills-description-card" aria-labelledby="frontend-dev">
                                    <span id="frontend-dev">
                                        <b className="skills-heading-color">Front-End Development:</b> ReactJS, HTML5, CSS3, JavaScript (ES6+), TypeScript
                                    </span>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card" aria-labelledby="frameworks">
                                    <span id="frameworks">
                                        <b className="skills-heading-color">Frameworks/Libraries:</b> Redux, React Router, Bootstrap, React Saga, PrimeReact
                                    </span>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card" aria-labelledby="version-control">
                                    <span id="version-control">
                                        <b className="skills-heading-color">Version Control:</b> Git, GitHub, Jenkins (Basics)
                                    </span>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card" aria-labelledby="ui-ux">
                                    <span id="ui-ux">
                                        <b className="skills-heading-color">UI/UX Design:</b> Figma, Responsive Web Design, Wireframe
                                    </span>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card" aria-labelledby="testing">
                                    <span id="testing">
                                        <b className="skills-heading-color">Testing:</b> Unit Testing, Chrome DevTools, Cypress & Jest (Basics)
                                    </span>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card" aria-labelledby="devops-tools">
                                    <span id="devops-tools">
                                        <b className="skills-heading-color">DevOps Tools:</b> Docker, Kubernetes (Basics)
                                    </span>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card" aria-labelledby="agile-project-mgmt">
                                    <span id="agile-project-mgmt">
                                        <b className="skills-heading-color">Agile Project Management:</b> Jira, User Stories, Business Communication, Scrum (Basics)
                                    </span>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="skills-description-card" aria-labelledby="team-mgmt">
                                    <span id="team-mgmt">
                                        <b className="skills-heading-color">Business & Team Management:</b> Event Organization, Confluence, eTime & Leave Tracker, Team Structure Management
                                    </span>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Bitmoji on the right */}
                    <div className="flex-grow-2 flex skills-bitmoji-container">
                        <img src={BitmojiGIF} alt="Cartoon bitmoji character of myself" className="skills-bitmoji-gif" />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Skills;
