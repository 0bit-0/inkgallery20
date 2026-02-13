import { useFadeIn } from "@/hooks/useFadeIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    text: "Marcus turned my rough concept into the most beautiful sleeve I could have imagined. His attention to detail is insane. Every line is perfect.",
    rating: 5,
  },
  {
    name: "James R.",
    text: "I've been tattooed by artists all over the world, and Marcus is hands-down the best. The realism in my portrait piece still blows people away.",
    rating: 5,
  },
  {
    name: "Mia T.",
    text: "The studio is immaculate, the vibe is calm and professional, and the art speaks for itself. Wouldn't trust anyone else with my ink.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useFadeIn();

  return (
    <section className="section-padding bg-secondary" aria-label="Testimonials">
      <div ref={ref} className="max-w-6xl mx-auto fade-section">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wider">
            Client <span className="text-primary">Words</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 border border-border bg-card hover-lift">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-display text-lg text-foreground tracking-wider">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
