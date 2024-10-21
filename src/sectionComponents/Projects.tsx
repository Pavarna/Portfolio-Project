import React from 'react';
import './sectionCssStyles/Projects.css';
import BitmojiGIF from '../assets/images/Bitmoji surfing the net.png'; // Adjust the path to your GIF
import { Card } from 'primereact/card'; // Import PrimeReact Card
import { Button } from 'primereact/button';
import Bitmoji from '../assets/images/Portfolio Project Thumbnail.png';

const Projects: React.FC = () => {
    const header = (
        <img alt="portfolio project card" src={Bitmoji} />
    );
    const footer = (
        <>
            <Button icon="pi pi-github" label="View Live Project" className="p-button-text p-button-rounded" onClick={() => window.open('https://www.linkedin.com/in/pavarna-s-7b99911b1', '_blank')} />
            <Button icon="pi pi-github" label="View Code Repo" className="p-button-text p-button-rounded" onClick={() => window.open('https://www.linkedin.com/in/pavarna-s-7b99911b1', '_blank')} />

        </>
    );

    return (
        <div className="projects-container">
            <Card className="projects-card">
                {/* Title with Animation */}
                <div className="projects-title-container flex-grow-4 flex align-items-center justify-content-center">
                    <h1 className="projects-title">
                        <span className="col-6">Projects - Expertise Demonstrations!</span>
                    </h1>
                </div>

                <div className="flex projects-content align-items-stretch flex-wrap">
                    {/* Title with Animation and PrimeReact Cards for Each List Item */}
                    <div className="flex-grow-4 flex align-items-center justify-content-start content-section">
                        {/* PrimeReact Cards for Each List Item */}
                            <div className="card flex col-offset-2 justify-content-center">
                                <Card title="Portfolio - Frontend Project" subTitle="Reactjs with TypeScript" footer={footer} header={header} className="md:w-29rem">
                                    <p className="m-0">
                                    </p>
                                </Card>
                            </div>
                    </div>

                    {/* Bitmoji on the right */}
                    <div className="flex-grow-2 flex projects-bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="projects-bitmoji-gif" />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Projects;
