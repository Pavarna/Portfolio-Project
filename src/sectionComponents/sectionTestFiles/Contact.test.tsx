import { render, screen } from '@testing-library/react';
import Contact from '../Contact'; // Adjust the import path if necessary
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

// Mock window.open to prevent actual navigation during tests
global.open = jest.fn();

describe('Contact Component', () => {
    beforeEach(() => {
        render(<Contact />);
    });

    it('renders contact title', () => {
        const titleElement = screen.getByText(/Connect with Me/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('renders email button and functions correctly', () => {
        const emailButton = screen.getByRole('button', { name: /subbupavar@gmail.com/i });
        expect(emailButton).toBeInTheDocument();

        // Simulate click to check if it sets the location.href correctly
        emailButton.click();
        expect(window.location.href).toBe('mailto:subbupavar@gmail.com');
    });

    it('renders LinkedIn button and functions correctly', () => {
        const linkedInButton = screen.getByRole('button', { name: /linkedin.com\/in\/pavarna/i });
        expect(linkedInButton).toBeInTheDocument();

        // Simulate click to check if it calls window.open correctly
        linkedInButton.click();
        expect(global.open).toHaveBeenCalledWith('https://www.linkedin.com/in/pavarna-s-7b99911b1', '_blank');
    });

    it('renders YouTube button and functions correctly', () => {
        const youTubeButton = screen.getByRole('button', { name: /PowerfulLearning/i });
        expect(youTubeButton).toBeInTheDocument();

        // Simulate click to check if it calls window.open correctly
        youTubeButton.click();
        expect(global.open).toHaveBeenCalledWith('https://www.youtube.com/c/PowerfulLearning', '_blank');
    });

    it('renders address button', () => {
        const addressButton = screen.getByRole('button', { name: /TamilNadu, India/i });
        expect(addressButton).toBeInTheDocument();
    });
});
