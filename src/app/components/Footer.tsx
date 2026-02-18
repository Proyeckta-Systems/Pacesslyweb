import React from "react";
import { Mail, Phone } from "lucide-react";
import logoImg from "figma:asset/d6dcb6013729b4b2434d9ad6b3d0e109aadd8a92.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/40 py-8 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="shrink-0">
          <img src={logoImg} alt="Pacessly Logo" className="h-16 w-auto opacity-80" />
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          <a href="mailto:hola@pacessly.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            hola@pacessly.com
          </a>
          <span className="hidden sm:block text-white/10">|</span>
          <a href="tel:+521XXXXXXXXXX" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            +52 1 XX XXXX XXXX
          </a>
        </div>

        {/* Legal links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs tracking-wide uppercase">
          <span>© {currentYear} Pacessly. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}