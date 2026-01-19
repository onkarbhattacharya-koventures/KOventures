'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center -mt-20">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-background/90" />
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20"
        >
          <span className="text-sm font-medium text-primary-foreground/90 uppercase tracking-wider">The Future of Engineering</span>
        </motion.div>

        <motion.h1
          className="font-headline text-5xl font-bold md:text-7xl lg:text-8xl tracking-tight leading-tight drop-shadow-lg"
          variants={itemVariants}
        >
          Powering a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Sustainable Future</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-100/90 leading-relaxed font-light"
          variants={itemVariants}
        >
          KOVentures LTD pioneers innovative energy solutions, precision engineering, and future-forward ventures.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <Button size="lg" className="rounded-full px-8 text-lg h-12" asChild>
            <Link href="#renewable-energy">Explore Solutions</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12 bg-white/5 border-white/30 text-white hover:bg-white/20 hover:text-white" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
