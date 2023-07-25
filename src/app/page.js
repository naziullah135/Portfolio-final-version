import NavBar from "@/components/Common/NavBar";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
