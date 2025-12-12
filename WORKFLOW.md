# ENICarthage Website Redesign - Project Workflow

## Project Overview
Modern, responsive Angular redesign of ENICarthage college website with Apple/macOS design inspiration. Static JSON-based content, Tailwind CSS styling, smooth animations, and mobile-first approach.

---

## Phase 1: Project Setup & Configuration ✅ (In Progress)

### Tasks:
- [ ] **1.1** Configure Tailwind CSS in Angular project
  - Install `tailwindcss`, `postcss`, `autoprefixer`
  - Create `tailwind.config.js` with custom theme (macOS-inspired colors)
  - Setup `postcss.config.js`
  - Update `styles.css` with Tailwind directives

- [ ] **1.2** Install additional dependencies
  - AOS (Animate On Scroll) for scroll animations
  - Lucide icons for consistent iconography
  - Other utility packages as needed

- [ ] **1.3** Create project folder structure
  ```
  src/
  ├── assets/
  │   ├── data/          (JSON files)
  │   ├── images/        (logos, banners)
  │   └── icons/
  ├── app/
  │   ├── components/    (shared components)
  │   ├── pages/         (page components)
  │   ├── services/      (data services)
  │   ├── models/        (TypeScript interfaces)
  │   └── shared/        (utilities, constants)
  └── styles/            (SCSS/CSS files)
  ```

- [ ] **1.4** Setup Angular routing structure

---

## Phase 2: Data Layer & Services

### Tasks:
- [ ] **2.1** Create static JSON data files in `assets/data/`
  - `news.json` - Latest announcements/news articles
  - `events.json` - Academic and campus events
  - `departments.json` - Engineering departments (GSIL, Informatique, Mécatronique, Électronique)
  - `team.json` - Faculty and staff directory
  - `services.json` - Academic services and facilities
  - `homepage.json` - Home page content (hero, quick links, featured items)
  - `navigation.json` - Menu structure and links

- [ ] **2.2** Create TypeScript models/interfaces
  - NewsItem, Event, Department, Person, Service interfaces
  - Ensure type safety across components

- [ ] **2.3** Create data service (`DataService`)
  - Methods to fetch each JSON file
  - Error handling
  - Optional: implement simple caching

---

## Phase 3: Design System & Shared Components

### Tasks:
- [ ] **3.1** Design tokens & Tailwind configuration
  - Color palette (Apple-inspired: dark blues, grays, whites)
  - Typography scale (font families, sizes, weights)
  - Spacing system (consistent padding/margin)
  - Shadows and borders (macOS aesthetic)
  - Animation timings

- [ ] **3.2** Build Navbar component
  - Logo and branding
  - Responsive navigation menu (hamburger on mobile)
  - Search bar
  - Language toggle (French/Arabic/English)
  - Social media icons
  - Sticky/fixed header option

- [ ] **3.3** Build Footer component
  - Quick links (grouped by category)
  - Contact information
  - Social media links
  - Copyright and legal links
  - Newsletter subscription (optional)

- [ ] **3.4** Build reusable Card component
  - News card variant
  - Event card variant
  - Department card variant
  - Service card variant
  - Customizable with image, title, description, CTA button

- [ ] **3.5** Build other shared components
  - Button (primary, secondary, outline variants)
  - Badge (for dates, tags, categories)
  - Modal/Dialog (for larger content)
  - Skeleton loader (for loading states)
  - Section header (with underline animation)

- [ ] **3.6** Implement dark/light mode toggle
  - Theme provider service
  - LocalStorage persistence
  - Toggle component in navbar
  - CSS custom properties for theme colors

---

## Phase 4: Core Pages - Part 1

