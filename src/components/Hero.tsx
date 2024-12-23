import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, Home, Github, Linkedin, Twitter } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { TypeAnimation } from "react-type-animation";

const translations = {
  en: {
    role: "Software Engineer",
    description:
      "Passionate about technology and innovation, with over 15 years of experience in software development and team leadership.",
    roles: [
      "Backend Developer",
      3000,
      "DevOps Engineer",
      3000,
      "Project Manager",
      3000,
      "Team Leader",
      3000,
      "Software Architect",
      3000,
    ],
  },
  it: {
    role: "Ingegnere del Software",
    description:
      "Appassionato di tecnologia e innovazione, con oltre 15 anni di esperienza nello sviluppo software e nella leadership di team.",
    roles: [
      "Backend Developer",
      3000,
      "DevOps Engineer",
      3000,
      "Project Manager",
      3000,
      "Team Leader",
      3000,
      "Software Architect",
      3000,
    ],
  },
};

// Aggiungiamo una keyframe animation per il glow
const glowAnimation = `
@keyframes glow-pulse {
  0% {
    box-shadow: 0 0 20px rgba(var(--primary), 0.4),
                0 0 30px rgba(var(--primary), 0.2);
  }
  33% {
    box-shadow: 0 0 20px rgba(var(--blue-500), 0.4),
                0 0 30px rgba(var(--blue-500), 0.2);
  }
  66% {
    box-shadow: 0 0 20px rgba(var(--purple-500), 0.4),
                0 0 30px rgba(var(--purple-500), 0.2);
  }
  100% {
    box-shadow: 0 0 20px rgba(var(--primary), 0.4),
                0 0 30px rgba(var(--primary), 0.2);
  }
}

.avatar-glow {
  animation: glow-pulse 10s ease-in-out infinite;
}
`;

// Aggiungiamo lo stile al documento
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = glowAnimation;
  document.head.appendChild(style);
}

export const Hero = () => {
  const { language } = useSettings();
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6 relative"
    >
      <Avatar className="w-64 h-64 border-[4px] border-primary avatar-glow">
        <AvatarImage
          src="/fabio-dellonte/lovable-uploads/ef193632-5cc4-4552-965d-e1dd36c1d830.png"
          alt="Fabio Dell'Onte"
        />
        <AvatarFallback>FD</AvatarFallback>
      </Avatar>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Fabio Dell'Onte</h1>
        <h2 className="text-xl md:text-2xl text-blue-500/90 dark:text-blue-400/90 mb-4">
          <TypeAnimation
            sequence={t.roles}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold"
          />
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {t.description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <a
          href="tel:+393297488632"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="p-2 rounded-full bg-secondary text-blue-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <span>+39 329 748 8632</span>
        </a>
        <a
          href="mailto:fabiodellonte@biesse.com"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="p-2 rounded-full bg-secondary text-red-500 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <span>fabiodellonte@biesse.com</span>
        </a>
        <span className="flex items-center gap-2 text-muted-foreground group">
          <div className="p-2 rounded-full bg-secondary text-green-500 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
            <Home className="w-5 h-5" />
          </div>
          <span>Pesaro, Marche, Italia</span>
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-2">
        <a
          href="https://www.linkedin.com/in/fabiodellonte/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="p-2 rounded-full bg-secondary text-blue-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
            <Linkedin className="w-5 h-5" />
          </div>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="p-2 rounded-full bg-secondary text-purple-500 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
            <Github className="w-5 h-5" />
          </div>
          <span>GitHub</span>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="p-2 rounded-full bg-secondary text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
            <Twitter className="w-5 h-5" />
          </div>
          <span>Twitter</span>
        </a>
      </div>
    </motion.div>
  );
};
