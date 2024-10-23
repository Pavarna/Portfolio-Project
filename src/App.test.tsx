import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the path if necessary
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

// Mock the Overview component to avoid rendering the entire component tree
jest.mock('./sectionComponents/Overview', () => {
  return function MockOverview(props: any) {
    return (
      <div>
        <div ref={props.profileRef} data-testid="profile-section">Profile Section</div>
        <div ref={props.skillsRef} data-testid="skills-section">Skills Section</div>
        <div ref={props.experienceRef} data-testid="experience-section">Experience Section</div>
        <div ref={props.awardsRef} data-testid="awards-section">Awards Section</div>
        <div ref={props.projectRef} data-testid="projects-section">Projects Section</div>
        <div ref={props.contactRef} data-testid="contact-section">Contact Section</div>
      </div>
    );
  };
});

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders Menubar with correct items', () => {
    const profileMenuItem = screen.getByRole('menuitem', { name: /Profile/i });
    const skillsMenuItem = screen.getByRole('menuitem', { name: /Skills/i });
    const experienceMenuItem = screen.getByRole('menuitem', { name: /Experience/i });
    const projectsMenuItem = screen.getByRole('menuitem', { name: /Projects/i });
    const awardsMenuItem = screen.getByRole('menuitem', { name: /Awards/i });
    const contactMenuItem = screen.getByRole('menuitem', { name: /Contact/i });

    // Check that the menu items are in the document
    expect(profileMenuItem).toBeInTheDocument();
    expect(skillsMenuItem).toBeInTheDocument();
    expect(experienceMenuItem).toBeInTheDocument();
    expect(projectsMenuItem).toBeInTheDocument();
    expect(awardsMenuItem).toBeInTheDocument();
    expect(contactMenuItem).toBeInTheDocument();
  });
});
