import { Hero, HeroContent } from "./components/Hero";
import { About } from "./components/About";
import { Partner } from "./components/Partner";
import { ChooseUs, Service } from "./components/Service";
import BackgroundWrapper from "./BackgroundWrapper";
import { FunFactSection } from "./components/FunFact";
import { FavoriteDestinations } from "./components/Country";
import { HowWeWork } from "./components/Steps";

export default function Home() {
  return (
    <section>
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
      <BackgroundWrapper backgroundImage="./wrapper3.jpg">
        <HowWeWork />
      </BackgroundWrapper>
    </section>
  );
}
