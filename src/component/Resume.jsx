import React, { useState } from 'react'
import LineGradient from '../containt/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { RiBracesLine ,RiDatabase2Line,RiArrowDownSLine} from "react-icons/ri";


const Resume = () => {
  const isAboveMediumSecreens = useMediaQuery("(min-width:1060px)")
  const [ftool, setFtool] = useState(true);
  const [btool, setBtool] = useState(false);

  return (
  <section id='resume' className='pt-48 pb-48'>
    <motion.div
        className='mx-auto text-center'
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount: 0.5}}
         transition= {{duration:0.5}}
         variants = {{
           hidden :{opacity:0 ,y :-50},
           visible : {opacity :1 , y : 0}, 
         }}
    >
      <div className="">
        <p className='font-poppins font-semibold text-4xl'>
          MY <span className='text-[#B84C73]'>SKILLS</span>
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width='w-1/3'/>
        </div>
      </div>
      <p className='mt-10 mb-7 w-full text-xl font-light'>I am a frontend web developer. I can provide clean code and pixel perfect design.</p>
       
    </motion.div>  
    
    <motion.div
        className='mx-auto text-center'
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount: 0.5}}
         transition= {{delay:0.2 , duration:0.5}}
         variants = {{
           hidden :{opacity:0 ,x :-50},
           visible : {opacity :1 , x: 0}, 
         }}
    >
    <div className="flex sm:flex-row flex-col gap-16 justify-center mb-5 cursor-pointer">
       <div className="">
        {/* skill header */}
        <div 
          className="flex items-center justify-between gap-3 px-4 py-3 border-2 border-[#5E53A6] hover:shadow-[#8c12f0] hover:shadow-md transition duration-500 mb-6"
          onClick={()=>setFtool(!ftool)}
        >
          <RiBracesLine className='text-[#777AD4] text-4xl'/>
          <div className="text-left">
              <p className='font-poppins text-xl'>Frontend Developer</p>
              <span className='text-sm text-[#C1C0C0]'>More then 3 years</span>
          </div>
          <RiArrowDownSLine className='text-3xl text-[#777AD4] hover:rotate-45 transition duration-100'/>
        </div>
        {/* skill content */}
        { ftool &&
        <div className="flex flex-col">

          {/* skill item */}
         <div className="mb-4">
          {/* skills-title */}
          <div className="flex justify-between mb-2">
            <h1>HTML</h1>
            <p className='text-gray-400'>95%</p>
          </div>
          {/* skills-bar */}
          <div className="h-2 rounded-md bg-[#0C3360]">
            <span className='h-2 rounded-md block bg-[#777AD4] w-11/12'></span>
          </div>
         </div>

          {/* skill item */}
          <div className="mb-4">
          {/* skills-title */}
          <div className="flex justify-between mb-2">
            <h1>CSS</h1>
            <p className='text-gray-400'>80%</p>
          </div>
          {/* skills-bar */}
          <div className="h-2 rounded-md bg-[#0C3360]">
            <span className='h-2 rounded-md block bg-[#777AD4] w-10/12'></span>
          </div>
         </div>

         <div className="mb-4">
          {/* skills-title */}
          <div className="flex justify-between mb-2">
            <h1>Javascript</h1>
            <p className='text-gray-400'>75%</p>
          </div>
          {/* skills-bar */}
          <div className="h-2 rounded-md bg-[#0C3360]">
            <span className='h-2 rounded-md block bg-[#777AD4] w-8/12'></span>
          </div>
         </div>

         <div className="mb-4">
          {/* skills-title */}
          <div className="flex justify-between mb-2">
            <h1>React</h1>
            <p className='text-gray-400'>80%</p>
          </div>
          {/* skills-bar */}
          <div className="h-2 rounded-md bg-[#0C3360]">
            <span className='h-2 rounded-md block bg-[#777AD4] w-10/12'></span>
          </div>
         </div>
        </div>
        }
      </div>    
      <div className="">
        {/* skill header */}
        <div 
          className="flex items-center justify-between gap-3 px-4 py-3 border-2 border-[#5E53A6] hover:shadow-[#8c12f0] hover:shadow-md transition duration-500 mb-6"
          onClick={()=>setBtool(!btool)}
        >
         <RiDatabase2Line className='text-[#777AD4] text-4xl'/>
         <div className="text-left">
            <p className='font-poppins text-xl'>Backend Developer</p>
            <span className='text-sm text-[#C1C0C0]'>More then 3 years</span>
         </div>
         <RiArrowDownSLine className='text-2xl text-[#777AD4]'/>
        </div>  
        {/* skill content */}
        { btool &&
        <div className="flex flex-col">

          {/* skill item */}
         <div className="mb-4">
          {/* skills-title */}
          <div className="flex justify-between mb-2">
            <h1>HTML</h1>
            <p className='text-gray-400'>95%</p>
          </div>
          {/* skills-bar */}
          <div className="h-2 rounded-md bg-[#0C3360]">
            <span className='h-2 rounded-md block bg-[#777AD4] w-11/12'></span>
          </div>
         </div>

          {/* skill item */}
          <div className="mb-4">
          {/* skills-title */}
          <div className="flex justify-between mb-2">
            <h1>CSS</h1>
            <p className='text-gray-400'>80%</p>
          </div>
          {/* skills-bar */}
          <div className="h-2 rounded-md bg-[#0C3360]">
            <span className='h-2 rounded-md block bg-[#777AD4] w-10/12'></span>
          </div>
         </div>

         <div className="mb-4">
          {/* skills-title */}
          <div className="flex justify-between mb-2">
            <h1>Javascript</h1>
            <p className='text-gray-400'>75%</p>
          </div>
          {/* skills-bar */}
          <div className="h-2 rounded-md bg-[#0C3360]">
            <span className='h-2 rounded-md block bg-[#777AD4] w-8/12'></span>
          </div>
         </div>

         <div className="mb-4">
          {/* skills-title */}
          <div className="flex justify-between mb-2">
            <h1>React</h1>
            <p className='text-gray-400'>80%</p>
          </div>
          {/* skills-bar */}
          <div className="h-2 rounded-md bg-[#0C3360]">
            <span className='h-2 rounded-md block bg-[#777AD4] w-10/12'></span>
          </div>
         </div>
        </div>
        }
      </div>    
    
         
    </div> 
      
    </motion.div>  
    
  </section>
  )
}

export default Resume