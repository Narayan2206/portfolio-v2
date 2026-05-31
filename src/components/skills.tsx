import { skills } from "@/data/skills";
import { Badge } from "./ui/badge";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>

        <p className="mt-2 text-muted-foreground">
          A snapshot of the technologies in my development toolkit.
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(skills).map(([category, techs]) => (
          <div key={category}>
            <h3 className="mb-4 text-lg font-semibold capitalize">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
