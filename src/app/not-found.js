'use client'
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <motion.div
       initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8, delay:0.2}}

     className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">

      
      <div className="text-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-10 max-w-md w-full">

      
        <div className="text-6xl mb-4 animate-bounce">
          🧱
        </div>

       
        <h1 className="text-7xl font-extrabold text-white tracking-tight">
          404
        </h1>

       
        <p className="text-gray-700 mt-3 text-lg">
          Oops! This tile doesn’t exist.
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Maybe it got broken or moved somewhere else.
        </p>

       
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
        >
          🏠 Go Back Home
        </Link>

      </div>
    </motion.div>
  )
}