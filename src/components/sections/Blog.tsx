'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  url: string;
};

const blogPosts: BlogPost[] = [
  {
    title: 'React Performance Optimization: Best Practices for 2024',
    excerpt:
      'Learn advanced techniques to optimize your React applications for better performance and user experience...',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    category: 'React',
    date: 'Dec 15, 2023',
    url: '#',
  },
  {
    title: 'Building Scalable APIs with Node.js and TypeScript',
    excerpt:
      'A comprehensive guide to creating robust, scalable APIs using modern Node.js and TypeScript patterns...',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    category: 'Node.js',
    date: 'Dec 8, 2023',
    url: '#',
  },
  {
    title: 'Modern CSS Techniques: Grid, Flexbox, and Beyond',
    excerpt:
      'Explore the latest CSS features and techniques to create beautiful, responsive layouts with minimal code...',
    image:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    category: 'CSS',
    date: 'Nov 28, 2023',
    url: '#',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-[#1E293B]/50">
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
            My <span className="text-[#3B82F6]">Blog</span>
          </h2>
          <p className="text-xl text-[#E2E8F0]/80 max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on modern web development
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="bg-[#0F172A] rounded-xl shadow-lg overflow-hidden border border-[#3B82F6]/20 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
                  priority // optional for above-the-fold images
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#F59E0B]/20 text-[#F59E0B] rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-[#E2E8F0]/60 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#F59E0B]">
                  {post.title}
                </h3>
                <p className="text-[#E2E8F0]/80 mb-4">{post.excerpt}</p>
                <a
                  href={post.url}
                  className="text-[#3B82F6] hover:text-[#F59E0B] transition-colors font-medium flex items-center gap-2"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-lg font-semibold hover:bg-[#3B82F6] hover:text-white transition-all"
          >
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
