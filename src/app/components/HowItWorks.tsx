import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
const computerMockup = "/assets/dashboard-mockup.mp4";

const listItems = [
  "Quién ingresó y cuándo",
  "Ventas y cierres de caja por empleado",
  "Movimientos administrativos",
  "Información financiera del negocio",
];

export function HowItWorks() {
  const textRef = useRef(null);
  const inView = useInView(textRef, { once: false, amount: 0.15 });

  return (
    <section id="what-it-does" className="pt-2 pb-10 md:pt-4 md:pb-16 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:pl-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Text */}
          <div ref={textRef} className="flex flex-col">

            {/* Label */}
            <motion.span
              className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60 mb-6 block"
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            >
              Pacessly
            </motion.span>

            {/* Title */}
            <motion.h3
              className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: inView ? 0.1 : 0 }}
            >
              ¿QUÉ HACE?
            </motion.h3>

            <div className="flex flex-col gap-5 text-white/50 text-sm leading-relaxed max-w-md">

              {/* Párrafo 1 */}
              <motion.p
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: inView ? 0.2 : 0 }}
              >
                Es una plataforma que controla el ingreso de personas mediante un torniquete con reconocimiento facial que identifica, aprueba o rechaza accesos automáticamente.
              </motion.p>

              {/* Párrafo 2 */}
              <motion.p
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: inView ? 0.3 : 0 }}
              >
                Toda la información se centraliza en una plataforma intuitiva y fácil de usar, donde puedes consultar en tiempo real:
              </motion.p>

              {/* Lista */}
              <ul className="flex flex-col gap-2 pl-1">
                {listItems.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-2"
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: inView ? 0.4 + i * 0.1 : 0 }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Párrafo final en negrita */}
              <motion.p
                className="text-white font-bold"
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: inView ? 0.85 : 0 }}
              >
                Todo desde una sola pantalla.<br />
                Desde cualquier lugar.<br />
                Sin necesidad de estar presente.
              </motion.p>

              {/* Botón */}
              <motion.div
                className="mt-2"
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: inView ? 0.95 : 0 }}
              >
                <a
                  href="https://wa.link/x3fzzd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-3 rounded-full bg-[#3527de] text-white text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:bg-white/10"
                >
                  Solicita Pacessly
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Computer Mockup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[520px] mx-auto group">
              <video
                 src={computerMockup}
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="w-full h-auto object-contain rounded-3xl"
                 style={{
                   maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                   WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                 }}
               />
              {/* Glow */}
              <div className="absolute -inset-10 bg-[#3527de]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#3527de]/20 transition-all duration-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
