'use client'

import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-scroll'
import { FaGripHorizontal } from "react-icons/fa";

const Navbar = () => {

  const [show, setShow] = useState(false)

  const Nav = [
    {name:'About', link:'#About'},
    {name:'Services', link:'#Services'},
    {name:'Testimonials', link:'#Testimonials'},
    {name:'Contact', link:'#Contact'},
  ]

  const isMobile = useMediaQuery({query: '(max-width: 768px)'}) 

  return (
    <div className='w-full h-16 lg:px-32 px-6 flex justify-between items-center text-white absolute top-0'>
        <p className='text-yellow-500 text-2xl font-bold'>Fama Barber</p>
        {isMobile ? (
          <>
           <FaGripHorizontal className='text-xl' onClick={()=>setShow(!show)} />
            {show &&
               <div className={`w-36 h-screen bg-yellow-500 z-50 flex flex-col gap-4 absolute transition-all ${show ? 'left-[62%]' : 'left-[100%]'} top-6 rounded-l-xl py-4 px-2 z-50`}>
                   <FaGripHorizontal className='text-xl' onClick={()=>setShow(!show)} />
                    {Nav.map((item,index)=>(
                    <Link to={item.link.substring(1)} smooth={true} duration={500} key={index}>
                    <p className='cursor-pointer link-underline border-b'>{item.name}</p>
                    </Link>
                  ))}
               </div> 
            }
           </>
         ):(
          <div className='flex gap-12 font-semibold'>
          {Nav.map((item,index)=>(
            <Link to={item.link.substring(1)} smooth={true} duration={500} key={index}>
            <p className='cursor-pointer link-underline'>{item.name}</p>
            </Link>
          ))}
        </div>
        )}
    </div>
  )
}  

export default Navbar