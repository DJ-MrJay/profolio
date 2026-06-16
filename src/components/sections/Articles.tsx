"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Container } from "../Container";
import { ARTICLES } from "@/data/articles";
import { revealMotion } from "@/lib/motion";

export default function ArticlesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="articles" className="py-20 md:py-28">
      <Container>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="chapter-kicker">Chapter 03 / Field notes</p>
            <motion.h2
              className="mt-4"
              {...revealMotion(Boolean(shouldReduceMotion), 0, 18, 0.7)}
            >
              Writing about code, design, and growth.
            </motion.h2>
          </div>

          <motion.p
            className="section-copy lg:justify-self-end"
            {...revealMotion(Boolean(shouldReduceMotion), 0.05, 18, 0.7)}
          >
            I use writing to clarify what I am learning, document practical
            design decisions, and share useful paths for developers who are
            still building their foundation.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <motion.a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              {...revealMotion(Boolean(shouldReduceMotion), index * 0.04, 20, 0.35)}
              className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] shadow-[0_14px_38px_var(--shadow-color)] transition duration-200 hover:-translate-y-1 hover:border-[var(--accent-color)] motion-reduce:hover:translate-y-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-muted)]">
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  sizes="(min-width: 768px) 31vw, 92vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--accent-color)]">
                  <span className="inline-flex items-center gap-2">
                    <BookOpen aria-hidden="true" size={15} />
                    Medium
                  </span>
                  <span className="text-[var(--text-muted)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {article.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[var(--shade-500)]">
                  Read article
                  <ArrowUpRight aria-hidden="true" size={16} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-10"
          {...revealMotion(Boolean(shouldReduceMotion), 0.04, 14, 0.5)}
        >
          <Link
            href="https://medium.com/@djmrjay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded inline-flex items-center gap-2"
          >
            View all articles
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
