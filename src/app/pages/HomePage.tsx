import { Link } from "react-router";
import { ArrowRight, Github, Shield, Zap, Package, Users, CheckCircle, ExternalLink, Factory, Monitor, FileCheck, Lock, ScanLine, Layers, Workflow, Box, RotateCcw, GitBranch } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { OnThisPageNav } from "../components/OnThisPageNav";
import svgPaths from "../../imports/svg-g8w5a0a3ka";
function IllustrationCICD() {
  return (
    <svg viewBox="0 0 320 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-36">
      <rect width="320" height="144" rx="12" className="fill-violet-50 dark:fill-violet-950/40" />
      {/* Pipeline flow */}
      <rect x="30" y="52" width="44" height="40" rx="8" className="fill-violet-200 dark:fill-violet-800" />
      <rect x="38" y="60" width="28" height="6" rx="2" className="fill-violet-400 dark:fill-violet-500" />
      <rect x="38" y="70" width="20" height="4" rx="2" className="fill-violet-300 dark:fill-violet-600" />
      <rect x="38" y="78" width="24" height="4" rx="2" className="fill-violet-300 dark:fill-violet-600" />
      {/* Arrow 1 */}
      <path d="M82 72 L100 72" strokeWidth="2" className="stroke-violet-400 dark:stroke-violet-500" strokeLinecap="round" />
      <path d="M96 68 L102 72 L96 76" strokeWidth="2" className="stroke-violet-400 dark:stroke-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Build */}
      <rect x="108" y="48" width="48" height="48" rx="10" className="fill-violet-500 dark:fill-violet-600" />
      <path d="M124 64 L140 64 M124 72 L140 72 M124 80 L136 80" strokeWidth="2.5" stroke="white" strokeLinecap="round" />
      <circle cx="120" cy="64" r="2" fill="white" />
      <circle cx="120" cy="72" r="2" fill="white" />
      <circle cx="120" cy="80" r="2" fill="white" />
      {/* Arrow 2 */}
      <path d="M164 72 L182 72" strokeWidth="2" className="stroke-violet-400 dark:stroke-violet-500" strokeLinecap="round" />
      <path d="M178 68 L184 72 L178 76" strokeWidth="2" className="stroke-violet-400 dark:stroke-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Test */}
      <rect x="190" y="48" width="48" height="48" rx="10" className="fill-violet-100 dark:fill-violet-900" />
      <path d="M206 64 L222 64 M206 72 L222 72 M206 80 L218 80" strokeWidth="2" className="stroke-violet-500 dark:stroke-violet-400" strokeLinecap="round" />
      <path d="M226 62 L216 76" strokeWidth="2.5" className="stroke-emerald-500" strokeLinecap="round" />
      <path d="M216 76 L212 70" strokeWidth="2.5" className="stroke-emerald-500" strokeLinecap="round" />
      {/* Arrow 3 */}
      <path d="M246 72 L264 72" strokeWidth="2" className="stroke-violet-400 dark:stroke-violet-500" strokeLinecap="round" />
      <path d="M260 68 L266 72 L260 76" strokeWidth="2" className="stroke-violet-400 dark:stroke-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Deploy */}
      <rect x="272" y="52" width="44" height="40" rx="8" className="fill-emerald-100 dark:fill-emerald-900/50" />
      <path d="M294 64 L294 80" strokeWidth="2" className="stroke-emerald-500" strokeLinecap="round" />
      <path d="M286 72 L294 64 L302 72" strokeWidth="2" className="stroke-emerald-500" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Label */}
      <text x="132" y="118" textAnchor="middle" className="fill-violet-400 dark:fill-violet-500" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">build</text>
      <text x="214" y="118" textAnchor="middle" className="fill-violet-400 dark:fill-violet-500" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">test</text>
      <text x="294" y="118" textAnchor="middle" className="fill-emerald-500" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">deploy</text>
    </svg>
  );
}

