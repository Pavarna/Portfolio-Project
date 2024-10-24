import React from 'react';
import './sectionCssStyles/Projects.css';
import BitmojiGIF from '../assets/images/Bitmoji surfing the net.png'; // Adjust the path to your GIF
import { Card } from 'primereact/card'; // Import PrimeReact Card
import { Button } from 'primereact/button';
import Bitmoji from '../assets/images/Portfolio Project Thumbnail.png';

const Projects: React.FC = () => {
    const header = (
        <img className="projects-img" alt="Portfolio project card thumbnail" src={Bitmoji} />
    );

    const footer = (
        <>
            <Button icon="pi pi-github" label="View Live Project" className="p-button-text p-button-rounded" onClick={() => window.open('https://pavarna.github.io/Portfolio-Project/', '_blank')} aria-label="View live project" />
            <Button icon="pi pi-github" label="View Code Repo" className="p-button-text p-button-rounded" onClick={() => window.open('https://github.com/Pavarna/Portfolio-Project', '_blank')} aria-label="View code repository" />
        </>
    );

    return (
        <div className="projects-container" role="region" aria-labelledby="projects-title">
            <Card className="projects-card">
                {/* Title with Animation */}
                <div className="projects-title-container flex-grow-4 flex align-items-center justify-content-center">
                    <h1 className="projects-title" id="projects-title">
                        <span className="col-6">Projects - Expertise Demonstrations!</span>
                    </h1>
                </div>

                <div className="flex projects-content align-items-stretch flex-wrap">
                    {/* Title with Animation and PrimeReact Cards for Each List Item */}
                    <div className="flex-grow-4 flex align-items-center justify-content-start content-section">
                        {/* PrimeReact Cards for Each List Item */}
                        <div className="card flex justify-content-center">
                            <Card title={<span className='title-color'>Portfolio - Frontend Project</span>} footer={footer} header={header} className="md:w-29rem">
                                <div className='button-group'>
                                    <Button label="ReactJS" outlined aria-label="ReactJS" />
                                    <Button label="TypeScript" outlined aria-label="TypeScript" />
                                    <Button label="PrimeReact" outlined aria-label="PrimeReact" />
                                    <Button label="PrimeFlex" outlined aria-label="PrimeFlex" />
                                    <Button label="Jest" outlined aria-label="Jest" />
                                </div>
                                <p className="m-0">
                                    Interactive portfolio built with ReactJS, showcasing my skills, experience, projects, and awards, designed to highlight my expertise in frontend development.
                                </p>
                            </Card>
                        </div>
                    </div>

                    {/* Bitmoji on the right */}
                    <div className="flex-grow-2 flex projects-bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji surfing the net" className="projects-bitmoji-gif" />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Projects;
