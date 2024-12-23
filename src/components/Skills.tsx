import { motion } from "framer-motion";
import { useSettings } from "@/contexts/SettingsContext";

const translations = {
  en: {
    title: "Skills",
    categories: [
      {
        name: "Languages & Frameworks",
        skills: ["C#", "C++", "TypeScript", "Qt", "QML", ".NET Framework"]
      },
      {
        name: "DevOps & Tools",
        skills: ["Azure DevOps", "Git", "Jenkins", "Docker", "CI/CD"]
      },
      {
        name: "Cloud & Infrastructure",
        skills: ["Azure", "Cloud Computing", "Infrastructure Management"]
      },
      {
        name: "Methodologies",
        skills: ["Agile", "Test Driven Development", "Object-Oriented Design"]
      }
    ]
  },
  it: {
    title: "Competenze",
    categories: [
      {
        name: "Linguaggi & Framework",
        skills: ["C#", "C++", "TypeScript", "Qt", "QML", ".NET Framework"]
      },
      {
        name: "DevOps & Strumenti",
        skills: ["Azure DevOps", "Git", "Jenkins", "Docker", "CI/CD"]
      },
      {
        name: "Cloud & Infrastruttura",
        skills: ["Azure", "Cloud Computing", "Gestione Infrastrutture"]
      },
      {
        name: "Metodologie",
        skills: ["Agile", "Test Driven Development", "Progettazione Object-Oriented"]
      }
    ]
  }
};

export const Skills = () => {
  const { language } = useSettings();
  const t = translations[language];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};