'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github,  Award, Eye } from 'lucide-react';
import Image from 'next/image';

import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    codeUrl: string;
    category: string;
    year: string;
    status: 'Live' | 'In Development' | 'Completed';
    features: string[];
}

const allProjects: Project[] = [
    {
        id: 1,
        title: "Stratix Labs",
        description: "Dynamic full service marketing agency that empowers brands with data driven strategies and cutting edge digital experiences.",
        longDescription: "Stratix Labs is a comprehensive marketing agency platform built with modern web technologies. The project features advanced analytics dashboard, client management system, and portfolio showcase. It includes responsive design, SEO optimization, and performance analytics integration.",
        image: "/stratix.JPG",
        technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "TS Particles",],
        liveUrl: "https://stratix-labs.vercel.app/",
        codeUrl: "https://github.com/SyedAli-31/Stratix-Labs",
        category: "Marketing Platform",
        year: "2025",
        status: "Live",
        features: [ "Client Management", "Portfolio Showcase", "SEO Optimized"]
    },
    {
        id: 2,
        title: "Devillixart",
        description: "Cutting-edge marketing agency specializing in end-to-end digital solutions for modern brands.",
        longDescription: "DevillixArt represents the pinnacle of digital marketing solutions with a focus on creative excellence and technical innovation. The platform features advanced portfolio management, client collaboration tools, and comprehensive project tracking systems.",
        image: "/Devillixart2.JPG",
       
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
        liveUrl: "https://devellix-art.vercel.app/",
        codeUrl: "https://github.com/SyedAli-31/Devellix-art",
        category: "Creative Agency",
        year: "2024",
        status: "Live",
        features: ["Creative Portfolio", "Client Collaboration", "Project Management"]
    },
    {
        id: 3,
        title: "LunchHub",
        description: "Corporate lunch delivery platform bringing fresh, home-style meals to offices with reliability.",
        longDescription: "LunchHub is a corporate lunch delivery platform bringing fresh, home-style meals to offices with ease and reliability. From daily orders to bulk catering and weekly plans, it serves 20+ offices with authentic recipes, quality ingredients, and time-bound delivery to keep your team fueled and satisfied.",
        image: "/lunchhub2.JPG",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Whatsapp Integration"],
        liveUrl: "https://lunch-hub.vercel.app/",
        codeUrl: "https://github.com/SyedAli-31/LunchHub",
        category: "Food Delivery",
        year: "2025",
        status: "Live",
        features: ["Bulk Catering", "Direct WhatsApp Ordering", "Subscription Plans",]
    },
    {
        id: 4,
        title: "Syed Organics",
        description: "Nature-inspired herbal wellness brand offering 100% organic, chemical-free products.",
        longDescription: "Syed Organics is a comprehensive e-commerce platform for organic wellness products. Built with modern headless CMS architecture, it features advanced product filtering, secure payment processing, inventory management, and customer review systems.",
        image: "/SyedOrganics2.JPG",
        technologies: ["React", "Sanity CMS", "TypeScript", "NodeJs", "Next.js"],
        liveUrl: "https://syed-organics.vercel.app/",
        codeUrl: "https://github.com/SyedAli-31/Syed-Organics",
        category: "E-commerce",
        year: "2024",
        status: "Live",
        features: ["Product Catalog", "Inventory Management", "Customer Reviews"]
    },
    {
        id: 5,
        title: "Amazon Clone",
        description: "Complete front-end replica of Amazon e-commerce platform with modern web technologies.",
        longDescription: "A comprehensive Amazon clone showcasing advanced front-end development skills. Features include responsive product listings, shopping cart functionality, user authentication, product search and filtering, and a complete checkout process. Built with attention to detail and user experience.",
        image: "/amazon-clone.JPG",
        technologies: ["HTML5", "CSS", "JavaScript",],
        liveUrl: "https://amazon-clone-woad-phi-85.vercel.app/",
        codeUrl: "https://github.com/SyedAli-31/Amazon-clone/tree/main/Amazon%20clone",
        category: "E-commerce Clone",
        year: "2023",
        status: "Completed",
        features: ["Product Listings", "Shopping Cart", "Search Functionality"]
    }
];

const AllProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [, setHoveredProject] = useState<number | null>(null);

    const categories = ['All', ...Array.from(new Set(allProjects.map(project => project.category)))];

    const filteredProjects = selectedCategory === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === selectedCategory);

    const handleProjectClick = (liveUrl: string) => {
        window.open(liveUrl, '_blank', 'noopener,noreferrer');
    };

    const handleGithubClick = (e: React.MouseEvent, codeUrl: string) => {
        e.stopPropagation();
        window.open(codeUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden ">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/10 to-transparent"></div>
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                {/* Header */}
                
                 

                {/* Category Filter */}
                <motion.section
                    className="py-8 lg:py-12 mt-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                            {categories.map((category, index) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/30'
                                        }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Projects Grid */}
                <section className="pb-20 lg:pb-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-8 lg:space-y-12">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="group relative cursor-pointer"
                                    initial={{ opacity: 0, y: 80 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    onClick={() => handleProjectClick(project.liveUrl)}
                                >
                                    {/* Project Card */}
                                    <div className={`bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        } flex flex-col lg:flex group-hover:shadow-blue-500/10 group-hover:border-blue-500/30`}>
                                        {/* Image Section - Fixed to take proper width */}
                                        {/* Image Section */}
                                        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                priority={index < 2}
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                                            {/* Status Badge */}
                                            <div className="absolute top-6 left-6 z-20">
                                                <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${project.status === 'Live'
                                                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                                    : project.status === 'In Development'
                                                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                                                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                                    }`}>
                                                    {project.status}
                                                </span>
                                            </div>

                                            {/* Project Number */}
                                            <div className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                                                {String(project.id).padStart(2, '0')}
                                            </div>

                                            {/* Hover Actions */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
                                                <motion.div
                                                    className="flex items-center gap-3 px-8 py-4 bg-blue-500/90 backdrop-blur-sm rounded-full text-white font-medium shadow-lg"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Eye size={20} />
                                                    <span className="text-lg">View Live Project</span>
                                                </motion.div>
                                            </div>
                                        </div>




                                        {/* Content Section */}
                                        <div className="lg:w-1/2 p-6 lg:p-8 xl:p-10 flex flex-col justify-between">
                                            <div>
                                                {/* Header */}
                                                <div className="mb-6">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                                                            {project.category}
                                                        </span>
                                                        <span className="text-slate-400 text-sm">{project.year}</span>
                                                    </div>

                                                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-white group-hover:text-amber-400 transition-colors duration-300">
                                                        {project.title}
                                                    </h2>

                                                    <p className="text-slate-300 leading-relaxed mb-4 text-sm lg:text-base">
                                                        {project.description}
                                                    </p>

                                                    <p className="text-slate-400 leading-relaxed text-sm">
                                                        {project.longDescription}
                                                    </p>
                                                </div>

                                                {/* Features */}
                                                <div className="mb-6">
                                                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                                        <Award size={16} className="text-amber-400" />
                                                        Key Features
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {project.features.map((feature, featureIndex) => (
                                                            <div key={featureIndex} className="flex items-center gap-2 text-slate-300 text-sm">
                                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                                                {feature}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div className="mb-8">
                                                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech, techIndex) => (
                                                            <motion.span
                                                                key={tech}
                                                                className="px-3 py-1.5 bg-gradient-to-r from-slate-700/50 to-slate-800/50 text-slate-300 rounded-lg text-xs font-medium border border-slate-600/30 backdrop-blur-sm"
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: techIndex * 0.1 }}
                                                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                                                <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-amber-400 transition-colors duration-300">
                                                    <ExternalLink size={18} />
                                                    <span>View Live Project</span>
                                                </div>

                                                <motion.button
                                                    onClick={(e) => handleGithubClick(e, project.codeUrl)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-slate-500"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Github size={16} />
                                                    <span className="font-medium">View Code</span>
                                                </motion.button>
                                            </div>
                                        </div>

                                        {/* Animated Border */}
                                        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-500/10 via-transparent to-amber-500/10 blur-sm"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <motion.section
                    className="py-16 lg:py-20 border-t border-slate-700/50"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Let&apos;s collaborate and bring your ideas to life with cutting-edge technology and exceptional design.
                        </p>
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </motion.section>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </div>
        </div>
    );
};

export default AllProjectsPage;
