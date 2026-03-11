import { useFadeIn } from "@/hooks/useFadeIn";
import artistPortrait from "@/assets/Spw20.jpeg";

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="section-padding bg-secondary" aria-label="About the artist">
      <div ref={ref} className="max-w-6xl mx-auto fade-section">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={artistPortrait}
              alt="Marcus Vale, tattoo artist"
              loading="lazy"
              className="w-full max-w-md mx-auto object-cover aspect-[3/4]"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10 hidden md:block" />
          </div>

          <div>
            <div className="gold-line mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wider mb-2">
              The <span className="text-primary">Artist</span>
            </h2>
            <p className="text-xs tracking-widest uppercase text-primary font-body mb-6">
              Sidhu — 1.5+ Years of Experience
            </p>
            <div className="space-y-4 font-body text-muted-foreground text-sm leading-relaxed">
              <p>
                With over a decade behind the needle, Sidhu has built a reputation for
                precision, artistry, and a deeply personal approach to every piece. Trained in
                fine arts before discovering tattooing, his work bridges the gap between
                classical technique and contemporary edge.
              </p>
              <p>
                Specializing in blackwork, geometric patterns, and hyper-realistic portraits,
                Sidhu treats every tattoo as a collaboration — listening to your story and
                translating it into permanent art that you'll carry with pride.
              </p>
              <p>
                Based in a private studio in Hoshiarpur, Punjab, Sidhu maintains the highest
                standards of hygiene and uses only premium, vegan-friendly inks. Certified
                by the Alliance of Professional Tattooists.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <span className="font-display text-3xl text-primary">1.5+</span>
                <p className="text-xs text-muted-foreground font-body mt-1 uppercase tracking-wider">Years</p>
              </div>
              <div>
                <span className="font-display text-3xl text-primary">3K+</span>
                <p className="text-xs text-muted-foreground font-body mt-1 uppercase tracking-wider">Tattoos</p>
              </div>
              <div>
                <span className="font-display text-3xl text-primary">APT</span>
                <p className="text-xs text-muted-foreground font-body mt-1 uppercase tracking-wider">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
