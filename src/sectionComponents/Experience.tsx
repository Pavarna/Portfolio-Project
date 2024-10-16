import React from 'react';
import './sectionCssStyles/Experience.css';

const Experience: React.FC = () => {
    return (
        <section className="experience">
            <h2>Work Experience</h2>
            <div className="job">
                <h3>DHL IT Services - Associate Software Engineering Analyst</h3>
                <p>
                    ✔Migrated legacy systems to modern ReactJS frameworks, ensuring 100% code
                    compliance with security standards (Fortify), enhancing both security and
                    maintainability.
                    Successfully delivered 5 major web applications, independently managing the
                    entire front-end lifecycle, from design to deployment.
                    ✔ Implemented state management using Redux and Redux Saga, optimizing
                    performance and user experience in high-traffic web applications.
                    ✔ Leveraged GitHub Copilot and internal AI tools to boost development productivity by
                    15%, aligning with the organization's technology standards.
                    ✔ Collaborated with cross-functional teams, including designers, backend developers,
                    and business stakeholders, resulting in a 20% improvement in project delivery times.
                    ✔ Delivered development plans, unit tests, and deployments on schedule, showcasing
                    strong organizational skills.
                    ✔Contributed to DevSecOps efforts by completing development and support tasks promptly.
                </p>
                <p>
                    Actively participated in organizing internal team events, fostering team spirit and enhancing collaboration.
                    Led business communication meetings with stakeholders, improving project alignment and timely decision-making.
                    Managed team Confluence tracker, ensuring up-to-date documentation of project progress, team structure, and decision logs.
                    Oversaw leave tracking and eTime submission, ensuring smooth operational workflows within the team.
                    Coordinated team structure updates, optimizing resource allocation and productivity within the department.
                </p>
            </div>
        </section>
    );
};

export default Experience;
