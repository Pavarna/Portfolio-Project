import React from 'react';
import './sectionCssStyles/Skills.css';
import BitmojiGIF from '../assets/images/Bitmoji standing.png'; // Adjust the path to your GIF
const Skills: React.FC = () => {
    return (<>
        <section className="skills">
            <h2>Technical Skills</h2>
               {/* Bitmoji GIF for Skills */}
               <div className="bitmoji-container">
                        <img src={BitmojiGIF} alt="My Bitmoji" className="bitmoji-gif" />
                    </div>
            <ul>
                <li>Front-End Development: ReactJS, HTML5, CSS3, JavaScript (ES6+), TypeScript </li>
                <li>Frameworks/Libraries: Redux, React Router, Bootstrap, React Saga, Prime React</li>
                <li>Version Control: Git, GitHub, Jenkins (Basics)</li>
                <li>UI/UX Design: Figma, Responsive Web Design, Wireframe</li>
                <li>Testing: Unit Testing, Chrome DevTools, Cypress & Jest (Basics)</li>
                <li>DevOps Tools: Docker, Kubernetes (Basics)</li>
                <li>Agile Project Management: Jira, User Stories, Business Communication </li>
                <li>Business & Team Management: Event Organization, Confluence Tracker, Leave
                    Tracker, eTime Submission, Team Structure Management </li>
            </ul>
        </section>
    </>)
}

export default Skills