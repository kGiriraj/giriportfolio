import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >
    <div className='w-full flex  flex-col lgl:flex-row gap-20'>
      

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-[full] lgl:w-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer(Internship)"
            subTitle="Toyota Kirloskar Motor   (2024 Oct -2024 Dec)"
            result="On-site"
            des="Applied Lean and Kaizen methodologies to optimize skid monitoring, reducing errors and downtime; developed customized digital tools for enhanced efficiency."
          />
          <ResumeCard
            title="Freelance Web Developer"
            subTitle="AB CHAMBERS - (2024 Jan - 2024 Mar)"
            result="Remote"
            des="Created a responsive website using HTML, CSS, and JavaScript, optimizing layout and performance for a professional, cross-browser viewing experience."
          />
        
        </div>
      </div>
      </div>    </motion.div>

  );
}

export default Experience;