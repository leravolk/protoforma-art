import { Navigation } from "@/components/Navigation";
import { HeroMinimal } from "@/components/HeroMinimal";
import { AboutMinimal } from "@/components/AboutMinimal";
import { ArtObjectMinimal } from "@/components/ArtObjectMinimal";
import { GalleryMinimal } from "@/components/GalleryMinimal";
import { ContactsMinimal } from "@/components/ContactsMinimal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
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
