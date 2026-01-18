import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Lightbulb, Rocket, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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
  return (
    <section id="ventures" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Our Upcoming Ventures
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            At KOVentures, we are constantly exploring new frontiers to drive innovation and create value.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {ventures.map((venture, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-card border rounded-lg shadow-sm">
                <AccordionTrigger className="font-headline text-lg hover:no-underline px-6 py-4">
                  <div className="flex items-center gap-4">
                    <venture.icon className="h-6 w-6 text-accent" />
                    {venture.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70 px-6 pb-4">
                  <div className="pl-10">
                    {venture.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
