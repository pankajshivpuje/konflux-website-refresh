import { Link } from "react-router";
import {
  Terminal, Copy, ExternalLink, CheckCircle, Github, ArrowRight,
  Package, AlertTriangle, Info, MonitorCheck, Cpu, MemoryStick,
} from "lucide-react";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const prerequisites = [
  {
    icon: <MonitorCheck size={15} className="text-violet-500 shrink-0 mt-0.5" />,
    text: "Docker or Podman – container runtime for Kind nodes",
  },
  {
    icon: <Package size={15} className="text-violet-500 shrink-0 mt-0.5" />,
    text: "Kind v0.20 or later – Kubernetes-in-Docker cluster tool",
  },
  {
    icon: <Terminal size={15} className="text-violet-500 shrink-0 mt-0.5" />,
    text: "kubectl v1.25 or later – configured to talk to your cluster",
  },
  {
    icon: <Cpu size={15} className="text-violet-500 shrink-0 mt-0.5" />,
    text: "6 CPU cores minimum available to Docker / Podman",
  },
  {
    icon: <MemoryStick size={15} className="text-violet-500 shrink-0 mt-0.5" />,
    text: "8 GB RAM minimum (16 GB strongly recommended)",
  },
  {
    icon: <CheckCircle size={15} className="text-violet-500 shrink-0 mt-0.5" />,
    text: "30 GB of free disk space",
  },
];

const kindConfig = `kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    extraPortMappings:
      - containerPort: 9443
        hostPort: 9443
        listenAddress: "0.0.0.0"
      - containerPort: 30000
        hostPort: 30000
        listenAddress: "0.0.0.0"
      - containerPort: 30001
        hostPort: 30001
        listenAddress: "0.0.0.0"`;

const installSteps: { label: string; description: string; command: string; note?: string }[] = [
  {
    label: "Clone the Konflux CI repository",
    description: "Start by cloning the official repository that contains all deployment manifests and scripts.",
    command: "git clone https://github.com/konflux-ci/konflux-ci.git\ncd konflux-ci",
  },
  {
    label: "Create the Kind cluster configuration",
    description: "Save the cluster config below as kind-config.yaml in the project root. It maps the ports Konflux needs on your host.",
    command: `cat > kind-config.yaml << 'EOF'\n${kindConfig}\nEOF`,
  },
  {
    label: "Create the Kind cluster",
    description: "Spin up the local Kubernetes cluster using the configuration file.",
    command: "kind create cluster --name konflux --config kind-config.yaml",
  },
  {
    label: "Deploy Konflux",
    description: "Run the deployment script. This installs all Konflux components into the cluster. The process takes several minutes.",
    command: "chmod +x deploy-konflux.sh\n./deploy-konflux.sh",
    note: "This step pulls images and sets up namespaces, Tekton, the Konflux UI, and all platform services. It may take 5–15 minutes on the first run.",
  },
  {
    label: "Wait for all pods to be ready",
    description: "Monitor the rollout and wait until every pod is running before proceeding.",
    command: "kubectl wait --for=condition=ready pod --all --all-namespaces --timeout=600s",
  },
  {
    label: "Update /etc/hosts for local DNS",
    description:
      "Konflux uses hostname-based routing. Add these entries to your /etc/hosts so the UI and APIs are reachable on localhost.",
    command: `echo "127.0.0.1 konflux.127.0.0.1.nip.io" | sudo tee -a /etc/hosts\necho "127.0.0.1 oauth-openshift.127.0.0.1.nip.io" | sudo tee -a /etc/hosts`,
    note: "nip.io is a wildcard DNS service — it resolves *.127.0.0.1.nip.io back to 127.0.0.1, so no real DNS changes are needed.",
  },
  {
    label: "Retrieve initial credentials",
    description: "Get the default admin username and password to log in to the Konflux UI.",
    command: `kubectl get secret -n konflux-ci konflux-ui-secret -o jsonpath='{.data.user}' | base64 -d\nkubectl get secret -n konflux-ci konflux-ui-secret -o jsonpath='{.data.password}' | base64 -d`,
  },
  {
    label: "Open the Konflux UI",
    description: "Navigate to the dashboard in your browser.",
    command: "open https://konflux.127.0.0.1.nip.io:9443",
    note: "Accept the self-signed certificate warning in your browser. This is expected for local development.",
  },
];

const verifySteps = [
  {
    label: "Check all pods are running",
    command: "kubectl get pods --all-namespaces",
  },
  {
    label: "Verify Tekton pipelines are available",
    command: "kubectl get clustertasks",
  },
  {
    label: "Inspect Konflux components",
    command: "kubectl get all -n konflux-ci",
  },
];

const troubleshootingItems = [
  {
    problem: "Pods stuck in Pending",
    solution: "Check that Docker / Podman has been allocated enough CPU and memory. Increase resources in Docker Desktop settings and re-create the cluster.",
  },
  {
    problem: "ImagePullBackOff errors",
    solution: "Ensure you have a working internet connection. If behind a proxy, configure Docker/Podman proxy settings before creating the Kind cluster.",
  },
  {
    problem: "UI not reachable in browser",
    solution: "Verify /etc/hosts entries were added correctly. Confirm port 9443 is not already in use on your host.",
  },
  {
    problem: "deploy-konflux.sh times out",
    solution: "Re-run the script — it is idempotent. Some image pulls may fail transiently. You can also increase the wait timeout in the script.",
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="flex items-center gap-1 text-gray-500 hover:text-violet-400 transition-colors shrink-0"
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
        <code className="text-xs text-gray-300 font-mono whitespace-pre-wrap break-all leading-relaxed">
          {command}
        </code>
      </div>
      <CopyButton text={command} />
    </div>
  );
}

function InfoBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 mt-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3">
      <Info size={13} className="text-[#48B5FF] shrink-0 mt-0.5" />
      <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function TryKonfluxHelmPage() {
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
          <span className="text-gray-700 dark:text-gray-300">Local Installation</span>
        </nav>

        {/* Hero */}
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950 border border-violet-100 dark:border-violet-800 flex items-center justify-center">
              <Package size={20} className="text-violet-600 dark:text-violet-400" />
            </div>
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
              Local Installation · Kind
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
            Run Konflux on Your Machine
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Deploy a fully functional Konflux instance locally using Kind (Kubernetes-in-Docker).
            This is the recommended approach for local development, experimentation, and contribution.
          </p>
        </div>

        {/* Official docs reference */}
        <div className="flex items-start gap-3 border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/40 rounded-xl px-5 py-4 mb-8">
          <ExternalLink size={15} className="text-violet-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-violet-900 dark:text-violet-200" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              Official installation documentation
            </p>
            <p className="text-xs text-violet-700 dark:text-violet-400 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
              This page is based on the canonical Konflux installation guide.{" "}
              <a
                href="https://konflux-ci.dev/konflux-ci/docs/installation/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-2 font-medium hover:text-violet-900 dark:hover:text-violet-200 transition-colors"
              >
                Read the full docs <ExternalLink size={11} />
              </a>
            </p>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 mb-8">
          <h2 className="text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            Prerequisites
          </h2>
          <ul className="space-y-3">
            {prerequisites.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-start gap-2.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl px-4 py-3">
            <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="font-semibold">Resource requirements are firm.</span> Running Konflux with less than 6 CPUs or 8 GB RAM allocated to Docker will result in pods failing to schedule. We recommend using 16 GB RAM if possible.
            </p>
          </div>
        </div>

        {/* Kind config callout */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 mb-8">
          <h2 className="text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            Kind Cluster Configuration
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Konflux requires specific port mappings exposed from the Kind node to your host. The config file below is used in Step 2.
          </p>
          <div className="bg-gray-950 dark:bg-black rounded-lg p-4 flex items-start justify-between gap-3">
            <pre className="text-xs text-gray-300 font-mono whitespace-pre leading-relaxed overflow-x-auto">{kindConfig}</pre>
            <CopyButton text={kindConfig} />
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-10">
          <h2 className="text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            Installation Steps
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Follow these steps in order. All commands assume you are inside the cloned <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono text-gray-700 dark:text-gray-300">konflux-ci</code> directory unless noted.
          </p>
          <div className="space-y-7">
            {installSteps.map((step, i) => (
              <div key={step.label} className="flex gap-4 items-start">
                {/* Step number */}
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-violet-600 dark:text-violet-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-1 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {step.description}
                  </p>
                  <CodeBlock command={step.command} />
                  {step.note && <InfoBanner>{step.note}</InfoBanner>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verify */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 mb-8">
          <h2 className="text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            Verify the Installation
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Run these commands to confirm all components are healthy.
          </p>
          <div className="space-y-4">
            {verifySteps.map((s) => (
              <div key={s.label}>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  {s.label}
                </p>
                <CodeBlock command={s.command} />
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden mb-8">
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
            <AlertTriangle size={15} className="text-amber-500" />
            <h2 className="text-gray-900 dark:text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}>
              Troubleshooting
            </h2>
          </div>
          <div className="divide-y divide-gray-50 dark:divide-gray-900">
            {troubleshootingItems.map((item) => (
              <div key={item.problem} className="px-6 py-4 bg-white dark:bg-gray-950 flex flex-col sm:flex-row sm:gap-6 gap-1">
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 sm:w-48 shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {item.problem}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next steps */}
        <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-gray-50 dark:bg-gray-900 mb-8">
          <h2 className="text-gray-900 dark:text-white mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}>
            What's next?
          </h2>
          <ul className="space-y-2.5">
            {[
              "Log in to the Konflux UI and create your first application",
              "Connect a GitHub repository to auto-generate a secure Tekton pipeline",
              "Push a commit and watch your build get signed, attested, and verified",
              "Explore the generated SBOM and SLSA provenance from the dashboard",
              "Configure Enterprise Contract policies to enforce your release gates",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                <ArrowRight size={14} className="text-violet-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 p-6 text-white mb-8">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.25), transparent 60%)" }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem" }}>
                Need help?
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Join the community Slack or open an issue on GitHub.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://github.com/konflux-ci/konflux-ci"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D" }}
              >
                <Github size={14} /> konflux-ci on GitHub
              </a>
              <a
                href="https://konflux-ci.dev/konflux-ci/docs/installation/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 px-5 py-2 rounded-full text-sm hover:border-gray-500 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Official Docs <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/getting-started/try-konflux"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowRight size={13} className="rotate-180" /> Back to installation methods
          </Link>
          <Link
            to="/getting-started/try-konflux/tsf"
            className="inline-flex items-center gap-1.5 text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Try tsf-cli instead <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </div>
  );
}
