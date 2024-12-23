import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, MapPin, Github, Facebook, Twitter, MessageCircle, Linkedin, Moon, Sun, FileDown, Instagram, Globe } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSettings } from "@/contexts/SettingsContext";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const translations = {
  en: {
    role: "Software Operations Manager at Biesse Group",
    description: "Passionate about Application Lifecycle Management and software development, with expertise in DevOps infrastructure and Agile methodologies.",
    getInTouch: "Get in Touch",
    downloadCV: "Download CV",
    generatingPDF: "Generating PDF..."
  },
  it: {
    role: "Software Operations Manager presso Biesse Group",
    description: "Appassionato di Application Lifecycle Management e sviluppo software, con esperienza in infrastrutture DevOps e metodologie Agili.",
    getInTouch: "Contattami",
    downloadCV: "Scarica CV",
    generatingPDF: "Generazione PDF in corso..."
  }
};

export const Hero = () => {
  const { language, theme, setTheme } = useSettings();
  const t = translations[language];

  const handleDownloadCV = async () => {
    const cvElement = document.getElementById('cv-content');
    if (!cvElement) return;

    const originalDisplay = cvElement.style.display;
    cvElement.style.display = 'block';

    try {
      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        windowWidth: 1920,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('cv-content');
          if (clonedElement) {
            clonedElement.style.display = 'block';
            clonedElement.style.transform = 'none';
            clonedElement.style.width = '100%';
            clonedElement.style.height = 'auto';
          }
        }
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`FabioDellOnte_CV_${language}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      cvElement.style.display = originalDisplay;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6 relative"
    >
      <div className="fixed top-4 right-4 flex items-center gap-4">
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
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>

      <Avatar className="w-64 h-64 border-2 border-primary">
        <AvatarImage src="/fabio-dellonte/lovable-uploads/ef193632-5cc4-4552-965d-e1dd36c1d830.png" alt="Fabio Dell'Onte" />
        <AvatarFallback>FD</AvatarFallback>
      </Avatar>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Fabio Dell'Onte
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
          {t.role}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
        <a href="tel:+393297488632" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone className="w-4 h-4" />
          <span>+39 329 748 8632</span>
        </a>
        <a href="mailto:fabiodellonte@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail className="w-4 h-4" />
          <span>fabiodellonte@gmail.com</span>
        </a>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Pesaro, Marche, Italia</span>
        </div>
        <a href="https://fabiodellonte.github.io/fabio-dellonte/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Globe className="w-4 h-4" />
          <span>Website</span>
        </a>
      </div>

      <p className="text-lg max-w-2xl mx-auto text-muted-foreground text-center mb-8">
        {t.description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <a
          href="https://it.linkedin.com/in/fabio-dell-onte-09b0419"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/fabiodellonte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a
          href="https://m.facebook.com/fdellonte/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Facebook className="w-5 h-5" />
          <span>Facebook</span>
        </a>
        <a
          href="https://x.com/FabioDellOnte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Twitter className="w-5 h-5" />
          <span>X (Twitter)</span>
        </a>
        <a
          href="https://www.instagram.com/fabiodellonte/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </a>
      </div>
    </motion.div>
  );
};