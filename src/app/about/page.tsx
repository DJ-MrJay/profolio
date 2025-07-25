"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Card } from "../../components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "../../components/Container";
import { ContainerNarrow } from "../../components/ContainerNarrow";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

const LOGOS = [
  { src: "/assets/brand-logos/Nextjs-logo-light.png", alt: "Next.js" },
  { src: "/assets/brand-logos/JavaScript-logo-light.png", alt: "JavaScript" },
  { src: "/assets/brand-logos/Typescript-logo-light.png", alt: "TypeScript" },
  {
    src: "/assets/brand-logos/Ruby-On-Rails-logo-light.png",
    alt: "Ruby on Rails",
  },
  { src: "/assets/brand-logos/HTML5-logo-light.png", alt: "HTML5" },
  { src: "/assets/brand-logos/CSS3-logo-light.png", alt: "CSS3" },
  { src: "/assets/brand-logos/Redux-logo-light.png", alt: "Redux" },
  { src: "/assets/brand-logos/C++-logo-light.png", alt: "C++" },
  { src: "/assets/brand-logos/React-icon-light.png", alt: "React" },
  { src: "/assets/brand-logos/PHP-logo-light.png", alt: "PHP" },
  { src: "/assets/brand-logos/Ruby-logo-light.png", alt: "Ruby" },
  { src: "/assets/brand-logos/Webpack-logo-light.png", alt: "Webpack" },
  {
    src: "/assets/brand-logos/Tailwind-CSS-logo-light.png",
    alt: "Tailwind CSS",
  },
  { src: "/assets/brand-logos/Bootstrap-logo-light.png", alt: "Bootstrap" },
  { src: "/assets/brand-logos/Expo-logo-light.png", alt: "Expo" },
  { src: "/assets/brand-logos/Laravel-logo-light.png", alt: "Laravel" },
  { src: "/assets/brand-logos/MySQL-logo-light.png", alt: "MySQL" },
  { src: "/assets/brand-logos/Postgresql-logo-light.png", alt: "PostgreSQL" },
  { src: "/assets/brand-logos/Oracle-logo-light.png", alt: "Oracle" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ paddingTop: "var(--navbar-height)" }}
      >
        <section className="relative overflow-hidden py-[10%] md:py-[5%] mx-auto">
          {/* Dot Background Layer */}
          <div
            className={cn(
              "absolute inset-0 -z-10",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(var(--grey-color)_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--background-color)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,var(--background-color))] -z-10" />

          <ContainerNarrow>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
              {/* Column 1 with the text */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  My Coding Journey
                </motion.h2>

                <p className="text-xl">
                  My journey into the world of programming began in 2008 during
                  my second year at university. My first project, a Patient
                  Management System for a hospital, was built using Microsoft
                  Visual Basic for the front end and Microsoft Access for the
                  back end. That experience ignited a lasting fascination, not
                  just with the logic of coding but with the art of crafting
                  visually appealing, user-friendly applications. I quickly
                  realized that my passion lay at the intersection of
                  functionality, aesthetics, and seamless user experience, a
                  foundation that shaped my path toward full-stack development.
                </p>
                <p>
                  Driven by curiosity, I continuously explore emerging
                  technologies to stay ahead in our fast-evolving digital
                  landscape. I enjoy sharing knowledge through{" "}
                  <Link
                    href="https://medium.com/@djmrjay"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--shade-500)" }}
                  >
                    articles
                  </Link>
                  , contributing to the developer community, and experimenting
                  with creative designs on{" "}
                  <Link
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--shade-500)" }}
                  >
                    Figma
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://codepen.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--shade-500)" }}
                  >
                    CodePen
                  </Link>
                  . Beyond coding, I have a deep appreciation for graphic
                  design, where I celebrate the beauty of thoughtful aesthetics.
                </p>
                <p>
                  Currently, I’m focused on elevating my expertise and advancing
                  toward a senior developer role, embracing new challenges with
                  enthusiasm.
                </p>
                <p>Thank you.</p>
              </div>

              {/* Column 2 with the image */}
              <div className="hidden sm:block relative w-full h-full">
                <div
                  className="absolute inset-0 bg-no-repeat bg-right bg-contain filter dark:grayscale"
                  style={{
                    backgroundImage: "url('/assets/images/jay-img.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "right bottom",
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
              </div>
            </div>
          </ContainerNarrow>
        </section>

        <section
          className="py-[10%] md:py-[5%] mx-auto"
          style={{ backgroundColor: "var(--shade-100)" }}
        >
          <div className="space-y-12">
            <ContainerNarrow>
              <h4>Experience</h4>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="experience-1">
                  <AccordionTrigger>
                    Freelance Designer & Web Developer
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card className="lg:p-6 space-y-3">
                      <p className="text-sm ">
                        <span className="font-bold">
                          FREELANCER <br /> FEB 2022 - PRESENT
                        </span>{" "}
                        | Nairobi, Kenya
                      </p>
                      <ul className="list-disc list-outside">
                        Full Stack Web Development
                        <li className="ml-5">
                          Develop responsive, visually engaging websites and
                          apps with a strong emphasis on usability and
                          performance.
                        </li>
                        <li className="ml-5">
                          Expertise in HTML, CSS, JavaScript, and most modern
                          frameworks (see technical skills below).
                        </li>
                        <li className="ml-5">
                          Implement user-centric design principles to ensure
                          intuitive navigation and seamless functionality.
                        </li>
                      </ul>

                      <ul className="list-disc list-outside">
                        Design Expertise
                        <li className="ml-5">
                          Leverage a strong graphic design background to create
                          cohesive visual identities.
                        </li>
                        <li className="ml-5">
                          Produce high-impact designs that align with brand
                          narratives and user expectations.
                        </li>
                        <li className="ml-5">
                          Combine aesthetics with functionality for memorable
                          digital experiences.
                        </li>
                      </ul>

                      <ul className="list-disc list-outside">
                        Client & Collaboration
                        <li className="ml-5">
                          Work closely with clients to translate their vision
                          into tailored solutions.
                        </li>
                        <li className="ml-5">
                          Foster long-term partnerships through clear
                          communication and iterative feedback.
                        </li>
                        <li className="ml-5">
                          Deliver projects that exceed expectations in
                          creativity, quality, and technical execution.
                        </li>
                      </ul>

                      <ul className="list-disc list-outside">
                        Innovation & Growth
                        <li className="ml-5">
                          Continuously explore emerging trends in design and
                          development.
                        </li>
                        <li className="ml-5">
                          Maintain a diverse portfolio of projects that reflect
                          adaptability and creative problem-solving.
                        </li>
                        <li className="ml-5">
                          Push boundaries by experimenting with new tools and
                          techniques.
                        </li>
                      </ul>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="experience-2">
                  <AccordionTrigger>Mentor (Volunteer)</AccordionTrigger>
                  <AccordionContent>
                    <Card className="lg:p-6 space-y-3">
                      <p className="text-sm ">
                        <span className="font-bold">
                          MICROVERSE <br /> AUGUST 2022 – PRESENT
                        </span>{" "}
                        | Remote
                      </p>
                      <ul className="list-disc list-outside">
                        <li className="ml-5">
                          Technical Guidance: Conduct code reviews and provide
                          structured feedback to junior developers, ensuring
                          adherence to best practices in readability,
                          performance, and maintainability.
                        </li>
                        <li className="ml-5">
                          Code Optimization: Identify opportunities for improved
                          architecture and efficiency, helping mentees refine
                          their problem-solving approaches.
                        </li>
                        <li className="ml-5">
                          Career & Motivation Support: Offer personalized advice
                          on overcoming challenges, staying motivated, and
                          building sustainable habits for long-term success in
                          tech.
                        </li>
                        <li className="ml-5">
                          Community Contribution: Foster an inclusive learning
                          environment by sharing industry insights, debugging
                          strategies, and growth mindset techniques.
                        </li>
                      </ul>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="experience-3">
                  <AccordionTrigger>
                    Pre-Sales Technical Consultant
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card className="lg:p-6 space-y-3">
                      <p className="text-sm ">
                        <span className="font-bold">
                          i3 TECHNOLOGIES <br /> OCTOBER 2020 – FEBRUARY 2022
                        </span>{" "}
                        | Athi River, Kenya
                      </p>
                      <ul className="list-disc list-outside">
                        <li className="ml-5">
                          Strategic Solution Development: Utilized the IBM
                          PartnerWorld program to design targeted go-to-market
                          strategies using the{" "}
                          <span className="italic">My Digital Marketing</span>{" "}
                          tool, enhancing audience engagement and adoption.
                        </li>
                        <li className="ml-5">
                          Key Account Management: Identified and nurtured
                          high-value opportunities with county and national
                          government clients, building strong relationships
                          through on-site visits and tailored consultations.
                        </li>
                        <li className="ml-5">
                          Technical Sales Enablement: Led product demonstrations
                          and technical presentations, effectively communicating
                          value propositions to decision-makers—contributing to
                          a 40% increase in successful sales conversions.
                        </li>
                        <li className="ml-5">
                          Client-Centric Solutions: Collaborated with
                          cross-functional teams to align product capabilities
                          with customer needs, ensuring seamless implementation
                          and long-term satisfaction.
                        </li>
                      </ul>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="experience-4">
                  <AccordionTrigger>System Administrator</AccordionTrigger>
                  <AccordionContent>
                    <Card className="lg:p-6 space-y-3">
                      <p className="text-sm ">
                        <span className="font-bold">
                          SAMEDAY CARGO FORWARDERS <br /> FEBRUARY 2004 – AUGUST
                          2015
                        </span>{" "}
                        | Nairobi, Kenya
                      </p>
                      <ul className="list-disc list-outside">
                        <li className="ml-5">
                          Infrastructure Optimization: Designed, deployed, and
                          maintained a high-availability IT infrastructure,
                          ensuring 99.9% uptime for mission-critical business
                          applications and services.
                        </li>
                        <li className="ml-5">
                          Digital Transformation: Spearheaded the migration from
                          legacy systems to modern digital solutions, enhancing
                          scalability, reliability, and cost-efficiency across
                          operations.
                        </li>
                        <li className="ml-5">
                          IT Governance & Compliance: Played a key role in
                          developing and enforcing IT policies and procedures,
                          ensuring alignment with industry standards and
                          regulatory requirements.
                        </li>
                        <li className="ml-5">
                          Operational Excellence: Provided proactive system
                          monitoring, troubleshooting, and maintenance,
                          minimizing downtime and optimizing performance for
                          end-users.
                        </li>
                      </ul>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ContainerNarrow>

            <ContainerNarrow>
              <h4>Skills</h4>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="experience">
                  <AccordionTrigger>Tech Stack</AccordionTrigger>
                  <AccordionContent>
                    <div className="relative flex overflow-x-hidden scroller-container">
                      <div className="py-6 scroller whitespace-nowrap">
                        <ul className="flex items-center [&_li]:mx-4 [&_img]:max-w-[90px] [&_img]:max-h-[35px] [&_img]:h-auto [&_img]:w-auto">
                          {/* First set of logos */}
                          {LOGOS.map((logo, index) => (
                            <li key={`first-${index}`}>
                              <a
                                data-tooltip-id="logo-tooltip"
                                data-tooltip-content={logo.alt}
                              >
                                <Image
                                  src={logo.src}
                                  alt={logo.alt}
                                  width={100}
                                  height={100}
                                />
                              </a>
                            </li>
                          ))}
                          <Tooltip id="logo-tooltip" />
                        </ul>
                      </div>

                      {/* Duplicate for seamless looping */}
                      <div
                        className="absolute top-0 py-6 scroller2 whitespace-nowrap"
                        aria-hidden="true"
                      >
                        <ul className="flex items-center [&_li]:mx-4 [&_img]:max-w-[90px] [&_img]:max-h-[35px] [&_img]:h-auto [&_img]:w-auto">
                          {/* Second set of logos (same as first) */}
                          {LOGOS.map((logo, index) => (
                            <li key={`first-${index}`}>
                              <a
                                data-tooltip-id="logo-tooltip"
                                data-tooltip-content={logo.alt}
                              >
                                <Image
                                  src={logo.src}
                                  alt={logo.alt}
                                  width={100}
                                  height={100}
                                />
                              </a>
                            </li>
                          ))}
                          <Tooltip id="logo-tooltip" />
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ContainerNarrow>

            <Container>
              <div className="flex flex-col items-center gap-12 w-full">
                <Link
                  href="https://docs.google.com/document/d/15XFe3O-jGuixgCD0M3unRk_taDqisG_onwW5VivDn7w/edit?usp=sharing"
                  className="btn-rounded mt-2 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Résumé
                </Link>

                <div className="flex items-center justify-between w-full">
                  <Link
                    href="/main#intro"
                    className="flex items-center gap-2 scroll-smooth"
                  >
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowLeft />
                    </motion.div>
                    Go Back
                  </Link>

                  <Link
                    href="/main#work"
                    className="flex items-center gap-2 scroll-smooth"
                  >
                    Continue
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
          </div>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
