import Navbar from "../../components/Navbar";
import ButtonLink from "../../components/ButtonLink";
import Section from "../../components/Section";

export default function MainPage() {
  return (
    <main>
      <Navbar />

      <Section id="intro" title="Intro">
        <p>Here’s where you can highlight some introduction text.</p>
        <ButtonLink href="/about" label="Read More" />
      </Section>

      <Section id="projects" title="Projects">
        <p>Here’s where you can highlight some of your top projects.</p>
      </Section>

      <Section id="articles" title="Articles">
        <p>Coming soon: blog posts, write-ups, and more.</p>
      </Section>

      <Section id="contact" title="Contact">
        <p>Contact form goes here.</p>
      </Section>
    </main>
  );
}
