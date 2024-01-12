"use client";
import { Suspense } from "react"

import About from './(root)/about/page'
import Contact from './(root)/contact/page'
import Skills from "./(root)/skills/page"

import Banner from "@/Components/Banner"
import Projects from "./(root)/projects/page"

import Loading from "./loading"
import { motion } from 'framer-motion';
import Header from "@/Components/Header"
export default function Home() {
  return (

    <div className="home">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    // </motion.div>

  )


}
