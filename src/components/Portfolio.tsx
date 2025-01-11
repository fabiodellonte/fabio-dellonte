import { Section } from "../components/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Bot, GamepadIcon, Code, FileCode, GitBranch, Cloud, BrainCircuit } from "lucide-react";

export const Portfolio = () => {
  return (
    <Section className="py-8" id="portfolio">
      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Chess 3D with React</CardTitle>
            <CardDescription>3D Chess Game</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm mb-4">
              A fully interactive 3D chess game built with React and Three.js
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Bot className="w-3 h-3" />#Bolt.Diy
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <GamepadIcon className="w-3 h-3" />#Game
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Code className="w-3 h-3" />#React
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <FileCode className="w-3 h-3" />#TypeScript
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" />#GitHub
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Cloud className="w-3 h-3" />#Netlify
              </Badge>
            </div>
            <div className="flex gap-2">
              <a
                href="https://chess3dchess.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/fabiodellonte/3dchess"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-primary"
              >
                Source Code
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Tic-Tac-Toe with React</CardTitle>
            <CardDescription>Classic Game with AI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm mb-4">
              A Tic-Tac-Toe game with AI opponent built with React
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Bot className="w-3 h-3" />#Bolt.Diy
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <GamepadIcon className="w-3 h-3" />#Game
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Code className="w-3 h-3" />#React
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <FileCode className="w-3 h-3" />#TypeScript
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" />#GitHub
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Cloud className="w-3 h-3" />#Netlify
              </Badge>
            </div>
            <div className="flex gap-2">
              <a
                href="https://tristris.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/fabiodellonte/tris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-primary"
              >
                Source Code
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
