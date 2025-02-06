import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Anatomy } from "./components/anatomy"
import { LifeCycle } from "./components/life-cycle"
import { Research } from "./components/research"
import { InteractiveNematode } from "./components/interactive-nematode"
import { FunFacts } from "./components/fun-facts"
import { Publications } from "./components/publications"
import { Gallery } from "./components/gallery"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Anatomy />
        <LifeCycle />
        <Research />
        <InteractiveNematode />
        <FunFacts />
        <Publications />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

