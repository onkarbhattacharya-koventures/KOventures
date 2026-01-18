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
      <div className="absolute inset-0 bg-primary/60" />
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center text-primary-foreground"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl drop-shadow-md"
          variants={itemVariants}
        >
          Powering a Sustainable Future
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-lg md:text-xl drop-shadow-sm"
          variants={itemVariants}
        >
          KOVentures LTD is your partner in innovative energy solutions, precision engineering, and pioneering new ventures for a better tomorrow.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <Button size="lg" asChild>
            <Link href="#renewable-energy">Explore Our Solutions</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
