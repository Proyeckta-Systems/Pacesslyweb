import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Send, Loader2 } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/yohanvalencia@proyeckta.com";
const MIN_SUBMIT_TIME_MS = 3000;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const loadedAt = useRef(Date.now());

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.15 });

  useEffect(() => {
    loadedAt.current = Date.now();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (honeypot) return;

    if (Date.now() - loadedAt.current < MIN_SUBMIT_TIME_MS) {
      setError("Por favor, tómate un momento antes de enviar.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
          _subject: `Nuevo contacto Pacessly: ${form.name}`,
          _template: "table",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSubmitted(true);
      } else if (data.message?.includes("Activation")) {
        setSubmitted(true);
      } else {
        setError("No se pudo enviar. Intenta de nuevo.");
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
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

            <input
              type="text"
              name="_honey"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

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
              {error && (
                <p className="text-red-400 text-sm text-center mb-3">{error}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3527de] text-white text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:bg-white hover:text-black w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    Enviando
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-4 h-4" />
                  </>
                )}
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