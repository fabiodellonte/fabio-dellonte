import { motion } from "framer-motion";
import { useSettings } from "@/contexts/SettingsContext";
import {
  CodeIcon,
  GitHubLogoIcon,
  FileIcon,
  FileTextIcon,
  GridIcon,
  RocketIcon,
  CubeIcon,
  GlobeIcon,
  BarChartIcon,
  LightningBoltIcon,
  BoxIcon,
  CommitIcon,
  LayersIcon,
  MixerHorizontalIcon,
  StackIcon,
  TokensIcon,
  ViewGridIcon,
  DashboardIcon,
  GearIcon,
  CrossCircledIcon,
  ReaderIcon,
  BackpackIcon,
  LapTimerIcon,
  ModulzLogoIcon,
} from "@radix-ui/react-icons";
import {
  Cloud,
  TestTube,
  Bot,
  Database,
  Monitor,
  Terminal,
} from "lucide-react";

const skillIcons = {
  "C#": <CodeIcon className="w-4 h-4 text-blue-500" />,
  "C++": <CodeIcon className="w-4 h-4 text-green-500" />,
  C: <CodeIcon className="w-4 h-4 text-orange-500" />,
  TypeScript: <FileTextIcon className="w-4 h-4 text-blue-400" />,
  Qt: <ViewGridIcon className="w-4 h-4 text-green-400" />,
  QML: <CodeIcon className="w-4 h-4 text-yellow-500" />,
  ".NET Framework": <ModulzLogoIcon className="w-4 h-4 text-purple-500" />,
  "Node.js": <Terminal className="w-4 h-4 text-green-600" />,
  PowerShell: <Terminal className="w-4 h-4 text-blue-600" />,
  Batch: <CommitIcon className="w-4 h-4 text-gray-500" />,
  CMD: <CommitIcon className="w-4 h-4 text-gray-500" />,
  "Azure DevOps": <Cloud className="w-4 h-4 text-blue-500" />,
  Git: <GitHubLogoIcon className="w-4 h-4 text-orange-500" />,
  Jenkins: <GearIcon className="w-4 h-4 text-red-500" />,
  Docker: <CubeIcon className="w-4 h-4 text-blue-400" />,
  "CI/CD": <RocketIcon className="w-4 h-4 text-purple-400" />,
  YAML: <FileIcon className="w-4 h-4 text-red-400" />,
  "Visual Studio 2022": <CodeIcon className="w-4 h-4 text-purple-600" />,
  "Visual Studio 2019": <CodeIcon className="w-4 h-4 text-purple-500" />,
  "Visual Studio 2017": <CodeIcon className="w-4 h-4 text-purple-400" />,
  "Visual Studio 2015": <CodeIcon className="w-4 h-4 text-purple-300" />,
  "Visual Studio 2013": <CodeIcon className="w-4 h-4 text-purple-200" />,
  "Visual Studio 2012": <CodeIcon className="w-4 h-4 text-purple-200" />,
  "Visual Studio 2010": <CodeIcon className="w-4 h-4 text-purple-200" />,
  "Visual Studio 2008": <CodeIcon className="w-4 h-4 text-purple-200" />,
  "Visual Studio 2005": <CodeIcon className="w-4 h-4 text-purple-200" />,
  "Visual Studio Code": <CodeIcon className="w-4 h-4 text-blue-500" />,
  Cursor: <CodeIcon className="w-4 h-4 text-green-500" />,
  Windsurfer: <CodeIcon className="w-4 h-4 text-cyan-500" />,
  Azure: <Cloud className="w-4 h-4 text-blue-500" />,
  "Windows Azure": <Cloud className="w-4 h-4 text-blue-400" />,
  "Cloud Computing": <Cloud className="w-4 h-4 text-blue-300" />,
  DevOps: <GearIcon className="w-4 h-4 text-green-500" />,
  "Elastic Stack": <BarChartIcon className="w-4 h-4 text-yellow-500" />,
  "Unit Tests": <TestTube className="w-4 h-4 text-green-400" />,
  "Test Automation": <LapTimerIcon className="w-4 h-4 text-blue-400" />,
  "Testing di software": (
    <MixerHorizontalIcon className="w-4 h-4 text-purple-400" />
  ),
  "Software Engineering": <CubeIcon className="w-4 h-4 text-blue-500" />,
  "Software Development": <CodeIcon className="w-4 h-4 text-green-500" />,
  "Software Project Management": (
    <BackpackIcon className="w-4 h-4 text-orange-500" />
  ),
  "Object Oriented Design": <BoxIcon className="w-4 h-4 text-purple-500" />,
  OOP: <BoxIcon className="w-4 h-4 text-purple-400" />,
  "Design pattern": <BoxIcon className="w-4 h-4 text-purple-300" />,
  SOLID: <LayersIcon className="w-4 h-4 text-blue-500" />,
  "CAD/CAM": <DashboardIcon className="w-4 h-4 text-orange-500" />,
  "Problem solving": <LightningBoltIcon className="w-4 h-4 text-yellow-500" />,
  Troubleshooting: <CrossCircledIcon className="w-4 h-4 text-red-500" />,
  "Project Management": <BackpackIcon className="w-4 h-4 text-green-500" />,
  "Applicazioni Web": <GlobeIcon className="w-4 h-4 text-blue-500" />,
  "Microsoft Power BI": <BarChartIcon className="w-4 h-4 text-yellow-500" />,
  SQL: <Database className="w-4 h-4 text-blue-400" />,
  JSON: <FileIcon className="w-4 h-4 text-green-400" />,
  "OpenAI ChatGPT": <Bot className="w-4 h-4 text-green-500" />,
  "OpenAI APIs": <Bot className="w-4 h-4 text-green-400" />,
  "Anthropic Claude": <Bot className="w-4 h-4 text-purple-500" />,
  "Meta LLaMA": <Bot className="w-4 h-4 text-orange-500" />,
  Ollama: <Bot className="w-4 h-4 text-blue-500" />,
  "Microsoft Phi-3": <Bot className="w-4 h-4 text-cyan-500" />,
  "Windows 11": <Monitor className="w-4 h-4 text-blue-500" />,
  "Windows 10": <Monitor className="w-4 h-4 text-blue-400" />,
  "Windows 7": <Monitor className="w-4 h-4 text-blue-300" />,
  "Windows XP": <Monitor className="w-4 h-4 text-blue-200" />,
  Linux: <Terminal className="w-4 h-4 text-orange-500" />,
};

