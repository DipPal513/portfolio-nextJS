"use client"
import { Suspense, useState } from "react"

import About from './(root)/about/page'
import Contact from './(root)/contact/page'
import Skills from "./(root)/skills/page"

import Banner from "@/Components/Banner"
import Projects from "./(root)/projects/page"

import Loading from "./loading"
import { motion } from 'framer-motion';
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (

    // <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}}>
      <Suspense suspence={Loading}>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    // </motion.div>

  )


}
