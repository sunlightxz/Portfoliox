import React, { useState } from 'react'
import LineGradient from '../containt/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { useForm } from "react-hook-form";
import contactImg from '../assets/contactImg.png'

const Contact = () => {
  const { register,trigger, formState: { errors } } = useForm();
  const onSubmit = async(e)=> {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id='contact' className='py-48'>
       <motion.div
        className='flex justify-end w-full'
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount: 0.5}}
         transition= {{duration:0.5}}
         variants = {{
           hidden :{opacity:0 ,x :-50},
           visible : {opacity :1 , x : 0}, 
         }}
    >
      <div className="">
        <p className='font-poppins font-semibold text-4xl mb-5 text-[#B84C73] '>
          CONTACT <span className='text-white  dark:text-black'>ME</span>
        </p>
        <div className="flex md:justify-end my-5">
          <LineGradient width='w-2/4 mx-auto'/>
        </div>
      </div>       
    </motion.div>  
    
    <div className="md:flex md:justify-between gap-16 mt-8 ">
    <motion.div
        className='basis-1/2 flex justify-center'
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount: 0.5}}
         transition= {{delay:0.2, duration:0.5}}
         variants = {{
           hidden :{opacity:0 ,y :-50},
           visible : {opacity :1 , y : 0}, 
         }}
    >
        <img src={contactImg} alt="Contact Img" />
    </motion.div>  

    <motion.div
        className='basis-1/2 mt-10 md:mt-0'
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount: 0.5}}
         transition= {{delay:0.2, duration:0.5}}
         variants = {{
           hidden :{opacity:0 ,y :-50},
           visible : {opacity :1 , y : 0}, 
         }}
    >
      <form 
      target='_blank'
      onSubmit={onSubmit}
      method="POST"
      action="https://formsubmit.co/amineasfar101@gmail.com">
        <input 
          className='w-full text-blue-900 border-[#5E53A6]  dark:bg-black dark:text-white dark:placeholder-white hover:shadow-[#6383b1] hover:shadow-md transition duration-500 font-semibold rounded-md  placeholder-blue-900  p-3' 
          type="text" 
          placeholder='NAME' 
          id="" {...register("name",{required:true ,maxLength:100,})}
        />
        {errors.name && (
          <span className='text-red-400 mt-1'>
            {errors.name.type === 'required' && 'This field is required.'}
            {errors.name.type === 'maxlength' && 'Max Length is 100 char.'}
          </span>
        )}
        <input 
          className='w-full text-blue-900 border-[#5E53A6] dark:bg-black dark:text-white dark:placeholder-white hover:shadow-[#6383b1] hover:shadow-md transition duration-500 font-semibold placeholder-blue-900 rounded-md  p-3 mt-5' 
          type="text" 
          placeholder='EMAIL' 
          id="" {...register("email",{required:true ,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}
        />
      {errors.email && (
          <span className='text-red-400 mt-1'>
            {errors.email.type === 'required' && 'This field is required.'}
            {errors.email.type === 'pattern' && 'Invalid email adress'}
          </span>
      )}
      
        <textarea 
          className='w-full dark:bg-black dark:text-white dark:placeholder-white text-blue-900 border-[#5E53A6] hover:shadow-[#6383b1] hover:shadow-md transition duration-500 font-semibold rounded-md  placeholder-blue-900 p-3 mt-5' 
          type="text" 
          placeholder='MESSAGE' 
          rows="4"
          cols="50"
          id="" {...register("message",{required:true ,maxLength:2000,})}
        />
      {errors.message && (
          <span className='text-red-400 mt-1'>
            {errors.message.type === 'required' && 'This field is required.'}
            {errors.message.type === 'maxlength' && 'Max Length is 2000 char.'}
          </span>
      )}
      <button className= 'mt-5 bg-gradient-rainblue cursor-pointer rounded-md dark:text-white dark:hover:text-black text-slate-900 py-3 px-7 font-semibold hover:bg-orange-600 hover:text-white transition duration-500'>
       SEND ME A MESSAGE
      </button>
      </form>
    </motion.div>  
    </div>
    
    </section>
  )
}

export default Contact