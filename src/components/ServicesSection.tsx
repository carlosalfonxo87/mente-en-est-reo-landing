import { Mic, Brain, Waves, RotateCcw } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Mic,
    title: "Voz Profesional",
    description: "Locución y producción vocal de alto impacto para proyectos multimedia, podcasts y contenido digital.",
    color: "neon-blue" as const,
  },
  {
    icon: Brain,
    title: "Audio para Psicología",
    description: "Diseño sonoro especializado para sesiones terapéuticas, meditaciones guiadas y programas de bienestar.",
    color: "neon-violet" as const,
  },
  {
    icon: Waves,
    title: "Sonidos Aurales",
    description: "Frecuencias binaurales y paisajes sonoros diseñados para estimular estados de relajación profunda.",
    color: "neon-cyan" as const,
  },
  {
    icon: RotateCcw,
    title: "Regresiones",
    description: "Audio inmersivo para técnicas de regresión guiada con ambientes sonoros envolventes y transformadores.",
    color: "neon-magenta" as const,
  },
];

const colorMap = {
  "neon-blue": {
    border: "border-neon-blue/30 hover:border-neon-blue/70",
    glow: "hover:shadow-[0_0_30px_hsl(195_100%_50%/0.2)]",
    icon: "text-neon-blue",
    bg: "bg-neon-blue/10",
  },
  "neon-violet": {
    border: "border-neon-violet/30 hover:border-neon-violet/70",
    glow: "hover:shadow-[0_0_30px_hsl(270_80%_60%/0.2)]",
    icon: "text-neon-violet",
    bg: "bg-neon-violet/10",
  },
  "neon-cyan": {
    border: "border-neon-cyan/30 hover:border-neon-cyan/70",
    glow: "hover:shadow-[0_0_30px_hsl(180_100%_50%/0.2)]",
    icon: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
  },
  "neon-magenta": {
    border: "border-neon-magenta/30 hover:border-neon-magenta/70",
    glow: "hover:shadow-[0_0_30px_hsl(310_100%_60%/0.2)]",
    icon: "text-neon-magenta",
    bg: "bg-neon-magenta/10",
  },
};

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold neon-gradient-text">
            Lo que hacemos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`
                  group relative p-6 rounded-xl border bg-card/50 backdrop-blur-sm
                  transition-all duration-500 cursor-pointer
                  ${colors.border} ${colors.glow}
                  opacity-0 animate-fade-in-up
                `}
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {service.description}
                </p>

                {/* Hover line */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                  style={{
                    background: "var(--gradient-neon)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
