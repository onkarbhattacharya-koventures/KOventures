'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Tractor, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const energySectors: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Residential',
    description: 'Empowering homes with clean, reliable solar energy systems and reducing electricity costs for families.',
    icon: Home,
  },
  {
    title: 'Agricultural',
    description: 'Boosting farm productivity and sustainability with tailored energy solutions for irrigation and operations.',
    icon: Tractor,
  },
  {
    title: 'Commercial',
    description: 'Helping businesses achieve energy independence and operational efficiency with large-scale solar and wind power.',
    icon: Building2,
  },
];

export default function RenewableEnergy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="renewable-energy" className="py-16 md:py-24 bg-background">
      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Clean Energy Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We provide comprehensive renewable energy generation for diverse sectors, ensuring sustainability and efficiency.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {energySectors.map((sector) => (
            <motion.div key={sector.title} variants={itemVariants}>
              <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <sector.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline pt-4">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{sector.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
