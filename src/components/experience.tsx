import { experiences } from "@/data/experience";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Experience
        </h2>

        <p className="mt-2 text-muted-foreground">
          My professional journey so far.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <Card
            key={`${experience.company}-${experience.role}`}
            className="
              bg-card/50
              border-border/50
              backdrop-blur
              transition-all
              hover:border-blue-500/30
            "
          >
            <CardHeader>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <CardTitle className="text-xl">{experience.role}</CardTitle>

                  <CardDescription className="mt-1">
                    {experience.company}
                  </CardDescription>
                </div>

                <div className="text-sm text-muted-foreground">
                  {experience.duration}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="leading-7 text-muted-foreground">
                {experience.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
