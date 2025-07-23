"use client";

import Link from "next/link";
import { ContainerNarrow } from "@/components/ContainerNarrow";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      <ContainerNarrow className="h-full p-0">
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
              Hello!
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
              I'm a Kenyan creative designer and full-stack developer crafting
              elegant, high-performing web experiences since 2015. With a
              passion for design, clean code, captivating aesthetics, and
              continuous learning, I bring ideas to life through thoughtful,
              user-focused solutions. Music keeps me inspired.
            </motion.p>
            <motion.p
              className="text-xl sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: "easeOut", delay: 0.5 },
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
