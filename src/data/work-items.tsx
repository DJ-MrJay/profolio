import type { CSSProperties, ReactNode } from "react";

export type WorkItemData = {
  title: string;
  description: ReactNode;
  image: string;
  tags: string[];
  category: string;
  role: string;
  outcome: string;
  codeUrl?: string;
  liveUrl?: string;
  reverse?: boolean;
};

const inlineLinkStyle: CSSProperties = { color: "var(--shade-500)" };

function InlineExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={inlineLinkStyle}
    >
      {children}
    </a>
  );
}

export const WORK_ITEMS: WorkItemData[] = [
  {
    title: "This Portfolio",
    category: "Personal brand",
    role: "Design, front-end, content system",
    outcome: "A motion-led portfolio system for work, writing, and client inquiries.",
    description: (
      <>
        This portfolio showcases a collection of my projects, highlighting my
        skills in web development and design. It is made with{" "}
        <InlineExternalLink href="https://nextjs.org/">
          Next.js
        </InlineExternalLink>
        {", "}
        <InlineExternalLink href="https://www.typescriptlang.org/">
          TypeScript
        </InlineExternalLink>
        {", "}
        <InlineExternalLink href="https://tailwindcss.com/">
          Tailwind CSS
        </InlineExternalLink>
        {" and "}
        <InlineExternalLink href="https://ui.shadcn.com/">
          shadcn/ui
        </InlineExternalLink>
        . Each project is a testament to my ability to create functional and
        aesthetically pleasing applications.
      </>
    ),
    image: "/assets/images/portfolio-shot-2.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    codeUrl: "https://github.com/DJ-MrJay/profolio",
    liveUrl: "https://mrjay.co.ke/",
    reverse: true,
  },
  {
    title: "Mix Streamer",
    category: "Entertainment app",
    role: "Product UI, Next.js build, media UX",
    outcome: "A mobile-first streaming interface with search and persistent playback.",
    description:
      "Mix Streamer is a mobile-first web application designed to deliver seamless DJ audio and video mix streaming. It uses Google Drive as the media source, lets users search across rich metadata, and supports uninterrupted playback through a persistent global player.",
    image: "/assets/images/mix-streamer.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    codeUrl: "https://github.com/DJ-MrJay/mix-streamer",
    liveUrl: "https://mix-streamer.vercel.app/",
  },
  {
    title: "Super Wheels Car Rentals",
    category: "Full-stack app",
    role: "React front-end, Rails API collaboration",
    outcome: "A reservation workflow for browsing cars and scheduling test drives.",
    description: (
      <>
        A React/Rails web app for scheduling car test drives, built
        collaboratively at{" "}
        <InlineExternalLink href="https://www.microverse.org">
          Microverse
        </InlineExternalLink>
        . It features a robust Rails API with full CRUD for car listings, plus
        reservation and authentication management.
      </>
    ),
    image: "/assets/images/super-wheels.png",
    tags: ["React", "Redux", "Ruby On Rails", "CSS3"],
    codeUrl: "https://github.com/Itswali/Rental-Cars",
    liveUrl: "https://supercarsrentals.onrender.com/",
    reverse: true,
  },
  {
    title: "Money Matters",
    category: "Finance app",
    role: "Rails product build",
    outcome: "A budgeting flow for categories, transactions, and expense visibility.",
    description: (
      <>
        This Ruby on Rails budgeting app helps users take control of their
        finances with seamless transaction management, expense tracking, and
        spending insights. It&apos;s part of my Remote Full Stack Web Development
        Program at{" "}
        <InlineExternalLink href="https://www.microverse.org">
          Microverse
        </InlineExternalLink>
        .
      </>
    ),
    image: "/assets/images/money-matters.png",
    tags: ["Ruby", "HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/DJ-MrJay/Money-Matters",
    liveUrl: "https://money-matters-p0pp.onrender.com/",
  },
  {
    title: "Blog App",
    category: "Content platform",
    role: "Rails architecture, CRUD flows",
    outcome: "A community-style publishing app with posts, comments, and likes.",
    description: (
      <>
        A Ruby on Rails platform enabling users to create, comment on, and like
        posts in a community-driven space. I built it independently during my
        Remote Full Stack Web Development Program at{" "}
        <InlineExternalLink href="https://www.microverse.org">
          Microverse
        </InlineExternalLink>
        , sharpening my skills in building robust web applications.
      </>
    ),
    image: "/assets/images/blog-app.png",
    tags: ["Ruby", "HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/DJ-MrJay/My-Blog-App",
    reverse: true,
  },
  {
    title: "Phil Logistics",
    category: "Logistics website",
    role: "WordPress design and deployment",
    outcome: "A three-day CMS launch for a logistics and customs brokerage firm.",
    description: (
      <>
        I was tasked with creating a website for a logistics firm that focuses
        on customs brokerage, transport, logistics, and warehousing services. My
        extensive knowledge of{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>
        , enabled me to skillfully develop and deploy the site within a mere
        three days.
      </>
    ),
    image: "/assets/images/phil-shot.png",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://phil-logistics.com/",
  },
  {
    title: "Bookstore CMS",
    category: "Front-end app",
    role: "React, Redux, interaction design",
    outcome: "A collection-management interface for adding and organizing books.",
    description: (
      <>
        A React/Redux app for organizing your personal book collection with
        dynamic display and add/remove functionality. Built independently during
        my Remote Full Stack Web Development Program at{" "}
        <InlineExternalLink href="https://www.microverse.org">
          Microverse
        </InlineExternalLink>
        , refining my state management and front-end skills.
      </>
    ),
    image: "/assets/images/bookstore-CMS.png",
    tags: ["React", "Redux", "HTML5", "CSS3"],
    codeUrl: "https://github.com/DJ-MrJay/Awesome-books",
    liveUrl: "https://dj-mrjay.github.io/bookstore/",
    reverse: true,
  },
  {
    title: "SJZ Flowers",
    category: "Horticulture site",
    role: "WordPress UX and visual direction",
    outcome: "A responsive CMS site for floral products, export services, and sourcing.",
    description: (
      <>
        Leveraging my{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>{" "}
        expertise, I built an elegant platform for SJZ Flowers showcasing
        fresh-cut flowers, export services, and sustainable farming. The site
        features seamless navigation, stunning imagery, and responsive design to
        connect international buyers with Kenya&apos;s finest floral exports.
      </>
    ),
    image: "/assets/images/sjz-snap.jpg",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://sjzflowers.co.ke/",
  },
  {
    title: "Brandchamp Marketing",
    category: "Agency website",
    role: "WordPress design, identity support",
    outcome: "A polished web presence for services, positioning, and credibility.",
    description: (
      <>
        A website for a brand marketing agency specializing in identity
        services. Leveraging my{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>{" "}
        expertise, I delivered a compelling, robust site in three days - a
        polished online presence showcasing the agency&apos;s services and portfolio.
      </>
    ),
    image: "/assets/images/brand-champ.jpg",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://brandchamp.co.ke/",
    reverse: true,
  },
  {
    title: "Neo Lite Energies",
    category: "Energy company site",
    role: "WordPress build and launch",
    outcome: "A client-managed CMS site for an oil and gas company.",
    description: (
      <>
        I created a website for Neo Lite Energies, a leader in Oil and Gas.
        Leveraging my{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>{" "}
        expertise, I launched it in just two days - a professional CMS-based site
        the client can easily update.
      </>
    ),
    image: "/assets/images/neolite.jpg",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://neolite-energies.co.ke/",
  },
];
