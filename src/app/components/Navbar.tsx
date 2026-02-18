import React, { useState, useEffect } from "react";
import { Menu, X, Shield, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import logoImg from "figma:asset/d6dcb6013729b4b2434d9ad6b3d0e109aadd8a92.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "¿Quiénes lo necesitan?", href: "#features" },
    { name: "¿Cómo funciona?", href: "#how-it-works" },
    { name: "¿Qué hace?", href: "#what-it-does" },
    { name: "Contáctanos", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#"><img src={logoImg} alt="SecurePath Logo" className="h-20 w-auto" /></a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#3527de] hover:bg-white text-white hover:text-black px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all group">
            SOLICITAR PACESSLY <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl text-white/70 font-bold hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#3527de] text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all">
                SOLICITAR PACESSLY
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}