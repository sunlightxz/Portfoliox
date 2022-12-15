import React from 'react'
import LineGradient from '../containt/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

const About = ({setSelectedPage}) => {
  const isAboveMediumSecreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id='about' className='pt-10 pb-24'>
      <div className="">
        <motion.div
        className=''
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount: 0.5}}
         transition= {{duration:0.5}}
         variants = {{
           hidden :{opacity:0 ,x :-50},
           visible : {opacity :1 , x : 0}, 
         }}
        >
          <p className='font-poppins font-semibold text-4xl mb-5'>
          ABOUT <span className='text-[#B84C73]'>ME</span>
          </p>
          <LineGradient width='w-[120px]'/>
          {/* <h1 className='mt-10 mb-7 text-3xl'>I am <span className='text-[#FFB400] font-semibold'>Amine Asfar</span></h1>
          <p className='w-full'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
        */}
        </motion.div>
        
        <div className="flex justify-between mt-5 md:flex-row flex-col ">
          <motion.div
          className=''
          initial="hidden"
          whileInView="visible"
          viewport={{once:true ,amount: 0.5}}
          transition= {{ duration:0.5}}
          variants = {{
            hidden :{opacity:0 ,x :-50},
            visible : {opacity :1 , x : 0}, 
          }}
          >
          <div class="left-about py-4">
          <div class="info-item py-3 md:border-b-[#39557a] md:border-b-2">
              <p>Full Name : <span className='text-gray-400'>Amine Asfar</span></p>
            </div>
            <div class="info-item py-3 md:border-b-[#39557a] md:border-b-2">
              <p>Age : <span className='text-gray-400'>23 Years</span></p>
            </div>
            <div class="info-item py-3 md:border-b-[#39557a] md:border-b-2">
              <p>Nationality : <span className='text-gray-400'>Moroccan</span></p>
            </div>
            <div class="info-item py-3 md:border-b-[#39557a] md:border-b-2">
              <p>Language : <span className='text-gray-400'>Arabic,French,English</span></p>
            </div> 
            <div class="info-item py-3 md:border-b-[#39557a] md:border-b-2">
              <p>Adresse : <span className='text-gray-400'>999 Sidimoumen ,Casalanca</span></p>
            </div>
            <div class="info-item py-3 mb-9 md:border-b-[#39557a] md:border-b-2">
              <p>Freelance : <span className='text-gray-400'>Available</span></p>
            </div>

              <AnchorLink 
              className='bg-gradient-rainblue cursor-pointer text-slate-900 rounded-sm py-3 px-7 font-semibold 
              hover:bg-orange-600 hover:text-white transition duration-500'
              onClick={()=>setSelectedPage("contact")}
              >
                Download Cv
              </AnchorLink>
            </div>    
          </motion.div> 
          
        {isAboveMediumSecreens ? (
           <div class="right-about py-4 ">
           <div class="about-item">
             <div class="abt-text">
               <p class="lrg-text">3+</p>
               <p class="small-text">PROJECTS <br />COMPLETED</p>
              </div>
           </div>
           <div class="about-item">
             <div class="abt-text">
               <p class="lrg-text">3+</p>
               <p class="small-text">PROJECTS <br />COMPLETED</p>
              </div>
           </div>
           <div class="about-item">
             <div class="abt-text">
               <p class="lrg-text">3+</p>
               <p class="small-text">PROJECTS <br />COMPLETED</p>
              </div>
           </div>
           <div class="about-item">
             <div class="abt-text">
               <p class="lrg-text">3+</p>
               <p class="small-text">PROJECTS <br />COMPLETED</p>
              </div>
           </div>
           </div> 
        ) : (
          <div className=""></div>
        )}
         

        </div>

      </div>
    </section>
  )
}

export default About