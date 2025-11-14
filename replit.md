# Ganpati Enterprises Website

## Overview

Ganpati Enterprises is a business-to-business (B2B) and business-to-consumer (B2C) website for a local energy and security solutions provider based in Lucknow, India. The company offers six core product/service lines: Inverters & UPS, Batteries, CCTV Security Systems, Fire Alarm Systems, Solar Panels, and Insurance Services. The website serves as a digital storefront with a primary focus on lead generation through quote request forms, presenting a professional yet approachable local business presence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React with TypeScript**: Component-based UI using functional components with TypeScript for type safety
- **Vite**: Modern build tool providing fast development server with HMR (Hot Module Replacement)
- **Wouter**: Lightweight client-side routing library (chosen over React Router for simplicity)
- **Single Page Application (SPA)**: All navigation handled client-side with a single `/` route serving the home page

**UI Component System**
- **Shadcn/ui**: Accessible, customizable component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling with custom design tokens
- **Design System**: Professional B2B aesthetic inspired by service provider and solar installer websites, emphasizing trust, clarity, and approachability
- **Typography**: Inter font family from Google Fonts with defined type scale (5xl-7xl for heroes, 3xl-4xl for sections)
- **Layout**: Responsive grid system with mobile-first approach, max-width containers (7xl for main, 6xl for content, 4xl for text)

**State Management**
- **TanStack Query (React Query)**: Server state management for API calls with caching and invalidation
- **Local Component State**: React hooks (useState, useEffect) for UI-specific state
- **Form State**: React Hook Form with Zod validation for form management

**Design Philosophy**
- **Reference-Based Design**: Drawing inspiration from professional service providers and B2B product showcase sites
- **Core Principles**: Trust & credibility through clean layouts, equal visual weight for six product lines, balance of technical professionalism with local business warmth, multiple clear calls-to-action for quote requests

### Backend Architecture

**Server Framework**
- **Express.js**: Minimal Node.js web framework handling API routes and static file serving
- **TypeScript**: Type-safe server-side code using ESM (ES Modules)
- **Development Mode**: Vite middleware integration for HMR during development
- **Production Mode**: Pre-built static assets served from `/dist/public`

**API Design**
- **RESTful Endpoints**: Simple REST API with JSON request/response format
- **Routes**:
  - `POST /api/quote-requests`: Create new quote request
  - `GET /api/quote-requests`: Retrieve all quote requests (admin/internal use)
- **Validation**: Zod schema validation on incoming requests with user-friendly error messages (using zod-validation-error)
- **Error Handling**: Centralized error responses with appropriate HTTP status codes

**Storage Strategy**
- **Current Implementation**: In-memory storage using Map data structure (MemStorage class)
- **Interface-Based Design**: IStorage interface allows for future database implementation without changing business logic
- **Data Model**: Quote requests contain: name, phone, email (optional), service selection, message (optional), auto-generated ID, and timestamp
- **Rationale**: In-memory storage provides simplicity for MVP/demonstration; interface pattern ensures easy migration to PostgreSQL when needed

### Data Storage Solutions

**Database Schema (Prepared for PostgreSQL)**
- **ORM**: Drizzle ORM with schema definition in TypeScript
- **Schema Definition**: `quoteRequests` table with fields: id (varchar PK with UUID), name (text), phone (text), email (nullable text), service (text), message (nullable text), createdAt (timestamp)
- **Validation**: Drizzle-zod integration for automatic schema-to-validation conversion
- **Migration Strategy**: Drizzle Kit configured for PostgreSQL migrations (output to `/migrations` directory)
- **Current State**: Schema defined but not actively used; in-memory storage currently active

**Design Decision Rationale**
- **Problem**: Need to capture and store lead information from quote requests
- **Solution**: Dual approach with in-memory storage for immediate functionality and Drizzle schema for future database integration
- **Alternatives Considered**: Direct PostgreSQL implementation, but in-memory chosen for faster initial development and deployment
- **Pros**: Simple development, no database setup required, easy testing, seamless migration path via IStorage interface
- **Cons**: Data lost on server restart, not suitable for production at scale, no data persistence

### External Dependencies

**Database Services**
- **Neon Serverless PostgreSQL** (`@neondatabase/serverless`): Prepared for serverless PostgreSQL database integration
- **Connection Management**: connect-pg-simple for session storage (configured but not actively used)
- **Environment Variable**: `DATABASE_URL` required when database is activated

**UI Component Libraries**
- **Radix UI**: Comprehensive set of accessible, unstyled component primitives (@radix-ui/react-*)
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, Form controls, Navigation Menu, Popover, Select, Tabs, Toast notifications, Tooltip
- **Embla Carousel** (`embla-carousel-react`): Touch-friendly carousel component
- **CMDK** (`cmdk`): Command menu interface component
- **Lucide React**: Icon library for consistent iconography
- **React Icons** (`react-icons`): Additional icon sets (specifically SiWhatsapp, SiFacebook, SiInstagram)

**Styling & Design**
- **Tailwind CSS**: Core styling framework with PostCSS processing
- **Class Variance Authority** (`class-variance-authority`): Type-safe component variant management
- **clsx & tailwind-merge**: Utility libraries for conditional className composition
- **Design Tokens**: Custom CSS variables for colors, shadows, and spacing defined in `index.css`

**Form Management**
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Bridge between React Hook Form and Zod validation
- **zod-validation-error**: User-friendly error message formatting

**Development Tools**
- **Vite Plugins**:
  - `@vitejs/plugin-react`: React Fast Refresh support
  - `@replit/vite-plugin-runtime-error-modal`: Development error overlay
  - `@replit/vite-plugin-cartographer`: Replit-specific development features
  - `@replit/vite-plugin-dev-banner`: Development environment banner
- **TypeScript**: Type checking across entire codebase
- **ESBuild**: Fast bundling for production server build

**Utility Libraries**
- **date-fns**: Date manipulation and formatting
- **nanoid**: Secure unique ID generation
- **@jridgewell/trace-mapping**: Source map support for debugging

**Asset Management**
- **Generated Images**: Located in `attached_assets/generated_images/` directory
- **Logo**: Ganpati Enterprises logo design
- **Product Images**: Solar panels, CCTV cameras, inverter battery systems
- **Hero Background**: Energy infrastructure imagery