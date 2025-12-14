# Next.js Portfolio Website

A modern, responsive portfolio website built with Next.js 16 and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Clean and professional layout with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🌙 **Dark Mode** - Automatic dark mode support
- ⚡ **Fast Performance** - Built with Next.js App Router and Turbopack
- 🎯 **Key Sections**:
  - Hero section with eye-catching introduction
  - About section with personal information
  - Projects showcase with multiple examples
  - Skills section organized by category
  - Contact form for easy communication
  - Footer with social media links

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Development**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

Dependencies are already installed. To reinstall:

```bash
npm install
```

### Development Server

The development server is already running at [http://localhost:3000](http://localhost:3000).

To start it manually:

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.tsx`
   - Change your name and title
   - Update the description

2. **About Section** - Edit `src/components/About.tsx`
   - Add your personal story and background

3. **Projects** - Edit `src/components/Projects.tsx`
   - Add your real projects with descriptions
   - Update project links and technologies

4. **Skills** - Edit `src/components/Skills.tsx`
   - Customize skill categories and items

5. **Contact** - Edit `src/components/Contact.tsx`
   - Implement real form submission (currently simulated)
   - Connect to email service or backend

6. **Footer** - Edit `src/components/Footer.tsx`
   - Add your social media links (GitHub, LinkedIn, Twitter)

### Metadata

Update site metadata in `src/app/layout.tsx`:
- Title
- Description
- Open Graph tags (optional)

## Project Structure

```
next-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navigation.tsx  # Navbar with mobile menu
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Projects.tsx    # Projects showcase
│       ├── Skills.tsx      # Skills section
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer
├── public/                 # Static assets
└── package.json
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new):

```bash
npm install -g vercel
vercel
```

### Other Platforms

This project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

MIT

---

**Note**: This is a template project. Remember to:
- Replace placeholder text with your actual information
- Add real project links and descriptions
- Implement actual form submission logic
- Add your social media URLs
- Customize colors and styling to match your brand
