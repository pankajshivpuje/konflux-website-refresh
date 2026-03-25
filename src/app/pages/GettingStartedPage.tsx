import { Link } from "react-router";
import {
  ArrowRight, BookOpen, Github, Pencil, Box, Layers, GitBranch,
  FileCode, Shield, Send, GitMerge, Rocket, Package, ClipboardList,
  Terminal, ExternalLink, Info,
} from "lucide-react";

// ─── Key Concepts ────────────────────────────────────────────────────────────

const keyConcepts = [
  {
    id: "namespace",
    icon: <Layers size={16} className="text-[#48B5FF]" />,
    title: "Namespace",
    body: "In Kubernetes, namespaces provide a foundational mechanism for isolating groups of resources within a single cluster. Konflux scopes all the resources and APIs you interact with to namespaces — including your components, applications, snapshots, secrets, and the Tekton PipelineRuns that perform builds, tests, and releases.",
    link: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
    linkLabel: "Kubernetes namespaces docs",
  },
  {
    id: "tenant-namespace",
    icon: <Box size={16} className="text-[#48B5FF]" />,
    title: "Tenant Namespace",
    body: "Tenant namespaces are where Tekton Pipelines produce artifacts accessible by multiple team members according to their roles and permissions. In Konflux, you operate in a tenant namespace scoped to your team. One team can span multiple namespaces if needed, each with many applications and components.",
    bullets: [
      "Create components and applications",
      "Run the Tekton PipelineRuns defined in your Git repositories",
      "View and iterate on the results of your IntegrationTestScenarios",
      "Create releases for specific snapshots according to your ReleasePlans",
    ],
    link: null,
    linkLabel: null,
  },
  {
    id: "managed-namespaces",
    icon: <Shield size={16} className="text-[#48B5FF]" />,
    title: "Managed Namespaces",
    body: "Managed namespaces are where you manage release pipelines and credentials for your organization. The primary interaction between a tenant and managed namespaces involves creating a release in a tenant namespace that references a specific snapshot in the managed namespace, then triggering the release pipeline for that snapshot.",
    link: null,
    linkLabel: null,
  },
  {
    id: "oci-artifact",
    icon: <Package size={16} className="text-[#48B5FF]" />,
    title: "OCI Artifact",
    body: "OCI (Open Containers Initiative) defines an image spec that permits storing artifacts other than container images in container registries. Konflux pushes artifacts that you build in your tenant namespace to an OCI registry along with their supporting metadata — including SLSA provenance attestations and SBOMs.",
    link: "https://github.com/opencontainers/image-spec/blob/main/artifacts-guidance.md",
    linkLabel: "OCI Artifacts spec",
  },
  {
    id: "build-pipeline",
    icon: <GitBranch size={16} className="text-[#48B5FF]" />,
    title: "Build Pipeline",
    body: "When you create a component in Konflux, the system pushes a build pipeline to the Git repository in the .tekton directory and installs a webhook. Upon a new push or pull request, the system runs the pipeline defined in the Git repository, describing the process necessary to build and test a specific artifact.",
    buildTasks: [
      "Cloning the Git repository",
      "Prefetching dependencies",
      "Building the OCI artifact",
      "Building the source SBOM",
      "Generating the source container",
    ],
    testTasks: [
      "Running Snyk scans",
      "Checking for CVEs with clair-in-ci",
      "Running an antivirus scan on the artifact",
    ],
    link: "https://pipelinesascode.com/",
    linkLabel: "Pipelines as Code (PaC)",
  },
];

// ─── Custom Resources ─────────────────────────────────────────────────────────

