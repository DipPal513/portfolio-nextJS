"use client"
import { Suspense, useState } from "react"
import AnimatedCursor from "react-animated-cursor"
import Banner from './Components/Banner'
import DarkMode from './Components/DarkMode'
import Footer from "./Components/Footer"
import Header from './Header'
import Loading from "./Components/Loading"
import Projects from "./projects/page"
import About from './about/page'
import Contact from './contact/page'
import { Sidebar } from "./Admin/Sidebar/Sidebar"

export default function Home() {

  return (

    <>
      <DarkMode />
      {/* <Sidebar /> */}
      <AnimatedCursor
        innerSize={8}
        outerSize={13}
        color='000, 00, 000'
        outerAlpha={0.2}
        innerScale={1}
        outerScale={5}
      />
        <Header />
        <Banner />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>

  )


}
