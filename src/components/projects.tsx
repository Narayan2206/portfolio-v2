import { projects } from "@/data/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Projects
        </h2>

        <p className="mt-3 text-muted-foreground">
          A collection of personal projects and experiments.
        </p>
      </div>

      <div
      //   className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            className="
              flex
              flex-col
              transition-all
              hover:border-blue-500/30
            "
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>{project.title}</CardTitle>
                {project.featured && (
                  <Badge
                    className="
                    w-fit
                    bg-blue-500/10
                    text-blue-400
                    border-blue-500/20
                    "
                  >
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Personal Project • Full Stack Application
              </p>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-muted-foreground leading-7">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="gap-3">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <Link href={project.github} target="_blank">
                  <SiGithub />
                  Code
                </Link>
              </Button>

              <Button
                size="sm"
                asChild
                className="bg-blue-500 hover:bg-blue-600"
              >
                <Link href={project.demo} target="_blank">
                  <ExternalLink />
                  Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
