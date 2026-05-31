import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Get In Touch
        </h2>

        <p className="mt-4 text-muted-foreground">
          I'm always open to discussing new opportunities, interesting projects,
          and connecting with other developers.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/Narayan2206" target="_blank">
              GitHub
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://www.linkedin.com/in/narayanpal2206/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Button>

          <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="mailto:narayan220602@gmail.com">Email</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
