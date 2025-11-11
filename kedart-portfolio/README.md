# Kedar's Portfolio - Glassmorphism Design

A modern, responsive portfolio website built with React and featuring a stunning glassmorphism design theme.

## 🌟 Features

- **Glassmorphism UI**: Modern glass-like design with backdrop blur effects
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Floating elements and smooth transitions
- **Interactive Components**: Dynamic project showcase and contact form
- **Modern Tech Stack**: Built with React, Vite, and Tailwind CSS
- **Modular Architecture**: Clean, reusable components

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kedart-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── Header.jsx          # Navigation header with glassmorphism
│   ├── Hero.jsx           # Hero section with floating animations
│   ├── About.jsx          # About section with image and stats
│   ├── Skills.jsx         # Skills and education section
│   ├── Works.jsx          # Interactive project showcase
│   ├── Contact.jsx        # Contact form and information
│   └── Footer.jsx         # Footer with social links
├── App.jsx                # Main app component
├── App.css               # Custom styles and animations
├── index.css             # Tailwind imports
└── main.jsx              # React entry point
```

## 🎨 Design Features

### Glassmorphism Theme
- Semi-transparent backgrounds with backdrop blur
- Subtle borders and shadows
- Layered depth effects
- Smooth hover animations

### Typography
- **Space Grotesk**: Modern sans-serif for body text
- **VT323**: Pixel-style font for headings and branding

### Color Palette
- Primary: Purple to Blue gradient background
- Glass effects: White/Black with transparency
- Accent: Purple glow effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Customization

### Adding New Projects
Edit the `projects` array in `src/Components/Works.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Project Category",
    description: "Project description...",
    image: "image-url",
    technologies: ["Tech1", "Tech2"],
    link: "project-link"
  }
];
```

### Updating Contact Information
Modify the contact details in `src/Components/Contact.jsx` and `src/Components/Footer.jsx`.

### Changing Colors
Update the gradient and glass effects in `src/App.css` and component styles.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

The project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: kedar@example.com
- **Location**: Pune, Maharashtra, India
- **LinkedIn**: [Your LinkedIn Profile]
- **Portfolio**: [Your Portfolio URL]

---

Built with ❤️ by Kedar