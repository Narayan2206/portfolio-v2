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
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <CardTitle className="text-xl">{experience.role}</CardTitle>

                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {experience.duration}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <CardDescription>{experience.company}</CardDescription>

                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {experience.location}
                  </p>
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
