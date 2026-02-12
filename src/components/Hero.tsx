import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Phone,
  Mail,
  Home,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { TypeAnimation } from "react-type-animation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const translations = {
  en: {
    role: "Software Engineer",
    description:
      "Passionate about technology and innovation, with over 18 years of experience in software development and team leadership.",
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
    location: "Pesaro, Marche, Italy",
  },
  it: {
    role: "Ingegnere del Software",
    description:
      "Appassionato di tecnologia e innovazione, con oltre 18 anni di esperienza nello sviluppo software e nella leadership di team.",
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
    location: "Pesaro, Marche, Italia",
  },
};

// avatar glow animation moved to global styles (index.css)

export const Hero = () => {
  const { language } = useSettings();
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6 relative pt-12 md:pt-10"
    >
      <div className="avatar-frame">
        <Avatar className="w-56 h-56 md:w-64 md:h-64 border-[4px] border-primary avatar-glow">
        <AvatarImage
          src="/fabio-dellonte/lovable-uploads/ef193632-5cc4-4552-965d-e1dd36c1d830.png"
          alt="Fabio Dell'Onte"
        />
        <AvatarFallback>FD</AvatarFallback>
        </Avatar>
      </div>

      <div className="text-center">
        <h1 className="display-name font-bold mb-2">Fabio Dell'Onte</h1>
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

      <TooltipProvider delayDuration={120}>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="tel:+393297488632"
                aria-label="Phone"
                className="icon-pill icon-unified text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              >
                <Phone className="icon-unified-svg" />
              </a>
            </TooltipTrigger>
            <TooltipContent className="tooltip-premium">+39 329 748 8632</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="mailto:fabiodellonte@gmail.com"
                aria-label="Email"
                className="icon-pill icon-unified text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30"
              >
                <Mail className="icon-unified-svg" />
              </a>
            </TooltipTrigger>
            <TooltipContent className="tooltip-premium">fabiodellonte@gmail.com</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.google.com/maps/place/Pesaro,+Province+of+Pesaro+and+Urbino,+Italy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
                className="icon-pill icon-unified text-green-500 hover:bg-green-100 dark:hover:bg-green-900/30"
              >
                <Home className="icon-unified-svg" />
              </a>
            </TooltipTrigger>
            <TooltipContent className="tooltip-premium">{t.location}</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <div className="social-row flex flex-nowrap justify-center gap-2 mt-2 overflow-x-auto px-1">
        <a
          href="https://www.linkedin.com/in/fabio-dell-onte-09b0419/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="icon-pill icon-unified text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30"
        >
          <Linkedin className="icon-unified-svg" />
        </a>
        <a
          href="https://github.com/fabiodellonte/fabio-dellonte"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="icon-pill icon-unified text-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900/30"
        >
          <Github className="icon-unified-svg" />
        </a>
        <a
          href="https://x.com/FabioDellOnte"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          title="X"
          className="icon-pill icon-unified text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
        >
          <Twitter className="icon-unified-svg" />
        </a>
        <a
          href="https://m.facebook.com/fdellonte/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
          className="icon-pill icon-unified text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30"
        >
          <Facebook className="icon-unified-svg" />
        </a>
        <a
          href="https://www.instagram.com/fabiodellonte/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="icon-pill icon-unified text-pink-500 hover:bg-pink-100 dark:hover:bg-pink-900/30"
        >
          <Instagram className="icon-unified-svg" />
        </a>
      </div>
    </motion.div>
  );
};

