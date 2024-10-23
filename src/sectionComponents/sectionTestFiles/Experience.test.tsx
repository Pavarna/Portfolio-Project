import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../Experience'; // Adjust the path if necessary
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

describe('Experience Component', () => {
    beforeEach(() => {
        render(<Experience />);
    });

    it('renders the experience title', () => {
        expect(screen.getByText(/Professional Experiences/i)).toBeInTheDocument();
    });

    it('renders the DHL IT Services header', () => {
        expect(screen.getByText(/DHL IT Services/i)).toBeInTheDocument();
    });

    it('renders the year range', () => {
        expect(screen.getByText(/2022 - Present/i)).toBeInTheDocument();
    });

    it('renders Frontend Development Responsibilities section', () => {
        expect(screen.getByText(/Frontend Development Responsiblities/i)).toBeInTheDocument();
    });

    it('renders Management & Communication Responsibilities section', () => {
        expect(screen.getByText(/Management & Communication Responsibilities/i)).toBeInTheDocument();
    });

    it('renders key responsibilities', () => {
        expect(screen.getByText(/Migrated legacy systems to modern ReactJS frameworks/i)).toBeInTheDocument();
        expect(screen.getByText(/Successfully delivered 5 major web applications/i)).toBeInTheDocument();
        expect(screen.getByText(/Implemented state management using Redux and Redux Saga/i)).toBeInTheDocument();
        expect(screen.getByText(/Leveraged GitHub Copilot and internal AI tools/i)).toBeInTheDocument();
        expect(screen.getByText(/Actively participated in organizing internal team events/i)).toBeInTheDocument();
    });
});
