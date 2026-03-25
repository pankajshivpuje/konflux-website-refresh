import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router";
import { KonfluxLogo } from "./KonfluxLogo";
import { useTheme } from "./ThemeContext";
import { Search, Menu, X, Sun, Moon, Github, ChevronDown } from "lucide-react";

const gettingStartedSubItems = [
  { label: "About Konflux", path: "/getting-started/about-konflux" },
  { label: "Core concepts", path: "/getting-started/core-concepts" },
  { label: "Try Konflux Locally", path: "/getting-started/try-konflux" },
];

const navItems = [
  { label: "Getting started", path: "/getting-started", hasDropdown: true },
  { label: "Documentation", path: "/documentation" },
  { label: "Community", path: "/community" },
  { label: "Blog", path: "/blog" },
  { label: "Support", path: "/support" },
];

export function Layout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { darkMode, toggleDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-200">
        {/* Top Nav */}
        <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-200">
          <div className="flex items-center justify-between h-[56px] px-4 md:px-8 max-w-[1400px] mx-auto w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <KonfluxLogo className="h-[32px] w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
                if (item.hasDropdown) {
                  return (
                    <div key={item.path} className="relative group">
                      <Link
                        to={item.path}
                        className={`px-3 py-1.5 text-sm rounded-md transition-colors inline-flex items-center gap-0.5 ${
                          isActive
                            ? "text-violet-600 dark:text-violet-400 font-medium"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                        style={{ fontFamily: "'Inter', 'Red Hat Text', sans-serif" }}
                      >
                        {item.label}
                        <ChevronDown size={14} className="ml-0.5 transition-transform group-hover:rotate-180" />
                      </Link>
                      {/* Dropdown */}
                      <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 min-w-[180px]">
                          {gettingStartedSubItems.map((subItem) => {
                            const isSubActive = location.pathname === subItem.path;
                            return (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isSubActive
                                    ? "text-violet-600 dark:text-violet-400 font-medium bg-violet-50 dark:bg-violet-950"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                                }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      isActive
                        ? "text-violet-600 dark:text-violet-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    style={{ fontFamily: "'Inter', 'Red Hat Text', sans-serif" }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* GitHub Star */}
              <a
                href="https://github.com/konflux-ci"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1.5 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Github size={13} className="text-gray-700 dark:text-gray-300" />
                <span>Star</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded-full text-[10px] font-semibold">1.2k</span>
              </a>

              {/* Theme toggle */}
              <button
                onClick={toggleDark}
                className="hidden md:flex w-8 h-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Search */}
              <button className="hidden md:flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full pl-3 pr-2 py-1.5 text-xs text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Search size={13} />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>Search</span>
                <kbd className="border border-gray-200 dark:border-gray-700 rounded px-1 py-0.5 text-[10px] text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800">⌘K</kbd>
              </button>

              {/* Mobile menu */}
              <button
                className="md:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={18} className="text-gray-700 dark:text-gray-300" /> : <Menu size={18} className="text-gray-700 dark:text-gray-300" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-4 py-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                        isActive
                          ? "text-violet-600 dark:text-violet-400 font-medium bg-violet-50 dark:bg-violet-950"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 border-l-2 border-gray-100 dark:border-gray-800 pl-3 mb-1">
                        {gettingStartedSubItems.map((subItem) => {
                          const isSubActive = location.pathname === subItem.path;
                          return (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-3 py-2 rounded-lg text-sm mb-0.5 transition-colors ${
                                isSubActive
                                  ? "text-violet-600 dark:text-violet-400 font-medium bg-violet-50 dark:bg-violet-950"
                                  : "text-gray-500 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300"
                              }`}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              onClick={() => setMobileOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-3">
                <button
                  onClick={toggleDark}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                >
                  {darkMode ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mt-8 transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="mb-4">
                  <KonfluxLogo className="h-[28px] w-auto" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Open-source CI/CD for secure, rock-solid software delivery. Built on Tekton, Sigstore, and Kubernetes.
                </p>
              </div>
              {[
                {
                  heading: "Learn",
                  links: [
                    { label: "Getting Started", to: "/getting-started" },
                    { label: "Documentation", to: "/documentation" },
                    { label: "Blog", to: "/blog" },
                  ],
                },
                {
                  heading: "Community",
                  links: [
                    { label: "Community Hub", to: "/community" },
                    { label: "GitHub", href: "https://github.com/konflux-ci" },
                    { label: "Slack", href: "#" },
                  ],
                },
                {
                  heading: "Support",
                  links: [
                    { label: "Support Center", to: "/support" },
                    { label: "GitHub Issues", href: "https://github.com/konflux-ci/konflux-ci/issues" },
                    { label: "Release Notes", href: "#" },
                  ],
                },
              ].map((col) => (
                <div key={col.heading}>
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {col.heading}
                  </h4>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {"to" in link ? (
                          <Link to={link.to} className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {link.label}
                          </Link>
                        ) : (
                          <a href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                © 2026 Konflux Community. Apache 2.0 License.
              </p>
              <div className="flex items-center gap-5">
                {["GitHub", "Privacy", "Terms", "Accessibility"].map((item) => (
                  <a key={item} href="#" className="text-xs text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}