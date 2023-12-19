import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dip Pal',
  description: 'Personal portfolio of Dip Pal. He is a website developer with experience of 2 years in both front-end and back-end.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