function IllustrationSign() {
  return (
    <svg viewBox="0 0 320 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-36">
      <rect width="320" height="144" rx="12" className="fill-violet-50 dark:fill-violet-950/40" />
      {/* Document */}
      <rect x="100" y="24" width="72" height="96" rx="8" className="fill-white dark:fill-gray-800" strokeWidth="1.5" className="fill-white dark:fill-gray-800 stroke-violet-200 dark:stroke-violet-700" />
      <rect x="112" y="38" width="36" height="4" rx="2" className="fill-violet-300 dark:fill-violet-600" />
      <rect x="112" y="48" width="48" height="4" rx="2" className="fill-gray-200 dark:fill-gray-600" />
      <rect x="112" y="56" width="44" height="4" rx="2" className="fill-gray-200 dark:fill-gray-600" />
      <rect x="112" y="64" width="40" height="4" rx="2" className="fill-gray-200 dark:fill-gray-600" />
      <rect x="112" y="72" width="48" height="4" rx="2" className="fill-gray-200 dark:fill-gray-600" />
      <rect x="112" y="80" width="32" height="4" rx="2" className="fill-gray-200 dark:fill-gray-600" />
      {/* Signature line */}
      <path d="M112 98 L148 98" strokeWidth="1" className="stroke-violet-300 dark:stroke-violet-600" strokeDasharray="3 2" />
      <path d="M114 96 C118 88, 122 96, 126 90 C130 84, 134 96, 138 92 C140 90, 142 94, 144 92" strokeWidth="1.5" className="stroke-violet-600 dark:stroke-violet-400" fill="none" strokeLinecap="round" />
      {/* Shield with check */}
      <path d="M220 40 L220 75 C220 90 200 105 200 105 C200 105 180 90 180 75 L180 40 L200 30 Z" className="fill-violet-500 dark:fill-violet-600" />
      <path d="M220 40 L220 75 C220 90 200 105 200 105 C200 105 180 90 180 75 L180 40 L200 30 Z" className="stroke-violet-600 dark:stroke-violet-500" strokeWidth="1.5" fill="none" />
      <path d="M190 68 L197 76 L212 58" strokeWidth="3" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lock icon */}
      <rect x="232" y="78" width="24" height="18" rx="4" className="fill-violet-200 dark:fill-violet-800" />
      <path d="M238 78 L238 72 C238 66 250 66 250 72 L250 78" strokeWidth="2" className="stroke-violet-400 dark:stroke-violet-500" fill="none" strokeLinecap="round" />
      <circle cx="244" cy="88" r="2" className="fill-violet-500 dark:fill-violet-400" />
      {/* Connection line */}
      <path d="M172 70 L180 70" strokeWidth="1.5" className="stroke-violet-300 dark:stroke-violet-600" strokeDasharray="3 2" />
    </svg>
  );
}

