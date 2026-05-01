'use client'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <motion.div
       initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8, delay:0.2}}

     className="w-full container mx-auto bg-black text-white overflow-hidden py-2">
      
      <div className="whitespace-nowrap flex animate-scroll gap-10 text-sm font-medium">
        
        <span>🆕 New Arrivals: Ceramic Blue Tile</span>
        <span>⭐ Weekly Feature: Modern Geometric Patterns</span>
        <span>👥 Join the Community</span>
        <span>🔥 Premium Tile Collection Now Available</span>
        <span>🏠 Upgrade Your Home with Style</span>

     
        <span>🆕 New Arrivals: Ceramic Blue Tile</span>
        <span>⭐ Weekly Feature: Modern Geometric Patterns</span>
        <span>👥 Join the Community</span>
        <span>🔥 Premium Tile Collection Now Available</span>
        <span>🏠 Upgrade Your Home with Style</span>

      </div>
    </motion.div>
  )
}

export default Marquee