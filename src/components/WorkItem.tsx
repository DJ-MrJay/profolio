"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

type WorkItemProps = {
  title: string;
  description: React.ReactNode;
  image: string;
  tags: string[];
  codeUrl?: string;
  liveUrl?: string;
  reverse?: boolean;
};

export default function WorkItem({
  title,
  description,
  image,
  tags,
  codeUrl,
  liveUrl,
  reverse = false,
}: WorkItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
      } gap-6 md:gap-12`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 group overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={800}
        className="w-full h-auto rounded-xl object-cover object-top transition duration-1000 filter brightness-100 grayscale-0 group-hover:brightness-[45%] group-hover:grayscale cursor-pointer"
      />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>

      {/* Tags */}
      <ul
        className="flex flex-wrap items-center gap-1 uppercase tracking-widest mt-4"
        style={{ color: "var(--shade-500)" }}
      >
        {tags.map((tag, index) => (
        <li key={tag} className="flex items-center gap-1 text-xs">
          {index !== 0 && <span className="text-xs">&#x2022;</span>}
          {tag}
        </li>
        ))}
      </ul>

      {/* Buttons */}
      {(codeUrl || liveUrl) && (
        <div className="mt-6 flex flex-wrap gap-4">
        {codeUrl && (
          <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn"
          >
          <Github size={16} />
          Code
          </a>
        )}

        {liveUrl && (
          <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn"
          >
          <ExternalLink size={16} />
          View Live
          </a>
        )}
        </div>
      )}
      </div>
    </motion.div>
  );
}
