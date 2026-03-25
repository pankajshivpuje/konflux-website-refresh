import { Link } from "react-router";
import { Terminal, Copy, ExternalLink, CheckCircle, Github, ArrowRight, Zap, Settings, GitBranch, Shield, Package } from "lucide-react";
import { useState } from "react";

const prerequisites = [
  {
    text: "An OpenShift cluster with admin access",
    note: null,
  },
  {
    text: "A GitHub organization",
    note: "Create a test organization if needed — tsf-cli uses it to configure integrations.",
  },
  {
    text: "A Quay.io account with access to an organization",
    note: "Currently only quay.io is supported; support for other Quay instances is planned for the future.",
  },
  {
    text: "Podman installed on your local system",
    note: "Docker should also work but is not a tested workflow. If using Docker, simply replace podman with docker in the commands below.",
  },
];

const installSteps = [
  {
    label: "Prepare your environment file",
    description: (
      <>
        Copy{" "}
        <a
          href="https://github.com/redhat-appstudio/tsf-cli/blob/main/hack/private.env.template"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#48B5FF] underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          private.env.template
        </a>{" "}
        as <code className="text-xs bg-gray-800 px-1 py-0.5 rounded font-mono text-gray-300">tsf.env</code> and fill in the required values. See the{" "}
        <a
          href="https://github.com/redhat-appstudio/tsf-cli/blob/main/docs/trusted-software-factory.md#getting-the-information-for-tsfenv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#48B5FF] underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Getting the information for tsf.env
        </a>{" "}
        section if you need help finding the required values.
      </>
    ),
    command: null,
    note: null,
  },
  {
    label: "Start a container",
    description: "Pull and run the tsf-cli container image, mounting your environment file.",
    command: `podman run -it --rm --env-file tsf.env \\
    --entrypoint bash -p 8228:8228 --pull always quay.io/redhat-ads/tsf-cli:unstable --login`,
    note: null,
  },
  {
    label: "Log in to the cluster",
    description: "Authenticate against your OpenShift cluster using the credentials from your env file.",
    command: `oc login "$OCP__API_ENDPOINT" --username "$OCP__USERNAME" --password "$OCP__PASSWORD"`,
    note: null,
  },
  {
    label: "Create the TSF config on the cluster",
    description: "This creates the initial tsf-config ConfigMap in the tsf namespace.",
    command: "tsf config --create",
    note: null,
  },
  {
    label: "Check Cert-Manager operator status",
    description: (
      <>
        Check if the{" "}
        <span className="text-gray-300">Red Hat Cert-Manager operator</span> is already installed in the cluster. If it is, edit the{" "}
        <code className="text-xs bg-gray-800 px-1 py-0.5 rounded font-mono text-gray-300">tsf-config</code> ConfigMap in the{" "}
        <code className="text-xs bg-gray-800 px-1 py-0.5 rounded font-mono text-gray-300">tsf</code> namespace to set{" "}
        <code className="text-xs bg-gray-800 px-1 py-0.5 rounded font-mono text-gray-300">manageSubscription: false</code> for the Cert-Manager product.
      </>
    ),
    command: null,
    note: null,
  },
  {
    label: "Create the GitHub App",
    description: "Register a new GitHub App for your organization. The command will print a link — open it, follow the instructions, and install the app to your GitHub organization.",
    command: `tsf integration github --create --org "$GITHUB__ORG" "tsf-$(date +%m%d-%H%M)"`,
    note: null,
  },
  {
    label: "Create the Quay integration",
    description: "Connect tsf to your Quay.io organization. If you need help generating the API token, refer to the upstream docs.",
    command: `tsf integration quay --organization="$QUAY__ORG" --token="$QUAY__API_TOKEN" --url="$QUAY__URL"`,
    note: null,
  },
  {
    label: "Deploy all services",
    description: "Run the full factory deployment. This provisions all Konflux components on the cluster.",
    command: "tsf deploy",
    note: null,
  },
  {
    label: "Access the Konflux UI",
    description: (
      <>
        Cluster users (including the admin user) can now log in to the Konflux UI. You will find the URL in the{" "}
        deployment logs. You can also access it through the GitHub App via the{" "}
        <span className="italic">Website</span> link on the application public page, or via the link displayed on the application configuration page shown after installation.
      </>
    ),
    command: null,
    note: null,
  },
];

