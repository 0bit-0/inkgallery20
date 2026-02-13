import { useState } from "react";
import GalleryModal from "./GalleryModal";
import { useFadeIn } from "@/hooks/useFadeIn";

import tattooBlackwork from "@/assets/tattoo-blackwork.jpg";
import tattooRealism from "@/assets/tattoo-realism.jpg";
import tattooMinimal from "@/assets/tattoo-minimal.jpg";
import tattooColor from "@/assets/tattoo-color.jpg";
import tattooCustom from "@/assets/tattoo-custom.jpg";
import tattooCoverup from "@/assets/tattoo-coverup.jpg";
import tattooFlash from "@/assets/tattoo-flash.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const categories = ["All", "Blackwork", "Realism", "Minimal", "Color", "Custom"];

const galleryItems = [
  { src: tattooBlackwork, title: "Sacred Geometry", category: "Blackwork", description: "Intricate mandala design with precise dotwork and geometric patterns. A meditation in ink.", date: "January 2026", tall: true },
  { src: tattooRealism, title: "Portrait Study", category: "Realism", description: "Hyper-realistic black and grey portrait showcasing masterful shading technique.", date: "December 2025", tall: false },
  { src: tattooMinimal, title: "Botanical Line", category: "Minimal", description: "Delicate fine-line botanical piece. Elegance in simplicity.", date: "November 2025", tall: true },
  { src: tattooColor, title: "Koi Guardian", category: "Color", description: "Vibrant Japanese-inspired koi with traditional water elements and bold color work.", date: "October 2025", tall: false },
  { src: tattooCustom, title: "Ornamental Sleeve", category: "Custom", description: "Full sleeve featuring ornamental patterns with dotwork and intricate details.", date: "September 2025", tall: true },
  { src: tattooCoverup, title: "Rose Revival", category: "Custom", description: "Masterful cover-up transforming old ink into a stunning dark rose composition.", date: "August 2025", tall: false },
  { src: tattooFlash, title: "Flash Collection", category: "Blackwork", description: "Traditional flash sheet featuring skulls, roses, daggers, and anchors.", date: "July 2025", tall: false },
  { src: heroBg, title: "Tribal Flow", category: "Blackwork", description: "Bold blackwork sleeve with flowing tribal-inspired organic patterns.", date: "June 2025", tall: true },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);
  const ref = useFadeIn();

  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <section id="gallery" className="section-padding bg-background texture-overlay" aria-label="Gallery">
      <div ref={ref} className="max-w-7xl mx-auto fade-section">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wider">
            The <span className="text-primary">Gallery</span>
          </h2>
          <p className="mt-3 font-body text-muted-foreground text-sm tracking-wider uppercase">
            A curated selection of recent work
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10" role="tablist" aria-label="Filter gallery">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs font-body tracking-widest uppercase transition-all duration-300 border ${
                active === cat
                  ? "border-primary text-primary bg-accent"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <button
              key={item.title + i}
              onClick={() => setSelected(item)}
              className="block w-full group relative overflow-hidden break-inside-avoid cursor-pointer border-0 bg-transparent p-0"
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  item.tall ? "h-[400px] sm:h-[500px]" : "h-[280px] sm:h-[350px]"
                }`}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-300 flex items-end p-5 opacity-0 group-hover:opacity-100">
                <div className="text-left">
                  <span className="text-xs tracking-widest uppercase text-primary font-body">{item.category}</span>
                  <h3 className="font-display text-xl text-foreground mt-1">{item.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <GalleryModal image={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Gallery;
