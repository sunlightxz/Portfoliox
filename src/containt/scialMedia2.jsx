import React from 'react'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import { BsFacebook ,BsTwitter,BsLinkedin,BsGithub } from "react-icons/bs";

const scialMedia2 = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7 '>
        <a href="https://www.facebook.com/profile.php?id=100082099460454" className='hover:opacity-50 transition duration-500 '>
          <BsFacebook className='text-3xl ' />
        </a>
        <a href="https://twitter.com/AmineAsfar" className='hover:opacity-50 transition duration-500 '>
          <BsTwitter className='text-3xl ' />
        </a>
        <a href="https://www.linkedin.com/in/amine-asfar-1117011bb/" className='hover:opacity-50 transition duration-500'>
          <BsLinkedin className='text-3xl ' />
        </a>
        <a href="https://github.com/sunlightxz" className='hover:opacity-50 transition duration-500'>
          <BsGithub className='text-3xl ' />
        </a>
    </div>
  )
}

export default scialMedia2
