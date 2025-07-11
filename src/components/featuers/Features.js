import React from 'react'
import {AiFillAppstore} from "react-icons/ai"
import {FaMobile,FaGlobe,FaJava,FaPython,FaReact } from "react-icons/fa"
import {SiProgress, SiAntdesign} from "react-icons/si"
import { DiMysql } from "react-icons/di";
import Title from '../layout/Title'
import Card from './Card'
import { SiSpringboot } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Features = () => {
  return (
    <section id="features" className="w-full   py-20    border-b-[1px]  border-b-black"
    >

      <Title title ="Features" des="What i do"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card title="Java Developer"
        des="Enthusiastic Java Developer with solid oops skills, eager to apply coding expertise in projects."
        icon={< FaJava/>}/>
        <Card title="Spring Boot Developer"
        des="evelops robust, scalable Java applications using the Spring Boot framework."
        icon={  <SiSpringboot />}/>
         <Card title="JavaScript Developer"
        des="Builds interactive web experiences and applications using JavaScript and frameworks."
        icon={<IoLogoJavascript />}/>
         <Card title="SQL developer"
        des="Analytical SQL Developer skilled in database design, query optimization, and data management solutions."
        icon={< DiMysql/>}/>
         <Card title="React Developer"
        des="Skilled React Developer adept at building dynamic,responsive user interfaces."
        icon={< FaReact/>}/>
       
        
      </div>
    
    </section>
  )
}

export default Features