import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Operations Manager",
    company: "Biesse",
    period: "Jan 2023 - Present",
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
];

export const Experience = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-muted"
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