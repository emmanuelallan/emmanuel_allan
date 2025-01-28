import { Header } from "@/components/common/header"
import Hero from "@/components/sections/hero"
import HeroDotsImage from "@/assets/images/bgs/hero_dots.svg"
import Navigation from "@/components/common/navigation"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Articles from "@/components/sections/articles"
import Footer from "@/components/common/footer"

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <section className="relative bg-primary min-h-screen flex flex-col rounded-b-3xl">
        <div
          className="flex-1 relative rounded-b-[6.25rem] bg-background"
          style={{ backgroundImage: `url(${HeroDotsImage.src})` }}
        >
          <Header />

          <Hero />
        </div>

        <div className="mt-auto">
          <Navigation />
        </div>
      </section>

      <About />
      <Projects />
      <Experience />
      <Articles />

      <Footer />
    </main>
  )
}

