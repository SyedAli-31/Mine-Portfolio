'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Facebook, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const handleScrollToProjects = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-6xl font-bold mb-6 md:mt-0 mt-2">
              Hi, I&apos;m <br /> <span className="text-[#3B82F6]">Syed Ali Hussaini</span>
              <br />
              <span className="text-[#F59E0B]">Frontend</span> Developer
            </h1>
            <p className="text-xl text-[#E2E8F0]/80 mb-8 leading-relaxed">
              I create exceptional digital experiences that combine beautiful design with powerful functionality.
              Specialized in React, Node.js, and modern web technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-all transform hover:scale-105"
                onClick={handleScrollToProjects}
              >
                View My Work
              </Button>
              <Link
                href="/SyedAli_Resume.pdf"
                download
                className="border-2 border-[#3B82F6] text-[#3B82F6] px-4 py-2 rounded-lg font-semibold hover:bg-[#3B82F6] hover:text-white transition-all text-center inline-block"
              >
                Download Resume
              </Link>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8">
              <Link href="https://github.com/SyedAli-31?tab=repositories" passHref target="_blank">
                <Github className="text-2xl text-[#E2E8F0] hover:text-[#3B82F6] transition-colors cursor-pointer" />
              </Link>
              <Link href="https://www.linkedin.com/in/syed-ali-hussaini-84693b2a9/" passHref target="_blank">
                <Linkedin className="text-2xl text-[#E2E8F0] hover:text-[#3B82F6] transition-colors cursor-pointer" />
              </Link>
              <Link href="https://www.facebook.com/syed0031" passHref target="_blank">
                <Facebook className="text-2xl text-[#E2E8F0] hover:text-[#3B82F6] transition-colors cursor-pointer" />
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="w-80 h-80 p-1 rounded-full overflow-hidden"
              style={{ backgroundColor: "hsl(222, 84%, 5%)" }}
            >
              <Image
                src="/SyedAli.png"
                alt="SyedAli - Professional Profile"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-full"
              />
            </div>



          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
