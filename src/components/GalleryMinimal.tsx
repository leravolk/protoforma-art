import { useEffect, useRef, useState } from "react";
import boothBackground from "@/assets/booth-background.jpg";
import sewingMachine from "@/assets/sewing-machine.jpg";

export const GalleryMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    { src: boothBackground, alt: "Детали стенда 1" },
    { src: sewingMachine, alt: "Детали стенда 2" },
    { src: boothBackground, alt: "Детали стенда 3" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 px-8 md:px-16 bg-background relative"
    >
      {/* Horizontal dividers */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-foreground/10" />
      <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-foreground/10" />
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-foreground/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-foreground/10" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden bg-muted"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 hover:translate-x-1 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