const customResources = [
  {
    id: "component",
    icon: <FileCode size={15} className="text-[#48B5FF]" />,
    title: "Component",
    body: "Describes the properties of an OCI artifact — including the Git repository from which the artifact originates, the latest built commit, initial build configuration parameters, and relationships to other components. Component names are unique in a namespace.",
    link: "https://konflux-ci.dev/architecture/",
    linkLabel: null,
  },
  {
    id: "application",
    icon: <Layers size={15} className="text-[#48B5FF]" />,
    title: "Application",
    body: "An Application CR owns multiple components and logically groups them in the UI. When a new component's build pipeline completes, the Integration Service creates a new snapshot from each of the Component CRs, as well as the just-produced component artifact. IntegrationTestScenarios use this output to run.",
    link: null,
    linkLabel: null,
  },
  {
    id: "snapshot",
    icon: <ClipboardList size={15} className="text-[#48B5FF]" />,
    title: "Snapshot",
    body: "An immutable set of component references, created from push or pull request events. A snapshot defines a set of components which are either tested or released together. Note that at any point in time, a given snapshot might not necessarily represent the latest built artifacts for all components in your namespace.",
    link: null,
    linkLabel: null,
  },
  {
    id: "integration-test-scenario",
    icon: <GitMerge size={15} className="text-[#48B5FF]" />,
    title: "IntegrationTestScenario",
    body: "A Tekton Pipeline that defines a test to run against an entire snapshot. The Integration Service runs all configured ITSs for the snapshot's application, including a default ITS for every new application to enable EnterpriseContractPolicy checks. Each ITS can be configured as optional for release.",
    link: null,
    linkLabel: null,
  },
  {
    id: "enterprise-contract-policy",
    icon: <Shield size={15} className="text-[#48B5FF]" />,
    title: "EnterpriseContractPolicy",
    body: "Konflux follows a \"build once, release multiple times\" mentality. You codify build requirements in an EnterpriseContractPolicy CR. When evaluated against a snapshot, it returns a single result based on the highest violation — if any single component fails, the overall result is a failure.",
    link: "https://enterprisecontract.dev/",
    linkLabel: null,
  },
  {
    id: "release-plan",
    icon: <Send size={15} className="text-[#48B5FF]" />,
    title: "ReleasePlan",
    body: "Maps an Application you want to release to a release action. Defines the process to release future Snapshots of your Application in the managed namespace, determines whether automatic releases are enabled, and whether you want to provide additional data to each future release pipeline.",
    link: null,
    linkLabel: null,
  },
  {
    id: "release-plan-admission",
    icon: <ClipboardList size={15} className="text-[#48B5FF]" />,
    title: "ReleasePlanAdmission",
    body: "Created in the managed namespace, this CR defines the specific pipeline to run and a given EnterpriseContractPolicy which must pass for each snapshot before that pipeline can proceed. It also establishes essential details about the delivery of your content.",
    link: null,
    linkLabel: null,
  },
  {
    id: "release",
    icon: <Rocket size={15} className="text-[#48B5FF]" />,
    title: "Release",
    body: "Every time you want to release newly built artifacts, you create a Release CR in your tenant namespace. It represents your intent to release some content and, when present, will initiate the push of content. A Release CR references a specific Snapshot and ReleasePlan. ReleasePlans can also be configured for auto-release.",
    link: null,
    linkLabel: null,
  },
];

// ─── Sidebar quick links ───────────────────────────────────────────────────────

