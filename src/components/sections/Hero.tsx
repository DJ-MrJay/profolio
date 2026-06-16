"use client";

import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[78dvh] overflow-hidden border-b border-[var(--border-color)] pt-[var(--navbar-height)]"
    >
      <div className="absolute inset-0 -z-20 bg-[var(--background-color)]" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[66%] bg-[var(--mint-color)] lg:block" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--background-color)_0%,rgba(251,250,247,0.94)_46%,rgba(251,250,247,0.48)_70%,rgba(251,250,247,0.08)_100%)] dark:bg-[linear-gradient(90deg,var(--background-color)_0%,rgba(16,17,20,0.95)_46%,rgba(16,17,20,0.62)_72%,rgba(16,17,20,0.25)_100%)]" />
      <div className="absolute bottom-0 right-[-10%] top-[11%] -z-10 hidden w-[68%] lg:block">
        <Image
          src="/assets/images/mrjay-on-chair.png"
          alt="Jonah Wambua seated at his workspace"
          fill
          priority
          sizes="68vw"
          className="object-contain object-right-bottom"
          style={{ filter: "var(--image-filter)" }}
        />
      </div>
      <div className="absolute left-0 top-[var(--navbar-height)] -z-10 h-px w-full bg-[var(--border-color)]" />

      <Container className="flex min-h-[calc(78dvh-var(--navbar-height))] flex-col justify-center py-8">
        <div className="max-w-4xl">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            Jonah Wambua / Nairobi, Kenya
          </motion.p>

          <motion.div
            className="mt-4 space-y-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease: "easeOut", delay: 0.05 }}
          >
            <h1>
              Full-stack developer with a designer&apos;s eye for useful digital
              products.
            </h1>
            <p className="max-w-2xl text-lg text-[var(--text-muted)] md:text-xl">
              I build responsive web apps, product interfaces, and brand systems
              that make complex ideas feel clear, fast, and considered.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.14 }}
          >
            <a href="#work" className="btn-primary inline-flex items-center gap-2">
              View selected work
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a href="#contact" className="btn-rounded inline-flex items-center gap-2">
              <Mail aria-hidden="true" size={17} />
              Start a project
            </a>
          </motion.div>

          <motion.div
            className="mt-5 flex items-center gap-4 text-sm text-[var(--text-muted)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            <MapPin aria-hidden="true" size={17} className="text-[var(--accent-color)]" />
            Available for remote contract work and design-led builds.
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
