import crystalClear from "@/assets/crystal-octagon-clear.png";

export const CrystalDivider = () => {
  return (
    <div className="py-16 bg-black flex items-center justify-center">
      <img 
        src={crystalClear} 
        alt="" 
        className="w-24 h-24 md:w-32 md:h-32 opacity-60 animate-float"
        style={{ animationDuration: '8s' }}
      />
    </div>
  );
};
