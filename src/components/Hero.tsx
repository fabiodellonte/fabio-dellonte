import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, MapPin } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6 relative"
    >
      <LanguageSwitcher />
      
      <Avatar className="w-48 h-48 border-2 border-primary">
        <AvatarImage src="/lovable-uploads/ef193632-5cc4-4552-965d-e1dd36c1d830.png" alt="Fabio Dell'Onte" />
        <AvatarFallback>FD</AvatarFallback>
      </Avatar>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Fabio Dell'Onte
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
          Software Operations Manager at Biesse Group
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

      <p className="text-lg max-w-2xl mx-auto text-muted-foreground text-center">
        Passionate about Application Lifecycle Management and software development,
        with expertise in DevOps infrastructure and Agile methodologies.
      </p>
    </motion.div>
  );
};