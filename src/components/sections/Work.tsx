import Link from "next/link";
import { Container } from "../Container";
import WorkItem from "../WorkItem";
import { motion } from "framer-motion";

const workItems = [
  {
    title: "This Portfolio",
    description: (
      <>
        This portfolio showcases a collection of my projects, highlighting my
        skills in web development and design. It is made with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          Next.js
        </a>
        {", "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          TypeScript
        </a>
        {", "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          Tailwind CSS
        </a>
        {" and "}
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          shadcn/ui
        </a>
        . Each project is a testament to my ability to create functional and
        aesthetically pleasing applications.
      </>
    ),
    image: "/assets/images/portfolio-shot.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    codeUrl: "https://github.com/DJ-MrJay/profolio",
    liveUrl: "https://jonah-profolio.vercel.app/",
    reverse: true,
  },
  {
    title: "Spoticlone",
    description:
      "Spoticlone is a mobile application designed to mimic the functionality of the widely-used music streaming platform, Spotify. Using the Spotify API, it retrieves and plays music seamlessly. Developed using React Native and TypeScript, Spoticlone enables users to effortlessly search for songs and also mark them as favorites.",
    image: "/assets/images/spoticlone-mockup.jpg",
    tags: ["React Native", "TypeScript", "Expo", "GraphQL"],
    codeUrl: "https://github.com/DJ-MrJay/spoticlone",
    liveUrl: "https://spoticlone-demo.vercel.app",
  },
  {
    title: "Donga Carspa",
    description: (
      <>
        I had the privilege of creating a website for Donga Carspa, a renowned
        leader in automotive care solutions. Drawing on my deep expertise in{" "}
        <a
          href="https://www.wordpress.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          WordPress
        </a>
        , I successfully developed and launched the website within just five
        days. The result was a polished, professional online presence that
        perfectly embodies the brand’s dedication to quality and excellence.
      </>
    ),
    image: "/assets/images/donga-shot.png",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://donga.co.ke",
    reverse: true,
  },
  {
    title: "Super Wheels Car Rentals",
    description: (
      <>
        A dynamic web application built with a React front-end and a Ruby on
        Rails back-end, streamlining the process of scheduling car test drives.
        Developed as part of a collaborative effort at{" "}
        <a
          href="https://www.microverse.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          Microverse
        </a>
        , the project features a robust Rails API that provides endpoints for
        managing cars, allowing users to create, retrieve, update, and delete
        listings, as well as handling reservations and user authentication.
      </>
    ),
    image: "/assets/images/super-wheels.png",
    tags: ["React", "Redux", "Ruby On Rails", "CSS3"],
    codeUrl: "https://github.com/Itswali/Rental-Cars",
    liveUrl: "https://supercarsrentals.onrender.com/",
  },
  {
    title: "Money Matters",
    description: (
      <>
        This Ruby on Rails budgeting app is a powerful mobile tool designed to
        help users take control of their finances. It allows seamless
        transaction management, enabling users to add expenses, categorize
        spending, and gain valuable insights into their financial habits. I
        developed this application as part of my Remote Full Stack Web
        Development Program at{" "}
        <a
          href="https://www.microverse.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          Microverse
        </a>
        , combining clean functionality with intuitive design to create a
        practical solution for everyday budgeting.
      </>
    ),
    image: "/assets/images/money-matters.png",
    tags: ["Ruby", "HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/DJ-MrJay/Money-Matters",
    liveUrl: "https://money-matters-p0pp.onrender.com/",
    reverse: true,
  },
  {
    title: "Blog App",
    description:
      "A dynamic Ruby on Rails platform that empowers users to create, engage with, and interact through posts. With features like commenting and liking, it fosters a community-driven space for sharing ideas. I developed this application independently as part of my Remote Full Stack Web Development Program at Microverse, honing my skills in building robust, user-friendly web applications from the ground up.",
    image: "/assets/images/blog-app.png",
    tags: ["Ruby", "HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/DJ-MrJay/My-Blog-App",
  },
  {
    title: "Phil Logistics",
    description: (
      <>
        I was tasked with creating a website for a logistics firm that focuses
        on customs brokerage, transport, logistics, and warehousing services. My
        extensive knowledge of{" "}
        <a
          href="https://www.wordpress.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          WordPress
        </a>
        , enabled me to skillfully develop and deploy the site within a mere
        three days.
      </>
    ),
    image: "/assets/images/phil-shot.png",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://phil-logistics.com/",
    reverse: true,
  },
  {
    title: "Bookstore CMS",
    description: (
      <>
        An interactive web application designed to organize and manage your
        personal book collection with ease. Built with React and Redux, the app
        allows users to dynamically display their book lists while seamlessly
        adding or removing titles. I developed this project independently as
        part of my Remote Full Stack Web Development Program at{" "}
        <a
          href="https://www.microverse.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          Microverse
        </a>
        , refining my skills in state management and responsive front-end
        development.
      </>
    ),
    image: "/assets/images/bookstore-CMS.png",
    tags: ["React", "Redux", "HTML5", "CSS3"],
    codeUrl: "https://github.com/DJ-MrJay/Awesome-books",
    liveUrl: "https://dj-mrjay.github.io/bookstore/",
  },
  {
    title: "SJZ Flowers",
    description: (
      <>
        Leveraging my expertise in{" "}
        <a
          href="https://www.wordpress.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          WordPress
        </a>{" "}
        development, I created an elegant and functional platform that
        highlights SJZ Flowers&apos; diverse catalogue of fresh-cut flowers, export
        services, and sustainable farming practices. The website features
        seamless navigation, stunning floral imagery, and responsive design to
        connect international buyers with Kenya&apos;s finest floral exports.
      </>
    ),
    image: "/assets/images/sjz-snap.jpg",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://sjzflowers.co.ke/",
    reverse: true,
  },
  {
    title: "Brandchamp Marketing",
    description: (
      <>
        A website for an innovative brand marketing agency specializing in
        identity services. Drawing on my deep expertise in{" "}
        <a
          href="https://www.wordpress.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--shade-500)" }}
        >
          WordPress
        </a>{" "}
        development, I delivered a visually compelling and functionally robust
        website within an impressive three-day timeframe. The result is a
        polished online presence that effectively showcases the agency&apos;s
        services and portfolio.
      </>
    ),
    image: "/assets/images/brand-champ.jpg",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://brandchamp.co.ke/",
  },
];

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

        {workItems.map((item, index) => (
          <div
            key={index}
            className={
              index === workItems.length - 1 ? "pb-0" : "pb-[10%] md:pb-[5%]"
            }
          >
            <WorkItem {...item} />
          </div>
        ))}

<div className="text-center pt-16 pb-4 scroll-in">
          <Link
            href="https://github.com/DJ-MrJay?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded items-center"
          >
            View More Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