const translations = {
  en: {
    title: "Skills",
    categories: [
      {
        name: "Languages & Frameworks",
        skills: [
          "C#",
          "C++",
          "C",
          "TypeScript",
          "Qt",
          "QML",
          ".NET Framework",
          "Node.js",
          "PowerShell",
          "Batch",
          "CMD",
          "Standard Template Library (STL)",
        ],
      },
      {
        name: "DevOps",
        skills: [
          "Azure DevOps",
          "Git",
          "Jenkins",
          "Docker",
          "CI/CD",
          "Continuous Integration",
          "Continuous Delivery",
          "Subversion",
          "YAML",
          "Software Configuration Management",
        ],
      },
      {
        name: "IDEs & Tools",
        skills: [
          "Visual Studio 2022",
          "Visual Studio 2019",
          "Visual Studio 2017",
          "Visual Studio 2015",
          "Visual Studio 2013",
          "Visual Studio 2012",
          "Visual Studio 2010",
          "Visual Studio 2008",
          "Visual Studio 2005",
          "Visual Studio Code",
          "Cursor",
          "Windsurfer",
        ],
      },
      {
        name: "Operating Systems",
        skills: [
          "Windows 11",
          "Windows 10",
          "Windows 7",
          "Windows XP",
          "Linux",
        ],
      },
      {
        name: "Cloud & Infrastructure",
        skills: [
          "Azure",
          "Windows Azure",
          "Cloud Computing",
          "DevOps",
          "Elastic Stack",
        ],
      },
      {
        name: "Testing & Quality",
        skills: [
          "Unit Tests",
          "Test Automation",
          "Testing di software",
          "Test Driven Development",
        ],
      },
      {
        name: "Software Engineering",
        skills: [
          "Software Engineering",
          "Software Development",
          "Software Project Management",
          "Object Oriented Design",
          "OOP",
          "Object-oriented analysis and design (OOAD)",
          "Design pattern",
          "SOLID",
          "Agile Methodologies",
        ],
      },
      {
        name: "Domain Expertise",
        skills: [
          "CAD/CAM",
          "Problem solving",
          "Troubleshooting",
          "Project Management",
          "Applicazioni Web",
          "Microsoft Power BI",
          "Automazione dei processi",
          "SQL",
          "JSON",
        ],
      },
      {
        name: "AI & Machine Learning",
        skills: [
          "OpenAI ChatGPT",
          "OpenAI APIs",
          "Anthropic Claude",
          "Meta LLaMA",
          "Ollama",
          "Microsoft Phi-3",
        ],
      },
    ],
  },
  it: {
    title: "Competenze",
    categories: [
      {
        name: "Linguaggi & Framework",
        skills: [
          "C#",
          "C++",
          "C",
          "TypeScript",
          "Qt",
          "QML",
          ".NET Framework",
          "Node.js",
          "PowerShell",
          "Batch",
          "CMD",
          "Standard Template Library (STL)",
        ],
      },
      {
        name: "DevOps",
        skills: [
          "Azure DevOps",
          "Git",
          "Jenkins",
          "Docker",
          "CI/CD",
          "Continuous Integration",
          "Continuous Delivery",
          "Subversion",
          "YAML",
          "Software Configuration Management",
        ],
      },
      {
        name: "IDE & Strumenti",
        skills: [
          "Visual Studio 2022",
          "Visual Studio 2019",
          "Visual Studio 2017",
          "Visual Studio 2015",
          "Visual Studio 2013",
          "Visual Studio 2012",
          "Visual Studio 2010",
          "Visual Studio 2008",
          "Visual Studio 2005",
          "Visual Studio Code",
          "Cursor",
          "Windsurfer",
        ],
      },
      {
        name: "Sistemi Operativi",
        skills: [
          "Windows 11",
          "Windows 10",
          "Windows 7",
          "Windows XP",
          "Linux",
        ],
      },
      {
        name: "Cloud & Infrastruttura",
        skills: [
          "Azure",
          "Windows Azure",
          "Cloud Computing",
          "DevOps",
          "Elastic Stack",
        ],
      },
      {
        name: "Testing & Qualità",
        skills: [
          "Unit Tests",
          "Test Automation",
          "Testing di software",
          "Test Driven Development",
        ],
      },
      {
        name: "Ingegneria del Software",
        skills: [
          "Software Engineering",
          "Software Development",
          "Software Project Management",
          "Object Oriented Design",
          "OOP",
          "Object-oriented analysis and design (OOAD)",
          "Design pattern",
          "SOLID",
          "Agile Methodologies",
        ],
      },
      {
        name: "Competenze Specifiche",
        skills: [
          "CAD/CAM",
          "Problem solving",
          "Troubleshooting",
          "Project Management",
          "Applicazioni Web",
          "Microsoft Power BI",
          "Automazione dei processi",
          "SQL",
          "JSON",
        ],
      },
      {
        name: "AI & Machine Learning",
        skills: [
          "OpenAI ChatGPT",
          "OpenAI APIs",
          "Anthropic Claude",
          "Meta LLaMA",
          "Ollama",
          "Microsoft Phi-3",
        ],
      },
    ],
  },
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
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm flex items-center gap-2"
                >
                  {skillIcons[skill] || null}
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
