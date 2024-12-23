import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Section } from "@/components/Section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Section className="py-12">
        <Hero />
      </Section>
      
      <Section className="py-8">
        <About />
      </Section>
      
      <Section className="py-8">
        <Skills />
      </Section>
      
      <Section className="py-8">
        <Experience />
      </Section>
      
      <Section className="py-8">
        <Education />
      </Section>

      <div id="cv-content" className="hidden">
        <div className="p-8 bg-background text-foreground">
          <h1 className="text-4xl font-bold mb-4 text-center">Fabio Dell'Onte</h1>
          <About />
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Index;