import React from 'react'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a href="#" className='hover:opacity-50 transition duration-500'>
            <img src={twitter} alt="" />
        </a>
        <a href="#" className='hover:opacity-50 transition duration-500'>
            <img src={facebook} alt="" />
        </a>
        <a href="#" className='hover:opacity-50 transition duration-500'>
            <img src={linkedin} alt="" />
        </a>
    </div>
  )
}

export default SocialMediaIcons