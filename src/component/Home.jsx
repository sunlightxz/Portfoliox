import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import profile from '../assets/profile.png'
import SocialMediaIcons from '../containt/SocialMediaIcons'

const Home = ({setSelectedPage}) => {
  const isAboveMediumSecreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumSecreens ? (
          <div className="relative ml-20 z-0 profile">
            <img className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-[600px]' src={profile} alt="profile" />
          </div>
        ) :(
            <img className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-[600px]' src={profile} alt="profile" />
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32 sm:pl-11">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true ,amount: 0.5}}
            transition= {{duration:0.5}}
            variants = {{
              hidden :{opacity:0 ,x :-50},
              visible : {opacity :1 , x : 0}, 
            }}
          >
            <h3 class="text-3xl  text-[#FFA31F] ">Hello,</h3>
            <p className='text-6xl mt-4 font-poppins z-10 text-center md:text-start dark:text-black '>
              I'm {""}
              <span
                className="xs:relative xs:text-slate-900 dark:text-white xs:font-semibold z-20 xs:before:content-brush
                  before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >Amine
              </span>
            </p>
            <p className="mt-10 mb-7 text-md text-center dark:text-black md:text-start">I'm a Web Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
           
          </motion.div>

          <motion.div className='flex md:justify-start justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true ,amount: 0.5}}
            transition= {{delay:0.2, duration:0.5}}
            variants = {{
              hidden :{opacity:0 ,x :-50},
              visible : {opacity :1 , x : 0}, 
            }}
          >
            <AnchorLink 
             className='bg-gradient-rainblue cursor-pointer text-slate-900 rounded-sm py-3 px-7 font-semibold 
             hover:bg-orange-600 hover:text-white dark:text-white dark:hover:text-black transition duration-500'
             onClick={()=>setSelectedPage("contact")}
             >
              Contact Me
            </AnchorLink>
            <AnchorLink 
             className='bg-gradient-rainblue cursor-pointer py-0.5 pr-0.5 rounded-r-sm'
             onClick={()=>setSelectedPage("contact")}
             >
              <div className="bg-bgBody dark:bg-white dark:text-black font-poppins px-10 hover:text-blue-400 transition duration-500 w-full h-full flex items-center justify-center">
                Let's talk
              </div>
            </AnchorLink>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once:true ,amount: 0.5}}
            transition= {{delay:0.4, duration:0.5}}
            variants = {{
              hidden :{opacity:0 ,x :-50},
              visible : {opacity :1 , x : 0}, 
            }}>
            <SocialMediaIcons/>
          </motion.div>
      </div>
    </section>
  )
}

export default Home