import type { CSSProperties, ReactNode } from "react";

export type WorkItemData = {
  title: string;
  description: ReactNode;
  image: string;
  tags: string[];
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
    description:
      "Mix Streamer is a mobile first web application designed to deliver a seamless DJ audio and video mix streaming. It uses Google Drive as the media source. Built with Next.js and TypeScript, the app allows users to search across rich metadata, and enjoy uninterrupted playback through a persistent global player.",
    image: "/assets/images/mix-streamer.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    codeUrl: "https://github.com/DJ-MrJay/mix-streamer",
    liveUrl: "https://dj.mrjay.co.ke/",
  },
  {
    title: "Super Wheels Car Rentals",
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
    description: (
      <>
        A website for a brand marketing agency specializing in identity
        services. Leveraging my{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>{" "}
        expertise, I delivered a compelling, robust site in three days—a
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
    description: (
      <>
        I created a website for Neo Lite Energies, a leader in Oil and Gas.
        Leveraging my{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>{" "}
        expertise, I launched it in just two days—a professional CMS-based site
        the client can easily update.
      </>
    ),
    image: "/assets/images/neolite.jpg",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://neolite-energies.co.ke/",
  },
];
