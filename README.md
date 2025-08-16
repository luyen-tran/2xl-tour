# 2XL Tour

A modern tour booking application built with Next.js 15, featuring tour management, booking system, and comprehensive data management.

[🇻🇳 Tiếng Việt](./README.vi.md)

## 🚀 Tech Stack

### Frontend & Framework

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **SCSS** - CSS preprocessor with CSS Modules
- **React 19** - Latest React features

### Data Management

- **Supabase** - Backend as a Service for database and authentication
- **Jotai** - Atomic state management
- **Dexie** - Client-side caching with IndexedDB
- **Zod** - Runtime type validation

### Development Tools

- **Prettier** - Code formatter
- **ESLint** - Code linting
- **Storybook** - Component development environment
- **Vitest** - Testing framework
- **Testing Library** - React testing utilities
- **Husky** - Git hooks
- **lint-staged** - Pre-commit code quality checks

### Analytics & Monitoring

- **Vercel Analytics** - Web analytics and performance monitoring
- **Vercel Speed Insights** - Real user monitoring for Core Web Vitals

## 🛠️ Installation

```bash
# Clone repository
git clone <repository-url>
cd 2xl-tour

# Install dependencies
npm install
```

## ⚙️ Environment Setup

Create a `.env.local` file for local development:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🏃‍♂️ Running the Project

### Development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

## 🎯 Features

### Tour Management System

- **Tour Listing**: Browse tours with filtering and pagination
- **Tour Details**: Comprehensive tour information with images and reviews
- **Search & Filter**: Filter by location, category, price range, and rating
- **Responsive Design**: Optimized for all device sizes

### Data Management

- **API Routes**: RESTful API endpoints for tour operations
- **Client-side Caching**: Efficient data caching with Dexie
- **State Management**: Global state with Jotai atoms
- **Type Safety**: Full TypeScript coverage with Zod validation

### Development Features

- **Mock Data**: Comprehensive test data for development
- **Error Handling**: Robust error handling and validation
- **Performance**: Optimized with caching and lazy loading

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

## 🎨 Code Quality

```bash
# Format code with Prettier
npm run format

# Check format
npm run format:check

# Lint code
npm run lint

# Fix lint issues
npm run lint:fix
```

## 📦 Build

```bash
# Build Next.js app
npm run build

# Build Storybook
npm run build-storybook
```

## 🔧 Git Hooks

The project uses Husky to run automated hooks:

- **pre-commit**: Run lint-staged to format and lint code before commit
- **pre-commit**: Run tests to ensure code doesn't break

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/             # API routes
│   │   └── tours/       # Tour API endpoints
│   │       ├── route.ts         # Tours listing API
│   │       └── [id]/route.ts    # Tour detail API
│   ├── layout.tsx       # Root layout with SEO metadata
│   └── page.tsx         # Home page
├── components/          # React components
│   └── theme-toggle/    # Theme toggle component
│       ├── ThemeToggle.tsx           # Component implementation
│       ├── ThemeToggle.module.scss   # Component styles
│       ├── ThemeToggle.test.tsx      # Component tests
│       └── ThemeToggle.stories.tsx   # Storybook stories
├── hooks/               # Custom React hooks
│   ├── useTheme.ts      # Theme management hook
│   ├── useTours.ts      # Tours data fetching hook
│   └── useTour.ts       # Single tour data fetching hook
├── lib/                 # Utility libraries
│   ├── supabase.ts      # Supabase client configuration
│   ├── cache.ts         # Client-side caching with Dexie
│   └── test-data.ts     # Mock data for development
├── store/               # State management
│   └── tours.ts         # Jotai atoms for tour state
├── types/               # TypeScript type definitions
│   └── tour.ts          # Tour-related types and interfaces
└── styles/              # Global SCSS files
    ├── index.scss       # Main styles entry
    ├── theme.scss       # Theme variables
    └── mixins.scss      # SCSS mixins

public/                  # Static assets
├── favicon.ico          # Main favicon (2XL Tour logo)
├── favicon-16x16.png    # 16x16 favicon
├── favicon-32x32.png    # 32x32 favicon
├── apple-touch-icon.png # iOS home screen icon
└── og-image.jpg         # Open Graph image for social sharing

test/                    # Test setup files (root level)
└── setup.ts             # Vitest setup configuration
```

## 🎯 Component Development

1. Create component folder in `src/components/[component-name]/`
2. Create component file: `ComponentName.tsx`
3. Create SCSS module file: `ComponentName.module.scss`
4. Write tests: `ComponentName.test.tsx`
5. Create Storybook story: `ComponentName.stories.tsx`
6. Run `npm run storybook` to view component in isolation

## 🎨 SCSS & Styling

The project uses SCSS with CSS Modules for styling:

- **Global styles**: `src/styles/theme.scss`
- **Theme variables**: `src/styles/theme.scss`
- **Mixins**: `src/styles/mixins.scss` (flex, grid, typography, media queries, etc.)
- **Component styles**: `src/components/ComponentName.module.scss`
- **CSS Modules**: Automatically scope CSS classes to avoid conflicts
- **Modern SCSS**: Uses `@use` instead of `@import` (deprecated)

## 🔍 SEO & Metadata

The project includes comprehensive SEO optimization:

- **Complete metadata**: Title, description, keywords optimized for tour booking
- **Open Graph**: Full OG tags for social media sharing with custom image
- **Twitter Cards**: Optimized for Twitter sharing with large image cards
- **Favicon system**: Multiple icon sizes for different devices and contexts
- **Structured data ready**: Prepared for JSON-LD implementation
- **Performance monitoring**: Vercel Analytics and Speed Insights integrated

## 🔌 API Endpoints

### Tours API

#### GET `/api/tours`

Retrieve tours with filtering and pagination.

**Query Parameters:**

- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20, max: 50)
- `location` (string): Filter by location
- `category` (string): Filter by category
- `minPrice` (number): Minimum price filter
- `maxPrice` (number): Maximum price filter

**Response:**

```json
{
  "tours": Tour[],
  "total": number,
  "page": number,
  "totalPages": number
}
```

#### GET `/api/tours/[id]`

Retrieve a specific tour by ID.

**Response:**

```json
{
  "tour": TourDetail
}
```

## 📚 Documentation

### Framework & Core

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Data & State Management

- [Supabase Documentation](https://supabase.com/docs)
- [Jotai Documentation](https://jotai.org/)
- [Dexie Documentation](https://dexie.org/)
- [Zod Documentation](https://zod.dev/)

### Development Tools

- [Storybook Documentation](https://storybook.js.org/docs)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/)
- [SCSS Documentation](https://sass-lang.com/documentation)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and add tests
4. Run tests: `npm run test`
5. Run linting: `npm run lint`
6. Commit your changes: `git commit -m 'feat: add some feature'`
7. Push to the branch: `git push origin feature/your-feature-name`
8. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
