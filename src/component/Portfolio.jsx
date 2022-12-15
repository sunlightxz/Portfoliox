import React, { useState } from 'react'
import LineGradient from '../containt/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

const container = {
  hidden :{},
  visible : {
    transition : {staggerChildren : 0.2}
  }, 
}
const projectVal ={
  hidden :{opacity:0 ,scale:0.8 },
  visible : {opacity:1 ,scale:1 }, 
}

const Project = ({title}) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div
      className='relative' variants={projectVal} >
        <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
          bg-gray-600 z-30  flex flex-col justify-center items-center text-center p-16 text-white">
          <p className='text-2xl font-playfair'>{title}</p>
          <p className="mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque voluptates minima.
          </p>
        </div>
        <img src={require(`../assets/${projectTitle}.png`)} alt= {projectTitle} />
    </motion.div>
  )
}
const Portfolio = () => {
  
  return (
    <section id='portfolio' className='pt-48 pb-48'>
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
            PORT<span className='text-[#B84C73]'>FOLIO</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width='w-1/3'/>
          </div>
        </div>
        <p className='mt-10 mb-10 w-full text-xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum?</p>    
      </motion.div>  

      <div className="flex justify-center">
      <motion.div
      className='sm:grid sm:grid-cols-3'
      initial="hidden"
      whileInView="visible"
      viewport={{once:true ,amount: 0.5}}
      transition= {{duration:0.5}}
      variants = {container}
      >
        <div className="flex justify-center text-center items-center p-10 bg-[#B84C73] max-w-[478px] max-h-[478px] text-2xl font-poppins font-semibold">
          BEAUTIFUL USER INTERFACES
        </div>
        <Project title="Project 1"/>
        <Project title="Project 2"/>
        <Project title="Project 3"/>
        <Project title="Project 4"/>
        <Project title="Project 5"/>
      </motion.div>
      </div>
    </section>
  )
}

export default Portfolio