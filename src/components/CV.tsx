import { useSettings } from "@/contexts/SettingsContext";
import { About } from "./About";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";

export const CV = () => {
  const { language } = useSettings();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8 bg-background text-foreground">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Fabio Dell'Onte</h1>
        <p className="text-xl text-muted-foreground">
          {language === "en" ? "Software Operations Manager at Biesse Group" : "Software Operations Manager presso Biesse Group"}
        </p>
        <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
          <span>+39 329 748 8632</span>
          <span>•</span>
          <span>your.email@example.com</span>
          <span>•</span>
          <span>Pesaro, Marche, Italia</span>
        </div>
      </header>

      <About />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};