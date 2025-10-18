import { useEffect, useRef, useState } from "react";
import boothBackground from "@/assets/booth-background.jpg";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${boothBackground})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-5xl">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="font-display text-6xl md:text-8xl font-light tracking-wider text-primary mb-12">
            PROTOFORMA
          </h1>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="font-sans text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              ПРОТОФОРМ — мультидисциплинарное агентство, объединяющее искусство, 
              бренд и пространство в единую живую систему.
            </p>
            
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              Мы создаём диалог между эстетикой и функцией, превращая визуальный 
              язык в способ взаимодействия.
            </p>
            
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              Стенд, созданный совместно с нашими партнёрами Apriori Home, выполнен 
              как сказочная мастерская, где природа, труд и творчество переплетаются 
              в единое полотно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
