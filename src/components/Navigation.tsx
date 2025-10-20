export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Top border line */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-foreground/10" />
      
      <div className="container mx-auto px-8 py-6 relative">
        {/* Corner accents */}
        <div className="absolute top-6 right-8 w-8 h-8 border-t border-r border-foreground/20" />
        <div className="absolute top-6 left-8 w-8 h-8 border-t border-l border-foreground/20" />
        
        <div className="flex justify-end gap-12">
          <button
            onClick={() => scrollToSection('about')}
            className="font-sans text-xs uppercase tracking-wider text-foreground hover:text-foreground/60 transition-colors"
          >
            о нас
          </button>
          <button
            onClick={() => scrollToSection('works')}
            className="font-sans text-xs uppercase tracking-wider text-foreground hover:text-foreground/60 transition-colors"
          >
            работы
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-sans text-xs uppercase tracking-wider text-foreground hover:text-foreground/60 transition-colors"
          >
            контакты
          </button>
        </div>
      </div>
      
      {/* Bottom border line */}
      <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-foreground/10" />
    </nav>
  );
};