function IllustrationSupplyChain() {
  return (
    <svg viewBox="0 0 320 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-36">
      <rect width="320" height="144" rx="12" className="fill-violet-50 dark:fill-violet-950/40" />
      {/* Chain links */}
      <rect x="40" y="50" width="56" height="44" rx="10" className="fill-white dark:fill-gray-800 stroke-violet-200 dark:stroke-violet-700" strokeWidth="1.5" />
      <rect x="50" y="58" width="16" height="16" rx="4" className="fill-violet-100 dark:fill-violet-900" />
      <rect x="50" y="58" width="16" height="16" rx="4" className="stroke-violet-400 dark:stroke-violet-500" strokeWidth="1" fill="none" />
      <rect x="50" y="78" width="36" height="3" rx="1.5" className="fill-gray-200 dark:fill-gray-600" />
      <rect x="50" y="84" width="28" height="3" rx="1.5" className="fill-gray-200 dark:fill-gray-600" />
      {/* Link chain */}
      <path d="M96 72 L120 72" strokeWidth="2" className="stroke-violet-300 dark:stroke-violet-600" />
      <circle cx="108" cy="72" r="4" className="fill-violet-200 dark:fill-violet-800 stroke-violet-400 dark:stroke-violet-500" strokeWidth="1.5" />
      {/* Center shield */}
      <rect x="120" y="42" width="80" height="60" rx="12" className="fill-violet-500 dark:fill-violet-600" />
      <path d="M160 52 L160 80 C160 88 148 95 148 95 C148 95 136 88 136 80 L136 52 L148 46 L160 52" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
      <path d="M172 52 L172 80 C172 88 184 95 184 95 C184 95 196 88 196 80 L196 52 L184 46 L172 52" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
      <text x="160" y="78" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">VERIFIED</text>
      {/* Link chain right */}
      <path d="M200 72 L224 72" strokeWidth="2" className="stroke-violet-300 dark:stroke-violet-600" />
      <circle cx="212" cy="72" r="4" className="fill-violet-200 dark:fill-violet-800 stroke-violet-400 dark:stroke-violet-500" strokeWidth="1.5" />
      {/* Output */}
      <rect x="224" y="50" width="56" height="44" rx="10" className="fill-white dark:fill-gray-800 stroke-emerald-200 dark:stroke-emerald-700" strokeWidth="1.5" />
      <rect x="234" y="58" width="16" height="16" rx="4" className="fill-emerald-100 dark:fill-emerald-900" />
      <path d="M238 66 L242 70 L248 62" strokeWidth="1.5" className="stroke-emerald-500" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="234" y="78" width="36" height="3" rx="1.5" className="fill-gray-200 dark:fill-gray-600" />
      <rect x="234" y="84" width="28" height="3" rx="1.5" className="fill-gray-200 dark:fill-gray-600" />
      {/* Labels */}
      <text x="68" y="116" textAnchor="middle" className="fill-violet-400 dark:fill-violet-500" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">source</text>
      <text x="160" y="116" textAnchor="middle" className="fill-violet-400 dark:fill-violet-500" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">policy gate</text>
      <text x="252" y="116" textAnchor="middle" className="fill-emerald-500" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">trusted</text>
    </svg>
  );
}

function IllustrationCommunity() {
  return (
    <svg viewBox="0 0 320 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-36">
      <rect width="320" height="144" rx="12" className="fill-violet-50 dark:fill-violet-950/40" />
      {/* Center person */}
      <circle cx="160" cy="52" r="14" className="fill-violet-500 dark:fill-violet-600" />
      <circle cx="160" cy="48" r="6" fill="white" opacity="0.9" />
      <path d="M150 58 C150 54 170 54 170 58" fill="white" opacity="0.9" />
      {/* Left person */}
      <circle cx="100" cy="62" r="12" className="fill-violet-300 dark:fill-violet-700" />
      <circle cx="100" cy="58" r="5" fill="white" opacity="0.8" />
      <path d="M91 66 C91 63 109 63 109 66" fill="white" opacity="0.8" />
      {/* Right person */}
      <circle cx="220" cy="62" r="12" className="fill-violet-300 dark:fill-violet-700" />
      <circle cx="220" cy="58" r="5" fill="white" opacity="0.8" />
      <path d="M211 66 C211 63 229 63 229 66" fill="white" opacity="0.8" />
      {/* Far left */}
      <circle cx="56" cy="72" r="10" className="fill-violet-200 dark:fill-violet-800" />
      <circle cx="56" cy="69" r="4" className="fill-violet-400 dark:fill-violet-500" opacity="0.7" />
      <path d="M49 75 C49 73 63 73 63 75" className="fill-violet-400 dark:fill-violet-500" opacity="0.7" />
      {/* Far right */}
      <circle cx="264" cy="72" r="10" className="fill-violet-200 dark:fill-violet-800" />
      <circle cx="264" cy="69" r="4" className="fill-violet-400 dark:fill-violet-500" opacity="0.7" />
      <path d="M257 75 C257 73 271 73 271 75" className="fill-violet-400 dark:fill-violet-500" opacity="0.7" />
      {/* Connection lines */}
      <path d="M112 62 L146 54" strokeWidth="1.5" className="stroke-violet-300 dark:stroke-violet-600" strokeDasharray="4 3" />
      <path d="M174 54 L208 62" strokeWidth="1.5" className="stroke-violet-300 dark:stroke-violet-600" strokeDasharray="4 3" />
      <path d="M66 72 L88 66" strokeWidth="1" className="stroke-violet-200 dark:stroke-violet-700" strokeDasharray="3 3" />
      <path d="M232 66 L254 72" strokeWidth="1" className="stroke-violet-200 dark:stroke-violet-700" strokeDasharray="3 3" />
      {/* PR / Issue badges */}
      <rect x="72" y="92" width="44" height="20" rx="10" className="fill-violet-100 dark:fill-violet-900 stroke-violet-200 dark:stroke-violet-700" strokeWidth="1" />
      <text x="94" y="105" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">PR #42</text>
      <rect x="132" y="92" width="56" height="20" rx="10" className="fill-emerald-100 dark:fill-emerald-900/50 stroke-emerald-200 dark:stroke-emerald-700" strokeWidth="1" />
      <text x="160" y="105" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">merged</text>
      <rect x="204" y="92" width="44" height="20" rx="10" className="fill-violet-100 dark:fill-violet-900 stroke-violet-200 dark:stroke-violet-700" strokeWidth="1" />
      <text x="226" y="105" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">review</text>
      {/* Stars / hearts */}
      <text x="140" y="128" className="fill-amber-400" fontSize="12">★</text>
      <text x="156" y="126" className="fill-amber-400" fontSize="10">★</text>
      <text x="168" y="128" className="fill-amber-400" fontSize="12">★</text>
    </svg>
  );
}

