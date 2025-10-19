'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#1E293B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-[#3B82F6]">Me</span>
          </h2>
          <p className="text-xl text-[#E2E8F0]/80 max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about.png"
              alt="Modern developer workspace"
              width={800} // ✅ original width of your image (bada rakho)
              height={600} // ✅ original height
              quality={100} // ✅ max quality
              priority // ✅ preload karega (above the fold images ke liye)
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>


          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-[#F59E0B]">Crafting Clean & Modern Web Solutions</h3>
            <p className="text-lg text-[#E2E8F0]/80 mb-6 leading-relaxed">
              I specialize in building responsive and user-friendly websites using modern technologies like Next.js, TypeScript, Tailwind CSS, and Sanity. My focus is on writing clean, maintainable code and delivering websites that not only look good but also perform well.
            </p>
            <p className="text-lg text-[#E2E8F0]/80 mb-8 leading-relaxed">
              Every project I work on is an opportunity to create something valuable and unique. I aim to understand client needs clearly and provide solutions that are reliable, scalable, and designed for growth.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-[#0F172A] rounded-lg border border-[#3B82F6]/20">
                <div className="text-3xl font-bold text-[#3B82F6] mb-2">Focused</div>
                <div className="text-[#E2E8F0]/80">On Quality</div>
              </div>
              <div className="text-center p-6 bg-[#0F172A] rounded-lg border border-[#3B82F6]/20">
                <div className="text-3xl font-bold text-[#F59E0B] mb-2">Client-First</div>
                <div className="text-[#E2E8F0]/80">Approach</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
