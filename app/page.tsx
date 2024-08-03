import { Hero, HeroContent } from "./components/Hero";
import { About } from "./components/About";

export default function Home() {
  return (
    <section>
      <Hero />
      <HeroContent />
      <About />
    </section>
  );
}
