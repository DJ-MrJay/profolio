"use client";

import Navbar from "../../components/Header";
import Intro from "../../components/sections/Intro";
import Work from "../../components/sections/Work";
import Articles from "../../components/sections/Articles";
import Footer from "../../components/Footer";
import Contact from "../../components/sections/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <main className="mt-20 scroll-smooth">
          <section id="intro">
            <Intro />
          </section>

          <section id="work">
            <Work />
          </section>

          <section id="articles">
            <Articles />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
