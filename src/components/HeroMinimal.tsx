import { useEffect, useState } from "react";

export const HeroMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-20 bg-background relative">
      {/* Decorative corner lines */}
      <div className="absolute top-32 left-8 w-16 h-16 border-t border-l border-foreground/10" />
      <div className="absolute top-32 right-8 w-16 h-16 border-t border-r border-foreground/10" />
      <div className="absolute bottom-32 left-8 w-16 h-16 border-b border-l border-foreground/10" />
      <div className="absolute bottom-32 right-8 w-16 h-16 border-b border-r border-foreground/10" />
      
      {/* Vertical accent lines */}
      <div className="absolute left-24 top-48 bottom-48 w-[1px] bg-foreground/5" />
      <div className="absolute right-24 top-48 bottom-48 w-[1px] bg-foreground/5" />
      
      <div
        className={`text-center space-y-8 md:space-y-12 transition-all duration-1000 relative ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="font-display font-light tracking-tight text-primary">
          <span className="block text-[15vw] md:text-[12vw] lg:text-[10vw] leading-none">PROTOFORMA</span>
        </h1>
        
        <p className="font-sans text-xs md:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed font-light px-4">
          мультидисциплинарное агентство,<br />
          объединяющее искусство, бренд и пространство<br />
          в единую живую систему.
        </p>
      </div>
    </section>
  );
};
