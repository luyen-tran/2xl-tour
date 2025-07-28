import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import '../styles/theme.scss';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: '2XL Tour - Professional Tour Booking Platform Vietnam',
  description:
    'Book amazing tours in Vietnam with 2XL Tour. Professional booking platform for guided tours, travel packages, and personalized travel experiences.',
  keywords: [
    'tour booking Vietnam',
    'travel packages',
    'guided tours',
    'Vietnam tours',
    '2XL Tour',
  ],

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },

  // Open Graph
  openGraph: {
    title: '2XL Tour - Book Amazing Tours in Vietnam',
    description:
      'Professional tour booking platform for Vietnam travel experiences',
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: '2XL Tour',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '2XL Tour - Vietnam Tour Booking Platform',
      },
    ],
  },

  alternates: {
    canonical: '/',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: '2XL Tour - Vietnam Tour Booking',
    description: 'Book amazing tours in Vietnam with our professional platform',
    images: ['/og-image.jpg'],
  },

  // Additional metadata
  authors: [{ name: '2XL Tour Team' }],
  creator: '2XL Tour',
  publisher: '2XL Tour',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Technical SEO
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Vercel Analytics */}
        <Analytics />

        {/* Vercel Speed Insights */}
        <SpeedInsights />

        {/* Content */}
        {children}
      </body>
    </html>
  );
}
