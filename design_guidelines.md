# Ganpati Enterprises Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from professional service providers and B2B product showcase sites, combining the clean professionalism of solar installer websites with the trust-building elements of local service businesses.

## Core Design Principles
1. **Trust & Credibility**: Establish professional presence through clean layouts, proper spacing, and quality imagery
2. **Product Clarity**: Clear categorization of six product/service lines with equal visual weight
3. **Local Business Warmth**: Balance technical professionalism with approachable, friendly presentation
4. **Action-Oriented**: Multiple clear pathways to quote requests and contact

---

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight
- Body: 400 weight
- Accents: 500 weight

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl
- Section Headings: text-3xl md:text-4xl
- Card Titles: text-xl md:text-2xl
- Body Text: text-base md:text-lg
- Small Print: text-sm

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4, p-6, p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Grid gaps: gap-6, gap-8
- Inner margins: mx-4, mx-6

**Container Strategy**:
- Maximum width: max-w-7xl
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl

**Grid Patterns**:
- Product cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature highlights: grid-cols-1 lg:grid-cols-2
- Mobile: Always single column with full spacing

---

## Page Structure & Sections

### 1. Hero Section (80vh)
- Full-width premium hero image showing solar installation or electrical equipment
- Ganpati Enterprises logo prominently placed (top-left or centered)
- Compelling headline: "Powering Lucknow's Future" or "Your Trusted Energy & Security Partner"
- Subheadline highlighting key offerings
- Two CTAs: "Get Free Quote" (primary) + "View Products" (secondary)
- Trust indicator badge: "Authorized Dealer | GSTIN: 09BANPS9378H1Z0"
- Buttons with backdrop-blur-md background

### 2. Quick Services Overview
- 2-column grid on desktop showing service categories with icons
- Each service card: Icon + Title + 2-line description + "Learn More" link
- Six cards total: Inverters, Batteries, CCTV, Fire Alarms, Solar Panels, Insurance

### 3. Featured Products/Solutions
- Highlight 2-3 key solutions (Solar Panels, CCTV Security, Battery Backup)
- Alternating image-text layout (image left, then image right)
- Each with: Large product image, detailed description, key features list, "Request Quote" CTA

### 4. Why Choose Ganpati Enterprises
- 3-4 column grid with trust-building elements:
  - "15+ Years Experience" (or actual years)
  - "Authorized Dealer"
  - "Professional Installation"
  - "Post-Sales Support"
- Icon + Stat/Title + Brief description

### 5. Contact/Quote Request Section
- Split 2-column layout (desktop): 
  - Left: Quote request form (Name, Phone, Email, Service Interest, Message)
  - Right: Contact details, business hours, location map placeholder
- Mobile: Stacked vertically
- Prominent display of phone numbers and email
- WhatsApp contact option

### 6. Footer
- 3-column layout (desktop):
  - Company info + logo
  - Quick links (Products, Services, Contact)
  - Contact details + social links
- Bottom bar: Copyright, GSTIN, "Deals in: Inverter, Battery, UPS, CCTV Camera Security, Fire Alarm, Solar Energy"

---

## Component Library

### Navigation
- Sticky header with backdrop blur
- Logo left, navigation center/right
- Menu items: Home, Products, Services, About, Contact
- Mobile: Hamburger menu
- Contact phone number visible on desktop

### Buttons
- Primary: Solid with rounded-lg, px-8 py-3
- Secondary: Outline variant
- Hover states: Subtle scale and shadow
- On images: backdrop-blur-md with semi-transparent background

### Product Cards
- Consistent height, rounded-xl borders
- Image at top (aspect-ratio-square or 4:3)
- Content padding p-6
- Title + brief description + "Learn More" link/button
- Subtle shadow with hover lift effect

### Form Elements
- Rounded-lg inputs with border
- Focused state: ring effect
- Proper spacing between fields (space-y-4)
- Large touch targets (h-12 minimum)

---

## Images

**Required Images**:
1. **Hero Background**: High-quality image of solar panel installation on rooftop or modern electrical setup (1920x1080 min)
2. **Solar Panels Section**: Professional installation photo
3. **CCTV Section**: Security camera system in action
4. **Battery/Inverter Section**: Clean product shots or installation
5. **Logo**: Ganpati Enterprises logo (extract from PDF, SVG format preferred)

**Image Treatment**:
- Hero: Slight dark overlay (opacity-50) for text contrast
- Product images: Clean white or subtle gradient backgrounds
- Rounded corners: rounded-lg for consistency
- Optimized loading with proper aspect ratios

---

## Animations
**Minimal & Purposeful**:
- Fade-in on scroll for sections (opacity transition)
- Subtle hover effects on cards (transform scale-105)
- Smooth page scroll behavior
- NO distracting continuous animations

---

## Accessibility
- Proper heading hierarchy (h1 → h6)
- Sufficient contrast ratios throughout
- Form labels properly associated
- Focus indicators on interactive elements
- Alt text for all images
- Keyboard navigation support

---

## Mobile Optimization
- Touch-friendly buttons (min 44px height)
- Readable text without zoom (16px minimum)
- Proper spacing for fat-finger taps
- Hamburger menu with smooth slide transition
- Click-to-call phone numbers
- Optimized images for mobile bandwidth