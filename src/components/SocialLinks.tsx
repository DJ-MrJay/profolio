import { SOCIAL_LINKS } from "@/data/navigation";
import { BookOpen, Github, Linkedin, Twitter } from "lucide-react";

const SOCIAL_ICONS = {
  LinkedIn: Linkedin,
  Github,
  Twitter,
  Medium: BookOpen,
} as const;

export default function SocialLinks() {
  return (
    <div className="social-media flex items-center gap-2">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
          aria-label={link.title}
          className="inline-flex size-11 items-center justify-center rounded-[8px] border border-[var(--border-color)] text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent-color)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-color)]"
        >
          {(() => {
            const Icon = SOCIAL_ICONS[link.title];
            return <Icon aria-hidden="true" size={18} strokeWidth={1.8} />;
          })()}
        </a>
      ))}
    </div>
  );
}
