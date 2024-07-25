import About from './(root)/about/page'
import Contact from './(root)/contact/page'
import Skills from "./(root)/skills/page"
import Banner from "@/Components/Banner"
import Projects from "./(root)/projects/page"
import JobExperience from './(root)/experience/page'
export default function Home() {
  return (
    <main className="main">
      <Banner />
      <About />
      <JobExperience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
