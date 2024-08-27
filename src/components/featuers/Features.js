import React from 'react'
import {AiFillAppstore} from "react-icons/ai"
import {FaMobile,FaGlobe,FaJava,FaPython,FaReact } from "react-icons/fa"
import {SiProgress, SiAntdesign} from "react-icons/si"
import { DiMysql } from "react-icons/di";
import Title from '../layout/Title'
import Card from './Card'

const Features = () => {
  return (
    <section id="features" className="w-full   py-20    border-b-[1px]  border-b-black"
    >

      <Title title ="Features" des="What i do"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card title="Web Development"
        des="Creative and detail-oriented web developer with a strong foundation in web development technologies."
        icon={< FaGlobe/>}/>
         <Card title=" UX Design"
        des="Creative and detail-oriented UX Designer with a strong foundation in user-centered design."
        icon={< SiAntdesign/>}/>
         <Card title="Java Development"
        des="Enthusiastic Java Developer with solid oops skills, eager to apply coding expertise in projects."
        icon={< FaJava/>}/>
         <Card title="SQL developer"
        des="Analytical SQL Developer skilled in database design, query optimization, and data management solutions."
        icon={< DiMysql/>}/>
         <Card title="Python developer"
        des="Skilled Python Developer  data analysis, and automation with strong problem-solving abilities."
        icon={< FaPython/>}/>
         <Card title="React Developer"
        des="Skilled React Developer adept at building dynamic,responsive user interfaces."
        icon={< FaReact/>}/>
        
      </div>
    
    </section>
  )
}

export default Features