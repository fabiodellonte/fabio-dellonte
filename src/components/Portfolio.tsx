import { Section } from "../components/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Bot, GamepadIcon, Code, FileCode, GitBranch, Cloud, BrainCircuit } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  demo?: string;
  source: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Chess 3D with React",
    subtitle: "3D Chess Game",
    description:
      "A fully interactive 3D chess game built with React and Three.js, with move logic, board navigation, and immersive visuals.",
    demo: "https://chess3dchess.netlify.app/",
    source: "https://github.com/fabiodellonte/3dchess",
    tags: ["#Bolt.Diy", "#Game", "#React", "#TypeScript", "#GitHub", "#Netlify"],
  },
  {
    title: "Tic-Tac-Toe with React",
    subtitle: "Classic Game with AI",
    description:
      "A Tic-Tac-Toe implementation with AI opponent and clean UI, focused on simple gameplay and responsive interactions.",
    demo: "https://tristris.netlify.app/",
    source: "https://github.com/fabiodellonte/tris",
    tags: ["#Bolt.Diy", "#Game", "#React", "#TypeScript", "#GitHub", "#Netlify"],
  },
  {
    title: "Docker Ollama API",
    subtitle: "Local LLM Gateway",
    description:
      "FastAPI service running in Docker that exposes Ollama models via `/models` and `/chat`, with logging and configurable generation parameters.",
    source: "https://github.com/fabiodellonte/docker-ollama-api",
    tags: ["#Docker", "#Ollama", "#FastAPI", "#Python", "#LocalAI"],
  },
  {
    title: "Docker Ollama Chat UI",
    subtitle: "Mobile-friendly Web Chat",
    description:
      "Web chat interface connected to the API gateway, with model selection, typing indicator, timestamped messages, and user settings.",
    source: "https://github.com/fabiodellonte/docker-ollama-chat",
    tags: ["#Docker", "#WebUI", "#Chat", "#JavaScript", "#UX"],
  },
  {
    title: "PersonalKnowledge",
    subtitle: "Knowledge Automation Vault",
    description:
      "Git-backed Obsidian knowledge system with automation pipelines for diary backfill, linking, and archive generation.",
    source: "https://github.com/fabiodellonte/PersonalKnowledge",
    tags: ["#Obsidian", "#Automation", "#Python", "#KnowledgeGraph", "#Git"],
  },
  {
    title: "Citizen Ticket Hub",
    subtitle: "Public Service Workflow",
    description:
      "Hub project for collecting and managing citizen requests with structured issue tracking and workflow-oriented design.",
    source: "https://github.com/fabiodellonte/citizen-ticket-hub",
    tags: ["#Workflow", "#CivicTech", "#Product", "#GitHub"],
  },
];

const iconForTag = (tag: string) => {
  if (tag.includes("#Game")) return <GamepadIcon className="w-3 h-3" />;
  if (tag.includes("#AI") || tag.includes("#Ollama") || tag.includes("#LocalAI"))
    return <BrainCircuit className="w-3 h-3" />;
  if (tag.includes("#React") || tag.includes("#WebUI")) return <Code className="w-3 h-3" />;
  if (tag.includes("#TypeScript") || tag.includes("#Python") || tag.includes("#JavaScript"))
    return <FileCode className="w-3 h-3" />;
  if (tag.includes("#Git") || tag.includes("#GitHub")) return <GitBranch className="w-3 h-3" />;
  if (tag.includes("#Netlify") || tag.includes("#Docker")) return <Cloud className="w-3 h-3" />;
  return <Bot className="w-3 h-3" />;
};

export const Portfolio = () => {
  return (
    <Section className="py-8" id="portfolio">
      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title} className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={`${project.title}-${tag}`} variant="secondary" className="flex items-center gap-1">
                    {iconForTag(tag)}
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-primary"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:text-primary"
                >
                  Source Code
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
