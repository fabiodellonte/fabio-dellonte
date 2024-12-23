import { motion } from "framer-motion";
import { useSettings } from "@/contexts/SettingsContext";

const translations = {
  en: {
    title: "About Me",
    paragraph1: "I have a strong interest in Application Lifecycle Management and software development. With extensive experience in DevOps infrastructure and Agile methodologies, I'm committed to improving process efficiency through automation, particularly in the manufacturing sector.",
    paragraph2: "I believe in seeking practical and concrete solutions, compliant with strict requirements and deadlines. Beyond technical skills, I value creating a comfortable environment where colleagues can thrive, emphasizing the importance of listening and providing support."
  },
  it: {
    title: "Chi Sono",
    paragraph1: "Ho un forte interesse per l'Application Lifecycle Management e lo sviluppo software. Con una vasta esperienza in infrastrutture DevOps e metodologie Agili, sono impegnato a migliorare l'efficienza dei processi attraverso l'automazione, in particolare nel settore manifatturiero.",
    paragraph2: "Credo nella ricerca di soluzioni pratiche e concrete, conformi a requisiti e scadenze rigorose. Oltre alle competenze tecniche, do valore alla creazione di un ambiente confortevole dove i colleghi possano prosperare, enfatizzando l'importanza dell'ascolto e del supporto."
  }
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
      <h2 className="text-3xl font-bold mb-6">{t.title}</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {t.paragraph1}
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {t.paragraph2}
      </p>
    </motion.div>
  );
};