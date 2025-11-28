import { Navigation } from "@/components/Navigation";
import { HeroMinimal } from "@/components/HeroMinimal";
import { IntroSection } from "@/components/IntroSection";
import { TeamSection } from "@/components/TeamSection";
import { AboutMinimal } from "@/components/AboutMinimal";
import { ArtObjectMinimal } from "@/components/ArtObjectMinimal";
import { ContactsMinimal } from "@/components/ContactsMinimal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroMinimal />
      <IntroSection />
      <TeamSection />
      <ArtObjectMinimal />
      <AboutMinimal />
      <ContactsMinimal />
    </main>
  );
};

export default Index;
