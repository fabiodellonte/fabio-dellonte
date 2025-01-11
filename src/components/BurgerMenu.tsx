import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useSettings } from "@/contexts/SettingsContext";

const translations = {
  en: {
    menu: "Menu",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    portfolio: "Portfolio",
  },
  it: {
    menu: "Menu",
    about: "Chi sono",
    skills: "Competenze",
    experience: "Esperienza",
    education: "Formazione",
    portfolio: "Portfolio",
  },
};

export const BurgerMenu = () => {
  const { language } = useSettings();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-3 left-4 z-50"
          aria-label={t.menu}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] sm:w-[385px]">
        <SheetTitle>{t.menu}</SheetTitle>
        <div className="flex flex-col gap-4 mt-8">
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection("about")}
          >
            {t.about}
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection("skills")}
          >
            {t.skills}
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection("experience")}
          >
            {t.experience}
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection("education")}
          >
            {t.education}
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection("portfolio")}
          >
            {t.portfolio}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
