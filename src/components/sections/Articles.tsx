"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "../Container";

const articles = [
  {
    href: "https://medium.com/@djmrjay/css3-unleashing-the-magic-in-web-and-app-development-cf7848792987",
    img: "/assets/images/css3-cover.jpg",
    title: "CSS3: Unleashing the Magic!",
    description: `In the ever-evolving world of web and app development,
    CSS3 stands as a true magician, conjuring up stunning visuals,
    enhancing user experiences, and bringing creativity to life.`,
  },
  {
    href: "https://medium.com/@djmrjay/designing-success-the-power-of-aesthetics-and-captivating-ui-ux-in-web-development-eb6fd3b90ee2",
    img: "/assets/images/ui-ux.jpg",
    title: "The Power of Captivating UI/UX",
    description: `In the digital age, where user experience reigns supreme,
    the intersection of aesthetics and captivating UI/UX in web development
    is a critical catalyst for success.`,
  },
  {
    href: "https://medium.com/@djmrjay/advice-for-a-beginner-in-software-development-9460010e5464",
    img: "/assets/images/beginner-dev.jpg",
    title: "Software Development Beginners",
    description: `Embarking on a journey into the world of software
    development can be both exciting and daunting. This article offers
    indispensable advice to help chart your course.`,
  },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-[10%] md:py-[5%]">
      <Container>
        <div className="space-y-4">
          <div className="scroll-in space-y-4">
            <h2>Feature Articles</h2>
            <p className="text-xl sm:text-2xl">
              I have authored several tech articles on{" "}
              <a
                href="https://medium.com/@djmrjay"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--shade-500)" }}
              >
                Medium
              </a>
              , covering topics that caught my interest. I am delighted to
              share them here:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.a
                key={index}
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
        <div className="text-center pt-16 pb-4 scroll-in">
          <Link
            href="https://medium.com/@djmrjay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded items-center"
          >
            View All Articles
          </Link>
        </div>
      </Container>
    </section>
  );
}
