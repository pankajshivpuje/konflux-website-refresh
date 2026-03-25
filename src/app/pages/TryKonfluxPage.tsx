import { Link } from "react-router";
import { ArrowRight, Package, Terminal, CheckCircle, Zap, Layers } from "lucide-react";

const methods = [
  {
    id: "helm",
    to: "/getting-started/try-konflux/helm",
    icon: <Package size={28} className="text-violet-600 dark:text-violet-400" />,
    badge: "Recommended",
    badgeColor: "bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800",
    title: "Local Installation with Kind",
    description:
      "Deploy a fully functional Konflux instance locally using Kind (Kubernetes-in-Docker). The recommended approach for development, experimentation, and contribution — backed by the official installation guide.",
    highlights: [
      "Uses Kind — Kubernetes-in-Docker",
      "Official Konflux CI deployment scripts",
      "Full UI, Tekton pipelines & signing included",
    ],
    cta: "Install with Kind",
    accentFrom: "from-violet-50",
    accentTo: "to-violet-100/40",
    darkAccentFrom: "dark:from-violet-950/40",
    darkAccentTo: "dark:to-gray-900",
    border: "border-violet-200 dark:border-violet-800",
    hoverBorder: "hover:border-violet-400 dark:hover:border-violet-600",
  },
  {
    id: "tsf",
    to: "/getting-started/try-konflux/tsf",
    icon: <Terminal size={28} className="text-[#48B5FF]" />,
    badge: "Full factory setup",
    badgeColor: "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    title: "Trusted Software Factory CLI",
    description:
      "Use the tsf-cli to bootstrap a complete, production-ready Trusted Software Factory with automated configuration. One tool that wires everything together.",
    highlights: [
      "End-to-end installation instructions",
      "Red Hat opinionated setup",
      "Integrates GitHub, pipelines & policies",
    ],
    cta: "Install with tsf-cli",
    accentFrom: "from-blue-50",
    accentTo: "to-blue-100/40",
    darkAccentFrom: "dark:from-blue-950/40",
    darkAccentTo: "dark:to-gray-900",
    border: "border-blue-200 dark:border-blue-800",
    hoverBorder: "hover:border-blue-400 dark:hover:border-blue-600",
  },
];

export default function TryKonfluxPage() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10">

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Link to="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/getting-started" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Getting Started</Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-300">Try Konflux Locally</span>
        </nav>

        {/* Hero */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Try Konflux Locally
          </p>
          <h1
            className="text-gray-900 dark:text-white mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Choose your installation method
          </h1>
          <p
            className="text-gray-500 dark:text-gray-400 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get Konflux running on your own cluster in minutes. Pick the method that best fits
            your environment and experience level.
          </p>
        </div>

        {/* Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {methods.map((m) => (
            <Link
              key={m.id}
              to={m.to}
              className={`group relative flex flex-col border-2 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg ${m.border} ${m.hoverBorder} bg-white dark:bg-gray-900`}
            >
              {/* Card accent header */}
              <div className={`bg-gradient-to-br ${m.accentFrom} ${m.accentTo} ${m.darkAccentFrom} ${m.darkAccentTo} px-7 pt-7 pb-6`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center shadow-sm">
                    {m.icon}
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${m.badgeColor}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {m.badge}
                  </span>
                </div>
                <h2
                  className="text-gray-900 dark:text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.01em" }}
                >
                  {m.title}
                </h2>
                <p
                  className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {m.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="flex-1 px-7 py-5 flex flex-col justify-between">
                <ul className="space-y-2.5 mb-6">
                  {m.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <CheckCircle size={14} className="text-violet-500 dark:text-violet-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:gap-3 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {m.cta}
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Comparison table */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden mb-12">
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-gray-900 dark:text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}>
              Not sure which to pick?
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="text-left px-6 py-3 text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-wider">Feature</th>
                  <th className="text-center px-6 py-3 text-violet-600 dark:text-violet-400 font-semibold text-xs uppercase tracking-wider">Helm / Operator</th>
                  <th className="text-center px-6 py-3 text-[#48B5FF] font-semibold text-xs uppercase tracking-wider">tsf-cli</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Target environment", "Local machine (Docker/Podman)", "Cluster with cluster-admin access"],
                  ["Cluster tool", "Kind (Kubernetes-in-Docker)", "Existing Kubernetes cluster"],
                  ["Setup complexity", "Low — deploy script handles it", "Low — fully automated"],
                  ["Configuration", "kind-config.yaml + deploy script", "Guided & opinionated"],
                  ["Best for", "Local dev & experimentation", "Full factory from scratch"],
                  ["GitHub integration", "Manual config post-install", "Automated"],
                  ["Tekton + pipelines", "Pre-configured", "Pre-configured"],
                ].map(([feature, helm, tsf], i) => (
                  <tr
                    key={feature}
                    className={`border-b border-gray-50 dark:border-gray-900 ${i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/50"}`}
                  >
                    <td className="px-6 py-3 text-gray-700 dark:text-gray-300 font-medium text-xs">{feature}</td>
                    <td className="px-6 py-3 text-gray-500 dark:text-gray-400 text-xs text-center">{helm}</td>
                    <td className="px-6 py-3 text-gray-500 dark:text-gray-400 text-xs text-center">{tsf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom links */}
        <div className="flex flex-wrap items-center gap-4 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span className="text-gray-400 dark:text-gray-500">Prefer a hosted experience?</span>
          <a
            href="https://console.redhat.com/preview/application-pipeline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
          >
            Try Konflux in the Sandbox <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </div>
  );
}