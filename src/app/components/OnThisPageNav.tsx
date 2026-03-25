import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Overview" },
  { id: "why-konflux", label: "Why Konflux" },
  { id: "tour-the-factory", label: "Tour The Factory" },
  { id: "how-it-works", label: "How It Works" },
  { id: "get-started-cta", label: "Get Started" },
];

export function OnThisPageNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(section.id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden xl:block w-[180px] shrink-0">
      <div className="sticky top-[80px]">
        <p
          className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          On this page
        </p>
        <ul className="space-y-1 border-l border-gray-200 dark:border-gray-800">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`block w-full text-left pl-3 py-1 text-xs transition-colors border-l-2 -ml-px ${
                  activeId === section.id
                    ? "border-violet-500 dark:border-violet-400 text-violet-600 dark:text-violet-400 font-medium"
                    : "border-transparent text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
