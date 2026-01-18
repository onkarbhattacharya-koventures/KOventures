'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Calibration() {
  const calibrationImage = PlaceHolderImages.find(p => p.id === 'calibration-bench');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = (fromLeft = true) => ({
    hidden: { x: fromLeft ? -50 : 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  });

  const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    }
  }

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4
        }
    }
  }


  return (
    <section id="calibration" className="py-16 md:py-24 bg-card">
      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 md:order-1" variants={itemVariants(true)}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Precision Calibration Benches
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Beyond energy, we engineer state-of-the-art calibration benches for industries where precision is paramount.
            </p>
            <motion.ul className="mt-6 space-y-4" variants={listVariants}>
              <motion.li className="flex items-start" variants={listItemVariants}>
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Temperature Calibration:</strong> Highly accurate and stable temperature sources for sensor calibration.
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={listItemVariants}>
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Pressure Calibration:</strong> Robust solutions for calibrating pressure gauges, transmitters, and switches.
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={listItemVariants}>
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Custom Solutions:</strong> Benches designed and built to your specific requirements and standards.
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className="order-1 md:order-2" variants={itemVariants(false)}>
            {calibrationImage && (
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5}}
                >
                    <Image
                    src={calibrationImage.imageUrl}
                    alt={calibrationImage.description}
                    width={600}
                    height={450}
                    className="object-cover w-full h-auto"
                    data-ai-hint={calibrationImage.imageHint}
                    />
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
