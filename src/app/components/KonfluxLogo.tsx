import svgPaths from "../../imports/svg-03p5mhidn2";

/**
 * Original Konflux logo+wordmark SVG from the Figma import.
 * Letter paths use `currentColor` so the wordmark adapts to dark/light mode.
 * Icon shape fills remain brand-accurate (blue ring, white circle, dark blue shapes).
 */
export function KonfluxLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-gray-900 dark:text-white ${className}`}
      fill="none"
      viewBox="0 0 166.9 42.45"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#konflux-logo-clip)">
        {/* Wordmark letters — inherit text color for dark mode support */}
        <path d={svgPaths.p2079ac00} fill="currentColor" />
        <path d={svgPaths.p264c1c00} fill="currentColor" />
        <path d={svgPaths.p397a9c00} fill="currentColor" />
        <path d={svgPaths.p199ba000} fill="currentColor" />
        <path d={svgPaths.pee7e210}  fill="currentColor" />
        <path d={svgPaths.p35775b80} fill="currentColor" />
        <path d={svgPaths.p3898ed00} fill="currentColor" />
        {/* Icon: white circle base */}
        <path d={svgPaths.p303fbe00} fill="#FFFFFF" />
        {/* Icon: dark blue shapes */}
        <path d={svgPaths.pd4eaa40}  fill="#004884" />
        <path d={svgPaths.p2d729700} fill="#004884" />
        {/* Icon: light blue shapes */}
        <path d={svgPaths.p15f12900} fill="#48B5FF" />
        <path d={svgPaths.p21c48c80} fill="#48B5FF" />
        {/* Icon: outer ring */}
        <path d={svgPaths.p31785600} fill="#48B5FF" />
      </g>
      <defs>
        <clipPath id="konflux-logo-clip">
          <rect fill="white" height="42.45" width="166.9" />
        </clipPath>
      </defs>
    </svg>
  );
}