### Tasks:
- [ ] **4.1** Home Page (`home.component.ts`)
  - **Hero Section**
    - Full-width banner with background image/gradient
    - Main headline and subheadline
    - CTA buttons
    - Subtle scroll-down animation indicator
  
  - **News/Announcements Section**
    - 3-4 featured news cards from JSON
    - "View All News" link to news page
    - Hover animations and smooth transitions
  
  - **Quick Links Section**
    - Grid of department shortcuts
    - Event highlights
    - Service shortcuts
  
  - **Call-to-Action Section**
    - Admission/enrollment information
    - Contact form (light version)
    - Statistics (number of students, programs, etc.)

- [ ] **4.2** About Page (`about.component.ts`)
  - College mission, vision, values
  - History timeline
  - Quick facts and achievements
  - Leadership team (using team.json)
  - Campus tour highlight

- [ ] **4.3** Academics Page (`academics.component.ts`)
  - List of departments with descriptions
  - Degree programs overview
  - Engineering specializations
  - Quick filters/tabs by department

- [ ] **4.4** Departments Detail Pages
  - Individual page for each department (GSIL, Informatique, etc.)
  - Department-specific news and events
  - Faculty list
  - Course offerings
  - Research areas

---

## Phase 5: Core Pages - Part 2

### Tasks:
- [ ] **5.1** News Page (`news.component.ts`)
  - Grid or list of all news articles
  - Pagination or infinite scroll
  - Filter by category/date
  - Search functionality

- [ ] **5.2** Events Page (`events.component.ts`)
  - Upcoming events calendar (optional calendar component)
  - Event cards with dates, times, locations
  - Filter by event type
  - Event detail modal/page

- [ ] **5.3** Services Page (`services.component.ts`)
  - Grid of services offered
  - Service cards with descriptions
  - Icons and visual hierarchy
  - Quick access links

- [ ] **5.4** Contact Page (`contact.component.ts`)
  - Contact form (display-only, no submission)
  - Address, phone, email information
  - Map integration (optional: Google Maps)
  - Contact by department links

- [ ] **5.5** 404 Page (`not-found.component.ts`)
  - Custom error page with Apple-inspired design
  - Link back to home

---

## Phase 6: Animations & Interactions

### Tasks:
- [ ] **6.1** Implement AOS (Animate On Scroll)
  - Fade-in animations on page load
  - Slide animations as user scrolls
  - Stagger effects for multiple elements

- [ ] **6.2** Tailwind CSS animations
  - Hover effects on cards and buttons
  - Smooth transitions
  - Loading spinners
  - Gradient animations

- [ ] **6.3** Micro-interactions
  - Navbar menu animations
  - Button press feedback
  - Smooth page transitions (optional router animations)
  - Scroll-to-top button with smooth scroll

- [ ] **6.4** Theme transition animations
  - Smooth dark/light mode switching
  - No jarring color changes

---

## Phase 7: Performance & Optimization

### Tasks:
- [ ] **7.1** Image optimization
  - Lazy loading for images
  - Responsive image sizes (srcset)
  - WebP format with fallbacks

- [ ] **7.2** Code optimization
  - Tree-shaking unused CSS
  - Component lazy loading (route-based)
  - Change detection optimization (OnPush strategy)

- [ ] **7.3** Bundle size analysis
  - Audit with Lighthouse
  - Remove unused dependencies

---

## Phase 8: Testing & Quality Assurance

### Tasks:
- [ ] **8.1** Responsive design testing
  - Mobile (320px, 375px, 425px)
  - Tablet (768px, 1024px)
  - Desktop (1440px, 1920px)
  - Test on actual devices if possible

- [ ] **8.2** Browser compatibility
  - Chrome, Firefox, Safari, Edge
  - Mobile browsers (Safari iOS, Chrome Android)

- [ ] **8.3** Accessibility audit
  - Keyboard navigation
  - Screen reader testing
  - Color contrast checks
  - WCAG 2.1 AA compliance

- [ ] **8.4** Performance testing
  - Lighthouse audit
  - Core Web Vitals (LCP, FID, CLS)
  - Page load times

