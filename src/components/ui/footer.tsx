import { Github, Linkedin, Twitter } from "lucide-react";
import { SiDribbble } from "react-icons/si";

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
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#3B82F6] mb-4">Devon Lane</h3>
            <p className="text-[#E2E8F0]/80 mb-6 max-w-md">
              Full-stack developer passionate about creating exceptional digital experiences 
              that combine beautiful design with powerful functionality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all"
              >
                <SiDribbble size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#F59E0B] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-[#E2E8F0]/80 hover:text-[#3B82F6] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#projects")}
                  className="text-[#E2E8F0]/80 hover:text-[#3B82F6] transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#blog")}
                  className="text-[#E2E8F0]/80 hover:text-[#3B82F6] transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-[#E2E8F0]/80 hover:text-[#3B82F6] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#F59E0B] mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-[#E2E8F0]/80">Web Development</span></li>
              <li><span className="text-[#E2E8F0]/80">Mobile Apps</span></li>
              <li><span className="text-[#E2E8F0]/80">UI/UX Design</span></li>
              <li><span className="text-[#E2E8F0]/80">Consulting</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1E293B]/50 mt-12 pt-8 text-center">
          <p className="text-[#E2E8F0]/60">
            © 2023 Devon Lane. All rights reserved. Built with React, Node.js, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
