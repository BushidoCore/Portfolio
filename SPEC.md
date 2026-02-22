# Adhithya K - Portfolio Website Specification

## 1. Project Overview
- **Project Name**: Adhithya K Portfolio
- **Type**: Single Page Application (SPA) with React Router
- **Core Functionality**: Premium animated portfolio showcasing junior frontend developer skills, projects, and contact information
- **Target Users**: Recruiters, hiring managers, potential clients

## 2. Tech Stack
- React 18 + Vite
- TailwindCSS
- Framer Motion
- GSAP (ScrollTrigger)
- React Router DOM v6
- React Icons

## 3. Color Palette (Dark Premium Aesthetic)
- **Primary Background**: #0a0a0f (Deep Black)
- **Secondary Background**: #12121a (Dark Navy)
- **Accent Primary**: #6366f1 (Indigo)
- **Accent Secondary**: #a855f7 (Purple)
- **Accent Tertiary**: #06b6d4 (Cyan)
- **Text Primary**: #f8fafc (Off White)
- **Text Secondary**: #94a3b8 (Slate)
- **Glass Background**: rgba(255, 255, 255, 0.05)
- **Glass Border**: rgba(255, 255, 255, 0.1)

## 4. Typography
- **Headings**: "Clash Display", sans-serif (from CDN)
- **Body**: "Satoshi", sans-serif (from CDN)
- **Mono**: "JetBrains Mono", monospace (for code elements)

## 5. Section Specifications

### 5.1 Loading Screen
- Full screen overlay with centered animated logo
- Animated gradient ring that fills up
- "Loading..." text with fade in/out
- Duration: 2 seconds minimum
- Exit animation: fade out with scale down

### 5.2 Navigation
- Fixed top navigation with glassmorphism
- Logo on left: "AK" with gradient
- Nav links on right: Home, About, Skills, Projects, Education, Contact
- Active state: underline with accent color
- Mobile: hamburger menu with slide-in drawer
- Scroll progress indicator at top

### 5.3 Hero Section
- Full viewport height
- Animated gradient mesh background (animated via GSAP)
- Floating geometric shapes (circles, squares) with parallax
- Name: "Adhithya K" with letter-by-letter animation
- Role: "Junior Frontend Developer" with typewriter effect
- Tagline: "Building responsive UI & creative digital experiences" with fade in
- Two CTA buttons: "View Projects" (filled), "Contact Me" (outline)
- Animated scroll indicator at bottom

### 5.4 About Section
- Two column layout: image + text
- Profile placeholder with gradient border (animated)
- Summary text with reveal animation
- Skills mentioned: HTML, CSS, JavaScript, UI/UX, Figma
- Languages: English, Tamil, Hindi
- Stats counters: Years Experience, Projects, Happy Clients (animated on scroll)

### 5.5 Skills Section
- Technical Skills: Progress bars with percentage
  - HTML/CSS: 95%
  - JavaScript: 90%
  - React: 85%
  - TailwindCSS: 90%
  - GSAP: 80%
- Design Skills: Circular progress indicators
  - UI/UX Design: 88%
  - Figma: 82%
  - Responsive Design: 95%
- Animated bars fill on scroll into view
- Hover shows skill level tooltip

### 5.6 Projects Section
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Project cards with 3D tilt effect on hover
- Card content: Image, Title, Description, Tech tags, Links
- Projects:
  1. Chatly – Chat App UI Prototype
  2. Portfolio Website
  3. Interactive Animated Cards
- Filter buttons by category (All, Web App, UI Design)
- Staggered reveal animation on scroll

### 5.7 Education Section
- Timeline layout with vertical line
- Timeline items alternating left/right
- Each item: Date, Institution, Degree, Description
- Items:
  - BE Computer Science Engineering (2022–2026) - Present
  - Secondary School - 2022
- Animated line draws as user scrolls
- Cards flip or slide in on reveal

### 5.8 Contact Section
- Two column: Info + Form
- Contact info cards with icons (email, phone, LinkedIn, GitHub)
- Form fields: Name, Email, Subject, Message
- Validation with animated error states
- Submit button with loading state and success animation
- Social links with hover effects

### 5.9 Footer
- Minimal design
- "AK" logo centered
- Copyright text
- Social icons row
- Back to top button

## 6. Animations Specification

### 6.1 Page Transitions
- Fade + slide from right/left based on direction
- Duration: 0.4s
- Exit: fade out to left

### 6.2 Scroll Animations
- Elements fade in + slide up on enter
- Stagger children by 0.1s
- Parallax on background elements
- Line drawing for timeline

### 6.3 Micro-interactions
- Buttons: scale(1.05) + glow on hover
- Cards: 3D tilt with magnetic cursor feel
- Links: underline grows from left
- Form inputs: border color change + label float

### 6.4 Hero Animations
- Text letter-by-letter reveal: 0.05s per letter
- Floating shapes: continuous subtle movement
- Background: slow gradient shift (15s loop)
- Scroll indicator: bounce animation

## 7. Component Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageTransition.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── ui/
│   │   ├── LoadingScreen.jsx
│   │   ├── Button.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillBar.jsx
│   │   ├── TimelineItem.jsx
│   │   ├── ContactForm.jsx
│   │   └── MagneticCursor.jsx
│   └── hooks/
│       ├── useScrollProgress.js
│       └── useInView.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 8. Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 9. Performance Optimizations
- Lazy load components with React.lazy()
- Use React.memo for static components
- Optimize GSAP with ScrollTrigger.batch
- Use will-change for animated elements
- Debounce scroll events

## 10. Accessibility
- Semantic HTML (header, main, section, footer)
- ARIA labels on interactive elements
- Focus visible states on all buttons/inputs
- Sufficient color contrast (WCAG AA)
- Reduced motion media query support
- Alt text for images

## 11. Acceptance Criteria
- [ ] Loading screen appears on first visit
- [ ] All sections visible and properly styled
- [ ] Navigation works with smooth scroll
- [ ] Page transitions are smooth
- [ ] All animations trigger on scroll
- [ ] Project cards have 3D tilt effect
- [ ] Contact form validates inputs
- [ ] Fully responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] Fast initial load (< 3s)
