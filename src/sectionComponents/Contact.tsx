import { Button } from 'primereact/button';
import './sectionCssStyles/Contact.css'; // Optional for additional styling
import { Card } from 'primereact/card'; // Import PrimeReact Card

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <Card className="contact-card">
                <h1 className="skills-title">Connect with Me
                    <div className='grid'>
                        <span className="col-6 col-offset-4 ">Discover my superpowers!</span>
                    </div>
                </h1>
                <div className="contact-details flex align-items-center justify-content-center">
                    <Button icon="pi pi-envelope" label="subbupavar@gmail.com" className="p-button-text p-button-rounded" onClick={() => window.location.href = 'mailto:subbupavar@gmail.com'} />

                    <Button icon="pi pi-linkedin" label="linkedin.com/in/pavarna" className="p-button-text p-button-rounded" onClick={() => window.open('https://www.linkedin.com/in/pavarna-s-7b99911b1', '_blank')} />
                    <Button icon="pi pi-youtube" label="PowerfulLearning" className="p-button-text p-button-rounded" onClick={() => window.open('https://www.youtube.com/c/PowerfulLearning', '_blank')} />

                    <Button icon="pi pi-map-marker" label="TamilNadu, India" className="p-button-text p-button-rounded" />
                </div>
            </Card>
        </div>
    );
};

export default Contact;
