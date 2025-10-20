import { Navigation } from "@/components/Navigation";
import { HeroMinimal } from "@/components/HeroMinimal";
import { AboutMinimal } from "@/components/AboutMinimal";
import { ArtObjectMinimal } from "@/components/ArtObjectMinimal";
import { GalleryMinimal } from "@/components/GalleryMinimal";
import { ContactsMinimal } from "@/components/ContactsMinimal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Vertical line through entire site */}
      <div className="fixed left-1/2 top-0 bottom-0 w-[1px] bg-foreground/20 -translate-x-1/2 pointer-events-none z-10" />
      
      <Navigation />
      <HeroMinimal />
      <AboutMinimal />
      <ArtObjectMinimal />
      <GalleryMinimal />
      <ContactsMinimal />
    </main>
  );
};

export default Index;
