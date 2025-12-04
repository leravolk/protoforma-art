export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-end gap-12">
          <button
            onClick={() => scrollToSection('about')}
            className="font-sans text-xs uppercase tracking-wider text-foreground hover:text-foreground/60 transition-colors"
          >
            о нас
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="font-sans text-xs uppercase tracking-wider text-foreground hover:text-foreground/60 transition-colors"
          >
            проекты
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-sans text-xs uppercase tracking-wider text-foreground hover:text-foreground/60 transition-colors"
          >
            контакты
          </button>
        </div>
      </div>
    </nav>
  );
};
