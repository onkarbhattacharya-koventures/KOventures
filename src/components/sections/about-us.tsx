'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const founders = [
  {
    name: 'Onkar Bhattacharya',
    title: 'Director and CEO',
    description: 'A visionary architect of the digital realm and a pioneer in the fusion of artificial intelligence and sustainable energy. With deep-rooted expertise in large-scale industrial systems, he is dedicated to weaving a greener future through technological mastery and entrepreneurial spirit.',
    image: '/founder1.png', // Placeholder image path
  },
  {
    name: 'Dr. Harkeerat Maan',
    title: 'Director and COO',
    description: 'A guardian of both the health and the planet, Dr. Maan seamlessly blends his clinical wisdom as a Doctor with a fierce devotion to environmental stewardship. A healer and an entrepreneur, he is driven by a profound mission to nurture a world that is as healthy as it is sustainable.',
    image: '/founder2.png', // Placeholder image path
  },
];

export default function FoundersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="founders-section reveal py-20" aria-labelledby="founders-heading">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 id="founders-heading" className="text-4xl font-headline text-center mb-12 text-primary">
          Meet Our Founders
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <Image src={founder.image} alt={founder.name} width={80} height={80} className="rounded-full" />
                  </div>
                  <CardTitle className="font-headline pt-4">{founder.name}</CardTitle>
                  <p className="text-foreground/70">{founder.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{founder.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
