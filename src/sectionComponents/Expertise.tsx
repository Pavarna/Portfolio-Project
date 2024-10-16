import React from 'react';
import './sectionCssStyles/Expertise.css';

const Expertise: React.FC = () => {
    return (
        <section className="expertise">
            <h2>Areas of Expertise</h2>
            <ul>
                <li>UI/UX Design</li>
                <li>Responsive Web Applications</li>
                <li>Performance Optimization</li>
                <li>State Management (Redux, Redux Saga)</li>
                <li>Agile Development</li>
                <li>DevSecOps Practices</li>
            </ul>
        </section>
    );
};

export default Expertise;
