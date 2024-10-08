import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/reset.scss';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pulse.crm',
  description: 'This is a test task for WiseVision.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
