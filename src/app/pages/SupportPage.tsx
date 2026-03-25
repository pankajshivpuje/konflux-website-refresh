import { Link } from "react-router";
import { Github, MessageSquare, BookOpen, Search, ArrowRight, ChevronDown, ChevronUp, ExternalLink, Pencil } from "lucide-react";
import { useState } from "react";

const supportChannels = [
  {
    icon: <Github size={22} />,
    title: "GitHub Issues",
    desc: "Report bugs, request features, or track known issues.",
    cta: "Open an issue",
    href: "https://github.com/konflux-ci/konflux-ci/issues",
    tag: "Community",
    tagColor: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Slack Community",
    desc: "Ask questions and get real-time help from maintainers.",
    cta: "Join #konflux-users",
    href: "#",
    tag: "Community",
    tagColor: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Documentation",
    desc: "Search our comprehensive documentation for answers.",
    cta: "Browse docs",
    href: "/documentation",
    tag: "Self-service",
    tagColor: "bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-400",
  },
];

const faqs = [
  {
    q: "How do I connect my GitHub repository to Konflux?",
    a: "Navigate to the Konflux console, create a new Application, and add your GitHub repository URL. Konflux will automatically detect your code and set up the necessary webhooks. You'll need to grant Konflux the required GitHub OAuth permissions during this process.",
  },
  {
    q: "What build systems does Konflux support?",
    a: "Konflux supports any build system that can run in a container. Out of the box, Konflux provides pipeline templates for Maven, Gradle, npm, Go modules, Python, and more. You can also create custom Tekton task bundles for specialized builds.",
  },
  {
    q: "How does Konflux handle multi-arch container builds?",
    a: "Konflux can build container images for multiple CPU architectures (amd64, arm64, etc.) in parallel using Tekton tasks. The resulting images are combined into a multi-arch image manifest. SBOM and provenance documents are generated per architecture and aggregated.",
  },
  {
    q: "What is Conforma and why does it matter?",
    a: "Conforma is the policy engine built into Konflux. It evaluates your built artifacts against a set of release policies before allowing a release to proceed. Policies can check things like: has the SBOM been generated? Are there critical CVEs? Has the image been signed?",
  },
  {
    q: "Can Konflux work with private container registries?",
    a: "Yes. Konflux supports pulling from and pushing to private container registries. You configure registry credentials as Kubernetes secrets in your namespace. Konflux integrates with Quay.io, Docker Hub, ECR, GCR, and any OCI-compatible registry.",
  },
  {
    q: "How do I upgrade Konflux to a new version?",
    a: "Konflux manages its own component upgrades through the Konflux Operator. Patch releases are applied automatically. For minor and major version upgrades, follow the upgrade guide in our documentation.",
  },
];

const statusItems = [
  { name: "API Gateway", status: "operational" },
  { name: "Build Service", status: "operational" },
  { name: "Image Registry", status: "operational" },
  { name: "Pipeline Engine", status: "degraded" },
  { name: "Release Service", status: "operational" },
  { name: "Dashboard", status: "operational" },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 dark:border-gray-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-start justify-between w-full py-4 text-left gap-4 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
      >
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
          {q}
        </span>
        {open ? <ChevronUp size={15} className="shrink-0 text-gray-400 dark:text-gray-500 mt-0.5" /> : <ChevronDown size={15} className="shrink-0 text-gray-400 dark:text-gray-500 mt-0.5" />}
      </button>
      {open && (
        <div className="pb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      searchQuery === "" ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(139,92,246,0.08), transparent 60%)",
          }}
        />
        <div className="relative max-w-[700px] mx-auto px-4 py-14 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link to="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700 dark:text-gray-300">Support</span>
          </nav>
          <h1
            className="text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            How can we help?
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Find answers in our documentation, ask the community, or report issues on GitHub.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search FAQs and docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-900/30 transition-all shadow-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10">
        {/* Support Channels */}
        <section className="mb-12">
          <h2
            className="text-gray-900 dark:text-white mb-2"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem" }}
          >
            Get Support
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
            Konflux is community-supported open-source software.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportChannels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-3 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 hover:border-violet-200 dark:hover:border-violet-700 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:border-violet-200 dark:group-hover:border-violet-700 transition-colors shadow-sm">
                    {channel.icon}
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${channel.tagColor}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                    {channel.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white mb-1 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>
                    {channel.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {channel.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {channel.cta} <ArrowRight size={11} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* FAQ */}
          <div className="flex-1 min-w-0">
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 mb-5 bg-white dark:bg-gray-900">
              <h2
                className="text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.05rem" }}
              >
                Frequently Asked Questions
              </h2>
              <div>
                {filteredFaqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
                {filteredFaqs.length === 0 && (
                  <p className="text-sm text-gray-400 dark:text-gray-500 py-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    No results. Try{" "}
                    <Link to="/documentation" className="text-violet-600 dark:text-violet-400 hover:underline">searching the docs</Link>.
                  </p>
                )}
              </div>
            </div>

            {/* Bug report */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5">
              <h3 className="text-gray-900 dark:text-white mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>
                Found a bug?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Open a GitHub issue with detailed reproduction steps, your Konflux version, and relevant logs.
              </p>
              <a
                href="https://github.com/konflux-ci/konflux-ci/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Github size={13} /> Open GitHub Issue
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[260px] shrink-0 space-y-4">
            {/* System Status */}
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 dark:text-white text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  System Status
                </h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Partial</span>
                </div>
              </div>
              <div className="space-y-2">
                {statusItems.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>{item.name}</span>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.status === "operational" ? "bg-green-400" : "bg-yellow-400"}`} />
                      <span className={`text-[11px] font-medium ${item.status === "operational" ? "text-green-600 dark:text-green-400" : "text-yellow-600 dark:text-yellow-400"}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.status === "operational" ? "Operational" : "Degraded"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-[11px] text-violet-600 dark:text-violet-400 hover:underline" style={{ fontFamily: "'Inter', sans-serif" }}>
                View status page <ExternalLink size={10} />
              </a>
            </div>

            {/* Resources */}
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-white dark:bg-gray-900">
              <h3 className="text-gray-900 dark:text-white text-sm font-semibold mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Helpful Resources
              </h3>
              <div className="space-y-2.5">
                {[
                  { label: "Getting Started", to: "/getting-started" },
                  { label: "Documentation", to: "/documentation" },
                  { label: "Community Hub", to: "/community" },
                  { label: "Release Notes", href: "https://github.com/konflux-ci/konflux-ci/releases" },
                  { label: "Security Advisories", href: "https://github.com/konflux-ci/konflux-ci/security" },
                ].map((item) => (
                  <div key={item.label}>
                    {"to" in item ? (
                      <Link to={item.to} className="flex items-center gap-1.5 text-xs text-violet-600 dark:text-violet-400 hover:underline" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <ArrowRight size={11} /> {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-violet-600 dark:text-violet-400 hover:underline" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <ExternalLink size={11} /> {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Edit on GitHub */}
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
      </div>
    </div>
  );
}
