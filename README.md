# Portfolio Website - Soma Meena Kayathiri M

A modern, high-performance portfolio website showcasing expertise in Data Science, Machine Learning, LLMs, and GenAI. Built with Next.js 14, TypeScript, Three.js, and Tailwind CSS, featuring an immersive 3D hero section and smooth animations.

## 🌟 Live Demo

🔗 **[https://somameenakayathirim.github.io](https://somameenakayathirim.github.io)**

## ✨ Key Features

### Technical Excellence
- ⚡ **Next.js 14** with App Router for optimal performance
- 🎯 **TypeScript** for type-safe code
- 🎨 **Tailwind CSS** for responsive, utility-first styling
- 🎭 **Framer Motion** for smooth, professional animations
- 🎮 **Three.js & React Three Fiber** for 3D graphics
- 📱 **Fully Responsive** design (mobile, tablet, desktop)
- 🚀 **Static Export** optimized for GitHub Pages deployment

### User Experience
- 🌑 **Dark Mode** - Permanent dark theme optimized for readability
- ✨ **3D Interactive Hero** - Animated neural network visualization
- 🎯 **Smooth Scroll** animations with intersection observers
- 💫 **Glassmorphism Effects** for modern UI aesthetics
- ⚡ **Fast Loading** - Optimized images and code splitting
- ♿ **Accessible** - ARIA labels and keyboard navigation

### Content Sections
- 👤 **About** - Professional background and expertise
- 💼 **Experience** - 8.6+ years across 3 companies
- 🛠️ **Skills** - Categorized technical stack
- 🚀 **Projects** - 7 featured AI/ML projects
- 🏆 **Certifications** - 6 AWS Cloud Quest badges
- 📜 **Patent** - US Patent #11256553
- 🎓 **Education** - Master's & Bachelor's degrees
- 📬 **Contact** - Multiple contact methods

## 📁 Project Structure

```
somameenakayathirim.github.io/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page with all sections
│   └── globals.css          # Global styles & animations
├── components/              # React components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero3D.tsx          # 3D animated hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience
│   ├── Skills.tsx          # Technical skills
│   ├── Projects.tsx        # Featured projects
│   ├── Certifications.tsx  # Professional certifications
│   ├── Patent.tsx          # US Patent showcase
│   ├── Education.tsx       # Academic background
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Site footer
├── public/                  # Static assets
│   └── assets/
│       └── img/            # Images (logos, certificates, profile)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/somameenakayathirim/somameenakayathirim.github.io.git
   cd somameenakayathirim.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run ESLint for code quality
npm run lint

# Build and export static files
npm run export
```

## 📦 Tech Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Animation & 3D
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber
- **[GSAP](https://greensock.com/gsap/)** - Professional animation library

### UI Components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Build Tools
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Vendor prefix automation
- **[ESLint](https://eslint.org/)** - Code linting

## 🎨 Customization Guide

### Update Personal Information

#### 1. Hero Section ([Hero3D.tsx](components/Hero3D.tsx))
```typescript
// Update name and titles
const aiTexts = [
  'Your Title 1',
  'Your Title 2',
  // ...
]

// Update tech stack pills
{['Python', 'Your', 'Technologies'].map((tech, idx) => (
  // ...
))}
```

#### 2. About Section ([About.tsx](components/About.tsx))
- Replace profile image: `public/assets/img/profile.png`
- Update professional description

#### 3. Experience Section ([Experience.tsx](components/Experience.tsx))
```typescript
const experiences = [
  {
    company: 'Your Company',
    logo: '/assets/img/your_logo.png',
    position: 'Your Position',
    // ... update other fields
  }
]
```

#### 4. Skills Section ([Skills.tsx](components/Skills.tsx))
```typescript
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill1', 'Skill2'],
    // ...
  }
]
```

#### 5. Projects Section ([Projects.tsx](components/Projects.tsx))
- Add your projects to the `projects` array
- Update GitHub links and descriptions

#### 6. Contact Section ([Contact.tsx](components/Contact.tsx))
- Update email, LinkedIn, GitHub, and location

### Modify Colors

Edit [tailwind.config.js](tailwind.config.js):
```javascript
colors: {
  primary: {
    400: '#yourcolor',  // Accent color
    500: '#yourcolor',  // Primary brand color
    // ...
  },
}
```

### Change Fonts

Update [app/layout.tsx](app/layout.tsx):
```typescript
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" />
```

## 🚢 Deployment

### GitHub Pages (Recommended)

1. **Update `next.config.js`** (if using custom domain):
   ```javascript
   basePath: '/your-repo-name',  // Leave empty for username.github.io
   ```

2. **Build and export**:
   ```bash
   npm run build
   ```

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **Configure GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root` or `out` folder
   - Save

5. **Access your site**:
   - `https://username.github.io` (for username.github.io repo)
   - `https://username.github.io/repo-name` (for project repos)

### Alternative Deployment Options

- **[Vercel](https://vercel.com/)** - One-click deployment
- **[Netlify](https://www.netlify.com/)** - Continuous deployment
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Global CDN

## 🔧 Configuration Files

### next.config.js
- **output: 'export'** - Static HTML export
- **images.unoptimized: true** - Disable image optimization for static export
- **trailingSlash: true** - Add trailing slashes to URLs

### tsconfig.json
- Strict type checking enabled
- Path aliases configured: `@/*` maps to root

### tailwind.config.js
- Custom color palette (blue theme)
- Custom animations and keyframes
- Dark mode: class-based

## 🎭 Animation Details

### Framer Motion Animations
- **Page entrance**: Staggered component animations
- **Scroll animations**: `useInView` hook with intersection observer
- **Hover effects**: Scale, translate, and color transitions
- **Mobile menu**: Smooth expand/collapse

### Three.js 3D Elements
- **Animated sphere**: Central AI brain with distortion material
- **Neural network**: Interconnected nodes with glow effects
- **Particle system**: 800 floating data particles
- **Auto-rotate**: Gentle orbital camera movement

### CSS Animations
- **Float**: Floating keyword animations
- **Shimmer**: Gradient shimmer effect
- **Glow**: Pulsing glow animations
- **Fade/Slide**: Entry animations

## 📱 Responsive Breakpoints

```css
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Wide: > 1280px
```

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Alt text on images
- ✅ Focus indicators
- ✅ Proper heading hierarchy
- ✅ Color contrast compliance (WCAG AA)

## 🐛 Troubleshooting

### Build Errors

**Problem**: Three.js SSR errors
```bash
Error: Cannot use import statement outside a module
```
**Solution**: Components using Three.js are dynamically imported with `{ ssr: false }`

**Problem**: Image optimization errors
```bash
Error: Image optimization requires a server
```
**Solution**: `images.unoptimized: true` is set in next.config.js

### Development Issues

**Problem**: Port already in use
```bash
Port 3000 is already in use
```
**Solution**: 
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

## 📈 Performance Optimization

- ✅ Dynamic imports for code splitting
- ✅ Image optimization (for non-static builds)
- ✅ Font preloading
- ✅ CSS purging with Tailwind
- ✅ Minification in production
- ✅ Tree shaking
- ✅ Lazy loading for Three.js components

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Soma Meena Kayathiri M**
- 🔗 LinkedIn: [linkedin.com/in/sivaram-gs](https://linkedin.com/in/sivaram-gs)
- 💻 GitHub: [github.com/somameenakayathirim](https://github.com/somameenakayathirim)
- 📧 Email: somameenakayathirim@outlook.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Three.js](https://threejs.org/) - 3D Graphics Library
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Lucide Icons](https://lucide.dev/) - Icon Library
- [GitHub Pages](https://pages.github.com/) - Free Hosting

## 📊 Project Status

✅ **Active** - Continuously maintained and updated

---

**Made with ❤️ using Next.js, TypeScript, and Three.js**

If you found this portfolio template helpful, please consider giving it a ⭐ on GitHub!

Edit `tailwind.config.js` to change the primary color scheme:

```javascript
colors: {
  primary: {
    // Customize these values
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
  },
}
```

### Add Your Images

Replace placeholder images in the `public/assets/img/` directory:
- Profile photo
- Company logos
- Project screenshots

## 🚀 Deployment to GitHub Pages

### Option 1: Using gh-pages (Recommended)

1. **Update `vite.config.ts`**:
   ```typescript
   export default defineConfig({
     base: '/', // Change to '/repo-name/' if not using custom domain
   })
   ```

2. **Update `package.json`** (add homepage):
   ```json
   {
     "homepage": "https://somameenakayathirim.github.io"
   }
   ```

3. **Build and Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

### Option 2: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
          
      - name: Build
        run: npm run build
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 3: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Copy `dist` folder contents** to your repository root or deploy to hosting service

## 📱 Sections Included

1. **Hero** - Eye-catching introduction with animated typing effect
2. **About** - Professional background and expertise
3. **Skills** - Categorized technical skills with icons
4. **Experience** - Professional timeline with achievements
5. **Projects** - Showcase of key projects
6. **Certifications** - Professional certifications and achievements
7. **Education** - Academic background
8. **Contact** - Contact form and social links

## ⚡ Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle size optimized with code splitting

## 🎯 Best Practices

- ✅ Semantic HTML
- ✅ ARIA labels for accessibility
- ✅ Responsive images
- ✅ Mobile-first design
- ✅ SEO meta tags
- ✅ Open Graph tags
- ✅ TypeScript for type safety
- ✅ Component-based architecture

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

### Code Quality

The project uses:
- TypeScript for type checking
- ESLint for code linting
- Proper component organization

## 🌟 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Case studies for projects
- [ ] Testimonials section
- [ ] 3D elements with Three.js
- [ ] Analytics integration
- [ ] CMS integration (Sanity/Contentful)
- [ ] Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
