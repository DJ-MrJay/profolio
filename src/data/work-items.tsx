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
    liveUrl: "https://jonah-profolio.vercel.app/",
    reverse: true,
  },
  {
    title: "Mix Streamer",
    description:
      "Mix Streamer is a mobile first web application designed to deliver a seamless DJ mix streaming experience. Instead of relying on third party streaming APIs, it uses Google Drive as the audio source. Built with Next.js and TypeScript, the platform allows users to browse curated mixes, search across rich metadata, and enjoy uninterrupted playback through a persistent global player.",
    image: "/assets/images/mix-streamer.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    codeUrl: "https://github.com/DJ-MrJay/mix-streamer",
    liveUrl: "https://mix-streamer.vercel.app/",
  },
  {
    title: "Super Wheels Car Rentals",
    description: (
      <>
        A dynamic web application built with a React front-end and a Ruby on
        Rails back-end, streamlining the process of scheduling car test drives.
        Developed as part of a collaborative effort at{" "}
        <InlineExternalLink href="https://www.microverse.org">
          Microverse
        </InlineExternalLink>
        , the project features a robust Rails API that provides endpoints for
        managing cars, allowing users to create, retrieve, update, and delete
        listings, as well as handling reservations and user authentication.
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
        This Ruby on Rails budgeting app is a powerful mobile tool designed to
        help users take control of their finances. It allows seamless
        transaction management, enabling users to add expenses, categorize
        spending, and gain valuable insights into their financial habits. I
        developed this application as part of my Remote Full Stack Web
        Development Program at{" "}
        <InlineExternalLink href="https://www.microverse.org">
          Microverse
        </InlineExternalLink>
        , combining clean functionality with intuitive design to create a
        practical solution for everyday budgeting.
      </>
    ),
    image: "/assets/images/money-matters.png",
    tags: ["Ruby", "HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/DJ-MrJay/Money-Matters",
    liveUrl: "https://money-matters-p0pp.onrender.com/",
  },
  {
    title: "Blog App",
    description:
      "A dynamic Ruby on Rails platform that empowers users to create, engage with, and interact through posts. With features like commenting and liking, it fosters a community-driven space for sharing ideas. I developed this application independently as part of my Remote Full Stack Web Development Program at Microverse, honing my skills in building robust, user-friendly web applications from the ground up.",
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
        An interactive web application designed to organize and manage your
        personal book collection with ease. Built with React and Redux, the app
        allows users to dynamically display their book lists while seamlessly
        adding or removing titles. I developed this project independently as
        part of my Remote Full Stack Web Development Program at{" "}
        <InlineExternalLink href="https://www.microverse.org">
          Microverse
        </InlineExternalLink>
        , refining my skills in state management and responsive front-end
        development.
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
        Leveraging my expertise in{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>{" "}
        development, I created an elegant and functional platform that
        highlights SJZ Flowers&apos; diverse catalogue of fresh-cut flowers,
        export services, and sustainable farming practices. The website features
        seamless navigation, stunning floral imagery, and responsive design to
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
        A website for an innovative brand marketing agency specializing in
        identity services. Drawing on my deep expertise in{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>{" "}
        development, I delivered a visually compelling and functionally robust
        website within an impressive three-day timeframe. The result is a
        polished online presence that effectively showcases the agency&apos;s
        services and portfolio.
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
        I had the privilege of creating a website for Neo Lite Energies, a
        renowned leader in the Oil and Gas industry. Leveraging my deep
        expertise in{" "}
        <InlineExternalLink href="https://www.wordpress.com">
          WordPress
        </InlineExternalLink>
        , I successfully developed and launched the website within just two
        days. The result was a professional CMS-based website that is easy for
        the client to update and manage.
      </>
    ),
    image: "/assets/images/neolite.jpg",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://neolite-energies.co.ke/",
  },
];
