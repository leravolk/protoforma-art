import { useEffect, useState } from "react";

export const HeroMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-20 bg-background">
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Mobile version */}
        <div className="md:hidden space-y-6">
          <h1 className="font-display font-light tracking-tight text-primary">
            <span className="block text-[18vw] leading-none">PROTO</span>
          </h1>
          
          <p className="font-sans text-xs text-muted-foreground max-w-[280px] mx-auto leading-relaxed font-light px-2">
            Мультидисциплинарное агентство<br />
            объединяющее искусство,<br />
            бренд и пространство<br />
            в единую живую систему.
          </p>
          
          <h2 className="font-display font-light tracking-tight text-primary pt-4">
            <span className="block text-[18vw] leading-none">FORMA</span>
          </h2>
        </div>

        {/* Desktop version */}
        <div className="hidden md:block space-y-12">
          <h1 className="font-display font-light tracking-tight text-primary">
            <span className="block text-9xl leading-none">PROTO</span>
            <span className="block text-9xl leading-none">FORMA</span>
          </h1>
          
          <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto leading-relaxed font-light">
            мультидисциплинарное агентство, объединяющее искусство,<br />
            бренд и пространство в единую живую систему.
          </p>
        </div>
      </div>
    </section>
  );
};
