import { useEffect, useState } from "react";

export const HeroMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-20 bg-background">
      <div
        className={`text-center space-y-8 md:space-y-12 transition-all duration-1000 ${
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
