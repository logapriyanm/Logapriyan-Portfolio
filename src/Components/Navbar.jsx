import { useState } from 'react';

import { RiMenuFoldFill } from "react-icons/ri";
import Profile1 from '/portfolio.png'


const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false);
    return (
        <header className='flex justify-between bg-[#0f172a] p-1.5 fixed top-0 right-0 left-0 z-50 '>
            <img src={Profile1} alt="Logo" className="h-10 w-10 rounded-4xl p-1  ml-5 border-2 border-white" />
            <nav className=" navbar hidden md:block sticky top-0 left-0 z-(100)">
            <ul className=" flex gap-20 mr-10 mt-2 text-[15px]  font-semibold text-white">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
            </nav>

            {/* mobile nav  */}

            
            {toggleMenu && 
            <nav className="block md:hidden mobile-nav ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className=" sticky flex flex-col gap-3 font-medium text-amber-50 ">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
            </nav>}
            <button onClick = {()=> setToggleMenu(!toggleMenu)} className="block md:hidden">< RiMenuFoldFill className="text-white h-6 w-6"/></button>
        </header>
    )
}

export default Navbar;
