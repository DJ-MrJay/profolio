"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers3, Palette } from "lucide-react";
import { Container } from "../Container";
import { LogosScroller } from "../LogosScroller";

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

export default function Intro() {
  return (
    <section id="intro" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="max-w-xl">
            <p className="eyebrow">Design-led engineering</p>
            <motion.h2
              className="mt-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
            >
              I turn rough ideas into polished, usable web experiences.
            </motion.h2>
          </div>

          <div className="min-w-0 space-y-6">
            <motion.p
              className="section-copy"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              My work sits at the intersection of full-stack development,
              interface design, and brand communication. I care about fast
              pages, readable systems, accessible interactions, and visuals that
              support the product instead of decorating it.
            </motion.p>

            <div className="grid gap-4 md:grid-cols-3">
              {CAPABILITIES.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    className="rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] p-5 shadow-[0_14px_40px_var(--shadow-color)]"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.28,
                      ease: "easeOut",
                      delay: index * 0.04,
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    <div className="mb-5 inline-flex size-11 items-center justify-center rounded-[8px] bg-[var(--surface-muted)] text-[var(--accent-color)]">
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

            <div className="flex flex-col gap-5 border-t border-[var(--border-color)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm text-[var(--text-muted)]">
                Tools and frameworks I use regularly across client work,
                product experiments, and content-driven sites.
              </p>
              <Link href="/about" className="btn-rounded inline-flex items-center gap-2">
                Read the details
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>

            <div className="min-w-0 rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)]">
              <LogosScroller />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
