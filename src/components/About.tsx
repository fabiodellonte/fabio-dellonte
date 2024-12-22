import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        I have a strong interest in Application Lifecycle Management and software development. 
        With extensive experience in DevOps infrastructure and Agile methodologies, 
        I'm committed to improving process efficiency through automation, particularly 
        in the manufacturing sector.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        I believe in seeking practical and concrete solutions, compliant with strict 
        requirements and deadlines. Beyond technical skills, I value creating a 
        comfortable environment where colleagues can thrive, emphasizing the importance 
        of listening and providing support.
      </p>
    </motion.div>
  );
};