"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Container } from "../Container";
import { ARTICLES } from "@/data/articles";

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 md:py-28">
      <Container>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Field notes</p>
            <h2 className="mt-4">Writing about code, design, and growth.</h2>
          </div>

          <p className="section-copy lg:justify-self-end">
            I use writing to clarify what I am learning, document practical
            design decisions, and share useful paths for developers who are
            still building their foundation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <motion.a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
              className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] shadow-[0_14px_38px_var(--shadow-color)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-muted)]">
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  sizes="(min-width: 768px) 31vw, 92vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.025]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--accent-color)]">
                  <BookOpen aria-hidden="true" size={15} />
                  Medium
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

        <div className="mt-10">
          <Link
            href="https://medium.com/@djmrjay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded inline-flex items-center gap-2"
          >
            View all articles
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
