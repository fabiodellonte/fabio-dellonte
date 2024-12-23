import { Moon, Sun, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSettings } from "@/contexts/SettingsContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const translations = {
  en: {
    downloadCV: "Download CV",
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
  const lastUpdate = "02/01/2024"; // Data dell'ultimo aggiornamento

  const handleDownloadCV = async () => {
    const cvElement = document.getElementById("cv-content");
    if (!cvElement) return;

    const originalDisplay = cvElement.style.display;
    cvElement.style.display = "block";

    try {
      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
        windowWidth: 1920,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById("cv-content");
          if (clonedElement) {
            clonedElement.style.display = "block";
            clonedElement.style.transform = "none";
            clonedElement.style.width = "100%";
            clonedElement.style.height = "auto";
          }
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`FabioDellOnte_CV_${language}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      cvElement.style.display = originalDisplay;
    }
  };

  return (
    <div className="fixed top-4 right-20 flex items-center gap-4 z-40">
      <span className="text-sm text-muted-foreground">
        {t.lastUpdate}: {lastUpdate}
      </span>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={handleDownloadCV}
      >
        <FileDown className="h-4 w-4" />
        {t.downloadCV}
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
