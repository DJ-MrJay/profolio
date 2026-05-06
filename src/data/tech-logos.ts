export type TechLogo = {
  src: string;
  alt: string;
};

const withLightLogo = (logo: TechLogo): TechLogo => ({
  ...logo,
  src: logo.src.replace(".svg", "-light.svg"),
});

export const TECH_LOGOS_LIGHT: TechLogo[] = [
  { src: "/assets/brand-logos/Nextjs-logo.svg", alt: "Next.js" },
  { src: "/assets/brand-logos/JavaScript-logo.svg", alt: "JavaScript" },
  { src: "/assets/brand-logos/Typescript-logo.svg", alt: "TypeScript" },
  { src: "/assets/brand-logos/Ruby-On-Rails-logo.svg", alt: "Ruby on Rails" },
  { src: "/assets/brand-logos/HTML5-logo.svg", alt: "HTML5" },
  { src: "/assets/brand-logos/CSS3-logo.svg", alt: "CSS3" },
  { src: "/assets/brand-logos/Redux-logo.svg", alt: "Redux" },
  { src: "/assets/brand-logos/C++-logo.svg", alt: "C++" },
  { src: "/assets/brand-logos/React-icon.svg", alt: "React" },
  { src: "/assets/brand-logos/PHP-logo.svg", alt: "PHP" },
  { src: "/assets/brand-logos/Ruby-logo.svg", alt: "Ruby" },
  { src: "/assets/brand-logos/Webpack-logo.svg", alt: "Webpack" },
  { src: "/assets/brand-logos/Tailwind-CSS-logo.svg", alt: "Tailwind CSS" },
  { src: "/assets/brand-logos/Bootstrap-logo.svg", alt: "Bootstrap" },
  { src: "/assets/brand-logos/Expo-logo.svg", alt: "Expo" },
  { src: "/assets/brand-logos/Laravel-logo.svg", alt: "Laravel" },
  { src: "/assets/brand-logos/MySQL-logo.svg", alt: "MySQL" },
  { src: "/assets/brand-logos/Postgresql-logo.svg", alt: "PostgreSQL" },
  { src: "/assets/brand-logos/Oracle-logo.svg", alt: "Oracle" },
  { src: "/assets/brand-logos/Illustrator-icon.svg", alt: "Illustrator" },
  { src: "/assets/brand-logos/Photoshop-icon.svg", alt: "Photoshop" },
  { src: "/assets/brand-logos/InDesign-icon.svg", alt: "InDesign" },
  { src: "/assets/brand-logos/Premiere-Pro-icon.svg", alt: "Premiere Pro" },
  { src: "/assets/brand-logos/Figma-logo.svg", alt: "Figma" },
  { src: "/assets/brand-logos/Vegas-Pro-21-logo.svg", alt: "Vegas Pro" },
];

export const TECH_LOGOS_DARK = TECH_LOGOS_LIGHT.map(withLightLogo);
