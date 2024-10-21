import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';  // PrimeReact Menubar
import Overview from './sectionComponents/Overview';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';  // PrimeReact theme
import 'primereact/resources/primereact.min.css';          // PrimeReact core CSS
import 'primeicons/primeicons.css';

const App: React.FC = () => {
    const skillsRef = useRef<null | HTMLDivElement>(null);
    const profileRef = useRef<null | HTMLDivElement>(null);
    const experienceRef = useRef<null | HTMLDivElement>(null);
    const awardsRef = useRef<null | HTMLDivElement>(null);
    const projectRef = useRef<null | HTMLDivElement>(null);
    const contactRef = useRef<null | HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Menu items for the PrimeReact Menubar
    const items = [
        { label: 'Profile', icon: 'pi pi-book', command: () => scrollToSection(profileRef) },
        { label: 'Skills', icon: 'pi pi-book', command: () => scrollToSection(skillsRef) },
        { label: 'Experience', icon: 'pi pi-briefcase', command: () => scrollToSection(experienceRef) },     
        { label: 'Projects', icon: 'pi pi-github', command: () => scrollToSection(projectRef) },
        { label: 'Awards', icon: 'pi pi-bolt', command: () => scrollToSection(awardsRef) },
        { label: 'Contact', icon: 'pi pi-phone', command: () => scrollToSection(contactRef) }
    ];

    return (
        <Router>
            <div className="app">
                {/* PrimeReact Menubar */}
                <div className="card">
                    <Menubar model={items} />
                </div>

                {/* Pass section refs to Overview */}
                <Overview
                    profileRef={profileRef}
                    skillsRef={skillsRef}
                    experienceRef={experienceRef}
                    awardsRef={awardsRef}
                    projectRef={projectRef}
                    contactRef={contactRef}
                />
            </div>
        </Router>
    );
};

export default App;
