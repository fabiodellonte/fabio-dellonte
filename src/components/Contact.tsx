import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Github, Facebook, Twitter, MessageCircle } from "lucide-react";

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