const lifecycleSteps = [
  { icon: <svg viewBox="0 0 23.25 22.6695" className="w-5 h-5" fill="currentColor"><path d={svgPaths.p5baa980} /></svg>, title: "Bring your code", subtitle: "Any git source" },
  { icon: <svg viewBox="0 0 18 24" className="w-5 h-5" fill="currentColor"><path d={svgPaths.p111f6000} /></svg>, title: "Sign Commit", subtitle: "Pipeline triggered" },
  { icon: <svg viewBox="0 0 21 24" className="w-5 h-5" fill="currentColor"><path d={svgPaths.p277a5700} /></svg>, title: "CVE scan & SBOM", subtitle: "Tekton tasks run" },
  { icon: <svg viewBox="0 0 24.0001 24" className="w-5 h-5" fill="currentColor"><path d={svgPaths.pbd91400} /></svg>, title: "Secured image", subtitle: "Verifiable artifacts" },
  { icon: <svg viewBox="0 0 18 24" className="w-5 h-5" fill="currentColor"><path d={svgPaths.p32297900} /></svg>, title: "Verify artifacts", subtitle: "Conforma policies" },
  { icon: <svg viewBox="0 0 24 23.9961" className="w-5 h-5" fill="currentColor"><path d={svgPaths.p21e4000} /></svg>, title: "Code released", subtitle: "Deployed to prod" },
];

const lifecycleDetails = [
  {
    heading: "Bring your code from any git source",
    description: "Connect your GitHub, GitLab, or any git repository to Konflux. The platform automatically detects your project structure, language, and build system — then generates a secure, customizable pipeline tailored to your codebase. No boilerplate, no config files to copy-paste.",
    highlights: ["GitHub & GitLab integration", "Auto-detected build pipelines", "Support for monorepos and multi-component apps"],
  },
  {
    heading: "Cryptographically sign every commit",
    description: "Each build is triggered by a signed commit, and Konflux uses Sigstore's keyless signing to cryptographically attest the provenance of every pipeline run. This creates an unbreakable chain of trust from developer intent to final artifact — without managing private keys.",
    highlights: ["Keyless signing via Sigstore", "Automatic provenance attestation", "Tamper-evident audit trail"],
  },
  {
    heading: "Scan for CVEs and generate SBOMs",
    description: "Tekton tasks automatically scan your container images for known vulnerabilities using Clair and generate comprehensive Software Bills of Materials in CycloneDX and SPDX formats. Every component, dependency, and transitive library is cataloged for full transparency.",
    highlights: ["Clair vulnerability scanning", "CycloneDX & SPDX SBOM generation", "Detailed CVE reports with remediation guidance"],
  },
  {
    heading: "Produce secured, verifiable container images",
    description: "Konflux builds your container images in hermetic, network-isolated environments to guarantee reproducibility. Each image is signed, attested, and tagged with SLSA Level 3 provenance — ensuring that what you built is exactly what gets deployed, with no tampering possible.",
    highlights: ["Hermetic, reproducible builds", "SLSA Level 3 compliance", "Signed and attested OCI images"],
  },
  {
    heading: "Verify artifacts against enterprise policies",
    description: "Before any artifact is released, Conforma (Enterprise Contract) validates it against your organization's policies, SLSA requirements, and custom rules. Failed checks block the release pipeline, ensuring only compliant, secure software reaches production.",
    highlights: ["Enterprise Contract policy engine", "Custom organizational rules", "Automated gate checks before release"],
  },
  {
    heading: "Release your code to production with confidence",
    description: "The Release Service orchestrates promotion across environments with full audit trails. Every artifact is tracked from source to deployment, with cryptographic proof at every step. Your team ships faster because security is built in — not bolted on.",
    highlights: ["Managed release pipelines", "Full deployment audit trail", "Environment promotion with gating"],
  },
];

