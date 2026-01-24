# Premium Animated Portfolio

A next-level, modern animated portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. This portfolio template features smooth animations, glassmorphism design, and a fully data-driven architecture.

## Features

- **Data-Driven Architecture**: All content comes from `public/data.json` - no hardcoded content
- **Dynamic Navigation**: Auto-generated navigation based on available sections
- **Smooth Animations**: Framer Motion animations for page transitions and micro-interactions
- **Glassmorphism Design**: Modern UI with glass effects and soft shadows
- **Dark Theme**: Premium dark theme with customizable accent colors
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **SEO Friendly**: Next.js best practices for search engine optimization
- **Performance Optimized**: Lazy loading and optimized animations

## Technology Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Data**: JSON-based configuration

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main portfolio page
│   └── globals.css          # Global styles and animations
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       └── ContactSection.tsx
├── hooks/
│   ├── usePortfolioData.ts  # Fetch portfolio data
│   └── useScrollAnimation.ts # Scroll-based animations
├── lib/
│   └── animations.ts        # Framer Motion variants
└── public/
    └── data.json            # Portfolio content
```

## Customization

### 1. Update Personal Information

Edit `/public/data.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com",
    "phone": "+1 (555) 123-4567",
    "location": "City, State",
    "website": "https://yoursite.com",
    "linkedin": "https://linkedin.com/in/yourname",
    "github": "https://github.com/yourname",
    "bio": "Your bio"
  }
}
```

### 2. Customize Sections

Each section in the data.json can be enabled or disabled. If a section is missing, empty, or null, it won't be displayed:

- **hero**: Hero section with greeting and CTA buttons
- **about**: About me section with skills grid
- **experience**: Work experience timeline
- **projects**: Featured projects and other projects
- **contact**: Contact section with social links

### 3. Add Your Projects

Add projects to the `projects` array in `data.json`:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js", "MongoDB"],
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://...",
  "image": "/images/project.jpg",
  "featured": true
}
```

### 4. Customize Colors

Edit `/app/globals.css` to change the color scheme:

```css
.dark {
  --primary: oklch(0.6 0.3 250);  /* Primary brand color */
  --accent: oklch(0.7 0.25 280);  /* Accent color */
  /* ... other colors ... */
}
```

### 5. Customize Fonts

Update fonts in `/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

Then update `/app/globals.css`:

```css
@theme inline {
  --font-sans: 'Your Font', fallback;
}
```

## Available Sections

### Hero Section
- Animated greeting with name
- Professional title
- Call-to-action buttons
- Scroll indicator

### About Section
- Multi-paragraph biography
- Skills grid with hover effects
- Responsive two-column layout

### Experience Section
- Timeline of work experiences
- Company, position, and duration
- Key achievements
- Technology stack for each role

### Projects Section
- Featured projects with detailed descriptions
- Additional projects in grid format
- Live demo and GitHub links
- Technology tags

### Contact Section
- Contact call-to-action
- Email link
- Social media links with icons
- Hover animations

## Animation System

The portfolio uses Framer Motion for smooth animations:

- **Scroll Animations**: Sections animate in when they come into view
- **Hover Effects**: Interactive elements respond to user interaction
- **Stagger Effects**: Components animate in sequence
- **Parallax Elements**: Background elements move at different speeds

## SEO Optimization

- Dynamic metadata based on personal information
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly design
- Fast page load times

## Performance Tips

1. **Optimize Images**: Use next/image for project images
2. **Lazy Load**: Components use viewport detection for animations
3. **Code Splitting**: Each section is a separate component
4. **CSS Optimization**: Tailwind purges unused styles

## Deployment

Deploy to Vercel with one click:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy

Or run locally:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## License

Free to use and customize for personal and commercial projects.

## Support

For issues or questions, please check the code comments or reach out through the contact section.

---

Built with care using Next.js and Framer Motion. When someone opens this portfolio, they should say: "I have never seen a portfolio like this before."
