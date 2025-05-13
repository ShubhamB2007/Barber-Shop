'use client'

import React, { useRef } from 'react'
import Head from './Head'
import Image from 'next/image'
import {motion, useInView} from 'framer-motion'

const AboutVariants1 = {
  hidden:{
    opacity:0, x:-50
  },
  visible:{
    opacity:1,x:0,
    transition:{delay:0.4,duration:0.4}
  }
}
const AboutVariants2 = {
  hidden:{
    opacity:0, x:50
  },
  visible:{
    opacity:1,x:0,
    transition:{delay:0.4,duration:0.4}
  }
}

const About = () => {

  const title = 'About Us'
  const subtitle = 'About Fama Barbershop'

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='w-full lg:px-32 px-6 py-16 flex flex-col justify-center bg-[#1a1a1a]'>
        <Head title={title} subtitle={subtitle} />
        <div ref={ref} className='w-full justify-between flex flex-col lg:flex-row pt-10 gap-5 lg:gap-0 lg:px-32 items-center'>
            <motion.p 
            variants={AboutVariants1} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
            className='lg:w-96 text-xl text-neutral-400'>
               Established in 2018, Fama Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment. <br />
               We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
            </motion.p>
            <motion.div variants={AboutVariants2} initial='hidden' animate={isInView ? 'visible' : 'hidden'}>
            <Image src='/barber.svg' alt='image' width={400} height={100} className='border-2 rounded-xl border-yellow-500'/>
            </motion.div>
        </div>
    </div>
  )
}

export default About