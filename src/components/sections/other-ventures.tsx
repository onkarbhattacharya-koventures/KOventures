'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Lightbulb, Rocket, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ventures: { title: string, content: string, icon: LucideIcon }[] = [
    {
        title: "Smart Grid Technology",
        content: "Developing intelligent systems for efficient energy distribution, minimizing waste and maximizing reliability for urban and rural areas.",
        icon: Lightbulb
    },
    {
        title: "Agri-Tech Innovations",
        content: "Pioneering technology in agriculture to increase yields, conserve resources, and promote sustainable farming practices through automation and data analytics.",
        icon: Rocket
    },
    {
        title: "AI-driven Process Automation",
        content: "Implementing artificial intelligence to streamline complex industrial processes, enhancing productivity and safety in manufacturing and logistics.",
        icon: Bot
    }
];

export default function OtherVentures() {
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
    <section id="ventures" className="py-16 md:py-24 bg-background">
      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Our Upcoming Ventures
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            At KOVentures, we are constantly exploring new frontiers to drive innovation and create value.
          </p>
        </motion.div>
        <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {ventures.map((venture, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="bg-card border rounded-lg shadow-sm">
                  <AccordionTrigger className="font-headline text-lg hover:no-underline px-6 py-4 text-left">
                    <div className="flex items-center gap-4">
                      <venture.icon className="h-6 w-6 text-accent flex-shrink-0" />
                      {venture.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/70 px-6 pb-4">
                    <div className="pl-10">
                      {venture.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
