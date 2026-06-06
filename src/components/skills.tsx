import { skills } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>

        <p className="mt-2 text-muted-foreground">
          A snapshot of the technologies in my development toolkit.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <Card
            key={group.title}
            className="
              bg-card/50
              border-border/50
              hover:border-blue-500/30
              transition-colors
            "
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{group.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      text-sm
                      text-muted-foreground
                      bg-muted/40
                      px-2.5
                      py-1
                      rounded-md
                      border border-border/40
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
