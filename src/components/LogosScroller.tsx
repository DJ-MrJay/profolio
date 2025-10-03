"use client";

import { useTheme } from "next-themes";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

const logosLight = [
  { src: "/assets/brand-logos/Nextjs-logo.svg", alt: "Next.js" },
  { src: "/assets/brand-logos/JavaScript-logo.svg", alt: "JavaScript" },
  { src: "/assets/brand-logos/Typescript-logo.svg", alt: "TypeScript" },
  { src: "/assets/brand-logos/Ruby-On-Rails-logo.svg", alt: "Ruby on Rails" },
  { src: "/assets/brand-logos/HTML5-logo.svg", alt: "HTML5" },
  { src: "/assets/brand-logos/CSS3-logo.svg", alt: "CSS3" },
  { src: "/assets/brand-logos/Redux-logo.svg", alt: "Redux" },
  { src: "/assets/brand-logos/C++-logo.svg", alt: "C++" },
  { src: "/assets/brand-logos/React-icon.svg", alt: "React" },
  { src: "/assets/brand-logos/PHP-logo.svg", alt: "PHP" },
  { src: "/assets/brand-logos/Ruby-logo.svg", alt: "Ruby" },
  { src: "/assets/brand-logos/Webpack-logo.svg", alt: "Webpack" },
  { src: "/assets/brand-logos/Tailwind-CSS-logo.svg", alt: "Tailwind CSS" },
  { src: "/assets/brand-logos/Bootstrap-logo.svg", alt: "Bootstrap" },
  { src: "/assets/brand-logos/Expo-logo.svg", alt: "Expo" },
  { src: "/assets/brand-logos/Laravel-logo.svg", alt: "Laravel" },
  { src: "/assets/brand-logos/MySQL-logo.svg", alt: "MySQL" },
  { src: "/assets/brand-logos/Postgresql-logo.svg", alt: "PostgreSQL" },
  { src: "/assets/brand-logos/Oracle-logo.svg", alt: "Oracle" },
  { src: "/assets/brand-logos/Illustrator-icon.svg", alt: "Illustrator" },
  { src: "/assets/brand-logos/Photoshop-icon.svg", alt: "Photoshop" },
  { src: "/assets/brand-logos/InDesign-icon.svg", alt: "InDesign" },
  { src: "/assets/brand-logos/Premiere-Pro-icon.svg", alt: "Premiere Pro" },
  { src: "/assets/brand-logos/Figma-logo.svg", alt: "Figma" },
  { src: "/assets/brand-logos/Vegas-Pro-21-logo.svg", alt: "Vegas Pro" },
];

const logosDark = [
  { src: "/assets/brand-logos/Nextjs-logo-light.svg", alt: "Next.js" },
  { src: "/assets/brand-logos/JavaScript-logo-light.svg", alt: "JavaScript" },
  { src: "/assets/brand-logos/Typescript-logo-light.svg", alt: "TypeScript" },
  {
    src: "/assets/brand-logos/Ruby-On-Rails-logo-light.svg",
    alt: "Ruby on Rails",
  },
  { src: "/assets/brand-logos/HTML5-logo-light.svg", alt: "HTML5" },
  { src: "/assets/brand-logos/CSS3-logo-light.svg", alt: "CSS3" },
  { src: "/assets/brand-logos/Redux-logo-light.svg", alt: "Redux" },
  { src: "/assets/brand-logos/C++-logo-light.svg", alt: "C++" },
  { src: "/assets/brand-logos/React-icon-light.svg", alt: "React" },
  { src: "/assets/brand-logos/PHP-logo-light.svg", alt: "PHP" },
  { src: "/assets/brand-logos/Ruby-logo-light.svg", alt: "Ruby" },
  { src: "/assets/brand-logos/Webpack-logo-light.svg", alt: "Webpack" },
  {
    src: "/assets/brand-logos/Tailwind-CSS-logo-light.svg",
    alt: "Tailwind CSS",
  },
  { src: "/assets/brand-logos/Bootstrap-logo-light.svg", alt: "Bootstrap" },
  { src: "/assets/brand-logos/Expo-logo-light.svg", alt: "Expo" },
  { src: "/assets/brand-logos/Laravel-logo-light.svg", alt: "Laravel" },
  { src: "/assets/brand-logos/MySQL-logo-light.svg", alt: "MySQL" },
  { src: "/assets/brand-logos/Postgresql-logo-light.svg", alt: "PostgreSQL" },
  { src: "/assets/brand-logos/Oracle-logo-light.svg", alt: "Oracle" },
  { src: "/assets/brand-logos/Illustrator-icon-light.svg", alt: "Illustrator" },
  { src: "/assets/brand-logos/Photoshop-icon-light.svg", alt: "Photoshop" },
  { src: "/assets/brand-logos/InDesign-icon-light.svg", alt: "InDesign" },
  { src: "/assets/brand-logos/Premiere-Pro-icon-light.svg", alt: "Premiere Pro" },
  { src: "/assets/brand-logos/Figma-logo-light.svg", alt: "Figma" },
  { src: "/assets/brand-logos/Vegas-Pro-21-logo-light.svg", alt: "Vegas Pro" }, 
];

export function LogosScroller() {
  const { theme, resolvedTheme } = useTheme();

  const isDark = theme === "dark" || resolvedTheme === "dark";
  const LOGOS = isDark ? logosDark : logosLight;

  return (
    <div className="relative flex overflow-x-hidden scroller-container">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-20 bg-gradient-to-r from-[var(--shade-100)] to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-20 bg-gradient-to-l from-[var(--shade-100)] to-transparent" />

      {[1, 2].map((copy) => (
        <div
          key={copy}
          className={`${copy === 1 ? "relative" : "absolute top-0"} py-6 ${
            copy === 1 ? "scroller" : "scroller2"
          } whitespace-nowrap`}
          aria-hidden={copy === 2}
        >
          <div className="flex min-w-max items-center">
            {LOGOS.map((logo, index) => (
              <div key={`${copy}-${index}`}>
                <a
                  data-tooltip-id="logo-tooltip"
                  data-tooltip-content={logo.alt}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={90}
                    height={35}
                    className="w-auto max-w-[70px] sm:max-w-[90px] h-[25px] sm:h-[35px] mx-[20px] sm:mx-[25px] md:mx-[30px]"
                  />
                </a>
              </div>
            ))}
            <Tooltip id="logo-tooltip" place="bottom" />
          </div>
        </div>
      ))}
    </div>
  );
}
