import React from 'react'
import Title from '../layout/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index"
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
     
      <div className='flex justify-center items-center text-center'>
        <Title des="MY PROJECT" />
      </div>

    
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>

        
        <ProjectCard
          title="Law Firm Website"
          des="Designed and developed a responsive website using HTML, CSS, and JavaScript, optimizing for performance and cross-browser compatibility to showcase services and expertise effectively."
          src={projectOne}
          webLink="https://www.abchambers.com/"
        />

      
        <ProjectCard
          title="Real-Time Chat Application — Full-Stack Project"
          des="Built a real-time chat app using React and Spring Boot with WebSocket, STOMP, and SockJS for cross-browser support. Deployed frontend on Vercel and backend on Railway, enabling secure, live messaging with dynamic UI."
          src={projectTwo}
          webLink="https://react-chat-frontend-two.vercel.app/"
          gitLink="https://github.com/kGiriraj/Chat_Application"
        />

      
        <ProjectCard
          title="Social_gram | Full Stack Web App"
          des="Built a scalable full-stack social media platform using Java, JSP, and MVC with secure MySQL-backed authentication and encrypted credentials. Developed RESTful APIs for posts and profiles, and tested with JUnit."
          src={projectThree}
          gitLink="https://github.com/kGiriraj/jsp-gram"
        />

      </div>
    </section>
  )
}

export default Project;
