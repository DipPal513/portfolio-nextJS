"use client"
import { useState } from "react"

import About from './(root)/about/page'
import Contact from './(root)/contact/page'
import Skills from "./(root)/skills/page"

import Banner from "@/Components/Banner"
import Projects from "./(root)/projects/page"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (

    <>


      <Banner />
      <About />
      <Projects />
      <Skills />
      <Contact />


    </>

  )


}
