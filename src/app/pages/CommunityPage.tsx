import { Link } from "react-router";
import { Github, MessageSquare, Mail, Users, Calendar, Heart, ArrowRight, ExternalLink, Pencil } from "lucide-react";

const communityChannels = [
  {
    icon: <Github size={24} />,
    title: "GitHub",
    desc: "Browse source code, file issues, and submit pull requests.",
    cta: "Visit GitHub",
    href: "https://github.com/konflux-ci",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Slack",
    desc: "Chat with core contributors and community members in real time.",
    cta: "Join Slack",
    href: "#",
  },
  {
    icon: <Mail size={24} />,
    title: "Mailing List",
    desc: "Subscribe for announcements and discussions.",
    cta: "Subscribe",
    href: "#",
  },
  {
    icon: <Calendar size={24} />,
    title: "Community Calls",
    desc: "Join our bi-weekly community calls open to all contributors.",
    cta: "View calendar",
    href: "#",
  },
];

const recentContributions = [
  { type: "PR", title: "Add SBOM attestation support for multi-arch builds", author: "Maria Garcia", time: "2 hours ago" },
  { type: "Issue", title: "Pipeline fails when using custom Tekton tasks", author: "Tom Chen", time: "5 hours ago" },
  { type: "PR", title: "Update Conforma policy defaults", author: "Priya Sharma", time: "1 day ago" },
  { type: "PR", title: "Improve documentation for release configuration", author: "Sarah Kim", time: "2 days ago" },
];

const contributors = [
  { name: "Alex Johnson", role: "Core Maintainer", initials: "AJ", color: "bg-violet-500" },
  { name: "Maria Garcia", role: "CI/CD Engineer", initials: "MG", color: "bg-blue-500" },
  { name: "Priya Sharma", role: "Security Lead", initials: "PS", color: "bg-indigo-500" },
  { name: "Tom Chen", role: "Docs Writer", initials: "TC", color: "bg-purple-500" },
  { name: "Sarah Kim", role: "Platform Eng", initials: "SK", color: "bg-pink-500" },
  { name: "David Nkosi", role: "DevOps Engineer", initials: "DN", color: "bg-cyan-500" },
];

export default function CommunityPage() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Announcement Banner */}

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(72,181,255,0.15) 0%, rgba(72,181,255,0.08) 50%, transparent 70%)",
          }}
        />
        <div className="relative max-w-[800px] mx-auto text-center">
          <div className="flex items-end justify-center gap-6 mb-8">
            {[
              { size: "w-24 h-24", color: "from-blue-400 to-indigo-500" },
              { size: "w-32 h-32", color: "from-violet-400 to-violet-600" },
              { size: "w-24 h-24", color: "from-gray-400 to-gray-500" },
            ].map((avatar, i) => (
              <div
                key={i}
                className={`${avatar.size} rounded-full bg-gradient-to-br ${avatar.color} flex items-center justify-center shadow-lg`}
              >
                <Users size={i === 1 ? 40 : 28} className="text-white/80" />
              </div>
            ))}
          </div>

          <h1
            className="text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Konflux Community
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Welcome to the Konflux Community! We're excited to have you here. This is the place to
            connect with fellow developers, share your experiences, contribute to the project, and
            help shape the future of Konflux.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/konflux-ci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg"
              style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FC783D", boxShadow: "0 10px 15px -3px rgba(252,120,61,0.3)" }}
            >
              <Github size={15} /> Contribute on GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <MessageSquare size={15} /> Join Slack
            </a>
          </div>
        </div>
      </section>

      {/* Contribute to the Project */}
      <section className="border-t border-gray-100 dark:border-gray-800 py-16 px-4">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-gray-900 dark:text-white mb-3"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(1.3rem, 3vw, 1.8rem)", letterSpacing: "-0.02em" }}
            >
              Contribute to the Project
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              We welcome contributions of all kinds! Here's how you can get started:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communityChannels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-3 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 hover:border-violet-200 dark:hover:border-violet-700 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:border-violet-200 dark:group-hover:border-violet-700 transition-colors shadow-sm">
                  {channel.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-gray-900 dark:text-white mb-1 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    {channel.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {channel.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {channel.cta} <ArrowRight size={11} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Activity + Contributors */}
      <section className="bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 py-16 px-4">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-8">
          {/* Recent activity */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-gray-900 dark:text-white mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
            >
              <Heart size={16} className="text-violet-500" /> Recent contributions
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 divide-y divide-gray-50 dark:divide-gray-700">
              {recentContributions.map((item, i) => (
                <a
                  key={i}
                  href="https://github.com/konflux-ci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                >
                  <span
                    className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded mt-0.5 ${
                      item.type === "PR" ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400" : "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-400"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.type}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.author} · {item.time}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="https://github.com/konflux-ci"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 hover:underline"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View all activity on GitHub <ExternalLink size={11} />
            </a>
          </div>

          {/* Contributors */}
          <div className="lg:w-[320px] shrink-0">
            <h2
              className="text-gray-900 dark:text-white mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
            >
              <Users size={16} className="text-violet-500" /> Active contributors
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4">
              <div className="space-y-3">
                {contributors.map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center shrink-0`}>
                      <span className="text-white text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {c.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200" style={{ fontFamily: "'Inter', sans-serif" }}>{c.name}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/konflux-ci"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-4 border-t border-gray-50 dark:border-gray-700 flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 hover:underline"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View all contributors <ExternalLink size={11} />
              </a>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4 mt-4">
              <h3
                className="text-gray-900 dark:text-white mb-3 text-sm font-semibold flex items-center gap-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Calendar size={14} className="text-violet-500" /> Upcoming Events
              </h3>
              {[
                { date: "Apr 8", title: "Community Call", type: "Online" },
                { date: "Apr 22", title: "Contributor Workshop", type: "Online" },
                { date: "May 6", title: "KubeCon: Konflux Deep Dive", type: "In Person" },
              ].map((event) => (
                <div key={event.title} className="flex items-start gap-3 mb-3 last:mb-0">
                  <div className="bg-violet-50 dark:bg-violet-950 rounded-lg px-2 py-1 shrink-0">
                    <p className="text-[11px] font-semibold text-violet-600 dark:text-violet-400" style={{ fontFamily: "'Inter', sans-serif" }}>{event.date}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200" style={{ fontFamily: "'Inter', sans-serif" }}>{event.title}</p>
                    <p className="text-[11px] text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{event.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Edit on GitHub */}
      <div className="max-w-[1100px] mx-auto px-4 py-6">
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
  );
}