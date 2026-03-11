import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Instagram, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useFadeIn();
  const [form, setForm] = useState({
    name: "",
    email: "",
    idea: "",
    placement: "",
    size: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.idea) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Request submitted! We'll be in touch within 48 hours.");
    setForm({ name: "", email: "", idea: "", placement: "", size: "" });
  };

  const inputClasses =
    "w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" className="section-padding bg-background texture-overlay" aria-label="Contact">
      <div ref={ref} className="max-w-5xl mx-auto fade-section">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wider">
            Book Your <span className="text-primary">Session</span>
          </h2>
          <p className="mt-3 font-body text-muted-foreground text-sm tracking-wider uppercase">
            Tell us about your next piece
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4" noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                aria-label="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                aria-label="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
                required
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Placement (e.g. forearm)"
                aria-label="Tattoo placement"
                value={form.placement}
                onChange={(e) => setForm({ ...form, placement: e.target.value })}
                className={inputClasses}
              />
              <input
                type="text"
                placeholder="Approximate Size"
                aria-label="Approximate size"
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
                className={inputClasses}
              />
            </div>
            <textarea
              placeholder="Describe your tattoo idea... *"
              aria-label="Tattoo idea"
              rows={5}
              value={form.idea}
              onChange={(e) => setForm({ ...form, idea: e.target.value })}
              className={inputClasses + " resize-none"}
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3 font-body text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Request Appointment
            </button>
          </form>

          <div className="lg:col-span-2 flex flex-col justify-center gap-6">
            <div>
              <h3 className="font-display text-xl text-foreground tracking-wider mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a href="https://instagram.com/ink.gallery20" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  <Instagram size={18} /> @ink.gallery20
                </a>
                <a href="sidhuphambianwala17@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  <Mail size={18} /> book@inkgallery20.studio
                </a>
                <a href="https://wa.me/919872387746" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  <Phone size={18} /> WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground tracking-wider mb-2">Studio Hours</h3>
              <p className="font-body text-sm text-muted-foreground">Tue — Sat: 11am — 8pm</p>
              <p className="font-body text-sm text-muted-foreground">Sun — Mon: By appointment</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground tracking-wider mb-2">Location</h3>
              <p className="font-body text-sm text-muted-foreground">Hoshiarpur, 146001</p>
              <p className="font-body text-sm text-muted-foreground">Punjab, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
