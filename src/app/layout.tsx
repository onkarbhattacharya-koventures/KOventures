import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'KOVentures Hub',
    template: '%s | KOVentures Hub',
  },
  description: 'KOVentures LTD is a leader in renewable energy, precision calibration, and innovative future ventures.',
  keywords: ['Renewable Energy', 'Calibration', 'KOVentures', 'Innovation'],
  authors: [{ name: 'KOVentures' }],
  viewport: 'width=device-width, initial-scale=1',
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
