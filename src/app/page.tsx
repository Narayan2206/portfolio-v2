import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 md:px-8">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Narayan Pal
      </footer>
    </main>
  );
}
