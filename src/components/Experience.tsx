import { motion } from "framer-motion";
import { useSettings } from "@/contexts/SettingsContext";

const translations = {
  en: {
    title: "Experience",
    experiences: [
      {
        title: "Software Quality Manager",
        company: "Biesse",
        period: "Aug 2023 - Present",
        responsibilities: [
          "Quality strategy and governance across software product lines",
          "Definition and monitoring of quality KPIs and release gates",
          "Coordination of QA practices, validation processes, and continuous improvement",
          "Cross-team alignment with engineering, operations, suppliers, and customers"
        ]
      },
      {
        title: "Software Operations Manager",
        company: "Biesse",
        period: "Jan 2023 - Jul 2023",
        responsibilities: [
          "SDLC, Software Development Lifecycle Management (Agile DevOps, CI/CD)",
          "SCM, software configuration management",
          "Software protection development",
          "Cloud Infrastructure development",
          "Technical relationships with suppliers and customers"
        ]
      },
      {
        title: "Process and Test Manager",
        company: "Biesse",
        period: "Dec 2016 - Dec 2022",
        responsibilities: [
          "Development of Application Lifecycle Management processes",
          "Development of cloud integration for user data analysis",
          "Development of software infrastructure tools",
          "Management of technical relationships"
        ]
      },
      {
        title: "Software Team Leader",
        company: "Biesse",
        period: "Mar 2012 - Nov 2016",
        responsibilities: [
          "Cad/Cam software technical management",
          "Post processor & vertical software development",
          "Software validation and QA"
        ]
      }
    ]
  },
  it: {
    title: "Esperienza",
    experiences: [
      {
        title: "Software Quality Manager",
        company: "Biesse",
        period: "Ago 2023 - Presente",
        responsibilities: [
          "Strategia e governance della qualità sui prodotti software",
          "Definizione e monitoraggio KPI di qualità e release gate",
          "Coordinamento pratiche QA, processi di validazione e miglioramento continuo",
          "Allineamento cross-team con engineering, operations, fornitori e clienti"
        ]
      },
      {
        title: "Software Operations Manager",
        company: "Biesse",
        period: "Gen 2023 - Lug 2023",
        responsibilities: [
          "SDLC, Gestione del ciclo di vita dello sviluppo software (Agile DevOps, CI/CD)",
          "SCM, gestione della configurazione software",
          "Sviluppo protezione software",
          "Sviluppo infrastruttura Cloud",
          "Relazioni tecniche con fornitori e clienti"
        ]
      },
      {
        title: "Process and Test Manager",
        company: "Biesse",
        period: "Dic 2016 - Dic 2022",
        responsibilities: [
          "Sviluppo dei processi di Application Lifecycle Management",
          "Sviluppo dell'integrazione cloud per l'analisi dei dati utente",
          "Sviluppo di strumenti per l'infrastruttura software",
          "Gestione delle relazioni tecniche"
        ]
      },
      {
        title: "Software Team Leader",
        company: "Biesse",
        period: "Mar 2012 - Nov 2016",
        responsibilities: [
          "Gestione tecnica software Cad/Cam",
          "Sviluppo post processor e software verticali",
          "Validazione software e QA"
        ]
      }
    ]
  }
};

export const Experience = () => {
  const { language } = useSettings();
  const t = translations[language];

  return (
    <div className="space-y-12 experience">
      <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
      <div className="space-y-12">
        {t.experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-muted experience-item"
          >
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2" />
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-muted-foreground mb-2">{exp.company}</p>
            <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-muted-foreground">
                  {resp}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};