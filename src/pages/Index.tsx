import { HeroSection } from "@/components/HeroSection";
import { ArtObjectSection } from "@/components/ArtObjectSection";
import { ContactsSection } from "@/components/ContactsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ArtObjectSection />
      <ContactsSection />
    </main>
  );
};

export default Index;
