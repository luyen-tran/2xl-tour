# 2XL Tour

Dự án Next.js 15 được setup với TypeScript, Prettier, Storybook, Husky và Vitest.

[🇺🇸 English](./README.md)

## 🚀 Công nghệ sử dụng

- **Next.js 15** - React framework với App Router
- **TypeScript** - Type safety
- **SCSS** - CSS preprocessor với CSS Modules
- **Prettier** - Code formatter
- **ESLint** - Code linting
- **Storybook** - Component development environment
- **Vitest** - Testing framework
- **Testing Library** - React testing utilities
- **Husky** - Git hooks
- **lint-staged** - Pre-commit code quality checks
- **Vercel Analytics** - Web analytics và performance monitoring
- **Vercel Speed Insights** - Real user monitoring cho Core Web Vitals

## 🛠️ Cài đặt

```bash
# Clone repository
git clone <repository-url>
cd 2xl-tour

# Cài đặt dependencies
npm install
```

## 🏃‍♂️ Chạy dự án

### Development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Storybook

```bash
npm run storybook
```

Mở [http://localhost:6006](http://localhost:6006) để xem Storybook.

## 🧪 Testing

```bash
# Chạy tests
npm run test

# Chạy tests với UI
npm run test:ui

# Chạy tests một lần
npm run test:run

# Chạy tests với coverage
npm run test:coverage
```

## 🎨 Code Quality

```bash
# Format code với Prettier
npm run format

# Kiểm tra format
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

Dự án sử dụng Husky để chạy các hooks tự động:

- **pre-commit**: Chạy lint-staged để format và lint code trước khi commit
- **pre-commit**: Chạy tests để đảm bảo code không bị lỗi

## 📁 Cấu trúc thư mục

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout với SEO metadata
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
├── favicon.ico          # Favicon chính (logo 2XL Tour)
├── favicon-16x16.png    # Favicon 16x16
├── favicon-32x32.png    # Favicon 32x32
├── apple-touch-icon.png # Icon cho iOS home screen
└── og-image.jpg         # Open Graph image cho social sharing

test/                    # Test setup files (root level)
└── setup.ts             # Vitest setup configuration
```

## 🎯 Component Development

1. Tạo thư mục component trong `src/components/[component-name]/`
2. Tạo component file: `ComponentName.tsx`
3. Tạo SCSS module file: `ComponentName.module.scss`
4. Viết tests: `ComponentName.test.tsx`
5. Tạo Storybook story: `ComponentName.stories.tsx`
6. Chạy `npm run storybook` để xem component trong isolation

## 🎨 SCSS & Styling

Dự án sử dụng SCSS với CSS Modules để styling:

- **Global styles**: `src/styles/theme.scss`
- **Theme variables**: `src/styles/theme.scss`
- **Mixins**: `src/styles/mixins.scss` (flex, grid, typography, media queries, etc.)
- **Component styles**: `src/components/ComponentName.module.scss`
- **CSS Modules**: Tự động scope CSS classes để tránh conflicts
- **Modern SCSS**: Sử dụng `@use` thay vì `@import` (deprecated)

## 🔍 SEO & Metadata

Dự án bao gồm tối ưu SEO toàn diện:

- **Metadata đầy đủ**: Title, description, keywords được tối ưu cho booking tour
- **Open Graph**: Đầy đủ OG tags cho social media sharing với custom image
- **Twitter Cards**: Tối ưu cho Twitter sharing với large image cards
- **Hệ thống favicon**: Nhiều kích thước icon cho các thiết bị và ngữ cảnh khác nhau
- **Structured data sẵn sàng**: Chuẩn bị cho JSON-LD implementation
- **Performance monitoring**: Tích hợp Vercel Analytics và Speed Insights

### Environment Variables

Tạo file `.env.local` cho development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Cho production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/)
- [SCSS Documentation](https://sass-lang.com/documentation)
