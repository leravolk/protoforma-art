import { useEffect, useState } from "react";

export const HeroMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-20 bg-background">
      <div
        className={`text-center space-y-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="font-display text-7xl md:text-9xl font-light tracking-tight text-primary">
          PROTOFORMA
        </h1>
        
        <p className="font-sans text-xs md:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed font-light">
          мультидисциплинарное агентство, объединяющее искусство,<br />
          бренд и пространство в единую живую систему.
        </p>
      </div>
    </section>
  );
};
