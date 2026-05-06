"use client";

import { useTheme } from "next-themes";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { TECH_LOGOS_DARK, TECH_LOGOS_LIGHT } from "@/data/tech-logos";

export function LogosScroller() {
  const { theme, resolvedTheme } = useTheme();

  const isDark = theme === "dark" || resolvedTheme === "dark";
  const logos = isDark ? TECH_LOGOS_DARK : TECH_LOGOS_LIGHT;

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
            {logos.map((logo) => (
              <div key={`${copy}-${logo.src}`}>
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
          </div>
        </div>
      ))}
      <Tooltip id="logo-tooltip" place="bottom" />
    </div>
  );
}
