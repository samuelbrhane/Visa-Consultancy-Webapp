import { Hero, HeroContent } from "./components/Hero";
import { About } from "./components/About";
import { Partner } from "./components/Partner";
import { ChooseUs, Service } from "./components/Service";
import BackgroundWrapper from "./BackgroundWrapper";
import { FunFactSection } from "./components/FunFact";
import { FavoriteDestinations } from "./components/Country";
import { Consultation, HowWeWork } from "./components/Steps";
import { ContactSection } from "./components/Contact";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Hero />
      <HeroContent />
      <BackgroundWrapper backgroundImage="./wrapper1.jpg">
        <About />
      </BackgroundWrapper>

      <Partner />

      <BackgroundWrapper backgroundImage="./travel1.jpg">
        <Service />
        <FunFactSection />
      </BackgroundWrapper>

      <BackgroundWrapper backgroundImage="./logo2.png">
        <ChooseUs />
        <FavoriteDestinations />
      </BackgroundWrapper>

      <BackgroundWrapper backgroundImage="./logo2.png">
        <HowWeWork />
        <Consultation />
      </BackgroundWrapper>

      <BackgroundWrapper backgroundImage="./plane1.jpg">
        <ContactSection />
      </BackgroundWrapper>
    </section>
  );
}