const quickLinks = [
  { title: "Try Konflux Locally", desc: "Run Konflux on Kind or OpenShift", to: "/getting-started/try-konflux" },
  { title: "Documentation", desc: "Full reference and guides", to: "/documentation" },
  { title: "Glossary", desc: "Key terms and definitions", href: "https://konflux-ci.dev/docs/glossary/" },
  { title: "Kubernetes CRs", desc: "Konflux API reference", href: "https://konflux-ci.dev/docs/reference/" },
  { title: "Community", desc: "Slack, forums & events", to: "/community" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GettingStartedPage() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Link to="/" className="hover:text-[#48B5FF] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-300">Getting Started</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <h1
            className="text-gray-900 dark:text-white mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Getting Started with Konflux
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Adopting new platforms is always challenging. While Konflux aims to use industry-standard
            terminology and processes, there are some additional concepts to be aware of. This page
            introduces the key ideas and Kubernetes Custom Resources that underpin everything Konflux does.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* Key Concepts */}
            <section>
              <h2
                className="text-gray-900 dark:text-white mb-5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.01em" }}
              >
                Key Concepts
              </h2>

              <div className="space-y-4">
                {keyConcepts.map((concept) => (
                  <div
                    key={concept.id}
                    className="border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-white dark:bg-gray-900"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 flex items-center justify-center shrink-0">
                        {concept.icon}
                      </div>
                      <h3 className="text-gray-900 dark:text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}>
                        {concept.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {concept.body}
                    </p>

                    {/* Tenant namespace bullets */}
                    {"bullets" in concept && concept.bullets && (
                      <ul className="space-y-1.5 mb-3">
                        {concept.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <ArrowRight size={13} className="text-[#48B5FF] shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Build pipeline task lists */}
                    {"buildTasks" in concept && concept.buildTasks && (
                      <div className="grid sm:grid-cols-2 gap-3 mb-3">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700">
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Build Tasks</p>
                          <ul className="space-y-1">
                            {concept.buildTasks.map((t) => (
                              <li key={t} className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                                <span className="text-[#48B5FF] shrink-0 mt-0.5">·</span>{t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {"testTasks" in concept && concept.testTasks && (
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700">
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Test Tasks</p>
                            <ul className="space-y-1">
                              {concept.testTasks.map((t) => (
                                <li key={t} className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                                  <span className="text-[#48B5FF] shrink-0 mt-0.5">·</span>{t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {concept.link && (
                      <a
                        href={concept.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#48B5FF] hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {concept.linkLabel} <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Custom Resources */}
            <section>
              <div className="mb-5">
                <h2
                  className="text-gray-900 dark:text-white mb-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.01em" }}
                >
                  Custom Resources
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                  All Konflux APIs are Kubernetes Custom Resources (CRs). This means standard tools like{" "}
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded font-mono text-gray-700 dark:text-gray-300">kubectl</code>{" "}
                  can understand and interact with them just like Pods or Deployments.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {customResources.map((cr) => (
                  <div
                    key={cr.id}
                    className="border border-gray-100 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-gray-900 flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 flex items-center justify-center shrink-0">
                        {cr.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 font-mono" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {cr.title}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {cr.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Auto-release note */}
              <div className="mt-4 flex items-start gap-2.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800 rounded-xl px-4 py-3">
                <Info size={14} className="text-[#48B5FF] shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="font-semibold">Auto-release:</span> You can configure your ReleasePlan with auto-release enabled. When active, Konflux will generate releases automatically whenever your snapshots pass all their IntegrationTestScenarios.
                </p>
              </div>
            </section>

            {/* CLI section */}
            <section>
              <h2
                className="text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.01em" }}
              >
                Getting Started with the CLI
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Konflux exposes all of its APIs as Kubernetes CRs, which means you can interact with it
                using standard tools like <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded font-mono text-gray-700 dark:text-gray-300">kubectl</code>.
                The full CLI guide — including how to create applications, trigger builds, and manage releases
                from the command line — is available in the upstream documentation.
              </p>
              <a
                href="https://konflux-ci.dev/docs/getting-started/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
                style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D" }}
              >
                <Terminal size={14} /> Read the CLI guide
              </a>
            </section>

            {/* CTA */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 p-6 text-white">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(72,181,255,0.2), transparent 60%)" }}
              />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem" }}>
                    Ready to try Konflux?
                  </h3>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Follow the local installation guide to run Konflux on your own cluster.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link
                    to="/getting-started/try-konflux"
                    className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
                    style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D" }}
                  >
                    <Rocket size={14} /> Try Konflux
                  </Link>
                  <a
                    href="https://github.com/konflux-ci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 px-5 py-2 rounded-full text-sm hover:border-gray-500 hover:text-white transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Github size={14} /> View on GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Sidebar ── */}
          <div className="lg:w-[240px] shrink-0 space-y-4">

            {/* Quick Links */}
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-white dark:bg-gray-900">
              <h3
                className="text-gray-900 dark:text-white mb-4 flex items-center gap-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem" }}
              >
                <BookOpen size={13} className="text-[#48B5FF]" /> Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link) =>
                  link.to ? (
                    <Link key={link.title} to={link.to} className="flex flex-col gap-0.5 group">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#48B5FF] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {link.title}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {link.desc}
                      </span>
                    </Link>
                  ) : (
                    <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-0.5 group">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#48B5FF] transition-colors flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {link.title} <ExternalLink size={10} className="text-gray-400" />
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {link.desc}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* On this page */}
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-white dark:bg-gray-900">
              <h3
                className="text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem" }}
              >
                On this page
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Key Concepts", sub: "Namespace · Tenant · OCI · Pipeline" },
                  { label: "Custom Resources", sub: "Component · Application · Snapshot…" },
                  { label: "Getting Started with the CLI", sub: null },
                ].map((item) => (
                  <li key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.label}
                    </span>
                    {item.sub && (
                      <span className="text-[11px] text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.sub}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Edit on GitHub */}
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
          <a
            href="https://github.com/konflux-ci/docs/edit/main/modules/ROOT/pages/getting-started.adoc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-[#48B5FF] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Pencil size={12} /> Edit this page on GitHub
          </a>
        </div>

      </div>
    </div>
  );
}
