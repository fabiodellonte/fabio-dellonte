import { Moon, Sun, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSettings } from "@/contexts/SettingsContext";
import jsPDF from "jspdf";

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

  const normalizeMarkdownLine = (line: string) => {
    const trimmed = line.trim();
    if (!trimmed) return "";

    if (trimmed.startsWith("### ")) return `• ${trimmed.replace(/^###\s+/, "")}`;
    if (trimmed.startsWith("## ")) return trimmed.replace(/^##\s+/, "").toUpperCase();
    if (trimmed.startsWith("# ")) return trimmed.replace(/^#\s+/, "").toUpperCase();
    if (/^[-*]\s+/.test(trimmed)) return `• ${trimmed.replace(/^[-*]\s+/, "")}`;

    return trimmed;
  };

  const handleDownloadCV = async () => {
    const sourceName =
      language === "en"
        ? "Fabio_DellOnte_Resume_EN.md"
        : "Fabio_DellOnte_CV_IT.md";

    const outputName =
      language === "en"
        ? "Fabio_DellOnte_Resume_EN.pdf"
        : "Fabio_DellOnte_CV_IT.pdf";

    const href = `/fabio-dellonte/resume/${sourceName}`;
    const response = await fetch(href);
    const markdown = await response.text();

    const pdf = new jsPDF({ unit: "mm", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 14;
    const maxWidth = pageWidth - margin * 2;
    let y = margin;

    const addLine = (text: string, opts?: { bold?: boolean; size?: number; spacing?: number }) => {
      const bold = opts?.bold ?? false;
      const size = opts?.size ?? 10;
      const spacing = opts?.spacing ?? 4.8;

      if (!text) {
        y += spacing * 0.5;
        return;
      }

      pdf.setFont("helvetica", bold ? "bold" : "normal");
      pdf.setFontSize(size);
      const lines = pdf.splitTextToSize(text, maxWidth);

      lines.forEach((line: string) => {
        if (y > pageHeight - margin) {
          pdf.addPage();
          y = margin;
        }
        pdf.text(line, margin, y);
        y += spacing;
      });
    };

    markdown
      .split(/\r?\n/)
      .map(normalizeMarkdownLine)
      .forEach((line) => {
        const isSection = /^[A-Z\s]+$/.test(line) && line.length < 55;
        addLine(line, {
          bold: isSection,
          size: isSection ? 12 : 10,
          spacing: isSection ? 5.6 : 4.8,
        });
      });

    pdf.save(outputName);
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
