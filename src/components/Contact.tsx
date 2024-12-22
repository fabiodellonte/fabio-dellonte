import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center space-y-6"
    >
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
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
          href="mailto:your.email@example.com"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </a>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5" />
          <span>Pesaro, Marche, Italia</span>
        </div>
      </div>
    </motion.div>
  );
};