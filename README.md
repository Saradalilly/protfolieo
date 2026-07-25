# Vadali Sarada - Modern Next.js 15 Personal Portfolio Website

![Vadali Sarada Portfolio](https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80)

A modern, production-ready, dark-mode default personal portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Optimized for 100% WCAG accessibility, sub-second page loads, zero layout shifts, dynamic SEO metadata, and 1-click deployment on **Vercel**.

---

## 🚀 Live Demo & Deployment
- **Deployment Platform**: Vercel
- **Framework**: Next.js 15 (App Router)
- **Status**: Production-Ready / Zero Build & TypeScript Errors

---

## ✨ Features & Highlights

- 🎨 **Glassmorphism & Neon Aesthetics**: Curated emerald, cyan, and indigo glow accents with dynamic glass backdrop filters.
- 🌙 **Dark Mode Default**: Seamless Theme Toggle between Dark mode (default) and Light mode with persistent local storage.
- 📱 **Mobile-First & Ultra Responsive**: Tailored layout for mobile, tablet, desktop, and ultra-wide screens.
- ⚡ **10 Comprehensive Portfolio Sections**:
  1. **Hero**: Animated role typing switcher, bio, CTA buttons, interactive profile card.
  2. **About**: Professional summary, B.Tech CSE education breakdown (BVCITS, Amalapuram - 68%), career objectives.
  3. **Skills**: Categorized skill progress bars and glowing cards (Frontend, Backend, AI/ML, Data Visualization, Tools).
  4. **Projects**: Capstone highlight (**Prediction of Crude Oil Prices Using SVR & Grid Search CV** with 87% prediction accuracy), category filter tabs, interactive deep-dive modal, GitHub source & Live demo links.
  5. **Experience Timeline**: Vertical animated timeline (HCLTech Internship, Capstone ML Lead, Community Survey Project).
  6. **Services**: Web Development, Full Stack Engineering, AI/ML Solutions, Data Pipelines & BI Dashboards.
  7. **Achievements**: Verifiable certifications (HCLTech Web & SQL, NPTEL Python, Typing & Computer Fundamentals).
  8. **Testimonials**: Mentor and evaluator review cards with star ratings.
  9. **Contact**: Interactive contact form with React Hook Form validation, confetti celebration feedback, direct email/phone/location metadata.
  10. **Footer**: Quick links navigation, status indicator, copyright notice.
- 🔮 **Interactive Canvas & Motion FX**:
  - Interactive HTML5 particle background canvas with line node connections.
  - Smooth custom cursor trail with click target detection.
  - Top scroll progress bar indicator.
  - Floating Back-to-Top action button with progress ring.
  - Active navigation link scroll spy highlighting.
- 🔍 **SEO & Metadata**: Dynamic OpenGraph tags, Twitter Cards, `sitemap.ts`, `robots.ts`, custom SVG favicon.

---

## 🛠️ Tech Stack

- **Core**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, Glassmorphism design tokens
- **Animations**: Framer Motion, HTML5 Canvas, Canvas Confetti
- **Icons**: Lucide React
- **Forms**: React Hook Form

---

## 📁 Project Structure

```
sarada-portfolio/
├── public/
│   ├── favicon.svg          # Custom vector SVG logo favicon
│   └── icon.svg
├── src/
│   ├── app/
│   │   ├── globals.css      # Glassmorphism design system & CSS variables
│   │   ├── layout.tsx       # Root layout, theme context, meta & background
│   │   ├── page.tsx         # Main landing page assembling 10 sections
│   │   ├── not-found.tsx    # Custom 404 error page
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── sitemap.ts       # Dynamic XML sitemap
│   ├── components/
│   │   ├── modals/          # Interactive ProjectModal & HireMeModal
│   │   ├── sections/        # Hero, About, Skills, Projects, Experience, etc.
│   │   └── ui/              # Navbar, Footer, CustomCursor, ParticleBackground, etc.
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/Light theme state manager
│   ├── data/
│   │   └── portfolio.ts     # Authentic resume dataset (Vadali Sarada)
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── useScrollProgress.ts
│   └── lib/
│       └── utils.ts         # Utility class merging with clsx & tailwind-merge
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 💻 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Saradaballu/Sarada.git
   cd sarada-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Test production build locally**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 One-Click Vercel Deployment Instructions

1. Push your repository code to GitHub:
   ```bash
   git add .
   git commit -m "Deploy production portfolio website"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New"** -> **"Project"** and select your GitHub repository (`sarada-portfolio`).
4. Click **"Deploy"**. Vercel will automatically detect Next.js 15 and complete the deployment build in seconds.

---

## 👤 Author Contact Information

**Vadali Sarada**  
*Full Stack Developer & AI Specialist*  
- **Email**: vadalisarada2004@gmail.com
- **Phone**: +91 9347495403
- **LinkedIn**: [linkedin.com/in/vadali-sarada-63550a419](https://www.linkedin.com/in/vadali-sarada-63550a419)
- **GitHub**: [github.com/Saradaballu/Sarada](https://github.com/Saradaballu/Sarada)
