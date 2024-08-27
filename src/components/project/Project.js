import React from 'react'
import Title from '../layout/Title'
import {projectOne,projectTwo,projectThree} from "../../assets/index"
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
       <div className='flex justify-center items-center text-center'>
       <Title  des="MY PROJECT"/>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'> 
       <ProjectCard title="Law Firm Website"
        des="Designed and developed a responsive website using HTML, CSS, and JavaScript, optimizing for performance and cross-browser compatibility to showcase services and expertise effectively."
         src={projectOne}/>
        <ProjectCard title="Sentiment analysis"
        des="Developed a sentiment analysis tool using NLP to classify achievement-related tweets as positive, negative, or neutral, aiding in understanding public sentiment about discussed achievements."
         src={projectTwo}/>
        
        
        <ProjectCard title="Multi Drug Resistant Tuberculosis"
        des="Developed a healthcare application using machine learning to monitor Multi-Drug Resistant Tuberculosis (MDR-TB), predict outcomes, and optimize treatment, aiding in patient tracking and reporting."
         src={projectThree}/>

       </div>
    </section>
  )
}

export default Project