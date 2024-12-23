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
      } = {}
    ) => {
      const {
        fontSize = 10,
        isBold = false,
        isTitle = false,
        indent = 0,
        color,
      } = options;

      if (!text.trim()) return;

      pdf.setFontSize(fontSize);
      pdf.setFont("helvetica", isBold ? "bold" : "normal");
      if (color) pdf.setTextColor(color);

      const x = margin + indent;
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
    const contacts = content.querySelectorAll(
      "a[href^='tel'], a[href^='mailto'], span.flex.items-center"
    );
    if (contacts.length > 0) {
      addStyledText("Contatti", { fontSize: 10, isBold: true });
      contacts.forEach((contact) => {
        addStyledText(contact.textContent?.trim() || "", {
          fontSize: 7,
          indent: 2,
        });
      });
    }

    // Salva la posizione Y per la colonna sinistra
    const contactsEndY = y;
    y = startY;

    // Colonna destra: Social
    const socials = content.querySelectorAll(
      "a[href*='linkedin'], a[href*='github'], a[href*='twitter']"
    );
    if (socials.length > 0) {
      pdf.setX(margin + columnWidth);
      addStyledText("Social", { fontSize: 10, isBold: true });
      socials.forEach((social) => {
        pdf.setX(margin + columnWidth);
        addStyledText(social.textContent?.trim() || "", {
          fontSize: 7,
          indent: 2,
        });
      });
    }

    // Usa la Y più grande tra le due colonne
    y = Math.max(y, contactsEndY) + 4;

    // Competenze in colonne
    const skills = content.querySelectorAll(".grid.grid-cols-1 > div");
    if (skills.length > 0) {
      addStyledText("Competenze", { fontSize: 10, isBold: true });

      // Organizziamo le competenze in 3 colonne
      const skillColumnWidth = (contentWidth - 2 * margin) / 3;
      let currentColumn = 0;
      startY = y;

      skills.forEach((skillSection) => {
        const title = skillSection.querySelector("h3");
        const skillItems = skillSection.querySelectorAll("span.px-3");

        if (title) {
          const x = margin + skillColumnWidth * currentColumn;
          y = startY;

          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(7);
          pdf.text(title.textContent?.trim() || "", x, y);
          y += 3;

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(6);
          const items = Array.from(skillItems)
            .map((item) => item.textContent?.trim())
            .filter(Boolean);
          const itemsText = items.join(", ");
          const lines = pdf.splitTextToSize(itemsText, skillColumnWidth - 3);

          lines.forEach((line) => {
            pdf.text(line, x, y);
            y += 2;
          });

          currentColumn++;
          if (currentColumn === 3) {
            currentColumn = 0;
            startY = y + 3;
          }
        }
      });

      y = startY + 4;
    }

    // Esperienza e Formazione in due colonne
    startY = y;

    // Colonna sinistra: Esperienza
    const experience = content.querySelector("#experience");
    if (experience) {
      addStyledText("Esperienza", { fontSize: 10, isBold: true });
      const items = experience.querySelectorAll("div.space-y-4 > div");
      items.forEach((item) => {
        const title = item.querySelector("h4");
        const period = item.querySelector("span");
        const description = item.querySelector("p");

        if (title) {
          addStyledText(
            title.textContent?.trim() +
              (period ? " - " + period.textContent?.trim() : ""),
            {
              fontSize: 7,
              isBold: true,
            }
          );
        }
        if (description) {
          addStyledText(description.textContent?.trim() || "", {
            fontSize: 6,
            indent: 2,
          });
        }
      });
    }

    // Salva la posizione Y per la colonna sinistra
    const experienceEndY = y;
    y = startY;

    // Colonna destra: Formazione
    const education = content.querySelector("#education");
    if (education) {
      pdf.setX(margin + columnWidth);
      addStyledText("Formazione", { fontSize: 10, isBold: true });
      const items = education.querySelectorAll("div.space-y-4 > div");
      items.forEach((item) => {
        const title = item.querySelector("h4");
        const period = item.querySelector("span");
        const description = item.querySelector("p");

        if (title) {
          pdf.setX(margin + columnWidth);
          addStyledText(
            title.textContent?.trim() +
              (period ? " - " + period.textContent?.trim() : ""),
            {
              fontSize: 7,
              isBold: true,
            }
          );
        }
        if (description) {
          pdf.setX(margin + columnWidth);
          addStyledText(description.textContent?.trim() || "", {
            fontSize: 6,
            indent: 2,
          });
        }
      });
    }

    // Usa la Y più grande tra le due colonne
    y = Math.max(y, experienceEndY);

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
