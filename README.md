# 🧱 Clinical Blast - Professional Brick Cleaning & Caulking

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

High-performance landing page for **Clinical Blast**, Sydney's #1 rated brick cleaning and caulking specialists, featuring 178+ 5-star Google reviews.

## ✨ Features

- ⭐ **Trust Badge** - 178+ 5-Star Google Reviews prominently displayed
- 🎨 **Industrial Precision** - Modern design aesthetic with custom color palette
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Core Web Vitals compliant
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🔍 **SEO-Ready** - Schema.org structured data for local business
- 🖼️ **Before/After Slider** - Interactive image comparison showcase
- 💬 **Wall of Love** - Customer testimonials section
- 🎯 **Sticky Navigation** - Smooth scroll to sections

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animation library |
| **Lucide React** | Modern icon set |

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/voldemorthack01/Clinical-Blast-WebSite.git
cd Clinical-Blast-WebSite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

The project uses `output: 'standalone'` for optimized production builds, perfect for deployment on platforms like Render.com or Vercel.

## 🏗️ Project Structure

```
clinical-blast/
├── app/
│   ├── layout.tsx       # Root layout with metadata & fonts
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles & Tailwind
├── components/
│   ├── Header.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section with trust badge
│   ├── Services.tsx     # Services grid
│   ├── BeforeAfter.tsx  # Interactive slider
│   ├── Reviews.tsx      # Testimonials section
│   └── Footer.tsx       # Footer with contact info
├── public/              # Static assets
└── next.config.mjs      # Next.js configuration
```

## 🎨 Design System

### Color Palette
- **Primary:** `#1a1a1a` (Charcoal)
- **Accent:** `#ff6b35` (Industrial Orange)
- **Background:** `#f5f5f5` (Off-White)
- **Text:** `#2c2c2c` (Dark Gray)

### Typography
- **Headings:** Oswald (Bold, Industrial)
- **Body:** Inter (Clean, Modern)

## 🌐 Services Offered

- **Brick Cleaning** - Acid wash & pressure cleaning
- **Caulking Services** - Windows, expansion joints, bathrooms
- **Paint Removal** - Vandalism restoration
- **High Pressure Cleaning** - Driveways, pathways, pavers

## 📍 Contact Information

- **Phone:** [0420 696 157](tel:+61420696157)
- **Address:** 1233 Old Northern Rd, Middle Dural NSW 2158
- **Hours:** 
  - Mon-Wed, Fri: 7:00 AM - 6:30 PM
  - Thursday: 7:00 AM - 9:30 PM
- **Rating:** 5.0 ⭐ (178+ Google Reviews)

## 🚀 Deployment

### Render.com

This project is optimized for deployment on Render.com:

1. **Build Command:** `npm install && npm run build`
2. **Start Command:** `npm start`
3. **Node Version:** 20.x (auto-detected from `package.json`)

### Vercel

Deploy instantly with Vercel:

```bash
vercel --prod
```

## 📄 License

© 2026 Clinical Blast. All rights reserved.

---

**Built with ❤️ for Clinical Blast** | [View Live Site](https://clinicalblast.com.au)
