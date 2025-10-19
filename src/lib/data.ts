// Types for company information, services, case studies, testimonials, and stats
export type SocialMediaLinks = {
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  
  export interface Service {
    id: number;
    slug: string; // <-- Add this line
    title: string;
    description: string;
    color: string;
  }
  
  export type CaseStudy = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    results: string[];
  };
  
  export type Testimonial = {
    id: number;
    name: string;
    position: string;
    image: string;
    quote: string;
    rating: number;
  };
  
  export type Stat = {
    id: number;
    value: number;
    label: string;
    suffix: string;
  };
  
  // Company information

  
  // Navigation links
  export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "blog"},
  ];
  
  // Services
  
 // lib/data.ts



  // Testimonials
  