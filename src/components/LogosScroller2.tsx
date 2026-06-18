"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { TECH_LOGOS_DARK, TECH_LOGOS_LIGHT } from "@/data/tech-logos";

export function LogosScroller() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");
  const logos = isDark ? TECH_LOGOS_DARK : TECH_LOGOS_LIGHT;

  return (
    <div className="scroller-container relative flex max-w-full min-w-0 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20 bg-gradient-to-r from-[var(--surface-color)] to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20 bg-gradient-to-l from-[var(--surface-color)] to-transparent" />

      <div className="scroller flex w-max items-center py-6">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex min-w-max items-center"
            aria-hidden={copy === 1}
          >
            {logos.map((logo) => (
              <span
                key={`${copy}-${logo.src}`}
                data-tooltip-id="logo-tooltip"
                data-tooltip-content={logo.alt}
                className="inline-flex"
                tabIndex={copy === 0 ? 0 : -1}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={90}
                  height={35}
                  className="mx-[20px] h-[25px] w-auto max-w-[70px] sm:mx-[25px] sm:h-[35px] sm:max-w-[90px] md:mx-[30px]"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
      <Tooltip id="logo-tooltip" place="bottom" />
    </div>
  );
}
