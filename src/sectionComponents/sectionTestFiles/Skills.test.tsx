import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills'; // Adjust the path if necessary
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

describe('Skills Component', () => {
    beforeEach(() => {
        render(<Skills />);
    });

    it('renders the skills title', () => {
        expect(screen.getByText(/Discover my superpowers!/i)).toBeInTheDocument();
    });

    it('renders the skills subtitle', () => {
        expect(screen.getByText(/Frontend magic, UI\/UX wizardry, DevOps mastery, and leadership expertise./i)).toBeInTheDocument();
    });

    it('renders Front-End Development skills', () => {
        expect(screen.getByText(/Front-End Development:/i)).toBeInTheDocument();
        expect(screen.getByText(/ReactJS, HTML5, CSS3, JavaScript \(ES6\+\), TypeScript/i)).toBeInTheDocument();
    });

    it('renders Frameworks/Libraries skills', () => {
        expect(screen.getByText(/Frameworks\/Libraries:/i)).toBeInTheDocument();
        expect(screen.getByText(/Redux, React Router, Bootstrap, React Saga, Prime React/i)).toBeInTheDocument();
    });

    it('renders Version Control skills', () => {
        expect(screen.getByText(/Version Control:/i)).toBeInTheDocument();
        expect(screen.getByText(/Git, GitHub, Jenkins \(Basics\)/i)).toBeInTheDocument();
    });

    it('renders UI/UX Design skills', () => {
        expect(screen.getByText(/UI\/UX Design:/i)).toBeInTheDocument();
        expect(screen.getByText(/Figma, Responsive Web Design, Wireframe/i)).toBeInTheDocument();
    });

    it('renders Testing skills', () => {
        expect(screen.getByText(/Testing:/i)).toBeInTheDocument();
        expect(screen.getByText(/Unit Testing, Chrome DevTools, Cypress & Jest \(Basics\)/i)).toBeInTheDocument();
    });

    it('renders DevOps Tools skills', () => {
        expect(screen.getByText(/DevOps Tools:/i)).toBeInTheDocument();
        expect(screen.getByText(/Docker, Kubernetes \(Basics\)/i)).toBeInTheDocument();
    });

    it('renders Agile Project Management skills', () => {
        expect(screen.getByText(/Agile Project Management:/i)).toBeInTheDocument();
        expect(screen.getByText(/Jira, User Stories, Business Communication, Scrum\(Basics\)/i)).toBeInTheDocument();
    });

    it('renders Business & Team Management skills', () => {
        expect(screen.getByText(/Business & Team Management:/i)).toBeInTheDocument();
        expect(screen.getByText(/Event Organization, Confluence, etime & Leave Tracker, Team Structure Management/i)).toBeInTheDocument();
    });

    it('renders the Bitmoji image', () => {
        const bitmoji = screen.getByAltText(/My Bitmoji/i);
        expect(bitmoji).toBeInTheDocument();
        expect(bitmoji).toHaveAttribute('src', expect.stringContaining('Bitmoji look.png')); // Adjust as needed for the actual image path
    });
});