const features = [
  {
    icon: <Zap size={20} className="text-violet-600" />,
    title: "CI/CD Automation",
    description: "Build artifacts of all kinds from source. Automate builds, tests, and releases with repeatable, dependable outcomes.",
    illustration: <IllustrationCICD />,
    link: "/documentation",
  },
  {
    icon: <Shield size={20} className="text-violet-600" />,
    title: "Securely Sign",
    description: "Generate secure & detailed provenance, an immutable record of what happened during each and every build step.",
    illustration: <IllustrationSign />,
    link: "/documentation",
  },
  {
    icon: <Package size={20} className="text-violet-600" />,
    title: "Supply chain safeguards",
    description: "Verify container images against major secure software frameworks or your own custom rules.",
    illustration: <IllustrationSupplyChain />,
    link: "/documentation",
  },
  {
    icon: <Users size={20} className="text-violet-600" />,
    title: "Open source, community driven",
    description: "Built in the open with transparent roadmaps, shared governance, and active contributors.",
    illustration: <IllustrationCommunity />,
    link: "/community",
  },
];

const factoryComponents = [
  {
    icon: <Workflow size={20} />,
    name: "Tekton",
    description: "Cloud-native CI/CD pipeline engine that powers all Konflux build and test workflows with flexible, Kubernetes-native task definitions.",
    url: "https://tekton.dev",
  },
  {
    icon: <Lock size={20} />,
    name: "Sigstore",
    description: "Keyless signing and transparency log for artifacts. Every build output is cryptographically signed and verifiable without managing private keys.",
    url: "https://sigstore.dev",
  },
  {
    icon: <FileCheck size={20} />,
    name: "Conforma (EC)",
    description: "Enterprise Contract policy engine that validates container images against SLSA, supply chain, and custom organizational policies before release.",
    url: "https://github.com/enterprise-contract",
  },
  {
    icon: <ScanLine size={20} />,
    name: "Clair",
    description: "Vulnerability scanner that analyzes container images for known CVEs, providing detailed reports and actionable remediation guidance.",
    url: "https://github.com/quay/clair",
  },
  {
    icon: <Box size={20} />,
    name: "Buildah",
    description: "Daemonless, rootless container image builder. Builds OCI-compliant images from Dockerfiles or scratch without requiring a running daemon.",
    url: "https://buildah.io",
  },
  {
    icon: <Layers size={20} />,
    name: "CycloneDX / SPDX",
    description: "Industry-standard SBOM formats automatically generated for every build, providing a complete inventory of all software components.",
    url: "https://cyclonedx.org",
  },
  {
    icon: <GitBranch size={20} />,
    name: "Renovate",
    description: "Automated dependency update bot that keeps your build pipelines and component references current with the latest secure versions.",
    url: "https://github.com/renovatebot/renovate",
  },
  {
    icon: <RotateCcw size={20} />,
    name: "Hermetic Builds",
    description: "Network-isolated build environments that guarantee reproducibility and prevent supply chain attacks by eliminating external fetches at build time.",
    url: "https://slsa.dev",
  },
  {
    icon: <Monitor size={20} />,
    name: "Release Service",
    description: "Managed release pipelines that orchestrate promotion, gating, and deployment of verified artifacts across environments with full audit trails.",
    url: "https://github.com/konflux-ci",
  },
  {
    icon: <Shield size={20} />,
    name: "In-Toto Attestations",
    description: "SLSA-compliant provenance attestations that cryptographically link every artifact to its source, builder, and build steps for end-to-end trust.",
    url: "https://in-toto.io",
  },
];

