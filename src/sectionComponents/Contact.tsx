import React from 'react';
import './sectionCssStyles/Contact.css';

const Contact: React.FC = () => {
    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-details">
                <p><strong>Email:</strong> subbupavar@gmail.com</p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pavarna-s-7b99911b1" target="_blank" rel="noopener noreferrer">linkedin.com/in/pavarna</a></p>
                <p><strong>Location:</strong> TamilNadu, India</p>
            </div>
        </section>
    );
};

export default Contact;
