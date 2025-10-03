"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "../components/Container";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../components/ui/background-beams";
import Link from "next/link";
import Navbar from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-screen w-full top-0 left-0 bg-background flex items-center z-50 overflow-hidden"
      >
        {/* Background Beams Layer */}
        <div className="absolute inset-0 z-0">
          <BackgroundBeams />
        </div>

        {/* Background Image Layer */}
        <div
          id="home"
          className="absolute inset-0 pointer-events-none hidden lg:block bg-[url('/assets/images/jay-portfolio.png')] bg-no-repeat bg-right-bottom bg-contain z-10"
          style={{
            filter: "var(--image-filter)",
          }}
        />

        {/* Foreground Content */}
        <Container className="relative z-20">
          <div className="lg:w-[55%] w-[95%]">
            <div className="space-y-4">
              <p>Jonah Wambua</p>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: "easeOut" },
                }}
              >
                <h1 className="leading-tight lg:hidden">
                  Full-Stack Software Developer.
                </h1>
                <div className="hidden lg:block space-y-0">
                  <h1 className="leading-tight">Full-Stack Software</h1>
                  <h1 className="leading-tight">Developer.</h1>
                </div>
                <h2 className="leading-tight">Graphic & UI/UX Designer.</h2>
              </motion.div>
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <h4 className="leading-tight">
                  I develop web applications & digital designs, prioritizing
                  user experience, functionality, responsiveness, and
                  accessibility.
                </h4>
              </motion.div>

              <Link
                href="/main"
                className="flex items-center gap-2 pt-4 scroll-smooth"
              >
                Dive In{" "}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight />
                </motion.div>
              </Link>
            </div>
          </div>
        </Container>
      </motion.section>
    </>
  );
}
