import React, { useState } from 'react'
import Title from '../layout/Title';
import ResumeCard from './ResumeCard';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  
  return (
    <section id="resume" className='w-full py-20 border-b-[1px] border-b-black' >

        <div className='flex justify-center items-center text-center'>
    <Title des = "MY resume"/>
        </div>
        <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center text-center">
  <li onClick={() => setEducationData(true) & setExperienceData(false) & setSkillData(false)} className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`} >Education</li>
  <li onClick={() => setEducationData(false) & setSkillData(true) & setExperienceData(false)} className={`${
              skillData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}>Professional Skill</li>
  <li onClick={()=> setExperienceData(true) & setSkillData(false)  & setEducationData(false)} className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}>Experience</li>
</ul>

        </div>
    {
      educationData && <Education/>
    }
    {
      skillData && <Skills/>
    }
    {
      experienceData && <Experience/>
    }

        
    </section>
  )
}

export default Resume