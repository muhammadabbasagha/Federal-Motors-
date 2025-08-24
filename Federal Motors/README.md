# Federal Motors (Next.js + Tailwind)

A production-ready showroom website for Federal Motors, built with Next.js App Router, Tailwind, Framer Motion, and EmailJS.

## Quick Start

1. **Install dependencies**
```bash
npm install
```

2. **Create env file**
```bash
cp .env.local.template .env.local
# Put your real EmailJS keys in .env.local
```

3. **Run locally**
```bash
npm run dev
```

4. **Build production**
```bash
npm run build
npm start
```

5. **Deploy (Vercel recommended)**
- Push to GitHub
- Import repo in Vercel
- Add `NEXT_PUBLIC_EMAILJS_*` environment variables in Vercel Project Settings
- Deploy 🎉

## Notes
- Remote images from Wikimedia are enabled in `next.config.js`.
- UI components (`Button`, `Card`) are lightweight and live in `components/ui`.
- Data lives in `data/carsData.js`.
