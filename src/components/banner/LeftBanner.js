import React from 'react'
import {useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Web Stack Developer.", "UI Designer","Java Developer "],
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
        <p>Enthusiastic and diligent Information science graduate with a strong foundation in programming and problem-solving. Academic projects demonstrate hands-on experience in software development, Web development .Eager to contribute my skills and passion for technology to a dynamic team as I embark on my career journey
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
        <span className="bannerIcon">
          <FaInstagram/>
        </span>
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
          <FaPython/>
        </span>
    </div>
      </div>
    </div>
  </div>
  )
}

export default LeftBanner