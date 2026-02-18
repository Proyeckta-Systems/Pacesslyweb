import React from "react";
import { ArrowUpRight, Cpu, Globe, Lock, Shield, Zap, Layers } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import imgRef from "figma:asset/bb736fd92aa8ffda550dca261c970c24decc56dd.png";
import heroVideo from "figma:asset/c16182e78eb406afcb1e583041cf60fb7108c2d8.png";

export function Hero() {
  const logos = [
    { name: "SmarTech Retail", icon: Shield },
    { name: "Nexus Security", icon: Lock },
    { name: "Global Access", icon: Globe },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-8 md:pt-48 md:pb-12 overflow-hidden bg-black flex flex-col items-center justify-center text-center">
      {/* Animated Background Asset */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroVideo} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8 pt-16 md:pt-0">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-black tracking-[0.3em] uppercase text-white/80 mb-6">
              TECNOLOGÍA DE ACCESO BIOMÉTRICO
            </span>
            {/* Móvil */}
            <h1 className="block md:hidden text-4xl font-bold tracking-tighter mb-8 leading-[1.1] max-w-3xl mx-auto text-white">
              <span className="text-[#3527de]">Control total</span> de tu<br />negocio estés<br />donde estés.
            </h1>
            {/* Desktop */}
            <h1 className="hidden md:block text-6xl font-bold tracking-tighter mb-8 leading-[1.1] max-w-3xl mx-auto text-white">
              <span className="text-[#3527de]">Control total</span> de tu negocio<br />estés donde estés.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium tracking-tight">
              Pacessly controla quién entra, valida accesos con reconocimiento facial y supervisa ventas y cierres de caja en una sola plataforma.
            </p>
            <div className="flex justify-center">
              <button className="w-full sm:w-auto bg-white hover:bg-[#3527de] hover:text-white text-black px-12 py-5 rounded-full text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-3 group">
                Solicitar Pacessly <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mt-24 mb-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="w-full text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/50">Algunas empresas ya lo tienen</span>
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0.4, scale: 0.95 }}
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.95, 1.05, 0.95],
                  filter: ["brightness(0.6) blur(0px)", "brightness(1.2) blur(0px)", "brightness(0.6) blur(0px)"]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  delay: index * 1.2,
                  ease: "easeInOut" 
                }}
                className="flex items-center gap-3 hover:opacity-100 transition-opacity"
              >
                <div className="relative">
                  <logo.icon className="w-6 h-6 text-white" />
                  {/* Sutil resplandor detrás del icono */}
                  <motion.div 
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: index * 1.2 }}
                    className="absolute inset-0 bg-[#3527de] blur-xl rounded-full -z-10"
                  />
                </div>
                <span className="text-white text-sm font-extrabold tracking-tight">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hero Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none -z-10 blur-[100px]"></div>
    </section>
  );
}