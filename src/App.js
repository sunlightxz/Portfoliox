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

function App() {
  const [selectedPage,setSelectedPage]=useState('home')
  const isAboveMediumSecreens = useMediaQuery("(min-width:1060px)")
  const [isTopofPage,setisTopofPage]=useState(true)
 
  useEffect(()=>{
    const handleScroll =()=> {
      if(window.scrollY === 0) setisTopofPage(true);
      if(window.scrollY !== 0) setisTopofPage(false);

    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])
  return (
    <div className="App bg-bgBody">
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        isTopofPage = {isTopofPage} 
      />
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
    </div>
  );
}

export default App;
