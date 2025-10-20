import { useEffect, useState } from "react";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";

export const HeroMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-20 bg-background relative overflow-hidden">
      {/* Crystal octagon decorations */}
      <img 
        src={crystal1} 
        alt="" 
        className="absolute top-[15%] left-[10%] w-24 h-24 opacity-20 blur-sm animate-float"
        style={{ animationDelay: '0s', animationDuration: '8s' }}
      />
      <img 
        src={crystal2} 
        alt="" 
        className="absolute top-[25%] right-[15%] w-16 h-16 opacity-30 blur-[2px] animate-float"
        style={{ animationDelay: '1s', animationDuration: '10s' }}
      />
      <img 
        src={crystal3} 
        alt="" 
        className="absolute bottom-[20%] left-[20%] w-12 h-12 opacity-15 blur-md animate-float"
        style={{ animationDelay: '2s', animationDuration: '12s' }}
      />
      <img 
        src={crystal1} 
        alt="" 
        className="absolute bottom-[30%] right-[8%] w-20 h-20 opacity-25 blur-[1px] animate-float"
        style={{ animationDelay: '3s', animationDuration: '9s' }}
      />
      <img 
        src={crystal2} 
        alt="" 
        className="absolute top-[40%] left-[8%] w-14 h-14 opacity-20 blur-[3px] animate-float"
        style={{ animationDelay: '4s', animationDuration: '11s' }}
      />
      <img 
        src={crystal3} 
        alt="" 
        className="absolute top-[18%] right-[25%] w-28 h-28 opacity-40 animate-float"
        style={{ animationDelay: '0.5s', animationDuration: '9s' }}
      />
      <img 
        src={crystal1} 
        alt="" 
        className="absolute bottom-[18%] left-[30%] w-32 h-32 opacity-35 animate-float"
        style={{ animationDelay: '2.5s', animationDuration: '10s' }}
      />
      
      <div
        className={`text-center space-y-8 md:space-y-12 transition-all duration-1000 relative z-10 ${
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
