# Bhaven Naik - Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with beautiful gradients and animations
- 📱 Fully responsive design for all devices
- ⚡ Fast loading with optimized performance
- 🎯 Smooth scrolling navigation
- 💼 Project portfolio showcase
- 📧 Contact form with validation
- 🛠️ Skills section with progress bars
- 🌙 Clean and maintainable code

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bhaven-naik/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Personal Information

Update the following files with your information:

- **Hero.tsx**: Update your name, title, and social links
- **About.tsx**: Update your personal story and experience
- **Projects.tsx**: Add your own projects with descriptions and links
- **Skills.tsx**: Update your technical skills and proficiency levels
- **Contact.tsx**: Update your contact information

### Styling

The website uses Tailwind CSS with a custom color scheme. You can customize the colors in `tailwind.config.js`.

### Adding New Sections

1. Create a new component in the `src/components/` directory
2. Import and add it to `App.tsx`
3. Add navigation link in `Navbar.tsx`

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

### Netlify

1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure your custom domain if needed

### GitHub Pages

1. Update `base` in `vite.config.ts` if needed
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## Contributing

Feel free to fork this project and customize it for your own use. If you find any issues or have suggestions for improvements, please open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Hosted on [Vercel](https://vercel.com/)
