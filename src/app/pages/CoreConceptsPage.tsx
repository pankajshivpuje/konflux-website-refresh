import { Link } from "react-router";
import { Workflow, Box, ShieldCheck, FileText, Puzzle, RotateCcw, ArrowRight } from "lucide-react";

const concepts = [
  {
    icon: <Workflow size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Pipelines",
    description:
      "Konflux pipelines are Tekton-based CI/CD workflows that run as Kubernetes-native resources. Each pipeline consists of ordered tasks that build, test, sign, and release your software.",
  },
  {
    icon: <Box size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Applications & Components",
    description:
      "An Application in Konflux groups related components together. Each Component maps to a source repository and defines how that piece of your application is built and deployed.",
  },
  {
    icon: <ShieldCheck size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Enterprise Contract",
    description:
      "The Enterprise Contract is a policy-driven validation framework. It verifies that every build meets your organization's security and compliance requirements before release.",
  },
  {
    icon: <FileText size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "SBOM & Attestations",
    description:
      "Every build automatically generates a Software Bill of Materials (SBOM) and cryptographic attestations using Sigstore, providing end-to-end provenance for your artifacts.",
  },
  {
    icon: <Puzzle size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Integration Tests",
    description:
      "Define integration test scenarios that run after builds complete. These tests validate that your components work together before they can be promoted or released.",
  },
  {
    icon: <RotateCcw size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Release Strategy",
    description:
      "Konflux provides a structured release process with managed and tenant pipelines. Releases go through policy validation, advisory creation, and staged promotion.",
  },
];

export default function CoreConceptsPage() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Link to="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/getting-started" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            Getting Started
          </Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-300">Core Concepts</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <h1
            className="text-gray-900 dark:text-white mb-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Core Concepts
          </h1>
          <p
            className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Understand the fundamental building blocks of Konflux. These concepts form the foundation of how Konflux
            builds, tests, secures, and releases your software.
          </p>
        </div>

        {/* Concepts */}
        <div className="space-y-5 mb-14">
          {concepts.map((concept, index) => (
            <div
              key={concept.title}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-violet-200 dark:border-violet-800 flex items-center justify-center mt-1">
                <span
                  className="text-xs font-bold text-violet-600 dark:text-violet-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-white dark:bg-gray-900 hover:border-violet-100 dark:hover:border-violet-800 hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-violet-50 dark:bg-violet-950 flex items-center justify-center">
                    {concept.icon}
                  </div>
                  <h2
                    className="text-gray-900 dark:text-white"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem" }}
                  >
                    {concept.title}
                  </h2>
                </div>
                <p
                  className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {concept.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 p-6 text-white">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.3), transparent 60%)" }}
          />
          <div className="relative">
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              Ready to try it yourself?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Now that you understand the concepts, get hands-on with Konflux.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/getting-started/try-konflux"
                className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D" }}
              >
                Try Konflux <ArrowRight size={14} />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 px-5 py-2 rounded-full text-sm hover:border-gray-500 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Full Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
