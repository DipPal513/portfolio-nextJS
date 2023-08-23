"use client"
import AnimatedCursor from "react-animated-cursor"
import AboutMe from './Components/AboutMe'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Header from './Components/Header'
import DarkMode from './Components/DarkMode'
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <>
    <DarkMode />
    <AnimatedCursor 
      innerSize={8}
      outerSize={8}
      color='000, 00, 000'
      outerAlpha={0.2}
      innerScale={1}
      outerScale={5}
    />
      <Header />
      <Banner />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}
