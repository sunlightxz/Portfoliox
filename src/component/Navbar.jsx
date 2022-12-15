import React, { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu from '../assets/menu.png'
import close from '../assets/close.png'
const Link =({page,selectedPage,setSelectedPage})=> {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow-300" : ""}
      hover:text-yellow-300 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={()=> setSelectedPage(lowerCasePage)}
      >
    {page}
    </AnchorLink>
  )
}
const Navbar = ({isTopofPage,selectedPage,setSelectedPage}) => {
  const [menuToggle,setMenuToggle]=useState(false);
  const isAboveSmallSecreens = useMediaQuery("(min-width:768px)")
  const navbarBg = isTopofPage ? "" : "bg-darkBody";
  return (
    <nav className={`${navbarBg} w-full py-6 fixed z-40 top-0`}>
      <div className="flex justify-between items-center mx-auto w-5/6">
        <h1 className='font-montserrat text-3xl font-medium logo'>Amine</h1>
        
        {isAboveSmallSecreens ? (
          <div className="flex justify-between items-center gap-16 text-md font-montserrat font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Resume" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Portfolio" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

          </div>
        ): 
        (
          <button className='rounded-full bg-red-400 py-2 flex items-center justify-center'
                  onClick={()=>setMenuToggle(!menuToggle)}>
            <img src={menu} className="w-3/4" alt="menu" />
          </button>
        )
        }

        {!isAboveSmallSecreens && menuToggle && (
          <div className="fixed right-0 bottom-0 h-full bg-[#044d71] w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={()=>setMenuToggle(!menuToggle)}>
                <img src={close} className="w-3/4" alt="menu" />
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Resume" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Portfolio" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
          </div>
        )
        }
      </div>
    </nav>
  )
}

export default Navbar