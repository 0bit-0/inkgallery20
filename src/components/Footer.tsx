import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border" role="contentinfo">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-display text-2xl tracking-widest text-foreground">
            INK<span className="text-primary">.</span>Gallery20
          </span>
          <p className="font-body text-xs text-muted-foreground mt-1">Hoshiarpur, Punjab, India</p>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com/ink.gallery20" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all">
            <Instagram size={18} />
          </a>
          <a href="sidhuphambianwala17@gmail.com" aria-label="Email" className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all">
            <Mail size={18} />
          </a>
          <a href="https://wa.me/919872387746" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all">
            <Phone size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ink.Gallery20 Studio. All rights reserved.
        </p>
        <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
