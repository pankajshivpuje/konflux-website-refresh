import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ChevronRight, Home, Pencil } from "lucide-react";
import imgScreenshot from "@/assets/f55f1f145f2f5ad148a10852a623b37983e712d3.png";

const sidebarNav = [
  {
    section: null,
    items: [{ label: "Introduction", id: "introduction", active: true }],
  },
  {
    section: "Overview",
    items: [
      { label: "Why Konflux?", id: "why-konflux" },
      { label: "Try Konflux", id: "try-konflux" },
    ],
  },
  {
    section: "Installation",
    collapsible: true,
    items: [
      { label: "Kubernetes", id: "kubernetes", indent: true },
      { label: "Local development", id: "local", indent: true },
    ],
  },
  {
    section: "Architecture",
    collapsible: true,
    items: [
      { label: "Components", id: "components", indent: true },
      { label: "Pipelines", id: "pipelines", indent: true },
      { label: "Build system", id: "build-system", indent: true },
    ],
  },
  {
    section: "Guides",
    items: [
      { label: "Configuration", id: "configuration" },
      { label: "Releasing software", id: "releasing" },
      { label: "Integration testing", id: "testing" },
    ],
  },
  {
    section: "Reference",
    items: [
      { label: "API Reference", id: "api" },
      { label: "CLI Reference", id: "cli" },
      { label: "Conforma policies", id: "policies" },
    ],
  },
];

