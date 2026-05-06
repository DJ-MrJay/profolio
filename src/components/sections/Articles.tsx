"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "../Container";
import { ARTICLES } from "@/data/articles";

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-[10%] md:py-[5%]">
      <Container>
        <div className="space-y-4">
          <div className="scroll-in space-y-4">
            <h2>Feature Articles</h2>
            <motion.p
              className="text-xl sm:text-2xl"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              I have authored several tech articles on{" "}
              <a
                href="https://medium.com/@djmrjay"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--shade-500)" }}
              >
                Medium
              </a>
              , covering topics that caught my interest. I am delighted to share
              them here:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, index) => (
              <motion.a
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.9 }}
                className="flex flex-col h-full article group shadow transition-shadow duration-500 hover:shadow-md focus-within:shadow-md"
              >
                <div className="overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover opacity-80 grayscale contrast-75 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-100"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="text-sm uppercase text-gray-500">
                    MEDIUM <i className="bi bi-medium"></i>
                  </div>
                  <h5 className="text-[var(--shade-500)]">{article.title}</h5>
                  <p>{article.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="pt-16 pb-4 scroll-in">
          <Link
            href="https://medium.com/@djmrjay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded inline-flex items-center"
          >
            View All Articles
          </Link>
        </div>
      </Container>
    </section>
  );
}
