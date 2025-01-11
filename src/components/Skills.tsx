import { motion } from "framer-motion";
import { useSettings } from "@/contexts/SettingsContext";
import {
  Terminal,
  Monitor,
  Cloud,
  Settings,
  Rocket,
  Box,
  Code,
  Database,
  FileCode,
  Cpu,
  Wrench,
  BrainCircuit,
  Workflow,
  Network,
  Server,
  AppWindow,
  TestTubes,
  GitBranch,
  Container,
  FileJson,
  Laptop,
  Bot,
  Cog,
  LayoutDashboard,
  Gauge,
  Puzzle,
  Blocks,
  Binary,
  Infinity,
  Microscope,
  Webhook,
  BarChart,
  Table,
  LineChart,
  Activity,
  Globe,
  Layers3,
} from "lucide-react";

const skillIcons = {
  // Linguaggi di Programmazione
  "C#": <Code className="w-4 h-4 text-purple-500" />,
  "C++": <Code className="w-4 h-4 text-blue-500" />,
  Python: <Code className="w-4 h-4 text-yellow-500" />,
  TypeScript: <FileCode className="w-4 h-4 text-blue-400" />,
  JavaScript: <FileCode className="w-4 h-4 text-yellow-400" />,
  HTML: <Code className="w-4 h-4 text-orange-500" />,
  CSS: <Code className="w-4 h-4 text-blue-500" />,
  PowerShell: <Terminal className="w-4 h-4 text-blue-500" />,
  Bash: <Terminal className="w-4 h-4 text-green-500" />,
  ".NET Framework": <Binary className="w-4 h-4 text-purple-500" />,
  "Standard Template Library (STL)": (
    <Blocks className="w-4 h-4 text-blue-400" />
  ),

  // DevOps & Tools
  Windows: <Monitor className="w-4 h-4 text-blue-500" />,
  Linux: <Terminal className="w-4 h-4 text-orange-500" />,
  Azure: <Cloud className="w-4 h-4 text-blue-500" />,
  "Azure DevOps": <Cloud className="w-4 h-4 text-blue-400" />,
  "Unit Tests": <TestTubes className="w-4 h-4 text-green-400" />,
  Jenkins: <Settings className="w-4 h-4 text-red-500" />,
  "CI/CD": <Rocket className="w-4 h-4 text-purple-400" />,
  Git: <GitBranch className="w-4 h-4 text-orange-500" />,
  GitHub: <GitBranch className="w-4 h-4 text-purple-400" />,
  SVN: <GitBranch className="w-4 h-4 text-blue-500" />,
  TFVC: <GitBranch className="w-4 h-4 text-purple-500" />,
  Docker: <Container className="w-4 h-4 text-blue-500" />,
  "Continuous Integration": <Infinity className="w-4 h-4 text-green-500" />,
  "Continuous Delivery": <Rocket className="w-4 h-4 text-orange-500" />,
  YAML: <FileCode className="w-4 h-4 text-red-400" />,
  SQL: <Database className="w-4 h-4 text-blue-500" />,
  JSON: <FileJson className="w-4 h-4 text-green-500" />,
  XML: <FileCode className="w-4 h-4 text-orange-400" />,

  // Domain Expertise
  "CAD/CAM": <Box className="w-4 h-4 text-orange-500" />,
  QML: <Code className="w-4 h-4 text-yellow-500" />,
  "Windows Desktop Application": (
    <AppWindow className="w-4 h-4 text-blue-500" />
  ),
  "Windows Services": <Server className="w-4 h-4 text-purple-500" />,
  "Remote Services": <Network className="w-4 h-4 text-green-500" />,
  "Problem solving": <Puzzle className="w-4 h-4 text-yellow-500" />,
  Troubleshooting: <Wrench className="w-4 h-4 text-red-500" />,
  "Project Management": <Workflow className="w-4 h-4 text-green-500" />,
  "Process Automation": <Cog className="w-4 h-4 text-blue-500" />,
  "Web Applications": <Globe className="w-4 h-4 text-blue-500" />,
  OpenGL: <Layers3 className="w-4 h-4 text-green-500" />,

  // Development Environment
  "Visual Studio 2022": <Laptop className="w-4 h-4 text-purple-500" />,
  "Visual Studio Code": <Code className="w-4 h-4 text-blue-500" />,
  "Cursor AI": <BrainCircuit className="w-4 h-4 text-green-500" />,
  "Bolt.diy": <Bot className="w-4 h-4 text-yellow-500" />,
  "Lovable.dev": <Bot className="w-4 h-4 text-pink-500" />,
  "Bolt.new": <Bot className="w-4 h-4 text-blue-500" />,
  Cline: <Bot className="w-4 h-4 text-purple-500" />,

  // AI & Machine Learning
  "OpenAI ChatGPT": <BrainCircuit className="w-4 h-4 text-green-500" />,
  "OpenAI APIs": <Bot className="w-4 h-4 text-green-400" />,
  "Anthropic Claude": <Bot className="w-4 h-4 text-purple-500" />,
  "Meta LLaMA": <Bot className="w-4 h-4 text-orange-500" />,
  Ollama: <Bot className="w-4 h-4 text-blue-500" />,
  "Microsoft Phi-3": <Bot className="w-4 h-4 text-cyan-500" />,

  // Analytics & Data
  "Microsoft Power BI": <BarChart className="w-4 h-4 text-yellow-500" />,
  "Microsoft Excel": <Table className="w-4 h-4 text-green-500" />,
  Kibana: <LineChart className="w-4 h-4 text-purple-500" />,
  "Elastic Stack": <LayoutDashboard className="w-4 h-4 text-orange-500" />,

  // Hobbies
  Running: <Activity className="w-4 h-4 text-blue-500" />,
};

