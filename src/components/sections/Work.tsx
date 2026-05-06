import Link from "next/link";
import { motion } from "framer-motion";

import { WORK_ITEMS } from "@/data/work-items";
import { Container } from "../Container";
import WorkItem from "../WorkItem";

export default function Work() {
  return (
    <section
      id="work"
      className="py-[10%] md:py-[5%]"
      style={{ backgroundColor: "var(--shade-100)" }}
    >
      <Container>
        <div className="mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            Work
          </motion.h2>

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
            I specialize in contract-based work, with occasional freelance
            projects or personal endeavors driven by passion. Below are some of
            my recent works:
          </motion.p>
        </div>

        {WORK_ITEMS.map((item, index) => (
          <div
            key={item.title}
            className={
              index === WORK_ITEMS.length - 1 ? "pb-0" : "pb-[10%] md:pb-[5%]"
            }
          >
            <WorkItem {...item} />
          </div>
        ))}

        <div className="pt-16 pb-4 scroll-in">
          <Link
            href="https://github.com/DJ-MrJay?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded inline-flex items-center"
          >
            View More Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
