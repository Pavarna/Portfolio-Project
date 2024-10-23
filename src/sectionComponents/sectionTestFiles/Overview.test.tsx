import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overview from '../Overview';

// Mocking the child components
jest.mock('../Profile', () => () => <div>Mock Profile</div>);
jest.mock('../Skills', () => () => <div>Mock Skills</div>);
jest.mock('../Experience', () => () => <div>Mock Experience</div>);
jest.mock('../Awards', () => () => <div>Mock Awards</div>);
jest.mock('../Projects', () => () => <div>Mock Projects</div>);
jest.mock('../Contact', () => () => <div>Mock Contact</div>);


describe('Overview Component', () => {
  const profileRef = React.createRef<HTMLDivElement>();
  const skillsRef = React.createRef<HTMLDivElement>();
  const experienceRef = React.createRef<HTMLDivElement>();
  const awardsRef = React.createRef<HTMLDivElement>();
  const projectRef = React.createRef<HTMLDivElement>();
  const contactRef = React.createRef<HTMLDivElement>();

  it('should render the Profile component', () => {
    render(
      <Overview
        profileRef={profileRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        awardsRef={awardsRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
    );
    expect(screen.getByText('Mock Profile')).toBeInTheDocument();
  });

  it('should render the Skills component', () => {
    render(
      <Overview
        profileRef={profileRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        awardsRef={awardsRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
    );
    expect(screen.getByText('Mock Skills')).toBeInTheDocument();
  });

  it('should render the Experience component', () => {
    render(
      <Overview
        profileRef={profileRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        awardsRef={awardsRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
    );
    expect(screen.getByText('Mock Experience')).toBeInTheDocument();
  });

  it('should render the Awards component', () => {
    render(
      <Overview
        profileRef={profileRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        awardsRef={awardsRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
    );
    expect(screen.getByText('Mock Awards')).toBeInTheDocument();
  });

  it('should render the Projects component', () => {
    render(
      <Overview
        profileRef={profileRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        awardsRef={awardsRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
    );
    expect(screen.getByText('Mock Projects')).toBeInTheDocument();
  });

  it('should render the Contact component', () => {
    render(
      <Overview
        profileRef={profileRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        awardsRef={awardsRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
    );
    expect(screen.getByText('Mock Contact')).toBeInTheDocument();
  });
});
