import { Link } from "react-router";
import { Shield, Layers, GitBranch, Package, CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: <Shield size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Supply Chain Security",
    description:
      "Konflux produces signed attestations and SBOMs for every build, ensuring your software supply chain is tamper-proof and auditable from source to deployment.",
  },
  {
    icon: <Layers size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Built on Open Standards",
    description:
      "Leveraging Tekton for pipelines, Sigstore for signing, and Kubernetes-native patterns, Konflux integrates seamlessly into your existing cloud-native toolchain.",
  },
  {
    icon: <GitBranch size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Git-Native Workflows",
    description:
      "Every pipeline run is triggered from your Git repository. Pull requests, branches, and tags are first-class citizens in the Konflux build model.",
  },
  {
    icon: <Package size={20} className="text-violet-600 dark:text-violet-400" />,
    title: "Reproducible Builds",
    description:
      "Konflux ensures build reproducibility by capturing the complete environment, dependencies, and build parameters for every artifact you produce.",
  },
];

const values = [
  "Open source and community-driven",
  "Security as a default, not an afterthought",
  "Developer experience first",
  "Composable and extensible architecture",
  "Transparency in every build step",
];

export default function AboutKonfluxPage() {
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
          <span className="text-gray-700 dark:text-gray-300">About Konflux</span>
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
            About Konflux
          </h1>
          <p
            className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Konflux is an open-source, cloud-native CI/CD platform that puts supply chain security at the center of
            every build. It enables teams to produce trusted, verifiable software artifacts with minimal configuration.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 hover:border-violet-100 dark:hover:border-violet-800 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3
                className="text-gray-900 dark:text-white mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem" }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-14">
          <h2
            className="text-gray-900 dark:text-white mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.25rem" }}
          >
            Our Guiding Principles
          </h2>
          <ul className="space-y-3">
            {values.map((v) => (
              <li
                key={v}
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <CheckCircle size={16} className="text-violet-500 shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 p-6 text-white">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.3), transparent 60%)" }}
          />
          <div className="relative">
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              Ready to dive deeper?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Explore the core concepts behind Konflux or jump straight into trying it out.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/getting-started/core-concepts"
                className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D" }}
              >
                Core Concepts <ArrowRight size={14} />
              </Link>
              <Link
                to="/getting-started/try-konflux"
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 px-5 py-2 rounded-full text-sm hover:border-gray-500 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Try Konflux
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
