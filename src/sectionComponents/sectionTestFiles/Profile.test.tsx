import { render, screen } from '@testing-library/react';
import Profile from '../Profile'; // Adjust the path if necessary
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

jest.useFakeTimers(); // Use fake timers for testing intervals

describe('Profile Component', () => {
    beforeEach(() => {
        render(<Profile />);
    });

    it('renders the profile component with the correct initial role', () => {
        // Check if the initial role is displayed correctly
        expect(screen.getByText(/Pavarna S - Frontend Developer/i)).toBeInTheDocument();
    });

    it('changes the role every 2 seconds', () => {
        // Fast-forward time by 2 seconds (2000 ms)
        jest.advanceTimersByTime(2000);

        // After 2 seconds, the role should change to the next one
        expect(screen.getByText(/Pavarna S - ReactJs Developer/i)).toBeInTheDocument();

        // Fast-forward another 2 seconds
        jest.advanceTimersByTime(2000);
        expect(screen.getByText(/Pavarna S - Software Developer/i)).toBeInTheDocument();

        // Fast-forward another 2 seconds
        jest.advanceTimersByTime(2000);
        expect(screen.getByText(/Pavarna S - Educational YouTuber/i)).toBeInTheDocument();

        // Fast-forward back to the first role
        jest.advanceTimersByTime(2000);
        expect(screen.getByText(/Pavarna S - Frontend Developer/i)).toBeInTheDocument();
    });

    it('renders all description cards', () => {
        // Check if all description cards are present
        expect(screen.findByText(/Dynamic and result-driven experienced ReactJS developer/i)).toBeInTheDocument();
        expect(screen.findByText(/Strong expertise in Agile development/i)).toBeInTheDocument();
        expect(screen.findByText(/Expanding knowledge in Docker and Kubernetes/i)).toBeInTheDocument();
        expect(screen.findByText(/Experienced in working solely on the UI/i)).toBeInTheDocument();
        expect(screen.findByText(/Proven track record of building responsive/i)).toBeInTheDocument();
        expect(screen.findByText(/YT channel with 20k+ subscribers/i)).toBeInTheDocument();
    });
});
