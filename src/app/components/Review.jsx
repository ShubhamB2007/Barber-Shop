'use client'

import React, { useRef } from 'react'
import Head from './Head'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { IoMdStar } from "react-icons/io";
import { Testimonials } from '../data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {motion, useInView} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';

const ReviewVariants = {
  hidden:{
    opacity:0, x:-50
  },
  visible:(index)=>({
    opacity:1,x:0,
    transition:{delay:0.4  + index* 0.2,duration:0.4}
  })
}

const Review = () => {

   const title = 'Testimonials'
   const subtitle = 'What Clients Say About Us'

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='w-full lg:px-32 px-6 py-16 flex flex-col justify-center bg-[#1a1a1a]'>
        <Head title={title} subtitle={subtitle}/>
        {isMobile ? (
          <Slider {...settings}>
            {Testimonials.map((item, index) => (
              <div key={index} className="px-3 ml-5 py-5">
                <div className='w-72 h-52 rounded-xl bg-[#222222] border border-neutral-700 hover:border-yellow-700 hover:duration-300 flex flex-col px-4 py-4 relative cursor-default'>
                  <div className='w-full h-[80%] border-b border-b-neutral-700 flex flex-col gap-2 relative'>
                    <BiSolidQuoteAltLeft className='text-yellow-700 text-xl' />
                    <p className='w-full italic font-semibold'>{item.review}</p>
                    <BiSolidQuoteAltRight className='text-yellow-700 text-xl ml-[94%]' />
                  </div>
                  <div className='relative w-full h-[20%] flex items-center gap-3 pt-2'>
                    <div className='flex text-yellow-500'>
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </div>
                    <span className='w-1 h-8 bg-yellow-500 rounded-full'></span>
                    <p className='font-semibold'>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ):(
         <div ref={ref} className='w-full flex gap-16 pt-12 justify-center'>
          {Testimonials.map((item,index)=>(
            <motion.div key={index} 
            variants={ReviewVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} custom={index} whileHover={{scale:1.05, transition:{duration:0.1}}}
            className='w-96 h-72 rounded-xl bg-[#222222] border border-neutral-700 hover:border-yellow-700 hover:duration-300 flex flex-col px-4 py-4 relative cursor-default'>
               <div className='w-full h-[80%] border-b border-b-neutral-700 flex flex-col gap-2 relative'>
                  <BiSolidQuoteAltLeft className='text-yellow-700 text-xl'/>
                  <p className='w-full italic font-semibold'>{item.review}</p>
                  <BiSolidQuoteAltRight className='text-yellow-700 text-xl ml-[94%]'/>
               </div>
               <div className='relative w-full h-[20%] flex items-center gap-3 pt-2'>
                   <div className='flex text-yellow-500'>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                   </div>
                   <span className='w-1 h-8 bg-yellow-500 rounded-full'></span>
                   <p className='font-semibold'>{item.name}</p>
               </div> 
           </motion.div>
          ))} 
        </div>
        )}
     </div>
  )
}

export default Review