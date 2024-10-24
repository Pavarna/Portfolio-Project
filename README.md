# ReactJs Portfolio Project - Deployed on GitHub Pages

This branch contains the **static build** of my ReactJS-based portfolio project. The project is live and hosted on **GitHub Pages**: [View Live Portfolio](https://Pavarna.github.io/Portfolio-Project).

## Overview
This portfolio showcases my personal profile, technical skills, work experience, awards, certificates, and projects. It is designed to be fully responsive, mobile-friendly, and visually appealing with animations and modern UI components.

The **master** branch of this repository contains the source code for the portfolio, while this **gh-pages** branch serves as the deployment for **GitHub Pages**.

## Features
- **Responsive Design**: Adaptable to both desktop and mobile screens.
- **Animations**: Smooth transitions and hover effects for a cool, dynamic look.
- **UI Components**: Uses PrimeReact and PrimeIcons for a sleek user interface.
- **Routing**: Built with React Router for easy navigation between sections.
- **Unit Testing**: Components are tested using Jest for reliability.

## Key Sections
1. **Profile**: Introduces who I am, with an animated Bitmoji-like representation.
2. **Skills**: Lists out my technical proficiencies in an engaging way.
3. **Experience**: Describes my professional background and key achievements.
4. **Awards and Certificates**: Displays my recognitions and certifications.
5. **Projects**: Showcases my portfolio of work with detailed project descriptions.
6. **Contact**: A section for getting in touch with me via email or social links.

## Deployment Process
The `gh-pages` branch is automatically updated with the latest static build whenever code changes are made to the `master` branch and deployed using the following pipeline:

1. **Build**: The project is built using the command:
   ```bash
   npm run build
   ```
2. **Deploy**: The built files are pushed to the `gh-pages` branch using:
   ```bash
   npm run deploy
   ```

These commands ensure that the latest changes are reflected on the live GitHub Pages site.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This **gh-pages** branch houses the pre-built static files necessary for hosting the site on **GitHub Pages**. For source code, configuration, and development setup, refer to the `master` branch.