- [ ] **8.5** Cross-browser testing
  - Flexbox/Grid rendering
  - CSS custom properties support
  - JavaScript feature compatibility

---

## Phase 9: Deployment & Documentation

### Tasks:
- [ ] **9.1** Documentation
  - README with setup instructions
  - Component documentation
  - Data structure documentation
  - Deployment guide

- [ ] **9.2** Build optimization
  - Production build configuration
  - Environment variables setup

- [ ] **9.3** Deployment options
  - GitHub Pages
  - Netlify
  - Vercel
  - Firebase Hosting

---

## Design Inspiration: Apple/macOS

### Key Design Principles to Implement:
1. **Minimalism** - Clean, uncluttered layouts with plenty of whitespace
2. **Typography** - Bold, large headlines with excellent hierarchy
3. **Colors** - Subtle, professional palette (dark blues, light grays, white)
4. **Spacing** - Generous padding and margins for breathing room
5. **Shadows** - Subtle, refined shadows for depth (not bold)
6. **Icons** - Clean, simple iconography (Lucide icons)
7. **Animations** - Smooth, purposeful transitions (no excessive effects)
8. **Photography** - High-quality, professional imagery
9. **Components** - Rounded corners, clean borders
10. **Interaction** - Smooth hover states, clear feedback

### Color Palette (Proposed):
- **Primary**: Deep Navy Blue (#001F3F or #0D3B66)
- **Secondary**: Light Gray (#F5F5F5)
- **Accent**: Bright Blue (#0066CC or #0080FF)
- **Dark Mode**: Charcoal (#1A1A1A) and Light Gray (#E8E8E8)
- **Text**: Dark Gray (#333333) on light, Light Gray (#E8E8E8) on dark

---

## Content Strategy

### Static JSON Structure Example:
```json
{
  "homepage": {
    "hero": {
      "title": "Welcome to ENICarthage",
      "subtitle": "Excellence in Engineering Education",
      "backgroundImage": "/assets/images/hero-banner.jpg",
      "ctaButtons": [
        { "label": "Apply Now", "link": "/apply" },
        { "label": "Learn More", "link": "/about" }
      ]
    },
    "featuredNews": 3,
    "quickLinks": [...]
  }
}
```

---

## Success Criteria

- ✅ Mobile-first responsive design
- ✅ 90+ Lighthouse performance score
- ✅ Smooth animations without jarring transitions
- ✅ Accessibility compliance (WCAG 2.1 AA)
- ✅ Dark/light mode functionality
- ✅ All content from static JSON files
- ✅ Reusable component architecture
- ✅ Professional Apple/macOS design aesthetic
- ✅ Fast load times and smooth interactions

---

## Timeline Estimate

| Phase | Duration | Status |
|-------|----------|--------|
| 1. Setup | 1-2 hours | In Progress |
| 2. Data Layer | 1 hour | Not Started |
| 3. Design System | 2-3 hours | Not Started |
| 4. Core Pages 1 | 3-4 hours | Not Started |
| 5. Core Pages 2 | 3-4 hours | Not Started |
| 6. Animations | 2 hours | Not Started |
| 7. Optimization | 1-2 hours | Not Started |
| 8. Testing | 2-3 hours | Not Started |
| 9. Deployment | 1 hour | Not Started |
| **Total** | **16-20 hours** | |

---

## Notes for Discussion

1. **Content Source**: Should we fetch additional content from the original website or work with what's planned in the JSON structure?
2. **Additional Features**: Do you want a blog system, testimonials section, or alumni showcase?
3. **Forms**: Should contact/application forms actually submit anywhere, or just be UI mockups?
4. **Multi-language**: Priority for French/Arabic/English translations?
5. **Performance Budget**: Target for page load time?
6. **Analytics**: Should we include Google Analytics tracking?
7. **SEO**: Should we implement meta tags and structured data?

---

**Last Updated**: December 12, 2025
**Project Status**: Planning Phase
