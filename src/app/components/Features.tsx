import React, { useRef, useState } from "react";
import { ShieldCheck, CheckCircle2, DoorOpen, PiggyBank, Bell, BarChart2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import heroVideo from "figma:asset/c16182e78eb406afcb1e583041cf60fb7108c2d8.png";
import bannerImg from "figma:asset/15d039bd97fee81c37046e32695f466ea1e60ffb.png";

function KnowMoreButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#3527de" : "transparent",
        color: "#ffffff",
        border: `1px solid ${hovered ? "#3527de" : "rgba(255,255,255,0.15)"}`,
        transition: "background-color 0.2s, border 0.2s",
        cursor: "pointer",
      }}
      className="text-xs tracking-widest uppercase px-4 py-2 rounded-full"
    >
      Conocer más
    </button>
  );
}

const painPoints = [
  "No sabes exactamente quién entra.",
  "No sabes si un empleado autorizó a alguien sin permiso.",
  "No sabes si la caja realmente cuadra al final del turno.",
  "No sabes si algo pasó hasta que ya es tarde.",
];

export function Features() {
  const services = [
    {
      title: "Control Biométrico",
      description: `Pacessly identifica automáticamente a cada persona que intenta ingresar.\n\nReconoce el rostro en segundos, aprueba o rechaza el acceso según reglas configuradas, registra cada ingreso de forma automática en el sistema, si el acceso depende de un pago próximo, genera alertas antes del vencimiento.\n\nSin tarjetas. Sin listas manuales. Sin suposiciones. `,
      highlight: "TODO BAJO CONTROL.",
      icon: ShieldCheck,
      span: "col-span-1 md:col-span-2 lg:col-span-4",
    },
    {
      title: "Gestión de Visitantes",
      description: `Configura las condiciones de ingreso una sola vez y Pacessly lo aplicará de forma automática:\n\nHorarios permitidos.\nEstado de pagos o suscripciones.\nLímites de ingreso por día o por plan.\nPermisos especiales según tipo de usuario.\n\nSi no cumple las condiciones, el acceso se bloquea y alerta automáticamente.\n\n`,
      highlight: "Sin intervención manual, Sin discusiones, Sin errores humanos.",
      icon: DoorOpen,
      span: "col-span-1 md:col-span-2 lg:col-span-4",
    },
    {
      title: "Cierres de Caja",
      description: "Supervisión financiera total. Verifica que los números cuadren al final de cada turno sin necesidad de estar presente físicamente.",
      icon: PiggyBank,
      span: "col-span-1 md:col-span-2 lg:col-span-3",
    },
    {
      title: "Alertas Inteligentes",
      description: "Recibe avisos inmediatos ante aperturas no autorizadas o discrepancias en los registros de ventas y accesos.",
      icon: Bell,
      span: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      title: "Análisis de Datos",
      description: "Reportes detallados de afluencia y productividad para tomar decisiones basadas en datos reales, no en suposiciones.",
      icon: BarChart2,
      span: "col-span-1 md:col-span-2 lg:col-span-3",
    },
  ];

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  const bannerTextRef = useRef(null);
  const bannerInView = useInView(bannerTextRef, { once: false, amount: 0.5 });

  const words = [
    "Una", "plataforma",
    "\n-mobile",
    "que", "controla", "los",
    "\n-desktop",
    "accesos",
    "\n-mobile",
    "y", "dinero", "de", "tu", "negocio",
    "\n",
  ];

  return (
    <section id="features" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-black text-white overflow-hidden">
      {/* Cabecera con container */}
      <div className="container mx-auto px-6 md:px-10 lg:px-14 max-w-7xl">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start">

          {/* Columna izquierda — entra desde la izquierda */}
          <motion.div
            className="max-w-xl"
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-4 h-4" style={{ color: "#3527de", fill: "#3527de" }} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "#3527de" }}>
                necesitas Pacessly porque...
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-2">
              Tu negocio depende de que estés presente para estar bajo control.
            </h2>
            <motion.div
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: inView ? 0.4 : 0 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 text-sm tracking-wide transition-all duration-300"
              >
                Hablar con un Asesor
              </a>
            </motion.div>
          </motion.div>

          {/* Columna derecha — entra desde la derecha */}
          <div className="lg:pt-14">
            <ul className="space-y-2 text-lg text-white/60 leading-tight">
              {painPoints.map((text, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 40 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: inView ? 0.2 + i * 0.1 : 0 }}
                >
                  <span className="text-white mt-1.5 flex-shrink-0">•</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="mt-8 text-xl font-bold text-white flex items-center gap-2 uppercase tracking-wider"
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 40 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: inView ? 0.65 : 0 }}
            >
              ¡Pacessly elimina las suposiciones!
            </motion.p>
          </div>
        </div>
      </div>

      {/* Banner intermedio — sangrado full width, sin márgenes */}
      <motion.div
        id="how-it-works"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden my-6 h-[500px] md:h-[650px]"
      >
        {/* Imagen de fondo */}
        <img
          src={bannerImg}
          alt="Control de acceso biométrico"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 grayscale"
        />
        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        {/* Difuminado superior */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        {/* Texto */}
        <div className="absolute inset-0 flex items-end justify-center px-6 md:px-14 lg:px-20 pb-10 md:pb-14">
          <p ref={bannerTextRef} className="text-white text-[1.688rem] md:text-[2.7rem] font-bold leading-tight tracking-tight text-center max-w-2xl">
            {words.map((word, i) =>
              word === "\n" ? (
                <br key={i} />
              ) : word === "\n-mobile" ? (
                <br key={i} className="block md:hidden" />
              ) : word === "\n-desktop" ? (
                <br key={i} className="hidden md:block" />
              ) : (
                <motion.span
                  key={i}
                  animate={bannerInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 24, filter: "blur(6px)" }
                  }
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              )
            )}
            {" "}
            <motion.span
              animate={bannerInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 24, filter: "blur(6px)" }
              }
              transition={{ duration: 0.55, ease: "easeOut", delay: 12 * 0.07 }}
              className="inline-block"
              style={{ color: "#3527de" }}
            >
              en tiempo real.
            </motion.span>
          </p>
        </div>
      </motion.div>

      {/* Tarjetas con container */}
      <div className="container mx-auto px-6 md:px-10 lg:px-14 max-w-7xl mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[320px] ${service.span}`}
            >
              <div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h4>
                <p className="text-white/40 leading-relaxed text-sm whitespace-pre-line">
                  {service.description}
                  {service.highlight && (
                    <span className="text-white font-bold">{service.highlight}</span>
                  )}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <service.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                <KnowMoreButton />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}