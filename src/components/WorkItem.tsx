"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { ExternalLink, Github } from "lucide-react";
import { TAG_LINKS } from "@/data/tag-links";
import { revealMotion } from "@/lib/motion";

type WorkItemProps = {
  title: string;
  description: ReactNode;
  image: string;
  tags: string[];
  category: string;
  role: string;
  outcome: string;
  codeUrl?: string;
  liveUrl?: string;
  reverse?: boolean;
  index?: number;
};

export default function WorkItem({
  title,
  description,
  image,
  tags,
  category,
  role,
  outcome,
  codeUrl,
  liveUrl,
  index = 0,
}: WorkItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group yt-card relative overflow-visible rounded-[8px] flex h-full flex-col"
      {...revealMotion(Boolean(shouldReduceMotion), (index % 2) * 0.05, 22, 0.25)}
    >
      <div className="relative aspect-[16/9] overflow-hidden z-10">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(min-width: 1024px) 45vw, (min-width: 768px) 47vw, 92vw"
          className="object-cover object-top rounded-[8px]"
        />
        <div className="absolute left-3 top-3 rounded-[8px] border border-white/40 bg-black/65 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
          {category}
        </div>
      </div>

      <div className="flex flex-1 flex-col mt-5 md:mt-6 relative z-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-2xl">{title}</h3>
          <span className="w-fit rounded-full border border-[var(--border-color)] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
            Case study
          </span>
        </div>

        <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-[8px] bg-[var(--background-color)] p-3">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
              Role
            </p>
            <p className="mt-1 font-bold leading-6 text-[var(--text-color)]">
              {role}
            </p>
          </div>
          <div className="rounded-[8px] bg-[var(--background-color)] p-3">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
              Outcome
            </p>
            <p className="mt-1 font-bold leading-6 text-[var(--text-color)]">
              {outcome}
            </p>
          </div>
        </div>

        <div className="mt-3 text-sm leading-6 text-[var(--text-muted)] [&_a]:font-semibold [&_a]:text-[var(--blue-accent)] [&_a]:underline-offset-4 [&_a:hover]:underline">
          {description}
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              {TAG_LINKS[tag] ? (
                <a
                  href={TAG_LINKS[tag]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-8 items-center rounded-[8px] border border-[var(--border-color)] px-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors hover:border-[var(--accent-color)] hover:text-[var(--text-color)]"
                >
                  {tag}
                </a>
              ) : (
                <span className="inline-flex min-h-8 items-center rounded-[8px] border border-[var(--border-color)] px-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {tag}
                </span>
              )}
            </li>
          ))}
        </ul>

        {(codeUrl || liveUrl) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2"
              >
                <Github aria-hidden="true" size={16} />
                Code
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2"
              >
                <ExternalLink aria-hidden="true" size={16} />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
