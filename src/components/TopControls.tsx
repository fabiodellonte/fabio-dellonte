import { Moon, Sun, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSettings } from "@/contexts/SettingsContext";

const translations = {
  en: {
    downloadCV: "Download Resume",
    lastUpdate: "Last update",
  },
  it: {
    downloadCV: "Scarica CV",
    lastUpdate: "Ultimo aggiornamento",
  },
};

export const TopControls = () => {
  const { language, theme, setTheme } = useSettings();
  const t = translations[language];
  const lastUpdate = "12/02/2026";

  const handleDownloadCV = () => {
    const fileName =
      language === "en"
        ? "Fabio_DellOnte_Resume_EN.md"
        : "Fabio_DellOnte_CV_IT.md";

    const href = `/fabio-dellonte/resume/${fileName}`;
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="glass-topbar fixed top-0 right-0 left-0 flex justify-end items-center p-4 gap-4 z-40 relative">
      <span className="text-sm text-muted-foreground hidden md:inline-flex">
        {t.lastUpdate}: {lastUpdate}
      </span>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 resume-cta"
        onClick={handleDownloadCV}
      >
        <FileDown className="h-4 w-4" />
        <span className="hidden md:inline-flex">{t.downloadCV}</span>
        <span className="md:hidden">{language === "en" ? "Resume" : "CV"}</span>
      </Button>
      <LanguageSwitcher />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};
