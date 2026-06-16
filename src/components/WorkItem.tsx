"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ExternalLink, Github } from "lucide-react";
import { TAG_LINKS } from "@/data/tag-links";

type WorkItemProps = {
  title: string;
  description: ReactNode;
  image: string;
  tags: string[];
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
  codeUrl,
  liveUrl,
  index = 0,
}: WorkItemProps) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] shadow-[0_16px_42px_var(--shadow-color)]"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: (index % 3) * 0.04 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--background-color)]">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 47vw, 92vw"
          className="object-cover object-top transition duration-300 group-hover:scale-[1.025]"
        />
        <div className="absolute left-3 top-3 rounded-[8px] border border-white/40 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
          Case study
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl">{title}</h3>
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
