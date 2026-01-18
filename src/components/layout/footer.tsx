import Logo from '@/components/logo';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-headline text-xl font-bold text-primary">
              KOVentures Hub
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Github" className="text-foreground/60 hover:text-primary"><Github className="h-6 w-6" /></Link>
            <Link href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary"><Twitter className="h-6 w-6" /></Link>
            <Link href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-foreground/60 text-sm">
          <p>&copy; {currentYear} KOVentures LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
