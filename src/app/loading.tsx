'use client';

import { motion } from 'framer-motion';
import Logo from '@/components/logo';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Logo width={80} height={80} />
      </motion.div>
      <motion.p
        className="mt-4 text-primary font-headline font-semibold tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        LOADING KOVENTURES
      </motion.p>
    </div>
  );
}
