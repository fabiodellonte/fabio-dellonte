import { Moon, Sun, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSettings } from "@/contexts/SettingsContext";
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
  const lastUpdate = "23/12/2024";

  const handleDownloadCV = async () => {
    const pdf = new jsPDF();
    const content = document.getElementById("cv-content");
    if (!content) return;

    // Configurazione del PDF
    const pageWidth = pdf.internal.pageSize.width;
    const margin = 10;
    const contentWidth = pageWidth - 2 * margin;
    let y = margin;

    // Funzione per aggiungere testo con stile
    const addStyledText = (
      text: string,
      options: {
        fontSize?: number;
        isBold?: boolean;
        isTitle?: boolean;
        indent?: number;
        color?: string;
        x?: number;
      } = {}
    ) => {
      const {
        fontSize = 10,
        isBold = false,
        isTitle = false,
        indent = 0,
        color,
        x = margin + indent,
      } = options;

      if (!text.trim()) return;

      pdf.setFontSize(fontSize);
      pdf.setFont("helvetica", isBold ? "bold" : "normal");
      if (color) pdf.setTextColor(color);

      const lines = pdf.splitTextToSize(text, contentWidth - indent);

      lines.forEach((line) => {
        if (y + fontSize > pdf.internal.pageSize.height - margin) {
          pdf.addPage();
          y = margin;
        }
        pdf.text(line, x, y);
        y += fontSize * 0.4;
      });

      y += fontSize * (isTitle ? 0.5 : 0.2);
      pdf.setTextColor(0);
    };

    // Nome e ruolo
    const name = content.querySelector("h1");
    if (name) {
      addStyledText(name.textContent?.trim() || "", {
        fontSize: 16,
        isBold: true,
        isTitle: true,
      });
    }

    // Descrizione
    const description = content.querySelector("p.text-lg");
    if (description) {
      addStyledText(description.textContent?.trim() || "", {
        fontSize: 8,
      });
      y += 2;
    }

    // Contatti e Social in due colonne
    const columnWidth = (contentWidth - 2 * margin) / 2;
    let startY = y;

    // Colonna sinistra: Contatti
    addStyledText("Contatti", { fontSize: 10, isBold: true });
    addStyledText("Tel: +39 329 748 8632", { fontSize: 7, indent: 2 });
    addStyledText("Email: fabiodellonte@gmail.com", { fontSize: 7, indent: 2 });
    addStyledText("Pesaro, Marche, Italia", { fontSize: 7, indent: 2 });

    // Salva la posizione Y per la colonna sinistra
    const contactsEndY = y;
    y = startY;

    // Colonna destra: Social
    const socialX = margin + columnWidth;
    addStyledText("Social", { fontSize: 10, isBold: true, x: socialX });

    const socialLinks = [
      {
        text: "LinkedIn: fabio-dell-onte-09b0419",
        url: "https://www.linkedin.com/in/fabio-dell-onte-09b0419/",
      },
      {
        text: "GitHub: fabiodellonte",
        url: "https://github.com/fabiodellonte",
      },
      { text: "X: @FabioDellOnte", url: "https://x.com/FabioDellOnte" },
    ];

    socialLinks.forEach((social) => {
      addStyledText(social.text, { fontSize: 7, indent: 2, x: socialX });
    });

    y = Math.max(y, contactsEndY) + 4;

    // Competenze
    addStyledText("Competenze", { fontSize: 12, isBold: true, isTitle: true });
    y += 2;

    const skillsSection = content.querySelector(".space-y-8");
    if (skillsSection) {
      const categories = skillsSection.querySelectorAll(".grid > div");
      categories.forEach((category) => {
        const title = category.querySelector("h3");
        const skills = category.querySelectorAll("span");

        if (title) {
          addStyledText(title.textContent?.trim() || "", {
            fontSize: 9,
            isBold: true,
          });

          const skillTexts = Array.from(skills)
            .map((skill) => skill.textContent?.trim())
            .filter(Boolean)
            .join(", ");

          addStyledText(skillTexts, {
            fontSize: 8,
            indent: 2,
          });
          y += 2;
        }
      });
    }

    y += 4;

    // Esperienza Lavorativa
    addStyledText("Esperienza Lavorativa", {
      fontSize: 12,
      isBold: true,
      isTitle: true,
    });
    y += 2;

    const experience = content.querySelector(".experience");
    if (experience) {
      const items = experience.querySelectorAll(".experience-item");
      items.forEach((item) => {
        const title = item.querySelector("h3");
        const company = item.querySelector("p:nth-of-type(1)");
        const period = item.querySelector("p:nth-of-type(2)");
        const responsibilities = item.querySelectorAll("li");

        if (title) {
          let header = title.textContent?.trim() || "";
          if (company) header += ` - ${company.textContent?.trim()}`;
          if (period) header += ` (${period.textContent?.trim()})`;
          addStyledText(header, { fontSize: 9, isBold: true });
        }
        responsibilities.forEach((resp) => {
          addStyledText(resp.textContent?.trim() || "", {
            fontSize: 8,
            indent: 2,
          });
        });
        y += 2;
      });
    }

    y += 4;

    // Formazione
    addStyledText("Formazione", { fontSize: 12, isBold: true, isTitle: true });
    y += 2;

    const education = content.querySelector(".education");
    if (education) {
      const items = education.querySelectorAll(".education-item");
      items.forEach((item) => {
        const title = item.querySelector("h3");
        const degree = item.querySelector("p:nth-of-type(1)");
        const period = item.querySelector("p:nth-of-type(2)");
        const grade = item.querySelector("p:nth-of-type(3)");
        const thesis = item.querySelector("p:nth-of-type(4)");

        if (title) {
          let header = title.textContent?.trim() || "";
          if (degree) header += ` - ${degree.textContent?.trim()}`;
          if (period) header += ` (${period.textContent?.trim()})`;
          addStyledText(header, { fontSize: 9, isBold: true });
        }
        if (grade) {
          addStyledText(grade.textContent?.trim() || "", { fontSize: 8, indent: 2 });
        }
        if (thesis) {
          addStyledText(thesis.textContent?.trim() || "", { fontSize: 8, indent: 2 });
        }
        y += 2;
      });
    }

    // Portfolio
    const portfolio = content.querySelector("#portfolio");
    if (portfolio) {
      y += 4;
      addStyledText("Portfolio", { fontSize: 12, isBold: true, isTitle: true });
      y += 2;
      const items = portfolio.querySelectorAll(".card");
      items.forEach((item) => {
        const title = item.querySelector("h2, h3, .text-xl");
        const desc = item.querySelector("p.text-sm");
        if (title) {
          addStyledText(title.textContent?.trim() || "", {
            fontSize: 9,
            isBold: true,
          });
        }
        if (desc) {
          addStyledText(desc.textContent?.trim() || "", { fontSize: 8, indent: 2 });
        }
        y += 2;
      });
    }

    pdf.save(`FabioDellOnte_CV_${language}.pdf`);
  };

  return (
    <div className="fixed top-0 right-0 left-0 bg-background/80 backdrop-blur-sm border-b border-border/40 flex justify-end items-center p-4 gap-4 z-40">
      <span className="text-sm text-muted-foreground hidden md:inline-flex">
        {t.lastUpdate}: {lastUpdate}
      </span>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={handleDownloadCV}
      >
        <FileDown className="h-4 w-4" />
        <span className="hidden md:inline-flex">{t.downloadCV}</span>
        <span className="md:hidden">CV</span>
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
