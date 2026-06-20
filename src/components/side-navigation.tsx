"use client";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    navigation.forEach((item) => {
      const element = document.getElementById(item.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
        fixed
        left-10
        top-1/2
        z-50
        hidden
        -translate-y-1/2
        xl:block
      "
    >
      <ul className="relative flex flex-col gap-6">
        {/* Vertical line */}
        <div
          className="
            absolute
            left-[5px]
            top-2
            bottom-2
            w-px
            bg-border
          "
        />

        {navigation.map((item) => (
          <li key={item.id} className="relative">
            <a
              href={`#${item.id}`}
              className="group flex items-center"
            >
              {/* Dot */}
              <span
                className={`
                  relative
                  z-10
                  h-3
                  w-3
                  rounded-full
                  border
                  border-border
                  bg-background
                  transition-all
                  group-hover:border-blue-400
                  group-hover:bg-blue-400
                  ${activeSection === item.id && `bg-blue-400 border-blue-400`}
                `}
              />

              {/* Label */}
              <span
                className={`
                  ml-4
                  opacity-0
                  -translate-x-2
                  text-sm
                  transition-all
                  duration-200
                  group-hover:translate-x-0
                  group-hover:opacity-100
                  group-hover:text-blue-400
                  ${activeSection === item.id ? `opacity-100 text-blue-400` : `text-muted-foreground`}
                `}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}