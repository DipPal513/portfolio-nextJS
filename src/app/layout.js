import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Head from 'next/head';
import { Inter } from 'next/font/google'
import { Suspense } from 'react';
import Loading from './loading';
const inter = Inter({
  weight:'400',
  subsets: ['latin'],
})

// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dip Pal',
  description:
    'Personal portfolio of Dip Pal. He is a website developer with experience of 2 years in both front-end and back-end.',
  link: {
    type: "fav"
  }
};

export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
        <body suppressHydrationWarning style={{ fontFamily: inter }}>
         <Suspense fallback={Loading}>
         <Header />
          {children} 
          <Footer />
          <SpeedInsights />
          <Analytics />
         </Suspense>
        </body>
      </html>
    </>
  );
}
