import Experience from "@/components/experience";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 md:px-8">
      <Hero />
      <Experience />
    </main>
  );
}