const translations = {
  en: {
    title: "Skills",
    categories: {
      languages: "Programming Languages",
      devops: "DevOps & Tools",
      domain: "Domain Expertise",
      ide: "Development Environment",
      ai: "AI & Machine Learning",
      analytics: "Analytics & Data",
    },
  },
  it: {
    title: "Competenze",
    categories: {
      languages: "Linguaggi di Programmazione",
      devops: "DevOps & Strumenti",
      domain: "Competenze Specifiche",
      ide: "Ambiente di Sviluppo",
      ai: "AI & Machine Learning",
      analytics: "Analytics & Dati",
    },
  },
};

const skills = {
  languages: [
    "C#",
    "C++",
    "Python",
    "TypeScript",
    "JavaScript",
    "HTML",
    "PowerShell",
    "Bash",
    ".NET Framework",
    "Standard Template Library (STL)",
    "QML",
  ],
  devops: [
    "Windows",
    "Linux",
    "Azure",
    "Azure DevOps",
    "Unit Tests",
    "Jenkins",
    "CI/CD",
    "Git",
    "GitHub",
    "SVN",
    "TFVC",
    "Docker",
    "Continuous Integration",
    "Continuous Delivery",
    "YAML",
    "SQL",
    "JSON",
    "XML",
  ],
  domain: [
    "CAD/CAM",
    "Windows Desktop Application",
    "Windows Services",
    "Remote Services",
    "Problem solving",
    "Troubleshooting",
    "Project Management",
    "Process Automation",
    "Web Applications",
    "OpenGL",
  ],
  ide: [
    "Visual Studio 2022",
    "Visual Studio Code",
    "Cursor AI",
    "Bolt.diy",
    "Lovable.dev",
    "Bolt.new",
    "Cline",
  ],
  ai: [
    "OpenAI ChatGPT",
    "OpenAI APIs",
    "Anthropic Claude",
    "Meta LLaMA",
    "Ollama",
    "Microsoft Phi-3",
  ],
  analytics: [
    "Microsoft Power BI",
    "Microsoft Excel",
    "Kibana",
    "Elastic Stack",
  ],
};

export const Skills = () => {
  const { language } = useSettings();
  const t = translations[language];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">
              {t.categories[category as keyof typeof t.categories]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-secondary flex items-center gap-2 text-sm"
                >
                  {skillIcons[skill as keyof typeof skillIcons]}
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
