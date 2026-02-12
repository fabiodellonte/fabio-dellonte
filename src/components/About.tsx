import { motion } from "framer-motion";
import { useSettings } from "@/contexts/SettingsContext";

const translations = {
  en: {
    title: "About Me",
    paragraph1:
      "I am a highly optimistic and life-loving person who believes in balancing professional dedication with personal enjoyment. I thrive on challenges while maintaining a positive outlook on life. When situations demand it, I can be extremely focused and determined, channeling all my energy into achieving goals. I strongly believe in people and their potential, always seeking to bring out the best in those around me. Above all, I am deeply committed to truth, transparency, and integrity in all aspects of life, considering these values fundamental pillars of both personal and professional relationships.",
    paragraph2:
      "Passionate about technology and innovation, with over 18 years of experience in software development and team leadership. Throughout my career, I've successfully managed complex projects and led high-performing teams, always focusing on delivering quality solutions while fostering a collaborative and growth-oriented environment.",
  },
  it: {
    title: "Chi Sono",
    paragraph1:
      "Sono una persona estremamente ottimista e amante della vita, che crede nell'equilibrio tra dedizione professionale e gioia di vivere. Amo le sfide mantenendo sempre un approccio positivo alla vita. Quando la situazione lo richiede, so essere estremamente determinato e concentrato, incanalando tutte le mie energie nel raggiungimento degli obiettivi. Credo fortemente nelle persone e nel loro potenziale, cercando sempre di far emergere il meglio in chi mi circonda. Soprattutto, sono profondamente legato alla verità, alla trasparenza e all'integrità in ogni aspetto della vita, considerando questi valori pilastri fondamentali sia delle relazioni personali che professionali.",
    paragraph2:
      "Appassionato di tecnologia e innovazione, con oltre 18 anni di esperienza nello sviluppo software e nella leadership di team. Durante la mia carriera, ho gestito con successo progetti complessi e guidato team ad alte prestazioni, concentrandomi sempre sulla consegna di soluzioni di qualità e sulla creazione di un ambiente collaborativo orientato alla crescita.",
  },
};

export const About = () => {
  const { language } = useSettings();
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="section-title font-bold mb-6">{t.title}</h2>
      <p className="copy-refined">
        {t.paragraph1}
      </p>
      <p className="copy-refined">
        {t.paragraph2}
      </p>
    </motion.div>
  );
};
