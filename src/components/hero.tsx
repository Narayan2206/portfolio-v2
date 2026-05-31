import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center py-26">
      <Image
        src="https://avatars.githubusercontent.com/u/116633349?v=4"
        alt="Narayan Pal"
        width={160}
        height={160}
        priority
        className="mb-6 rounded-full border border-border"
      />

      <div className="mb-4 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
        Frontend Developer
      </div>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        Narayan <span className="text-blue-400">Pal</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Building scalable web and mobile applications with React, Next.js,
        TypeScript and React Native.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground/80">
        <span>React</span>
        <span>•</span>
        <span>Next.js</span>
        <span>•</span>
        <span>TypeScript</span>
        <span>•</span>
        <span>React Native</span>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
          View Projects
        </Button>

        <Button variant="outline" size="lg">
          GitHub
        </Button>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Frontend Developer with experience building production web and mobile
        applications.
      </p>
    </section>
  );
}
