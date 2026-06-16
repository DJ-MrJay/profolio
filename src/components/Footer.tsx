import { Container } from "./Container";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] py-8">
      <Container>
        <div
          className="flex flex-wrap items-center justify-center gap-5 text-center md:justify-between"
          style={{ color: "var(--text-muted)" }}
        >
          <div className="text-sm">
            <p>Copyright 2015 - {year}. Designed and developed by Jonah Wambua.</p>
          </div>

          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
