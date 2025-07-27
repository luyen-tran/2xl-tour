import type { Metadata } from 'next';
import '../styles/theme.scss';

export const metadata: Metadata = {
  title: '2XL Tour',
  description: '2XL Tour',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
