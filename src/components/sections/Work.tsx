"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { WORK_ITEMS } from "@/data/work-items";
import { Container } from "../Container";
import WorkItem from "../WorkItem";

export default function Work() {
  return (
    <section
      id="work"
      className="border-y border-[var(--border-color)] bg-[var(--surface-muted)] py-20 md:py-28"
    >
      <Container>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <motion.h2
              className="mt-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Interfaces, CMS builds, and product experiments.
            </motion.h2>
          </div>

          <motion.p
            className="section-copy lg:justify-self-end"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            A mix of client work, contract builds, and personal products across
            modern JavaScript, Rails, WordPress, and brand-led design systems.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {WORK_ITEMS.map((item, index) => (
            <WorkItem key={item.title} {...item} index={index} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="https://github.com/DJ-MrJay?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            View more projects
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
