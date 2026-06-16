import Navbar from "../components/Header";
import Hero from "../components/sections/Hero";
import Intro from "../components/sections/Intro";
import Work from "../components/sections/Work";
import Articles from "../components/sections/Articles";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
