# Portfolio React App

A modern, responsive portfolio website converted from HTML to React.js with dark mode support and smooth animations.

## Features

- ✨ Modern React.js architecture with functional components
- 🌙 Dark/Light mode toggle with smooth transitions
- 📱 Fully responsive design
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion animations and micro-interactions
- 🚀 GSAP for advanced animations and scroll triggers
- 🔄 Lenis smooth scrolling for buttery smooth navigation
- 📧 Contact form integration ready
- 🎯 Component-based structure for easy maintenance
- 💫 Loading screen with animated logo
- 🎪 Glass morphism effects and modern UI elements
- 🌊 Scroll-triggered animations for sections

## Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Smooth Scrolling**: Lenis
- **Icons**: Material Symbols
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with dark mode toggle
│   ├── Hero.js            # Hero section with introduction
│   ├── About.js           # About section with features
│   ├── Skills.js          # Skills section with progress bars
│   ├── Projects.js        # Projects showcase
│   ├── Education.js       # Education background
│   ├── Contact.js         # Contact information
│   └── Footer.js          # Footer with social links
├── App.js                 # Main app component
├── index.js              # React DOM entry point
└── index.css             # Global styles and Tailwind imports
```

## Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.js` - Name, title, description, and profile image
- `src/components/About.js` - About text and features
- `src/components/Skills.js` - Skills and proficiency levels
- `src/components/Projects.js` - Project details and links
- `src/components/Education.js` - Educational background
- `src/components/Contact.js` - Contact information
- `src/components/Footer.js` - Social media links

### Styling
- Colors and theme can be customized in `public/index.html` (Tailwind config)
- Component-specific styles are in individual component files

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Update navigation in `src/components/Header.js`

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).