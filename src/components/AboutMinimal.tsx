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
      
      {/* Top Gradient for text readability */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black via-black/80 to-transparent" />

      <div className="relative container mx-auto max-w-7xl">
        <div
          className={`flex flex-col gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* First paragraph - full width */}
          <p className="font-sans text-xs md:text-sm text-white leading-relaxed font-light w-full">
            Мы создаём диалог между эстетикой и функцией, превращая визуальный язык в способ взаимодействия.
          </p>

          {/* Second paragraph - full width */}
          <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed font-light w-full">
            Стенд, созданный совместно с Apriori Home, выполнен как сказочная мастерская, где природа, труд и творчество переплетаются в единое полотно.
          </p>
        </div>
      </div>
    </section>
  );
};
