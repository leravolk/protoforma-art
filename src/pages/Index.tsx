import { Navigation } from "@/components/Navigation";
import { HeroMinimal } from "@/components/HeroMinimal";
import { IntroSection } from "@/components/IntroSection";
import { TeamSection } from "@/components/TeamSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { DirectionsSection } from "@/components/DirectionsSection";
import { ContactsMinimal } from "@/components/ContactsMinimal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroMinimal />
      <IntroSection />
      <TeamSection />
      <ProjectsSection />
      <PhilosophySection />
      <DirectionsSection />
      <ContactsMinimal />
    </main>
  );
};

export default Index;
