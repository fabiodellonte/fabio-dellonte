import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Fabio Dell'Onte
      </h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
        Software Operations Manager at Biesse Group
      </h2>
      <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
        Passionate about Application Lifecycle Management and software development,
        with expertise in DevOps infrastructure and Agile methodologies.
      </p>
    </motion.div>
  );
};