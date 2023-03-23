import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Resume from "./component/Resume";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import DotGroup from "./component/DotGroup";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from './containt/LineGradient'
import Footer from "./component/Footer";
import { BsMoonStarsFill } from "react-icons/bs";
imp
function App() {
  const [selectedPage,setSelectedPage]=useState('home')
  const isAboveMediumSecreens = useMediaQuery("(min-width:1060px)")
  const [isTopofPage,setisTopofPage]=useState(true)
  const [darkMode,setdarkMode]=useState(false)
  useEffect(()=>{
    const handleScroll =()=> {
      if(window.scrollY === 0) setisTopofPage(true);
      if(window.scrollY !== 0) setisTopofPage(false);

    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])
  return (
   // <div className={`App bg-bgBody`}>
    <div className={`App ${darkMode ? "dark" :""}  relative `}> 
    <div className="bg-bgBody dark:bg-white">
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        isTopofPage = {isTopofPage} 
        darkMode ={darkMode} setdarkMode ={setdarkMode}
      />
      {darkMode ? (
        <BsMoonStarsFill 
        onClick={()=>setdarkMode(!darkMode)}
        className='fixed cursor-pointer text-2xl  top-24 right-16 text-black'
      />
      
      ) :
      (
      <BsMoonStarsFill 
        onClick={()=>setdarkMode(!darkMode)}
        className='fixed cursor-pointer text-2xl top-24 right-16 '
      />    
      )}
      
        
      <div className="w-5/6 mx-auto md:h-full"></div>  
      {isAboveMediumSecreens && (
        <DotGroup  
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage} 
        />
      )}
      <Home
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
        darkMode ={darkMode} setdarkMode ={setdarkMode} 
      />
      <LineGradient/>
      <div className="w-5/6 mx-auto">
        <About setSelectedPage={setSelectedPage}/>
      </div>    
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Resume setSelectedPage={setSelectedPage}/>
      </div>   
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Portfolio setSelectedPage={setSelectedPage}/>
      </div>     
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Contact setSelectedPage={setSelectedPage}/>
      </div>    
      <LineGradient/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
