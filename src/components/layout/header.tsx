'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#renewable-energy', label: 'Renewable Energy' },
  { href: '#calibration', label: 'Calibration' },
  { href: '#ventures', label: 'Other Ventures' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled || isMenuOpen ? 'bg-background/80 shadow-md backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Logo width={40} height={40} />
          <span className="font-headline text-xl font-bold tracking-tight text-foreground">
            KOVentures
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="secondary" size="sm" className="rounded-full font-bold">
            <a href="https://koenergy.koventures.co.uk" target="_blank" rel="noopener noreferrer">
              KO Energy
            </a>
          </Button>
        </nav>
        <div className="hidden md:block">
          <Button asChild className="rounded-full px-6">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Slide-out Menu */}
            <motion.div
              id="mobile-menu"
              className="fixed right-0 top-0 z-50 h-full w-[80%] max-w-sm bg-background/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block text-2xl font-headline font-bold text-foreground transition-colors hover:text-primary"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                  >
                    <Button asChild variant="secondary" className="w-full rounded-full text-lg h-12 font-bold">
                      <a href="https://koenergy.koventures.co.uk" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                        KO Energy
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + 1) * 0.1 + 0.1 }}
                    className="mt-4"
                  >
                    <Button asChild className="w-full rounded-full text-lg h-12">
                      <Link href="#contact" onClick={closeMenu}>Contact Us</Link>
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
