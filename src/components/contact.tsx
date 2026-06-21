"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

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
              <SiGithub />
              GitHub
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://www.linkedin.com/in/narayanpal2206/"
              target="_blank"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </Button>

          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => {
              navigator.clipboard.writeText("narayan220602@gmail.com");
              toast.info("Email copied to clipboard.");
            }}
          >
            <Mail /> narayan220602@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
}
