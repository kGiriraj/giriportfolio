import React from 'react'
import {FaFacebook,FaTwitter,FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {contactImg} from "../../assets/index"

const ContactLeft = () => {
  return (
    <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4  lgl:p-8  rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center ">
    <img 
    className="w-full h-64 object-cover rounded-lg mb-2"
     src={contactImg} alt='contactImg' />

     <div className='flex flex-col gap-4'>
      <h3 className='text-3xl font-bold text-white'>
        Kaddi Giriraj
      </h3>
      <p className='text-lg font-normal text-gray-400'>Software Developer</p>
      <p className="text-base text-gray-400 tracking-wide">
      Thank you for visiting my portfolio! If you have any job openings or opportunities that align with my skills and expertise, I would love to hear from you. Please reach out via email or use the contact form below to get in touch. I am eager to explore new opportunities and contribute to exciting projects.
</p>
<p className="text-base text-gray-400 flex items-center gap-2">
Phone: <span className="text-lightText">+91 7338662379</span>
</p>
<p className="text-base text-gray-400 flex items-center gap-2">
Email: <span className="text-lightText">kaddigiriraj@gmail.com</span>
</p>
     </div>
     <div className='flex flex-col gap-4'>
     <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  )
}

export default ContactLeft