import React from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Director de TI, Edificio Platinum",
      content: "SecurePath transformó por completo nuestra gestión de accesos. Antes era un caos con las llaves físicas, ahora todo es digital.",
      image: "https://i.pravatar.cc/150?u=1",
      rating: 5,
    },
    {
      name: "Elena Rodríguez",
      role: "Gerente de Operaciones, TechHub",
      content: "La facilidad de uso de la aplicación móvil es increíble. Nuestros empleados están encantados de no tener que llevar tarjetas.",
      image: "https://i.pravatar.cc/150?u=2",
      rating: 5,
    },
    {
      name: "Roberto Soto",
      role: "Administrador de Consorcio",
      content: "La seguridad es nuestra prioridad. Poder revocar accesos al instante nos da una tranquilidad inigualable.",
      image: "https://i.pravatar.cc/150?u=3",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">COMMUNITY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Used and loved by<br />the world's best teams
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-white/5 flex flex-col h-full group hover:border-white/10 transition-all duration-500"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-white fill-white" : "text-white/10"}`} 
                  />
                ))}
              </div>
              
              <p className="text-xl text-white/80 leading-relaxed mb-12 flex-grow italic font-medium tracking-tight">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10">
                  <ImageWithFallback 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest text-[10px]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