const whatGetsInstalled = [
  {
    icon: <GitBranch size={16} className="text-violet-500" />,
    name: "Tekton Pipelines",
    desc: "Cloud-native CI/CD pipeline engine pre-wired for secure builds.",
  },
  {
    icon: <Shield size={16} className="text-[#48B5FF]" />,
    name: "Sigstore / Cosign",
    desc: "Keyless artifact signing and SLSA provenance attestation.",
  },
  {
    icon: <Package size={16} className="text-green-500" />,
    name: "Enterprise Contract",
    desc: "Policy engine (Conforma) that gates releases on compliance.",
  },
  {
    icon: <Settings size={16} className="text-orange-400" />,
    name: "GitHub Integration",
    desc: "Automatically wires up webhooks and pipeline triggers.",
  },
  {
    icon: <Zap size={16} className="text-yellow-500" />,
    name: "Release Service",
    desc: "Managed promotion pipelines with full audit trails.",
  },
  {
    icon: <CheckCircle size={16} className="text-teal-500" />,
    name: "SBOM Generation",
    desc: "CycloneDX and SPDX SBOMs produced automatically per build.",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 text-gray-500 hover:text-[#48B5FF] transition-colors shrink-0"
      title="Copy to clipboard"
    >
      {copied ? <CheckCircle size={13} className="text-green-400" /> : <Copy size={13} />}
    </button>
  );
}

function CodeBlock({ command }: { command: string }) {
  return (
    <div className="bg-gray-950 dark:bg-black rounded-lg p-3 flex items-start justify-between gap-3 mt-2">
      <div className="flex items-start gap-2 min-w-0">
        <Terminal size={12} className="text-gray-500 shrink-0 mt-0.5" />
        <code className="text-xs text-gray-300 font-mono whitespace-pre-wrap break-all">{command}</code>
      </div>
      <CopyButton text={command} />
    </div>
  );
}

export default function TryKonfluxTsfPage() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10">

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-8 flex-wrap"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Link to="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/getting-started" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Getting Started</Link>
          <span>/</span>
          <Link to="/getting-started/try-konflux" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Try Konflux Locally</Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-300">Trusted Software Factory CLI</span>
        </nav>

        {/* Hero */}
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-800 flex items-center justify-center">
              <Terminal size={20} className="text-[#48B5FF]" />
            </div>
            <p className="text-xs font-semibold text-[#48B5FF] uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
              Trusted Software Factory CLI
            </p>
          </div>
          <h1
            className="text-gray-900 dark:text-white mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Bootstrap Your Factory with tsf-cli
          </h1>
          <p
            className="text-gray-500 dark:text-gray-400 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono text-gray-700 dark:text-gray-300">tsf</code> CLI
            automates the full setup of a Trusted Software Factory — from cluster provisioning to
            GitHub integration, pipelines, signing, and policy enforcement. One command gets you a
            production-ready factory.
          </p>
        </div>

        {/* Info banner */}
        <div className="flex items-start gap-3 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 rounded-xl px-5 py-4 mb-8">
          <Zap size={16} className="text-[#48B5FF] shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-blue-900 dark:text-blue-200" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              Full installation instructions
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-400 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
              The canonical reference is the upstream documentation. The steps below summarize the core workflow.{" "}
              <a
                href="https://github.com/redhat-appstudio/tsf-cli/blob/main/docs/trusted-software-factory.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-2 font-medium hover:text-blue-900 dark:hover:text-blue-200 transition-colors"
              >
                Read the full docs on GitHub <ExternalLink size={11} />
              </a>
            </p>
          </div>
        </div>

        {/* What gets installed */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 mb-8">
          <h2 className="text-gray-900 dark:text-white mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            What gets installed
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
            tsf-cli provisions a complete factory stack — no manual wiring required.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whatGetsInstalled.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700"
              >
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 dark:text-gray-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 mb-8">
          <h2 className="text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            Prerequisites
          </h2>
          <ul className="space-y-2.5">
            {prerequisites.map((item) => (
              <li key={item.text} className="flex items-start gap-2.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                <CheckCircle size={15} className="text-[#48B5FF] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
                  {item.note && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 leading-relaxed">{item.note}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Installation Steps */}
        <div className="mb-10">
          <h2 className="text-gray-900 dark:text-white mb-5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            Installation Steps
          </h2>
          <div className="space-y-6">
            {installSteps.map((step, i) => (
              <div key={step.label} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-[#48B5FF]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {step.description}
                    </p>
                  )}
                  {step.command && <CodeBlock command={step.command} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* After install */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-gray-50 dark:bg-gray-900 mb-8">
          <h2 className="text-gray-900 dark:text-white mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            After installation
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Once <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono text-gray-700 dark:text-gray-300">tsf install</code> completes,
            your factory is ready. You can:
          </p>
          <ul className="space-y-2">
            {[
              "Open the Konflux dashboard URL printed by tsf info",
              "Connect your first GitHub repository to automatically generate a secure pipeline",
              "Push a commit and watch the pipeline run, sign, and attest your artifact",
              "View the generated SBOM and SLSA provenance in the dashboard",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                <ArrowRight size={14} className="text-[#48B5FF] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 p-6 text-white mb-8">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(72,181,255,0.2), transparent 60%)" }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem" }}>
                Explore the full documentation
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                The upstream tsf-cli docs cover advanced configuration, upgrades, and troubleshooting.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://github.com/redhat-appstudio/tsf-cli/blob/main/docs/trusted-software-factory.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D" }}
              >
                <Github size={14} /> Read the Docs
              </a>
              <a
                href="https://github.com/redhat-appstudio/tsf-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 px-5 py-2 rounded-full text-sm hover:border-gray-500 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                tsf-cli on GitHub <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Back / other method */}
        <div className="flex items-center justify-between">
          <Link
            to="/getting-started/try-konflux"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowRight size={13} className="rotate-180" /> Back to installation methods
          </Link>
          <Link
            to="/getting-started/try-konflux/helm"
            className="inline-flex items-center gap-1.5 text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Try Helm or Operator instead <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </div>
  );
}