"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2, Layers3, Palette, ShieldCheck } from "lucide-react";
import { Container } from "../Container";
import { LogosScroller } from "../LogosScroller";
import { revealMotion } from "@/lib/motion";

const CAPABILITIES = [
  {
    title: "Product Interfaces",
    description:
      "Dashboards, marketing sites, and web apps shaped around clear user flows and maintainable front-end architecture.",
    icon: Layers3,
  },
  {
    title: "Full-Stack Builds",
    description:
      "Responsive Next.js, React, Rails, and WordPress projects with practical CMS, data, and deployment decisions.",
    icon: Code2,
  },
  {
    title: "Brand Systems",
    description:
      "Identity, layout, and visual direction that keep digital products cohesive across screens and campaigns.",
    icon: Palette,
  },
] as const;

const VALUES = [
  "Clear user flows before visual polish",
  "Maintainable code over fragile demos",
  "Brand systems that survive real content",
] as const;

export default function Intro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="intro" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <div className="max-w-xl lg:sticky lg:top-[calc(var(--navbar-height)+32px)]">
            <p className="chapter-kicker">Chapter 01 / About</p>
            <motion.h2
              className="mt-4"
              {...revealMotion(Boolean(shouldReduceMotion), 0, 18, 0.7)}
            >
              I turn rough ideas into polished, usable web experiences.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-8 text-[var(--text-muted)]"
              {...revealMotion(Boolean(shouldReduceMotion), 0.05, 18, 0.6)}
            >
              My path started in systems and client operations before moving
              deeper into product interfaces, full-stack development, and visual
              identity. That background keeps my work grounded in what teams can
              actually ship, maintain, and explain.
            </motion.p>
          </div>

          <div className="min-w-0 space-y-6">
            <motion.p
              className="section-copy"
              {...revealMotion(Boolean(shouldReduceMotion), 0.08, 18, 0.7)}
            >
              Today my work sits at the intersection of full-stack development,
              UI/UX design, and graphic design. I care about fast pages,
              readable systems, accessible interactions, and visuals that
              support the product instead of decorating it.
            </motion.p>

            <motion.div
              className="grid gap-3 rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] p-5 shadow-[0_14px_40px_var(--shadow-color)] sm:grid-cols-3"
              {...revealMotion(Boolean(shouldReduceMotion), 0.1, 18, 0.5)}
            >
              {VALUES.map((value) => (
                <div key={value} className="flex gap-3">
                  <ShieldCheck
                    aria-hidden="true"
                    size={18}
                    className="mt-1 shrink-0 text-[var(--accent-color)]"
                    strokeWidth={1.8}
                  />
                  <p className="text-sm font-bold leading-6 text-[var(--text-color)]">
                    {value}
                  </p>
                </div>
              ))}
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {CAPABILITIES.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    className="group rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] p-5 shadow-[0_14px_40px_var(--shadow-color)] transition duration-200 hover:-translate-y-1 hover:border-[var(--accent-color)] motion-reduce:hover:translate-y-0"
                    {...revealMotion(
                      Boolean(shouldReduceMotion),
                      index * 0.04,
                      18,
                      0.6,
                    )}
                  >
                    <div className="mb-5 inline-flex size-11 items-center justify-center rounded-[8px] bg-[var(--surface-muted)] text-[var(--accent-color)] transition-colors group-hover:bg-[var(--accent-color)] group-hover:text-[var(--accent-foreground)]">
                      <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              className="flex flex-col gap-5 border-t border-[var(--border-color)] pt-6 sm:flex-row sm:items-center sm:justify-between"
              {...revealMotion(Boolean(shouldReduceMotion), 0.04, 14, 0.6)}
            >
              <Link
                href="/about"
                className="btn-rounded inline-flex items-center gap-2"
              >
                Read the details
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <LogosScroller />
        </div>
      </Container>
    </section>
  );
}
