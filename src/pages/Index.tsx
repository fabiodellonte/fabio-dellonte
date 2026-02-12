import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Section } from "../components/Section";
import { BurgerMenu } from "../components/BurgerMenu";
import { TopControls } from "../components/TopControls";
import { Portfolio } from "../components/Portfolio";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="ambient-bg" aria-hidden="true" />
      <BurgerMenu />
      <TopControls />

      <div className="relative z-10">
        <Section className="py-8">
          <Hero />
        </Section>

        <Section className="py-4" id="about">
          <About />
        </Section>

        <Section className="py-4" id="skills">
          <Skills />
        </Section>

        <Section className="py-4" id="experience">
          <Experience />
        </Section>

        <Section className="py-4" id="education">
          <Education />
        </Section>
      </div>

      <div id="cv-content" className="hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Fabio Dell'Onte
          </h1>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Portfolio />
        </div>
      </div>

      <div className="relative z-10">
        <Portfolio />
      </div>
    </div>
  );
};

export default Index;
