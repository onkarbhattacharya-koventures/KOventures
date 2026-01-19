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
    <section
      id="ventures"
      className="strip py-20 md:py-32 bg-slate-900"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")'
      }}
    >
      <motion.div
        ref={ref}
        className="container mx-auto px-4 z-10 relative"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-block rounded-full bg-primary/20 px-4 py-1.5 backdrop-blur-sm border border-primary/30 mb-6">
            <span className="text-sm font-medium text-primary-foreground uppercase tracking-widest">Innovation Labs</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">
            Future Ventures
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-300 font-light leading-relaxed">
            Pushing boundaries with intelligent systems and next-generation technology.
          </p>
        </motion.div>
        <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {ventures.map((venture, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="glass-card border-none rounded-xl overflow-hidden">
                  <AccordionTrigger className="font-headline text-lg hover:no-underline px-6 py-5 text-left text-white data-[state=open]:text-primary-foreground transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <venture.icon className="h-6 w-6 text-primary-foreground/90" />
                      </div>
                      {venture.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-300 px-6 pb-6 pt-0 ml-[4.5rem]">
                    {venture.content}
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
