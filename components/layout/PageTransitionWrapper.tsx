'use client';

import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation'; // Keep commented out unless needed for key

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  // const pathname = usePathname(); // Uncomment if using pathname for key

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={children?.toString()} // Simple key based on children, consider usePathname later if needed
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}