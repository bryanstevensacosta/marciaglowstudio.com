# Marcia Glow Studio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://marciaglowstudio.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

> Professional landing page for Marcia Glow Studio - a premium beauty salon in Lynn, MA

🌐 **[marciaglowstudio.com](https://marciaglowstudio.com)**

## 📋 Description

Modern and responsive website for Marcia Glow Studio, specializing in professional beauty services including hair styling, hair treatments, manicure and pedicure. The site allows customers to explore services, find location details, and book appointments directly through WhatsApp and Instagram.

## ✨ Features

- 🎨 Elegant modern design with light/dark theme
- 📱 Fully responsive (mobile-first approach)
- ⚡ Performance optimized with Next.js 16
- 🗺️ Google Maps integration
- 💬 Direct booking via WhatsApp and Instagram
- 🎯 SEO optimized with complete metadata
- ♿ Accessible and semantic HTML

## 🛠️ Tech Stack

### Core

- **[Next.js 16](https://nextjs.org/)** - React framework con App Router
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos accesibles
- **[Lucide React](https://lucide.dev/)** - Iconos
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Soporte de temas

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Gestión de formularios
- **[Zod](https://zod.dev/)** - Validación de esquemas

### Tools

- **[pnpm](https://pnpm.io/)** - Package manager
- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Formateo de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/marciaglowstudio.git

# Navigate to directory
cd marciaglowstudio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Development
pnpm dev              # Start development server

# Build
pnpm build            # Create production build
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues automatically
pnpm format           # Format code with Prettier
pnpm type-check       # Check TypeScript types
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
│
├── components/            # React components
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── why-choose-us-section.tsx
│   ├── cta-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
│
├── lib/                   # Utilities
│   └── utils.ts          # Helpers (cn, etc.)
│
├── public/               # Static assets
│   └── images/          # Images
│
└── .kiro/               # Kiro AI configuration
    └── steering/        # Project guides
```

## 🎨 Code Conventions

- **Components**: Functional components with TypeScript
- **Naming**: kebab-case for files, PascalCase for exports
- **Imports**: Path alias `@/*` for clean imports
- **Styling**: Tailwind utility classes with mobile-first approach
- **Icons**: Lucide React with consistent strokeWidth (1.5)

## 🌐 Deployment

The site is deployed on Vercel with continuous deployment from the main branch.

**Production URL**: [https://marciaglowstudio.com](https://marciaglowstudio.com)

### Environment Variables

Create a `.env.local` file for local environment variables:

```env
# Add your variables here if needed
```

## 📝 License

Copyright © 2026 Bryan Acosta & Marcia Glow Studio. All Rights Reserved.

This code is publicly available for viewing and reference purposes only. Reproduction, modification, distribution, or commercial use is strictly prohibited without explicit written permission. See [LICENCE](./LICENCE) for details.

## 📧 Contact

**Marcia Glow Studio**

- 📍 14 Mt Vernon St, Lynn, MA 01901
- 📞 +1 978-876-1241
- 📧 marciaglowstudio@gmail.com
- 📱 [WhatsApp](https://wa.me/19788761241)
- 📷 [Instagram](https://instagram.com/marciaglowstudio)

---

Built with ❤️ for Marcia Glow Studio
