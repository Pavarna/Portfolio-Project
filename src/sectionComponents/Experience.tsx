import React from 'react';
import './sectionCssStyles/Experience.css';
import { Card } from 'primereact/card';
import BitmojiGIF from '../assets/images/Bitmoji study check box.png'
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';

const Experience: React.FC = () => {

    const headerTemplate = (options: any) => {
        const className = `${options.className} justify-content-space-between panel-header`;
        return (
            <div className={className}>
                <div className="flex align-items-center gap-2 font-bold" role="heading" aria-level={2}>
                    DHL IT Services
                </div>
                <div className="font-medium" aria-label="Employment Duration">
                    2022 - Present
                </div>
            </div>
        );
    };

    return (
        <div className="experience-container" role="region" aria-label="Professional Experience Section">
            <Card className="experience-card">
                <div className="experience-title-container flex-grow-4 flex align-items-center justify-content-center">
                    <h1 className="experience-title" aria-level={1}>
                        Professional Experiences
                    </h1>
                </div>
                <div className="flex experience-content align-items-stretch flex-wrap">                 
                    {/* Bitmoji on the right */}
                    <div className="flex-grow-2 flex experience-bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="experience-bitmoji-gif" />
                    </div>
                     {/* Title with Animation and PrimeReact Cards for Each List Item */}
                    <div className="flex-grow-4 flex align-items-start justify-content-start content-section">
                        {/* PrimeReact Cards for Each List Item */}
                        <div className="grid">
                            <div className="card flex-grow-4 flex align-items-center justify-content-center">
                                <Panel headerTemplate={headerTemplate} className='panel-card'>
                                    <Divider align="left">
                                        <div className="inline-flex align-items-center">
                                            <i className="pi pi-code mr-2" aria-hidden="true"></i>
                                            <b className='heading-color'>Frontend Development Responsibilities</b>
                                        </div>
                                    </Divider>
                                    <p className="m-0 experience-description-card">
                                        <ul className="custom-list">
                                            <li>
                                                <b>Migrated legacy systems</b> to modern <b>ReactJS</b> frameworks, ensuring <b>100% code
                                                    compliance</b> with security standards (Fortify), enhancing both <b>security and
                                                        maintainability</b>.
                                            </li>
                                            <li> Successfully <b>delivered 5 major web applications, independently</b> managing the
                                                <b>entire front-end lifecycle</b>, from design to deployment.</li>
                                            <li> Implemented <b>state management</b> using <b>Redux and Redux Saga</b>, optimizing
                                                performance and user experience in high-traffic web applications.</li>
                                            <li>  Leveraged <b>GitHub Copilot</b> and <b>internal AI tools</b> to boost development productivity by
                                                15%, aligning with the organization's technology standards.</li>
                                            <li>  Collaborated with <b>cross-functional teams</b>, including designers, backend developers,
                                                and business stakeholders, resulting in a <b>20% improvement in project delivery times</b>.</li>
                                            <li>  Delivered development plans, unit tests, and deployments on <b>schedule</b>, showcasing
                                                strong organizational skills.</li>
                                            <li> Contributed to DevSecOps efforts by completing <b>development and support tasks promptly</b>.
                                            </li>
                                        </ul>
                                    </p>
                                    <Divider align="left">
                                        <div className="inline-flex align-items-center">
                                            <i className="pi pi-users mr-2" aria-hidden="true"></i>
                                            <b className='heading-color'>Management & Communication Responsibilities</b>
                                        </div>
                                    </Divider>
                                    <p className="m-0 experience-description-card">
                                        <ul className="custom-list">
                                            <li><b>Actively participated</b> in organizing internal team events, fostering <b>team spirit and enhancing collaboration</b>.</li>
                                            <li>Led <b>business communication meetings</b> with stakeholders, improving project alignment and <b>timely decision-making</b>. </li>
                                            <li>Oversaw leave tracking and eTime submission, <b>ensuring smooth operational</b> workflows within the team.</li>
                                            <li>Managed team Confluence tracker, <b>ensuring up-to-date documentation</b> of project progress, team structure, and decision logs.</li>
                                            <li><b>Coordinated</b> team structure updates, optimizing resource allocation and productivity within the department. </li>
                                        </ul>
                                    </p>
                                </Panel>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Experience;
