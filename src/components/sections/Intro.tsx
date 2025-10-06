"use client";

import Link from "next/link";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { ContainerNarrow } from "../ContainerNarrow";

export default function Intro() {
  return (
    <section id="intro" className="h-[calc(100vh-var(--navbar-height))]">
      {/* Dot Background Layer */}
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--grey-color)_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--background-color)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,var(--background-color))] -z-10" />

      {/* Content */}
      <ContainerNarrow className="h-full">
        <div className="flex h-full items-center justify-center">
          <div className="mx-auto space-y-4">
            <motion.h2
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: "easeOut" },
              }}
            >
              Hi!
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
              }}
            >
              I transform complex ideas into elegant, high-performing digital
              experiences. As a Kenyan creative specializing in full-stack
              development and design, I bridge the gap between captivating
              aesthetics and clean, robust code. Since 2015, I have been crafting
              user-focused solutions that don&apos;t just look great but drive
              results as well.
            </motion.p>
            <motion.p
              className="text-xl sm:text-2xl"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              Let’s build something amazing together!
            </motion.p>
            <Link
              href="/about"
              className="btn-rounded mt-2 inline-flex items-center"
            >
              Read More
            </Link>
          </div>
        </div>
      </ContainerNarrow>
    </section>
  );
}
