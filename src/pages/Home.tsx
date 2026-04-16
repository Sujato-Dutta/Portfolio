import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}
