import React from 'react'
import ScialMedia2 from '../containt/scialMedia2'

const Footer = () => {
  return (
    <footer className='h-64 bg-darkBody pt-10 flex '>
        <div className="w-5/6 mx-auto flex sm:flex-row flex-col items-center justify-between ">
            <h1 className='font-montserrat text-3xl font-medium logo'>Amine</h1>
            <ScialMedia2/>
            <h1 className='font-poppins text-xl  font-medium '>Created by <span className='text-[#B84C73]'>SUNLIGHTXZ</span></h1>
        </div>
    </footer>
  )
}

export default Footer