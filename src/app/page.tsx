import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import SideNavigation from "@/components/side-navigation";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <SideNavigation />
      <main className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Narayan Pal
      </footer>
    </>
  );
}
