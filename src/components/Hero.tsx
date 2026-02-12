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
      className="flex flex-col items-center gap-6 relative pt-20 md:pt-16"
    >
      <Avatar className="w-[55%] md:w-64 h-[55%] md:h-64 border-[4px] border-primary avatar-glow">
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

      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <a
          href="tel:+393297488632"
          aria-label="Phone"
          title="+39 329 748 8632"
          className="icon-pill text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="mailto:fabiodellonte@gmail.com"
          aria-label="Email"
          title="fabiodellonte@gmail.com"
          className="icon-pill text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://www.google.com/maps/place/Pesaro,+Province+of+Pesaro+and+Urbino,+Italy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Location"
          title={t.location}
          className="icon-pill text-green-500 hover:bg-green-100 dark:hover:bg-green-900/30"
        >
          <Home className="w-5 h-5" />
        </a>
      </div>

      <div className="social-row flex flex-nowrap justify-center gap-2 mt-2 overflow-x-auto px-1">
        <a
          href="https://www.linkedin.com/in/fabio-dell-onte-09b0419/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="icon-pill text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30"
        >
          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://github.com/fabiodellonte/fabio-dellonte"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="icon-pill text-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900/30"
        >
          <Github className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://x.com/FabioDellOnte"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          title="X"
          className="icon-pill text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
        >
          <Twitter className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://m.facebook.com/fdellonte/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
          className="icon-pill text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30"
        >
          <Facebook className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.instagram.com/fabiodellonte/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="icon-pill text-pink-500 hover:bg-pink-100 dark:hover:bg-pink-900/30"
        >
          <Instagram className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </motion.div>
  );
};
