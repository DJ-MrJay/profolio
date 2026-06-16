"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { WORK_ITEMS } from "@/data/work-items";
import { Container } from "../Container";
import WorkItem from "../WorkItem";
import { revealMotion } from "@/lib/motion";

export default function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="border-y border-[var(--border-color)] bg-[var(--surface-muted)] py-20 md:py-28"
    >
      <Container>
        <div className="mb-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="chapter-kicker">Chapter 02 / Work</p>
            <motion.h2
              className="mt-4 max-w-2xl"
              {...revealMotion(Boolean(shouldReduceMotion), 0, 18, 0.7)}
            >
              Case studies across interfaces, CMS launches, and full-stack
              product experiments.
            </motion.h2>
          </div>

          <motion.p
            className="section-copy lg:justify-self-end"
            {...revealMotion(Boolean(shouldReduceMotion), 0.05, 18, 0.7)}
          >
            Each project is framed around the role, outcome, and implementation
            choices behind the work, from modern JavaScript products to fast
            WordPress delivery and brand-led web systems.
          </motion.p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {WORK_ITEMS.map((item, index) => (
            <WorkItem key={item.title} {...item} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-10"
          {...revealMotion(Boolean(shouldReduceMotion), 0.04, 14, 0.5)}
        >
          <Link
            href="https://github.com/DJ-MrJay?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            View more projects
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
