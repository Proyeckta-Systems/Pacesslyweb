import React from "react";
import { ArrowUpRight, Sparkles, Send, Star, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="pt-8 pb-16 md:pb-24 bg-black relative overflow-hidden text-white">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Decorative Grid/Glow */}
        <div className="relative w-full h-[300px] rounded-[3rem] bg-[#0A0A0A] border border-white/5 overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 opacity-20 pointer-events-none grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] gap-px">
            {[...Array(200)].map((_, i) => (
              <div key={i} className="border-t border-l border-white/10 h-full w-full"></div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-5xl font-bold tracking-tight mb-4 px-4 md:px-0">¿Listo para modernizar el control de tu negocio?</h3>
            <p className="text-white/30 text-lg">Únete a las empresas que ya han dado el salto tecnológico.</p>
          </div>
          {/* Animated glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] transition-all duration-1000" style={{ backgroundColor: "rgba(53,39,222,0.15)" }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(53,39,222,0.30)")} onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(53,39,222,0.15)")}></div>
        </div>
      </div>
    </section>
  );
}