import Logo from '@/components/logo';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-headline text-xl font-bold text-white">
                KOVentures Hub
              </span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/#about-us" className="text-primary-foreground/60 hover:text-white transition-colors">About Us</Link>
              <Link href="/#contact" className="text-primary-foreground/60 hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="text-primary-foreground/60 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex gap-4">
            {/* <Link href="#" aria-label="Github" className="text-primary-foreground/80 hover:text-white transition-colors"><Github className="h-6 w-6" /></Link> */}
            {/* <Link href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></Link> */}
            <Link href="https://www.linkedin.com/company/koventures-ltd/" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="h-6 w-6" /></Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {currentYear} KOVentures LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
