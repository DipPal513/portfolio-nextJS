// pages/404.js
"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import PrimaryButton from '@/Components/PrimaryButton';
import './styles/notFound.css'
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen notFound">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-white-800 mb-6">404</h1>
        <p className="text-xl text-white-600 mb-8">Oops! Page not found.</p>
      <PrimaryButton text="back home" link="/" />
      </motion.div>
    </div>
  );
};

export default NotFound;
