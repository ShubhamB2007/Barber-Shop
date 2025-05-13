'use client'

import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import {motion} from 'framer-motion'

const HeroVariants = {
  hidden:{
    opacity:0, y:50
  },
  visible:{
    opacity:1,y:0,
    transition:{delay:0.2,duration:0.4}
  }
}

const Hero = () => {
  return (
    <div className='w-full h-screen overflow-hidden flex justify-center items-center'>
        <Image src='/background.svg' alt='image'fill className='object-cover w-full h- brightness-35 absolute'  />
        <Navbar/>
        <motion.div 
        variants={HeroVariants} initial='hidden' animate='visible'
        className='flex flex-col lg:gap-6 gap-3 items-center z-40'>
           <p className='lg:text-6xl text-xl font-serif font-bold'>Look Different With Us</p>
           <p className='text-center font-semibold text-sm lg:text-lg lg:w-[600px] w-56'>We always offer best quality and we are ready to deal with your highest expectations. Are You looking for quality? You found it!</p>
           <button className='lg:px-8 px-4 py-2 lg:py-4 rounded-xl bg-yellow-500 font-semibold lg:text-lg text-base cursor-pointer hover:bg-yellow-600 hover:duration-500'>Make An Appointment</button>
        </motion.div>
    </div>
  )
}

export default Hero