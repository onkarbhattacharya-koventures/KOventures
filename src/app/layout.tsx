import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { cn } from '@/lib/utils';

const inter = localFont({
  src: './fonts/Inter-latin.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
  style: 'normal',
});

const outfit = localFont({
  src: './fonts/Outfit-latin.woff2',
  variable: '--font-outfit',
  display: 'swap',
  weight: '100 900',
  style: 'normal',
});

export const metadata: Metadata = {
  title: {
    default: 'KOVentures Hub',
    template: '%s | KOVentures Hub',
  },
  description: 'KOVentures LTD is a leader in renewable energy, precision calibration, and innovative future ventures.',
  keywords: ['Renewable Energy', 'Calibration', 'KOVentures', 'Innovation'],
  authors: [{ name: 'KOVentures' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn(
        'min-h-screen font-body antialiased text-foreground bg-background selection:bg-primary/10 selection:text-primary',
        inter.variable,
        outfit.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
