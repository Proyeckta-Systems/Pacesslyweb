import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.15 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fields = [
    { delay: 0.1 },
    { delay: 0.2 },
    { delay: 0.3 },
    { delay: 0.4 },
    { delay: 0.5 },
    { delay: 0.6 },
  ];

  return (
    <section id="contact" className="pb-8 md:pb-12 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-2xl" ref={sectionRef}>

        {/* Heading */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 36 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Contáctanos
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Cuéntanos sobre tu negocio y un asesor de Pacessly se pondrá en contacto contigo a la brevedad.
          </p>
        </motion.div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Fila 1 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: inView ? fields[0].delay : 0 }}
                className="flex flex-col gap-1.5"
              >
                <label className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">Nombre</label>
                <input
                  type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Tu nombre"
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#3527de] transition-colors"
                />
              </motion.div>

              <motion.div
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: inView ? fields[1].delay : 0 }}
                className="flex flex-col gap-1.5"
              >
                <label className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">Correo electrónico</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="correo@empresa.com"
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#3527de] transition-colors"
                />
              </motion.div>
            </div>

            {/* Fila 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: inView ? fields[2].delay : 0 }}
                className="flex flex-col gap-1.5"
              >
                <label className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">Teléfono</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="+56 9 0000 0000"
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#3527de] transition-colors"
                />
              </motion.div>

              <motion.div
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: inView ? fields[3].delay : 0 }}
                className="flex flex-col gap-1.5"
              >
                <label className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">Empresa</label>
                <input
                  type="text" name="company" value={form.company} onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#3527de] transition-colors"
                />
              </motion.div>
            </div>

            {/* Mensaje */}
            <motion.div
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: inView ? fields[4].delay : 0 }}
              className="flex flex-col gap-1.5"
            >
              <label className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">Mensaje</label>
              <textarea
                name="message" rows={5} value={form.message} onChange={handleChange}
                placeholder="Cuéntanos sobre tu negocio y qué necesitas controlar…"
                className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#3527de] transition-colors resize-none"
              />
            </motion.div>

            {/* Botón */}
            <motion.div
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: inView ? fields[5].delay : 0 }}
            >
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3527de] text-white text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:bg-white hover:text-black w-full"
              >
                Enviar mensaje
                <Send className="w-4 h-4" />
              </button>
            </motion.div>

          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-12 flex flex-col items-center text-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-[#3527de]/20 flex items-center justify-center mb-2">
              <Send className="w-6 h-6 text-[#3527de]" />
            </div>
            <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
            <p className="text-white/50 text-sm max-w-xs">
              Gracias por contactarnos. Un asesor de Pacessly se pondrá en contacto contigo pronto.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}