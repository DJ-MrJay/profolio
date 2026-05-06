import { SOCIAL_LINKS } from "@/data/navigation";

export default function SocialLinks() {
  return (
    <div className="social-media flex gap-4 text-base text-lg">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
        >
          <i className={link.iconClassName} />
        </a>
      ))}
    </div>
  );
}
