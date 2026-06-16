"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "../../components/Container";
import { LogosScroller } from "../../components/LogosScroller";

const EXPERIENCE = [
  {
    value: "freelance",
    title: "Freelance Designer & Web Developer",
    meta: "Freelancer / Feb 2022 - Present / Nairobi, Kenya",
    bullets: [
      "Build responsive websites and apps with a strong emphasis on usability, performance, and maintainable front-end structure.",
      "Pair full-stack development with graphic design to create cohesive visual identities and product interfaces.",
      "Work closely with clients to translate business goals into clear scopes, iterative feedback, and production-ready launches.",
    ],
  },
  {
    value: "mentor",
    title: "Mentor (Volunteer)",
    meta: "Microverse / August 2022 - Present / Remote",
    bullets: [
      "Review code and provide structured feedback to junior developers on readability, performance, and maintainability.",
      "Help mentees debug implementation issues, improve architecture, and build sustainable learning habits.",
      "Share practical career guidance, collaboration habits, and growth strategies inside an international developer community.",
    ],
  },
  {
    value: "presales",
    title: "Pre-Sales Technical Consultant",
    meta: "i3 Technologies / October 2020 - February 2022 / Athi River, Kenya",
    bullets: [
      "Designed targeted go-to-market approaches using IBM PartnerWorld resources and audience-specific digital marketing tools.",
      "Developed high-value opportunities with county and national government clients through on-site consultation and demos.",
      "Aligned technical presentations with customer needs, contributing to stronger sales conversion and clearer implementation paths.",
    ],
  },
  {
    value: "systems",
    title: "System Administrator",
    meta: "Sameday Cargo Forwarders / February 2004 - August 2015 / Nairobi, Kenya",
    bullets: [
      "Maintained business-critical IT infrastructure, improving reliability and support for daily operations.",
      "Supported migration from legacy systems toward more scalable digital workflows and stronger governance practices.",
      "Provided proactive monitoring, troubleshooting, and end-user support across operational teams.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--navbar-height)" }}>
        <section className="border-b border-[var(--border-color)] py-16 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="eyebrow">About Jonah</p>
                <h1 className="mt-4">A developer shaped by design, systems, and client work.</h1>
                <div className="mt-6 space-y-4 text-lg text-[var(--text-muted)]">
                  <p>
                    My programming journey started in 2008 with a patient
                    management system built in Visual Basic and Microsoft
                    Access. That project made the connection between logic,
                    usability, and visual clarity impossible to ignore.
                  </p>
                  <p>
                    Since then I have worked across web development, systems
                    administration, technical consulting, mentoring, and visual
                    design. The throughline is simple: useful products need
                    strong structure, clear interfaces, and careful execution.
                  </p>
                  <p>
                    I am currently focused on deeper senior-level engineering
                    practice while continuing to ship design-led web products
                    for clients and personal experiments.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://docs.google.com/document/d/15XFe3O-jGuixgCD0M3unRk_taDqisG_onwW5VivDn7w/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Request resume
                    <Download aria-hidden="true" size={16} />
                  </Link>
                  <Link href="/#work" className="btn-rounded inline-flex items-center gap-2">
                    See selected work
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-muted)]">
                <Image
                  src="/assets/images/jay-standing.png"
                  alt="Jonah Wambua standing"
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="object-contain object-bottom"
                  style={{ filter: "var(--image-filter)" }}
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[var(--surface-muted)] py-16 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="eyebrow">Experience</p>
                <h2 className="mt-4">Roles that shaped how I build.</h2>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {EXPERIENCE.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] px-5"
                  >
                    <AccordionTrigger className="min-h-16 text-base font-bold hover:no-underline">
                      <span>
                        {item.title}
                        <span className="mt-1 block text-sm font-normal text-[var(--text-muted)]">
                          {item.meta}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <ul className="grid gap-3 text-sm leading-6 text-[var(--text-muted)]">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="border-l-2 border-[var(--accent-color)] pl-4">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="eyebrow">Skills</p>
                <h2 className="mt-4">Tools I reach for often.</h2>
              </div>
              <div className="rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)]">
                <LogosScroller />
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-color)] pt-8">
              <Link href="/#intro" className="btn-rounded inline-flex items-center gap-2">
                <ArrowLeft aria-hidden="true" size={16} />
                Back home
              </Link>
              <Link
                href="https://medium.com/@djmrjay"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rounded inline-flex items-center gap-2"
              >
                Read articles
                <ExternalLink aria-hidden="true" size={16} />
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
