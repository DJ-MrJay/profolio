import { Container } from "./Container";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10">
      <Container>
        <div
          className="flex flex-wrap gap-4 justify-center md:justify-between items-center text-center"
          style={{ color: "var(--shade-500)" }}
        >
          {/* Left Text */}
          <div className="text-sm">
            <p>
              ©2015 - {year}. Developed with{" "}
              <span style={{ color: "magenta" }}>♥</span> by yours truly!
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
