import React from 'react'
import {useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaJava, FaPython } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Full-Stack Java Developer.","React JavaScript Developer. ", "Spring Boot ,REST APIs ,Building Clean, Scalable Web Apps."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className=" w-full lgl:w-1/2  flex flex-col gap-20">
    <div className="flex flex-col gap-5">
      <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
      <h1 className='text-6xl font-bold text-white'>
        Hi,I'm {" "}
        <span className="text-designColor capitalize">Kaddi Giriraj</span>
      </h1>
      <h2 className="text-4xl font-bold text-white"> a {" "}
        <span>{ text}
        </span>
         <Cursor
        cursorBlinking="false"
        cursorStyle="|"
        cursorColor="#ff014f"
      />
        </h2>
        <p>Enthusiastic and detail-oriented Information Science graduate with a solid foundation in programming,
data structures, and problem-solving. Proven hands-on experience in software and web development
through academic and personal projects. Adept at building full-stack applications and collaborating in team
environments. Eager to contribute technical skills, creativity, and a growth mindset to a dynamic and innovative
organization.
        </p>
    </div>
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between ">
    <div>
    <h2 className="text-base uppercase font-titleFont mb-4"> find me in</h2>
      <div className="flex gap-4">
      <a href="https://www.linkedin.com/in/kaddi-giriraj-852226260/"   target="_blank"
  rel="noopener noreferrer"
 className='bannerIcon'>
        
            <FaLinkedinIn />
          </a>
       
    </div>
      </div>
      <div>
      <h2 className="text-base uppercase font-titleFont mb-4"> best skill on</h2>
      <div className="flex gap-4">
      <span className="bannerIcon">
      <FaReact />
        </span>
        <span className="bannerIcon">
          <FaJava/>
        </span>
        <span className="bannerIcon">
          <SiSpringboot />
        </span>
    </div>
      </div>
    </div>
  </div>
  )
}

export default LeftBanner