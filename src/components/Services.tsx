import { useFadeIn } from "@/hooks/useFadeIn";
import { Pen, Layers, Zap, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Pen,
    title: "Custom Design",
    description: "One-of-a-kind tattoos designed from scratch. Every piece is a collaboration, bringing your vision to life with original artwork tailored to your body.",
  },
  {
    icon: Layers,
    title: "Cover-Ups",
    description: "Expert cover-up work that transforms old or unwanted tattoos into stunning new pieces. Consultation required to assess the best approach.",
  },
  {
    icon: Zap,
    title: "Flash Tattoos",
    description: "Pre-designed pieces ready to ink. Browse our rotating flash collection for bold, iconic designs at a set price point.",
  },
  {
    icon: MessageSquare,
    title: "Consultations",
    description: "Free initial consultations to discuss your ideas, placement, sizing, and design direction. Walk-ins welcome for flash pieces.",
  },
];

const Services = () => {
  const ref = useFadeIn();

  return (
    <section id="services" className="section-padding bg-background texture-overlay" aria-label="Services">
      <div ref={ref} className="max-w-6xl mx-auto fade-section">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wider">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-3 font-body text-muted-foreground text-sm tracking-wider uppercase">
            Crafted with precision, worn with pride
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 border border-border bg-card hover:border-primary/40 transition-all duration-300 hover-lift"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl text-foreground tracking-wider mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 font-body text-xs text-muted-foreground/60 tracking-wider uppercase">
          Pricing is consultation-based — every tattoo is unique, and so is your quote
        </p>
      </div>
    </section>
  );
};

export default Services;
