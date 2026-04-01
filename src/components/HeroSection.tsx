import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fondo futurista con ondas sonoras"
          className="w-full h-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-neon-blue font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Mente en Estéreo
        </p>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 opacity-0 animate-fade-in-up leading-tight"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="neon-gradient-text">Elevamos la voz</span>
          <br />
          <span className="text-foreground">que sana</span>
        </h1>

        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up font-body"
          style={{ animationDelay: "0.6s" }}
        >
          Producción de audio profesional para terapia, bienestar y transformación personal.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#servicios"
            className="px-8 py-3 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground border-glow-blue transition-all duration-300 hover:scale-105"
          >
            Explorar Servicios
          </a>
          <a
            href="#audio"
            className="px-8 py-3 rounded-lg font-display text-sm tracking-wider uppercase border border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300 hover:border-glow-violet"
          >
            Escuchar Muestras
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
