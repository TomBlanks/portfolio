# Thomas Blanks Portfolio - Claude Code Configuration

## Project Overview

Personal portfolio website for Thomas Blanks, a Computer Science student at University of Nottingham. The site showcases projects, provides contact information, and includes a downloadable CV.

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Deployment**: GitHub Pages (https://thomasblanks.github.io/portfolio)
- **Assets**: Images, PDFs, SVG icons

## File Structure

```
portfolio/
├── Pages/
│   ├── home.html          # Main landing page
│   └── projects.html      # Projects showcase page
├── CSS/
│   ├── base.css          # Variables, reset, typography
│   ├── components.css    # Reusable UI components
│   ├── layout.css        # Page layout and structure
│   ├── sections.css      # Section-specific styles
│   ├── utilities.css     # Utility classes
│   └── projects.css      # Projects page specific styles
├── js/
│   └── projects.js       # Project filtering and interactions
├── Assets/
│   ├── Personal-Photo.jpg
│   ├── TomBlanksCV.pdf
│   ├── favicon.svg
│   ├── download.png
│   └── FeaturedProjects/ # Project images
└── README.md
```

## Development Workflow

- **Local Development**: Open HTML files directly in browser or use live server
- **Version Control**: Git with main branch deployment
- **Deployment**: Automatic via GitHub Pages on push to main

## Code Standards

- **HTML**: Semantic markup, proper meta tags, accessibility attributes
- **CSS**: Custom properties for theming, mobile-first responsive design
- **JavaScript**: Vanilla ES6+, event-driven architecture
- **Images**: Optimized for web, proper alt text

## Key Features

- Responsive design with mobile-first approach
- Project filtering with JavaScript
- Hover effects and smooth animations
- Downloadable CV functionality

## Improvement Plan

1. **Resize page**: I need the page to be more zoomed/bigger. I want the page to look like how the current one looks in 125% in a google chrome tab.
2. **Projects Page**: Add all the projects to complete the project page. I need a filtering system to toggle between all, coding, and 3D projects. Add project details when a project is clicked on.
3. **Content Completion**: Fully populate projects page with actual project data
4. **Mobile UX**: Enhanced touch interactions, better mobile navigation

## Testing

- Manual browser testing across Chrome, Firefox, Safari
- Mobile testing on various device sizes

## Notes for Claude

- Always maintain the clean, professional aesthetic
- Preserve the existing color scheme and typography
- Keep mobile responsiveness as a priority
- Focus on performance and accessibility improvements
- Don't break the existing GitHub Pages deployment setup
- Maintain semantic HTML structure
- Follow the established CSS architecture (separate concerns across files)
