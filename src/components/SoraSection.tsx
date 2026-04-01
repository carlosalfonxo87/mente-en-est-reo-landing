import soraImg from "@/assets/sora.png";

const SoraSection = () => {
  return (
    <section id="sora" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-neon-blue/30 via-neon-violet/20 to-neon-magenta/30 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              <img
                src={soraImg}
                alt="SORA — Representante virtual de Mente en Estéreo"
                className="relative w-56 md:w-72 rounded-2xl border border-neon-violet/30"
                width={960}
                height={640}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Conoce a SORA
            </p>
            <h2
              className="text-3xl md:text-5xl font-display font-bold mb-4 neon-gradient-text opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              La cara visible
            </h2>
            <p
              className="text-muted-foreground text-base md:text-lg leading-relaxed font-body mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              SORA es la representante y guía de Mente en Estéreo. Con su presencia fusiona
              tecnología y humanidad, acompañándote en cada experiencia sonora diseñada para
              sanar, transformar y elevar tu bienestar. Ella es la conexión entre la inteligencia
              artificial y la voz que sana.
            </p>
            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {["Guía de Audio", "IA + Humanidad", "Voz Terapéutica"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-neon-blue/30 text-neon-blue text-xs font-display tracking-wider uppercase bg-neon-blue/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoraSection;
