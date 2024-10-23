import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects'; // Adjust the path if necessary
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

describe('Projects Component', () => {
    beforeEach(() => {
        render(<Projects />);
    });

    it('renders the projects title', () => {
        expect(screen.getByText(/Projects - Expertise Demonstrations!/i)).toBeInTheDocument();
    });

    it('renders the portfolio project card', () => {
        expect(screen.getByText(/Portfolio - Frontend Project/i)).toBeInTheDocument();
    });

    it('renders the project description', () => {
        expect(screen.getByText(/Interactive portfolio built with ReactJS, showcasing my skills, experience, projects, and awards, designed to highlight my expertise in frontend development./i)).toBeInTheDocument();
    });

    it('renders the project buttons', () => {
        const liveProjectButton = screen.getByRole('button', { name: /View Live Project/i });
        const codeRepoButton = screen.getByRole('button', { name: /View Code Repo/i });
        expect(liveProjectButton).toBeInTheDocument();
        expect(codeRepoButton).toBeInTheDocument();
    });

    it('renders the project technology buttons', () => {
        expect(screen.getByRole('button', { name: /ReactJs/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /TypeScript/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /PrimeReact/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /PrimeFlex/i })).toBeInTheDocument();
    });

    it('renders the project image', () => {
        const projectImage = screen.getByAltText(/portfolio project card/i);
        expect(projectImage).toBeInTheDocument();
        expect(projectImage).toHaveAttribute('src', expect.stringContaining('Portfolio Project Thumbnail.png')); // Adjust as needed for the actual image path
    });

    it('renders the Bitmoji image', () => {
        const bitmoji = screen.getByAltText(/My Bitmoji/i);
        expect(bitmoji).toBeInTheDocument();
        expect(bitmoji).toHaveAttribute('src', expect.stringContaining('Bitmoji surfing the net.png')); // Adjust as needed for the actual image path
    });

    it('handles button clicks correctly', () => {
        const liveProjectButton = screen.getByRole('button', { name: /View Live Project/i });
        const codeRepoButton = screen.getByRole('button', { name: /View Code Repo/i });

        // Mock the window.open function to avoid opening a new tab during tests
        jest.spyOn(window, 'open').mockImplementation(() => null);

        liveProjectButton.click();
        expect(window.open).toHaveBeenCalledWith('https://github.com/Pavarna/Portfolio-Project', '_blank');

        codeRepoButton.click();
        expect(window.open).toHaveBeenCalledWith('https://github.com/Pavarna/Portfolio-Project', '_blank');
    });
});
