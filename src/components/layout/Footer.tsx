"use client";

import { Facebook, Github, Linkedin} from "lucide-react";
import Link from "next/link";


export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F172A] border-t border-[#1E293B]/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Social Links */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#3B82F6] mb-4">
              <Link href={"/"}> Syed Ali Hussaini </Link>
            </h3>
            <p className="text-[#E2E8F0]/80 mb-6 max-w-md">
              Frontend developer passionate about creating exceptional digital
              experiences that combine beautiful design with powerful
              functionality.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/SyedAli-31?tab=repositories" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/syed-ali-hussaini-84693b2a9" },
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/syed0031" },
              
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#F59E0B] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#E2E8F0]/80 hover:text-[#3B82F6] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#F59E0B] mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"].map(
                (service, index) => (
                  <li key={index}>
                    <span className="text-[#E2E8F0]/80">{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#1E293B]/50 mt-12 pt-8 text-center">
          <p className="text-[#E2E8F0]/60">
            © {new Date().getFullYear()} Syed Ali. All rights reserved. Built
            with React, Node.js, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
