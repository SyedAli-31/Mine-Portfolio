'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/skills';
import About from '@/components/sections/about';
import Contact from '@/components/sections/Contact';
import BlogSection from '@/components/sections/Blog';
import Projects from '@/components/sections/Projects';
 


const Page = () => {
  // Smooth scrolling for in-page links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');

      if (anchorElement) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href');
        if (targetId === '/') return;

        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col bg-background text-foreground"
    >
      <main className="flex-grow">
       

        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <BlogSection/>
         <Contact/>
        
      </main>
    </motion.div>
  );
};

export default Page;
