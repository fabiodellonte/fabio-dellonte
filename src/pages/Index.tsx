import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Section } from "@/components/Section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Section>
        <Hero />
      </Section>
      
      <Section>
        <About />
      </Section>
      
      <Section>
        <Experience />
      </Section>
      
      <Section>
        <Skills />
      </Section>
      
      <Section>
        <Education />
      </Section>
      
      <Section>
        <Contact />
      </Section>
    </div>
  );
};

export default Index;