function SidebarSection({ section, items, collapsible, activeId, onSelect }: {
  section: string | null;
  items: { label: string; id: string; indent?: boolean }[];
  collapsible?: boolean;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-1">
      {section && (
        <button
          onClick={() => collapsible && setOpen(!open)}
          className={`flex items-center justify-between w-full px-2 py-1.5 text-sm text-gray-900 dark:text-gray-100 font-medium hover:text-gray-900 dark:hover:text-white transition-colors ${collapsible ? "cursor-pointer" : "cursor-default"}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {section}
          {collapsible && (open ? <ChevronDown size={13} className="text-gray-400 dark:text-gray-500" /> : <ChevronRight size={13} className="text-gray-400 dark:text-gray-500" />)}
        </button>
      )}
      {(open || !section) && (
        <div className={section ? "ml-1" : ""}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full text-left py-1.5 text-sm rounded-md transition-colors ${
                item.indent ? "pl-4" : "pl-2"
              } pr-2 ${
                activeId === item.id
                  ? "text-violet-600 dark:text-violet-400 font-medium bg-violet-50 dark:bg-violet-950"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function IntroductionContent() {
  return (
    <article className="prose max-w-none">
      <h1 className="text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
        Introduction
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
        Konflux is an open-source continuous integration and delivery (CI/CD) application that helps
        you secure and simplify the process of building, testing, and releasing rock-solid software
        faster.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
        Konflux is not merely a DevOps platform; it is a comprehensive solution that hardens your
        deployment process against emerging threats. For example, Konflux enables you to identify
        and mitigate vulnerabilities proactively by offering detailed insights into your software's
        release pipeline.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
        As you read through this documentation, you'll learn how to:
      </p>
      <ul className="space-y-2 mb-6">
        {[
          "Install and set up Konflux on your Kubernetes cluster",
          "Connect your git repositories and configure automated pipelines",
          "Generate SBOMs and provenance records for every build",
          "Sign container images using Sigstore/cosign",
          "Define and enforce release policies with Conforma",
          "Release verified software snapshots to production environments",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="text-gray-300 dark:text-gray-600 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
        <img src={imgScreenshot} alt="Konflux interface" className="w-full h-auto" />
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
        Whether you're new to secure software supply chains or an experienced DevOps engineer, this
        documentation helps you get started with Konflux quickly. Select what you want to do next:
      </p>
      <ul className="space-y-2">
        {[
          { label: "Install Konflux", id: "kubernetes" },
          { label: "Onboarding your first application", id: "local" },
          { label: "Manage your build pipelines", id: "pipelines" },
          { label: "Work with Conforma policies", id: "policies" },
        ].map((item) => (
          <li key={item.label} className="flex items-start gap-2 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="text-gray-300 dark:text-gray-600 mt-1">•</span>
            <a href="#" className="text-violet-600 dark:text-violet-400 hover:underline">{item.label}</a>
          </li>
        ))}
      </ul>
    </article>
  );
}

function WhyKonfluxContent() {
  return (
    <article>
      <h1 className="text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
        Why Konflux?
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
        Are fragmented tools slowing you down? Are security gaps keeping you up at night? Managing
        complex software development is challenging. Konflux is here to help.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
        Konflux provides a unified, secure platform that brings together building, testing, signing,
        and releasing software in one coherent workflow — without sacrificing security or flexibility.
      </p>

      <h2 className="text-gray-900 dark:text-white mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}>
        Key features
      </h2>
      <div className="space-y-4 mb-6">
        {[
          {
            title: "CI/CD Automation",
            desc: "Konflux provides default pipeline configurations for building, testing, and deploying production software. Pipelines trigger automatically via Git events.",
          },
          {
            title: "Software Bill of Materials (SBOM)",
            desc: "Every build automatically generates a detailed SBOM listing all dependencies. SBOMs are signed and stored alongside your images.",
          },
          {
            title: "Provenance records",
            desc: "An immutable record of exactly what happened during each build step — who triggered it, what ran, and what was produced.",
          },
          {
            title: "Conforma policies",
            desc: "Define release gates as policy-as-code. Blocks releases that don't satisfy your security standards.",
          },
        ].map((f) => (
          <div key={f.title} className="border-l-2 border-violet-200 dark:border-violet-800 pl-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
              {f.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function GenericContent({ id }: { id: string }) {
  const label = sidebarNav.flatMap((s) => s.items).find((i) => i.id === id)?.label ?? id;
  return (
    <article>
      <h1 className="text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
        {label}
      </h1>
      <div className="bg-violet-50 dark:bg-violet-950 border border-violet-100 dark:border-violet-800 rounded-xl p-5">
        <p className="text-sm text-violet-700 dark:text-violet-300" style={{ fontFamily: "'Inter', sans-serif" }}>
          Documentation for <strong>{label}</strong> is being written. Check{" "}
          <a href="https://github.com/konflux-ci" target="_blank" rel="noopener noreferrer" className="underline">
            GitHub
          </a>{" "}
          for the latest updates or contribute to help expand this section.
        </p>
      </div>
    </article>
  );
}

export default function DocumentationPage() {
  const [activeId, setActiveId] = useState("introduction");

  const allItems = sidebarNav.flatMap((s) => s.items);
  const activeLabel = allItems.find((i) => i.id === activeId)?.label ?? "Introduction";

  const renderContent = () => {
    switch (activeId) {
      case "introduction": return <IntroductionContent />;
      case "why-konflux": return <WhyKonfluxContent />;
      default: return <GenericContent id={activeId} />;
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-56px)] bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Left Sidebar */}
      <aside className="hidden md:flex flex-col w-[220px] shrink-0 border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto px-4 py-6">
        {sidebarNav.map((section, i) => (
          <SidebarSection
            key={i}
            section={section.section}
            items={section.items}
            collapsible={section.collapsible}
            activeId={activeId}
            onSelect={setActiveId}
          />
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 px-6 md:px-10 py-8 max-w-[800px]">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Link to="/">
            <Home size={13} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors" />
          </Link>
          <ChevronRight size={12} />
          <span className="bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-400 px-2 py-0.5 rounded text-[11px] font-medium">
            {activeLabel}
          </span>
        </nav>

        {/* Mobile section selector */}
        <div className="md:hidden mb-5">
          <select
            value={activeId}
            onChange={(e) => setActiveId(e.target.value)}
            className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 outline-none focus:border-violet-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {sidebarNav.map((section, i) => (
              <optgroup key={i} label={section.section ?? "Overview"}>
                {section.items.map((item) => (
                  <option key={item.id} value={item.id}>{item.label}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {renderContent()}

        {/* Edit link */}
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
          <a
            href="https://github.com/konflux-ci"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Pencil size={12} /> Edit this page on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}