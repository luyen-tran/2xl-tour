# 2XL Tour

A Next.js 15 project setup with TypeScript, Prettier, Storybook, Husky, and Vitest.

[🇻🇳 Tiếng Việt](./README.vi.md)

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **SCSS** - CSS preprocessor with CSS Modules
- **Prettier** - Code formatter
- **ESLint** - Code linting
- **Storybook** - Component development environment
- **Vitest** - Testing framework
- **Testing Library** - React testing utilities
- **Husky** - Git hooks
- **lint-staged** - Pre-commit code quality checks
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
│   ├── layout.tsx       # Root layout with SEO metadata
│   └── page.tsx         # Home page
├── components/          # React components
│   └── theme-toggle/    # Theme toggle component
│       ├── ThemeToggle.tsx           # Component implementation
│       ├── ThemeToggle.module.scss   # Component styles
│       ├── ThemeToggle.test.tsx      # Component tests
│       └── ThemeToggle.stories.tsx   # Storybook stories
├── hooks/               # Custom React hooks
│   └── useTheme.ts      # Theme management hook
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

### Environment Variables

Create a `.env.local` file for local development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/)
- [SCSS Documentation](https://sass-lang.com/documentation)
