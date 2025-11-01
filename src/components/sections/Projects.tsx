'use client';

import { motion } from 'framer-motion';

import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Type definition
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  codeUrl: string;
}

// Hide Amazon Clone from main page - it will only show in /projects page
const projects: Project[] = [
  {
    title: "Stratix Labs",
    description: "Stratix Labs is a dynamic full service marketing agency that empowers brands with data driven strategies and cutting edge digital experiences. From crafting compelling brand identities and impactful social media campaigns",
    image: "/hero.JPG",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "TS Particles",],
    liveUrl: "https://stratix-labs.vercel.app/",
    codeUrl: "https://github.com/SyedAli-31/Stratix-Labs",
  },
  {
    title: "Devillixart",
    description: "DevillixArt is a cutting-edge marketing agency specializing in end-to-end digital solutions that empower brands to stand out in the modern digital landscape.Their creative team brings innovation to life, and deliver stunning designs and intuitive applications.",
    image: "/Devillixart.JPG",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS",  "Sanity CMS"],
    liveUrl: "https://devellix-art.vercel.app/?fbclid=IwY2xjawJ5_-dleHRuA2FlbQIxMABicmlkETFBWkc1M1kxOE9Dbms1em1VAR7UZuBXmfMuYbWQiKpXIBq4iKvgfz22Sliqv6bbWD3BLDzXHFSgEbnBIB1jIQ_aem_Mi1q33urQWd5BRGAPYYmHQ",
    codeUrl: "https://github.com/SyedAli-31/Devellix-art",
  },
  {
    title: "LunchHub",
    description: "LunchHub is a corporate lunch delivery platform bringing fresh, home-style meals to offices with ease and reliability. From daily orders to bulk catering and weekly plans, it serves 20+ offices with authentic recipes, quality ingredients, and time-bound delivery to keep your team fueled and satisfied.",
    image: "/lunchhub.JPG",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Whatsapp Integration"],
    liveUrl: "https://lunch-hub.vercel.app/",
    codeUrl: "https://github.com/SyedAli-31/LunchHub",
  },
  {
    title: "Glovious",
    description: "Leading manufacturer of premium protective gloves for industrial, mechanical, welding, and safety applications. Trusted by industries worldwide.",
    image: "/gloviuos.JPG",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Whatsapp Integration", "Web3Forms"],
    liveUrl: "https://glovious.vercel.app/",
    codeUrl: "https://github.com/SyedAli-31/Glovious",
  },
  
  // Amazon Clone removed from main page - will show in /projects page only
];

const Projects = () => {
  const [, setHoveredProject] = useState<string | null>(null);

  const handleCardClick = (liveUrl: string) => {
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = (e: React.MouseEvent, codeUrl: string) => {
    e.stopPropagation();
    window.open(codeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B]/80 to-[#0F172A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-full text-sm font-semibold text-blue-400 border border-blue-500/30">
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-amber-100 bg-clip-text text-transparent">
            My <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my recent work showcasing innovative solutions and creative excellence
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleCardClick(project.liveUrl)}
            >
              {/* Card Container */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 group-hover:border-blue-500/30">

                {/* Image Container */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-4">
                      <motion.div
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full text-white font-medium shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye size={16} />
                        <span className="text-sm">View Live</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Number */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm lg:text-base line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 rounded-full text-xs lg:text-sm font-medium border border-blue-500/30 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-amber-400 transition-colors duration-300">
                      <ExternalLink size={18} />
                      <span className="text-sm lg:text-base">View Project</span>
                    </div>

                    <motion.button
                      onClick={(e) => handleGithubClick(e, project.codeUrl)}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-slate-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.button>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-amber-500/20 blur-sm"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button - Updated to link to /projects */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
};

export default Projects;
