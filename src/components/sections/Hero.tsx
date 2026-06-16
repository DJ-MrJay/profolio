"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "../Container";
import { entranceMotion } from "@/lib/motion";

const HERO_TAGS = [
  "Full-stack development",
  "UI/UX design",
  "Graphic design",
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const railY = useTransform(scrollYProgress, [0, 1], [0, -22]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate min-h-[82dvh] overflow-hidden border-b border-[var(--border-color)] pt-[var(--navbar-height)]"
    >
      <div className="absolute inset-0 -z-20 bg-[var(--background-color)]" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] bg-[var(--surface-muted)] lg:block" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--background-color)_0%,rgba(250,250,250,0.96)_48%,rgba(250,250,250,0.48)_76%,rgba(250,250,250,0.08)_100%)] dark:bg-[linear-gradient(90deg,var(--background-color)_0%,rgba(11,13,16,0.96)_48%,rgba(11,13,16,0.68)_76%,rgba(11,13,16,0.18)_100%)]" />
      <motion.div
        className="absolute bottom-0 right-[-8%] top-[9%] -z-10 hidden w-[62%] lg:block"
        style={shouldReduceMotion ? undefined : { y: portraitY }}
      >
        <Image
          src="/assets/images/mrjay-on-chair.png"
          alt="Jonah Wambua seated at his workspace"
          fill
          priority
          sizes="68vw"
          className="object-contain object-right-bottom"
          style={{ filter: "var(--image-filter)" }}
        />
      </motion.div>
      <div className="absolute left-0 top-[var(--navbar-height)] -z-10 h-px w-full bg-[var(--border-color)]" />

      <Container className="flex min-h-[calc(82dvh-var(--navbar-height))] flex-col justify-center py-10 md:py-12">
        <div className="max-w-4xl">
          <motion.p
            className="chapter-kicker"
            {...entranceMotion(Boolean(shouldReduceMotion), 0, 12)}
          >
            Jonah Wambua / Nairobi
          </motion.p>

          <div className="mt-5 space-y-5">
            <h1 className="max-w-4xl text-balance">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  {...entranceMotion(Boolean(shouldReduceMotion), 0.06, 54)}
                >
                  Design-led full-stack developer
                </motion.span>
              </span>
              <span className="block overflow-hidden text-[var(--text-muted)]">
                <motion.span
                  className="block"
                  {...entranceMotion(Boolean(shouldReduceMotion), 0.12, 54)}
                >
                  building clear, polished digital products.
                </motion.span>
              </span>
            </h1>
            <motion.p
              className="max-w-2xl text-lg leading-8 text-[var(--text-muted)] md:text-xl"
              {...entranceMotion(Boolean(shouldReduceMotion), 0.18, 18)}
            >
              I help founders, teams, and clients turn rough ideas into
              responsive web apps, product interfaces, and brand systems that
              are usable, fast, and built to last.
            </motion.p>
          </div>

          <motion.ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Core disciplines"
            {...entranceMotion(Boolean(shouldReduceMotion), 0.24, 16)}
          >
            {HERO_TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-1.5 text-sm font-bold text-[var(--text-muted)]"
              >
                {tag}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            {...entranceMotion(Boolean(shouldReduceMotion), 0.3, 18)}
          >
            <a href="#work" className="btn-primary inline-flex items-center gap-2">
              View selected work
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a href="#contact" className="btn-rounded inline-flex items-center gap-2">
              <Mail aria-hidden="true" size={17} />
              Start a project
            </a>
          </motion.div>

          <motion.div
            className="mt-6 flex max-w-xl items-start gap-3 text-sm text-[var(--text-muted)]"
            {...entranceMotion(Boolean(shouldReduceMotion), 0.36, 12)}
          >
            <MapPin
              aria-hidden="true"
              size={18}
              className="mt-0.5 shrink-0 text-[var(--accent-color)]"
            />
            <span>
              Based in Nairobi, Kenya. Available for remote contract work,
              CMS-backed launches, and design-to-code implementation.
            </span>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-6 right-[5vw] hidden max-w-[260px] rounded-[8px] border border-[var(--border-color)] bg-[var(--background-color-transparent)] p-4 text-sm shadow-[0_16px_42px_var(--shadow-color)] backdrop-blur lg:block"
          style={shouldReduceMotion ? undefined : { y: railY }}
        >
          <p className="font-bold text-[var(--text-color)]">Craft range</p>
          <p className="mt-2 text-[var(--text-muted)]">
            Product thinking, visual systems, front-end polish, and pragmatic
            full-stack delivery.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
