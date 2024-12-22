import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, MapPin, Github, Facebook, Twitter, MessageCircle, Linkedin, Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSettings } from "@/contexts/SettingsContext";
import { Button } from "./ui/button";

const translations = {
  en: {
    role: "Software Operations Manager at Biesse Group",
    description: "Passionate about Application Lifecycle Management and software development, with expertise in DevOps infrastructure and Agile methodologies.",
    getInTouch: "Get in Touch",
  },
  it: {
    role: "Software Operations Manager presso Biesse Group",
    description: "Appassionato di Application Lifecycle Management e sviluppo software, con esperienza in infrastrutture DevOps e metodologie Agili.",
    getInTouch: "Contattami",
  }
};

export const Hero = () => {
  const { language, theme, setTheme } = useSettings();
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6 relative"
    >
      <div className="fixed top-4 right-4 flex items-center gap-4">
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
        <AvatarImage src="/lovable-uploads/ef193632-5cc4-4552-965d-e1dd36c1d830.png" alt="Fabio Dell'Onte" />
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
        <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </a>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Pesaro, Marche, Italia</span>
        </div>
      </div>

      <p className="text-lg max-w-2xl mx-auto text-muted-foreground text-center mb-8">
        {t.description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Facebook className="w-5 h-5" />
          <span>Facebook</span>
        </a>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Twitter className="w-5 h-5" />
          <span>X (Twitter)</span>
        </a>
        <a
          href="https://discord.com/users/your-id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Discord</span>
        </a>
      </div>
    </motion.div>
  );
};