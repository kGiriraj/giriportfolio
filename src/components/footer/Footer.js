import React from 'react'
import { Link } from "react-scroll";
import {  FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2  lgl:grid-cols-4 gap-8 '>
    <div className='w-full h-full flex flex-col gap-8 ' >
       
        <div className='flex gap-4'>
        <a href="https://www.linkedin.com/in/kaddi-giriraj-852226260/"   target="_blank"
  rel="noopener noreferrer"
 className='bannerIcon'>
        
            <FaLinkedinIn />
          </a>
      <span className='bannerIcon'>
        <FaInstagram/> 
      </span>
     </div>
    </div>
    <div className='w-full h-full ' >
        <h3 className='text-xl uppercase text-designColor tracking-wider'>
            Quick Link
        </h3>
        <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
            <li >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Home
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
            </li>
            <li >
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Features
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
            </li>
            <li >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Projects
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
            </li>
            <li >
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Resume
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
            </li>
            <li >
             <Link
              to="contact"
              smooth={true}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
            </li>
        </ul>
    </div>
  
    </div>
  )
}

export default Footer