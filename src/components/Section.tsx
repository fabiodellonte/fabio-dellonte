import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center p-8",
        className
      )}
      {...props}
    >
      <div className="max-w-4xl w-full section-surface">{children}</div>
    </motion.section>
  );
};