export default function HomePage() {
  const [hoveredFactory, setHoveredFactory] = useState<number | null>(null);
  const [selectedStep, setSelectedStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const AUTOPLAY_INTERVAL = 4000;
  const PAUSE_DURATION = 10000;

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSelectedStep((prev) => (prev + 1) % lifecycleSteps.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleManualSelect = useCallback((step: number) => {
    setSelectedStep(step);
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), PAUSE_DURATION);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Announcement Banner */}
      <div className="hidden bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 text-white text-sm py-2.5 px-4 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
        <span className="font-medium">Konflux 1.0 is here. </span>
        <span className="text-violet-200">Secure software supply chain for everyone. </span>
        <a href="/getting-started" className="underline underline-offset-2 text-white font-medium hover:text-violet-100">
          Get started →
        </a>
      </div>

      <div className="max-w-[1400px] mx-auto flex">
        {/* Main Content */}
        <div className="flex-1 min-w-0">

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(72,181,255,0.15) 0%, rgba(72,181,255,0.08) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(72,181,255,0.12) 0%, transparent 70%)" }}
        />
        

        <div className="relative max-w-[900px] mx-auto px-4 text-center">
          <h1
            className="text-gray-900 dark:text-white mb-6"
            style={{
              fontFamily: "'Inter', 'Red Hat Display', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            Secure builds made easy
          </h1>
          <p
            className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', 'Red Hat Text', sans-serif" }}
          >
            Konflux is a complete trusted software factory built from leading open source projects that makes building secure container images a breeze.
          </p>

          {/* Two CTA buttons */}
          <p
            className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your code deserves a factory, not a toolchain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Link
              to="/getting-started/try-konflux"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full transition-all font-medium text-sm shadow-lg hover:shadow-xl hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D", boxShadow: "0 10px 15px -3px rgba(252,120,61,0.3)" }}
            >
              <Factory size={16} />
              Try Locally
            </Link>
          </div>

          {/* Secure Software Factory Graphic */}
          <div className="max-w-3xl mx-auto">
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {/* SCM Sources */}
              <div className="flex flex-col items-center gap-2 md:w-1/4">
                <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Source Code
                </p>
                <div className="flex gap-3">
                  {[
                    { label: "GitHub", icon: <Github size={22} /> },
                    { label: "GitLab", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.83 2a.43.43 0 01.58.28l2.44 7.49h8.3l2.44-7.51A.42.42 0 0119.17 2a.43.43 0 01.58.28l2.44 7.51L23.41 13a.84.84 0 01-.76 1.39z"/></svg> },
                  ].map((scm) => (
                    <div key={scm.label} className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm">
                      {scm.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center px-3">
                <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-violet-400 dark:from-gray-600 dark:to-violet-500" />
                <ArrowRight size={16} className="text-violet-400 -ml-1" />
              </div>
              <div className="md:hidden">
                <svg className="w-4 h-6 text-violet-400" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 0v20M2 16l6 6 6-6" /></svg>
              </div>

              {/* Factory */}
              <div className="md:w-2/5 flex flex-col items-center">
                <div className="relative w-full max-w-[240px]">
                  <div className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-gray-900 border-2 border-violet-200 dark:border-violet-800 rounded-2xl p-5 shadow-lg shadow-violet-100/50 dark:shadow-violet-900/20">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Factory size={24} className="text-violet-600 dark:text-violet-400" />
                    </div>
                    <p className="text-center text-sm font-semibold text-gray-800 dark:text-gray-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Konflux Factory
                    </p>
                    <p className="text-center text-[10px] text-gray-500 dark:text-gray-400 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Build &middot; Sign &middot; Scan &middot; Attest
                    </p>
                    <div className="mt-3 flex flex-wrap justify-center gap-1">
                      {["Tekton", "Sigstore", "Clair", "SBOM"].map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/70 dark:bg-gray-800 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-700 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center px-3">
                <div className="w-12 h-px bg-gradient-to-r from-violet-400 to-green-400 dark:from-violet-500 dark:to-green-500" />
                <ArrowRight size={16} className="text-green-500 -ml-1" />
              </div>
              <div className="md:hidden">
                <svg className="w-4 h-6 text-green-500" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 0v20M2 16l6 6 6-6" /></svg>
              </div>

              {/* SLSA L3 Containers */}
              <div className="flex flex-col items-center gap-2 md:w-1/4">
                <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Verified Output
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "SLSA L3", color: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400" },
                    { label: "Signed", color: "bg-violet-50 dark:bg-violet-950 border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400" },
                  ].map((badge) => (
                    <div key={badge.label} className={`flex items-center gap-2 px-3 py-2 rounded-xl border shadow-sm ${badge.color}`}>
                      <CheckCircle size={14} />
                      <span className="text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{badge.label}</span>
                    </div>
                  ))}
                  <div className="flex gap-1.5 justify-center mt-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                        <Box size={14} className="text-gray-400 dark:text-gray-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Konflux Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              How it works
            </p>
            <h2
              className="text-gray-900 dark:text-white mb-3"
              style={{ fontFamily: "'Inter', 'Red Hat Display', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              The Konflux code lifecycle
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Explore the lifecycle of a secure build produced by Konflux
            </p>
          </div>

          {/* Step tabs with progress line */}
          <div className="relative mb-12">
            {/* Progress connector line */}
            <div className="hidden sm:block absolute top-5 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700 z-0" />
            <div
              className="hidden sm:block absolute top-5 left-0 h-px bg-violet-400 dark:bg-violet-500 z-[1] transition-all duration-300"
              style={{ width: `${(selectedStep / (lifecycleSteps.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-0 relative z-[2]">
              {lifecycleSteps.map((step, i) => (
                <button
                  key={step.title}
                  onClick={() => handleManualSelect(i)}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                  {/* Step indicator dot */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                      selectedStep === i
                        ? "bg-violet-600 dark:bg-violet-500 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/40 scale-110"
                        : i < selectedStep
                        ? "bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 group-hover:bg-violet-50 dark:group-hover:bg-violet-950 group-hover:text-violet-500"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <p
                    className={`text-center text-xs transition-colors ${
                      selectedStep === i
                        ? "text-violet-600 dark:text-violet-400 font-semibold"
                        : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: selectedStep === i ? 600 : 500 }}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`text-center text-[10px] transition-colors ${
                      selectedStep === i
                        ? "text-violet-400 dark:text-violet-500"
                        : "text-gray-400 dark:text-gray-600"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.subtitle}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Selected step detail */}
          <div
            key={selectedStep}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left: icon + step info */}
              <div className="md:w-1/3 bg-gradient-to-br from-violet-50 to-violet-100/50 dark:from-violet-950/50 dark:to-gray-900 p-8 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
                <div className="w-14 h-14 rounded-2xl bg-violet-600 dark:bg-violet-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-violet-200 dark:shadow-violet-900/40">
                  {lifecycleSteps[selectedStep].icon}
                </div>
                <p className="text-[11px] font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Step {selectedStep + 1} of {lifecycleSteps.length}
                </p>
                <h3
                  className="text-gray-900 dark:text-white text-center md:text-left"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.15rem", lineHeight: 1.3 }}
                >
                  {lifecycleDetails[selectedStep].heading}
                </h3>

                {/* Step navigation */}
                <div className="flex items-center gap-2 mt-6">
                  <button
                    onClick={() => handleManualSelect((selectedStep - 1 + lifecycleSteps.length) % lifecycleSteps.length)}
                    className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
                  >
                    <ArrowRight size={14} className="rotate-180" />
                  </button>
                  <div className="flex gap-1">
                    {lifecycleSteps.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          i === selectedStep ? "bg-violet-500" : i < selectedStep ? "bg-violet-300 dark:bg-violet-700" : "bg-gray-300 dark:bg-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => handleManualSelect((selectedStep + 1) % lifecycleSteps.length)}
                    className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Right: description + highlights */}
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {lifecycleDetails[selectedStep].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {lifecycleDetails[selectedStep].highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700">
                      <CheckCircle size={15} className="text-violet-500 dark:text-violet-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 dark:text-gray-300" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Konflux */}
      <section id="why-konflux" className="border-t border-gray-100 dark:border-gray-800 py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Why Konflux
            </p>
            <h2
              className="text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: "'Inter', 'Red Hat Display', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >The secure CI/CD platform that scales as fast as your code.</h2>
            <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Are fragmented tools slowing you down? Are security gaps keeping you up at night?
              Konflux is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 hover:shadow-md hover:border-violet-100 dark:hover:border-violet-800 transition-all flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-950 border border-violet-100 dark:border-violet-800 flex items-center justify-center mb-3 shrink-0">
                  {f.icon}
                </div>
                <div className="mb-3 rounded-xl overflow-hidden">
                  {f.illustration}
                </div>
                <h3
                  className="text-gray-900 dark:text-white mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  {f.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-1 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {f.description}
                </p>
                <Link
                  to={f.link}
                  className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 text-xs font-medium hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Learn more <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour The Factory */}
      <section id="tour-the-factory" className="bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Under the hood
            </p>
            <h2
              className="text-gray-900 dark:text-white mb-3"
              style={{ fontFamily: "'Inter', 'Red Hat Display', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Tour The Factory
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Konflux brings together best-in-class open source projects into a single, integrated software factory. Hover to explore each component.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {factoryComponents.map((comp, i) => (
              <a
                key={comp.name}
                href={comp.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group border rounded-2xl p-4 transition-all duration-200 cursor-pointer block ${
                  hoveredFactory === i
                    ? "bg-white dark:bg-gray-800 border-violet-300 dark:border-violet-700 shadow-lg shadow-violet-100/50 dark:shadow-violet-900/30 scale-[1.03]"
                    : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 hover:border-violet-200 dark:hover:border-violet-700 hover:shadow-md"
                }`}
                onMouseEnter={() => setHoveredFactory(i)}
                onMouseLeave={() => setHoveredFactory(null)}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  hoveredFactory === i
                    ? "bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                }`}>
                  {comp.icon}
                </div>
                <h3
                  className="text-gray-900 dark:text-white mb-1.5 flex items-center gap-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
                >
                  {comp.name}
                  <ExternalLink size={10} className="text-gray-300 dark:text-gray-600 group-hover:text-violet-400 transition-colors" />
                </h3>
                <p
                  className="text-gray-500 dark:text-gray-400 text-[11px] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {comp.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="get-started-cta" className="py-20 px-4">
        <div className="max-w-[700px] mx-auto text-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(72,181,255,0.15), transparent 70%)" }}
            />
            <div className="relative border border-gray-100 dark:border-gray-800 rounded-3xl p-12 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[CheckCircle, CheckCircle, CheckCircle].map((Icon, i) => (
                  <Icon key={i} size={16} className="text-violet-400" />
                ))}
              </div>
              <h2
                className="text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                Bring your code, we'll secure the rest
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Connect any git repository and Konflux automatically creates secure pipelines that
                build, test, sign, and verify your software — producing tamper-proof SBOM and
                provenance records at every step.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/getting-started"
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full transition-colors font-medium text-sm shadow-lg"
                  style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D", boxShadow: "0 10px 15px -3px rgba(252,120,61,0.3)" }}
                >Get started</Link>
                <Link
                  to="/documentation"
                  className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Read the docs <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edit on GitHub */}
      <div className="max-w-[1200px] mx-auto px-4 pb-8">
        <a
          href="https://github.com/konflux-ci"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Github size={12} /> Edit this page on GitHub
        </a>
      </div>

        </div>

        {/* On This Page Nav */}
        <div className="hidden xl:block pt-28 pr-4">
          <OnThisPageNav />
        </div>
      </div>
    </div>
  );
}