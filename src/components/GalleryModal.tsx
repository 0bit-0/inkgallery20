import { X } from "lucide-react";
import { useEffect } from "react";

interface GalleryModalProps {
  image: {
    src: string;
    title: string;
    category: string;
    description: string;
    date: string;
  } | null;
  onClose: () => void;
}

const GalleryModal = ({ image, onClose }: GalleryModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (image) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
        aria-label="Close modal"
      >
        <X size={28} />
      </button>
      <div
        className="max-w-4xl w-full flex flex-col lg:flex-row gap-6 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full lg:w-2/3 max-h-[70vh] object-contain rounded-sm"
        />
        <div className="flex flex-col justify-center gap-4">
          <span className="text-xs tracking-widest uppercase text-primary font-body">
            {image.category}
          </span>
          <h3 className="font-display text-3xl text-foreground">{image.title}</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {image.description}
          </p>
          <p className="text-xs text-muted-foreground/60 font-body">{image.date}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
