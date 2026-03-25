import { useState } from "react";
import { Clock, Pencil } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    year: 2026,
    title: "Introducing Konflux 1.0: Secure Software Supply Chain for Everyone",
    excerpt: "Today we're excited to announce the general availability of Konflux 1.0. This release brings production-grade CI/CD with built-in supply chain security to open source teams everywhere.",
    author: { name: "Konflux Team", initials: "KT", color: "bg-violet-600", role: "Engineering" },
    date: "February 19, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1704881986189-b8196f897ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHNlY3VyaXR5JTIwc2hpZWxkJTIwcHJvdGVjdGlvbiUyMGN5YmVyc2VjdXJpdHl8ZW58MXx8fHwxNzcxNTE4MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    year: 2026,
    title: "How Konflux Generates Tamper-Proof SBOMs at Scale",
    excerpt: "A deep dive into how Konflux automatically generates Software Bills of Materials using Syft and signs them with Sigstore.",
    author: { name: "Priya Sharma", initials: "PS", color: "bg-indigo-500", role: "Security Lead" },
    date: "February 14, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517650862521-d580d5348145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwQ0klMkZDRCUyMHBpcGVsaW5lJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NzE1MTgxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    year: 2025,
    title: "From GitHub Actions to Konflux: A Migration Story",
    excerpt: "One engineering team's journey migrating from GitHub Actions to Konflux — what worked, what didn't, and why they ended up with stronger supply chain security.",
    author: { name: "Tom Chen", initials: "TC", color: "bg-blue-500", role: "DevOps Engineer" },
    date: "December 8, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3cml0aW5nJTIwdGVjaG5pY2FsJTIwYmxvZyUyMHBvc3QlMjBsYXB0b3B8ZW58MXx8fHwxNzcxNTE4MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    year: 2025,
    title: "Understanding Conforma: Policy as Code for Software Releases",
    excerpt: "Conforma enables you to define release policies as code and automatically verify your builds comply before they reach production.",
    author: { name: "Maria Garcia", initials: "MG", color: "bg-pink-500", role: "CI/CD Engineer" },
    date: "October 29, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1652111865960-15f4a46a7688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwc291cmNlJTIwY29tbXVuaXR5JTIwZGV2ZWxvcGVycyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxNTE4MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    year: 2025,
    title: "Tekton + Konflux: Building Custom Pipeline Tasks",
    excerpt: "Konflux is built on Tekton. In this post, we walk through creating and integrating custom Tekton tasks into your Konflux pipelines.",
    author: { name: "Alex Johnson", initials: "AJ", color: "bg-violet-500", role: "Core Maintainer" },
    date: "August 22, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1517650862521-d580d5348145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwQ0klMkZDRCUyMHBpcGVsaW5lJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NzE1MTgxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    year: 2025,
    title: "Community Update: July 2025",
    excerpt: "A look back at the last month — new contributors, shipped features, community calls, and what's coming next in Konflux.",
    author: { name: "Sarah Kim", initials: "SK", color: "bg-cyan-500", role: "Platform Eng" },
    date: "July 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1652111865960-15f4a46a7688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwc291cmNlJTIwY29tbXVuaXR5JTIwZGV2ZWxvcGVycyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxNTE4MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const postsByYear: Record<number, typeof blogPosts> = {};
blogPosts.forEach((p) => {
  if (!postsByYear[p.year]) postsByYear[p.year] = [];
  postsByYear[p.year].push(p);
});
const years = Object.keys(postsByYear)
  .map(Number)
  .sort((a, b) => b - a);

export default function BlogPage() {
  const [activeId, setActiveId] = useState(1);
  const activePost = blogPosts.find((p) => p.id === activeId) ?? blogPosts[0];

  return (
    <div className="flex min-h-[calc(100vh-56px)] bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Left Sidebar */}
      <aside className="hidden md:flex flex-col w-[250px] shrink-0 border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto px-4 py-6">
        <h3
          className="text-sm font-semibold text-gray-900 dark:text-white mb-4 px-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          All blog posts
        </h3>
        {years.map((year) => (
          <div key={year} className="mb-4">
            <p
              className="text-xs font-semibold text-gray-400 dark:text-gray-500 px-2 mb-1.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {year}
            </p>
            {postsByYear[year].map((post) => (
              <button
                key={post.id}
                onClick={() => setActiveId(post.id)}
                className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors mb-0.5 ${
                  activeId === post.id
                    ? "text-violet-600 dark:text-violet-400 font-medium bg-violet-50 dark:bg-violet-950"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {post.title}
              </button>
            ))}
          </div>
        ))}
      </aside>

      {/* Article */}
      <main className="flex-1 min-w-0 px-6 md:px-12 py-8 max-w-[800px]">
        {/* Mobile selector */}
        <div className="md:hidden mb-5">
          <select
            value={activeId}
            onChange={(e) => setActiveId(Number(e.target.value))}
            className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 outline-none focus:border-violet-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {blogPosts.map((post) => (
              <option key={post.id} value={post.id}>{post.title}</option>
            ))}
          </select>
        </div>

        {/* Post */}
        <article>
          <h1
            className="mb-3 text-violet-700 dark:text-violet-400"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {activePost.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span>{activePost.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {activePost.readTime}
            </span>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-full ${activePost.author.color} flex items-center justify-center shrink-0`}>
              <span className="text-white text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                {activePost.author.initials}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                {activePost.author.name}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                {activePost.author.role}
              </p>
            </div>
          </div>

          {/* Lede */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            {activePost.excerpt} 🎉
          </p>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-8 border border-gray-100 dark:border-gray-800">
            <ImageWithFallback
              src={activePost.image}
              alt={activePost.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Article body */}
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p>
              This release represents months of work from our incredible community of contributors.
              We've been building Konflux in the open from day one, and this milestone reflects the
              dedication of everyone who filed issues, submitted PRs, and shared feedback.
            </p>
            <h2 className="text-gray-900 dark:text-white font-semibold text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
              What's new in this release
            </h2>
            <ul className="space-y-2 pl-4">
              {[
                "Improved pipeline performance — builds are now up to 40% faster",
                "Native multi-arch support for arm64 and amd64 simultaneous builds",
                "Conforma policy engine updated with SLSA Level 3 checks",
                "New dashboard UI with real-time build progress tracking",
                "Enhanced SBOM generation with VEX support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gray-300 dark:text-gray-600 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              We're incredibly grateful to all the contributors who made this release possible.
              Special thanks to the Tekton, Sigstore, and OPA communities whose foundational work
              Konflux is built upon.
            </p>
            <p>
              To get started with Konflux, visit our{" "}
              <a href="/getting-started" className="text-violet-600 dark:text-violet-400 hover:underline">Getting Started guide</a>{" "}
              or join us in{" "}
              <a href="/community" className="text-violet-600 dark:text-violet-400 hover:underline">Slack</a>.
            </p>
          </div>
        </article>

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
      </main>
    </div>
  );
}
