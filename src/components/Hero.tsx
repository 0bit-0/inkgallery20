import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Tattoo artwork background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 texture-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="gold-line mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }} />
        <h1
          className="font-display text-6xl sm:text-8xl lg:text-9xl tracking-wider text-foreground leading-none mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          INK<span className="text-primary">.</span>MASTER
        </h1>
        <p
          className="font-body text-lg sm:text-xl text-muted-foreground tracking-widest uppercase mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Custom tattoos. Timeless art.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <button
            onClick={() => scrollTo("#gallery")}
            className="px-8 py-3 font-body text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            View Gallery
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 font-body text-sm tracking-widest uppercase border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
