import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";

const tracks = [
  { title: "Ondas Theta — Relajación", duration: "3:42" },
  { title: "Voz Guiada — Meditación", duration: "5:18" },
  { title: "Binaural 432Hz — Sanación", duration: "4:05" },
  { title: "Regresión — Viaje Interior", duration: "6:30" },
];

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return p + 0.5;
        });
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handleTrackChange = (index: number) => {
    setCurrentTrack(index);
    setProgress(0);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const prev = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1;
    handleTrackChange(prev);
  };

  const handleNext = () => {
    const next = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0;
    handleTrackChange(next);
  };

  return (
    <section id="audio" className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Muestras de Audio
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-gradient-text">
            Escucha nuestro trabajo
          </h2>
        </div>

        {/* Player card */}
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 md:p-8 border-glow-blue opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {/* Current track */}
          <div className="flex items-center gap-4 mb-6">
            {/* Visualizer */}
            <div className="flex items-end gap-0.5 h-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full bg-primary ${isPlaying ? "animate-wave" : ""}`}
                  style={{
                    height: isPlaying ? "100%" : "30%",
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
            <div className="flex-1">
              <h3 className="font-display text-foreground font-semibold">
                {tracks[currentTrack].title}
              </h3>
              <p className="text-muted-foreground text-sm font-body">
                Mente en Estéreo · {tracks[currentTrack].duration}
              </p>
            </div>
            <Volume2 className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 rounded-full bg-muted mb-6 cursor-pointer" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setProgress(((e.clientX - rect.left) / rect.width) * 100);
          }}>
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: "var(--gradient-neon)",
              }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              aria-label="Pista anterior"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
              aria-pressed={isPlaying}
              className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform border-glow-blue"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
            <button
              onClick={handleNext}
              aria-label="Pista siguiente"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Track list */}
          <div className="mt-8 space-y-2">
            {tracks.map((track, index) => (
              <button
                key={track.title}
                onClick={() => handleTrackChange(index)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  currentTrack === index
                    ? "bg-primary/10 border border-primary/30"
                    : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-display ${currentTrack === index ? "text-primary" : "text-muted-foreground"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm font-body ${currentTrack === index ? "text-foreground" : "text-muted-foreground"}`}>
                    {track.title}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-body">{track.duration}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioPlayer;
