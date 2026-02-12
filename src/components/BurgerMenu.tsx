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
import { cn } from "@/lib/utils";

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
  const [activeSection, setActiveSection] = React.useState("about");

  React.useEffect(() => {
    const sectionIds = ["about", "skills", "experience", "education", "portfolio"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const menuItems = [
    { id: "about", label: t.about },
    { id: "skills", label: t.skills },
    { id: "experience", label: t.experience },
    { id: "education", label: t.education },
    { id: "portfolio", label: t.portfolio },
  ];

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
        <div className="flex flex-col gap-2 mt-8">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "justify-start relative overflow-hidden",
                activeSection === item.id && "menu-link-active"
              )}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="relative z-10">{item.label}</span>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
