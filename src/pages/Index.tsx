import { Navigation } from "@/components/Navigation";
import { HeroMinimal } from "@/components/HeroMinimal";
import { AboutMinimal } from "@/components/AboutMinimal";
import { ArtObjectMinimal } from "@/components/ArtObjectMinimal";
import { ContactsMinimal } from "@/components/ContactsMinimal";
import { CrystalDivider } from "@/components/CrystalDivider";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroMinimal />
      <CrystalDivider />
      <ArtObjectMinimal />
      <CrystalDivider />
      <AboutMinimal />
      <CrystalDivider />
      <ContactsMinimal />
    </main>
  );
};

export default Index;
