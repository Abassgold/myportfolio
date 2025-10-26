import { About } from "@/components/About";
import { BlogPreview } from "@/components/BlogPreview";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
export default function Page() {

  return (
    <>
      <main className="text-gray-500">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <BlogPreview />
      </main>
    </>
  );
}
