import heroBg from "@/assets/hero-bg.jpg";
import soraImg from "@/assets/sora.png";

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
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 max-w-6xl mx-auto w-full">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
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
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 opacity-0 animate-fade-in-up font-body"
            style={{ animationDelay: "0.6s" }}
          >
            Producción de audio profesional para terapia, bienestar y transformación personal.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up"
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

        {/* SORA */}
        <div
          className="flex-shrink-0 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-blue/40 via-neon-violet/30 to-neon-magenta/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={soraImg}
              alt="SORA — La voz de Mente en Estéreo"
              className="relative w-64 md:w-80 lg:w-96 rounded-2xl border border-neon-violet/30 shadow-2xl"
              width={960}
              height={640}
            />
            <div className="absolute bottom-3 left-3 right-3 bg-background/70 backdrop-blur-md rounded-lg px-4 py-2 border border-neon-blue/20">
              <p className="font-display text-sm neon-gradient-text font-bold tracking-wider">SORA</p>
              <p className="text-muted-foreground text-xs font-body">La voz de Mente en Estéreo</p>
            </div>
          </div>
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
