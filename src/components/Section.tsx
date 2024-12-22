import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center p-8",
        className
      )}
      {...props}
    >
      <div className="max-w-4xl w-full">{children}</div>
    </section>
  );
};