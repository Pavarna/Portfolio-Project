import React from 'react';
import './sectionCssStyles/Awards.css';
import { Fieldset } from 'primereact/fieldset';
import { TabView, TabPanel } from 'primereact/tabview';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Image } from 'primereact/image';
import metaCertificate from '../assets/images/Pavarna Meta Certificate.png';
import IBMCertificate from '../assets/images/Pavarna IBM Certificate.png';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import BitmojiGIF from '../assets/images/Bitmoji Flowers.png';

const Awards: React.FC = () => {
    return (
        <div className="award-container">
            <Card className="award-card">
                <div className="flex-grow-4 flex align-items-center justify-content-center">
                    <h1 className="awards-title">
                        Awards & Accomplishments
                    </h1>
                </div>
                <div className="flex awards-content align-items-stretch flex-wrap">
                    <div className="flex-grow-4 flex align-items-start justify-content-start content-section">
                        <div className="grid">

                            {/* Awards Fieldset */}
                            <Fieldset legend={<span className="title-text-color">Awards</span>} className="responsive-fieldset">
                                <p className="m-0  awards-description-card">
                                    <h2 className="title-text-color">Very Special Achievement Award (VESPAA)</h2>
                                    Awarded for outstanding dedication and leadership as the SME and Technical Lead for the key application in DHL IT Services. Successfully ensured all releases in 2023 and Q1-2024 were delivered on time and with high quality, without any stakeholder escalations.
                                </p>
                                <Divider align="center"></Divider>
                                <p className="m-0 awards-description-card">
                                    <h2 className="title-text-color">Gold Medalist - First Rank Holder</h2>
                                    I am a proud gold medalist and 1st rank holder in BSc Computer Technology from Bharathiar University, which has over 100 affiliated colleges. This prestigious achievement highlights my academic excellence and dedication in a highly competitive environment.
                                </p>
                            </Fieldset>

                            <Divider align="center"></Divider>
                            <Fieldset legend={<span className="title-text-color">Accomplishments</span>} className="responsive-fieldset">
                                <div className="card">
                                    <TabView>
                                        <TabPanel header={<span className="title-text-color">Frontend Development</span>} leftIcon="pi pi-calendar mr-2">
                                            <p className="m-0">
                                                <Splitter className="custom-splitter" style={{ flexWrap: 'wrap' }}>
                                                    <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
                                                        <div>
                                                            <Image src={metaCertificate} zoomSrc={metaCertificate} alt="Meta Frontend Specialization Certificate" width="100%" style={{ maxWidth: '120px', height: 'auto' }} preview className='image-size' />
                                                            <h6 className='flex align-items-center justify-content-center'><span className='pi pi-search-plus'></span>Click on the image</h6>
                                                        </div>
                                                    </SplitterPanel>
                                                    <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
                                                        <div className="text-container" style={{ padding: '1rem', maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                                                            <h3 className="title-text-color">Meta Front-End Developer Specialization: Professional Certificate - 9 course series</h3>
                                                            <ol>
                                                                <li>Introduction to Front-End Development</li>
                                                                <li>Programming with JavaScript</li>
                                                                <li>Version Control</li>
                                                                <li>HTML and CSS in depth</li>
                                                                <li>React Basics</li>
                                                                <li>Advanced React</li>
                                                                <li>Principles of UX/UI Design</li>
                                                                <li>Front-End Developer Capstone</li>
                                                                <li>Coding Interview Preparation</li>
                                                            </ol>
                                                        </div>
                                                    </SplitterPanel>
                                                </Splitter>
                                            </p>
                                        </TabPanel>
                                        <TabPanel header={<span className="title-text-color"> DevOps</span>} leftIcon="pi pi-user mr-2">
                                            <p className="m-0">
                                                <Splitter className="custom-splitter" style={{ flexWrap: 'wrap' }}>
                                                    <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
                                                        <div>
                                                            <Image src={IBMCertificate} zoomSrc={IBMCertificate} alt="IBM Certificate" width="100%" style={{ maxWidth: '120px', height: 'auto' }} preview className='image-size' />
                                                            <h6 className='flex align-items-center justify-content-center'><span className='pi pi-search-plus'></span> Click on the image</h6>
                                                        </div>
                                                    </SplitterPanel>
                                                    <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
                                                        <div className="text-container" style={{ padding: '1rem', maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                                                            <h3 className="title-text-color">IBM Introduction to Containers w/ Docker, Kubernetes & Openshift.</h3>
                                                            <p>
                                                                I learned how to build, manage, and deploy containerized applications using Docker, orchestrate them with Kubernetes, and explore advanced features like scaling and monitoring in OpenShift.
                                                            </p>
                                                        </div>
                                                    </SplitterPanel>
                                                </Splitter>

                                            </p>
                                        </TabPanel>
                                    </TabView>
                                </div>
                            </Fieldset>
                        </div>
                    </div>

                    {/* Bitmoji on the right */}
                    <div className="flex-grow-2 flex awards-bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="awards-bitmoji-gif" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Awards;
