import { useEffect, useRef, useState } from "react";
import boothBackground from "@/assets/booth-installation.jpg";

export const AboutMinimal = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-32 px-8 md:px-16 relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${boothBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative container mx-auto max-w-7xl">
        {/* Mobile version */}
        <div
          className={`md:hidden flex flex-col justify-between min-h-[60vh] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* First paragraph - top left */}
          <div className="flex items-start justify-start pl-4">
            <p className="font-sans text-xs text-white leading-relaxed font-light max-w-[280px]">
              Мы создаём диалог между эстетикой и функцией, превращая визуальный язык в способ взаимодействия.
            </p>
          </div>

          {/* Second paragraph - bottom right */}
          <div className="flex items-end justify-end pr-4 pt-24">
            <p className="font-sans text-xs text-white/80 leading-relaxed font-light max-w-[280px] text-right">
              Стенд, созданный совместно с Apriori Home, выполнен как сказочная мастерская, где природа, труд и творчество переплетаются в единое полотно.
            </p>
          </div>
        </div>

        {/* Desktop version */}
        <div
          className={`hidden md:grid md:grid-cols-2 gap-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left aligned text */}
          <div className="flex items-start justify-start">
            <p className="font-sans text-sm text-white leading-relaxed font-light max-w-xs">
              Мы создаём диалог между эстетикой и функцией, превращая визуальный язык в способ взаимодействия.
            </p>
          </div>

          {/* Right aligned text */}
          <div className="flex items-end justify-end pt-32">
            <p className="font-sans text-sm text-white/80 leading-relaxed font-light max-w-xs text-right">
              Стенд, созданный совместно с Apriori Home, выполнен как сказочная мастерская, где природа, труд и творчество переплетаются в единое полотно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
