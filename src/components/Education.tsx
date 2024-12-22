import { motion } from "framer-motion";

const education = [
  {
    school: "Alma Mater Studiorum - Università di Bologna",
    degree: "Master's degree, Computer Science",
    period: "2005 - 2007",
    grade: "110/110 with honors",
    thesis: "Adaptive tessellation for subdivision surfaces in XCSubd"
  },
  {
    school: "Università degli Studi di Urbino Carlo Bo",
    degree: "Bachelor's degree, Applied Computer Science",
    period: "2001 - 2004",
    grade: "109/110"
  },
  {
    school: "ITIS \"Enrico Mattei\"",
    degree: "Diploma Istituto Tecnico Industriale, Electronics and Telecommunication",
    period: "1996 - 2001",
    grade: "100/100"
  }
];

export const Education = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-muted-foreground">{edu.degree}</p>
            <p className="text-sm text-muted-foreground">{edu.period}</p>
            <p className="text-sm font-medium">Grade: {edu.grade}</p>
            {edu.thesis && (
              <p className="text-sm text-muted-foreground">
                Thesis: {edu.thesis}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};