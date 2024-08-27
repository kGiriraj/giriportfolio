
import React from 'react'
import {motion} from 'framer-motion';

import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >
    <div className='w-full flex  flex-col lgl:flex-row gap-20'>
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-[full] lgl:w-[700px]  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Information Science"
            subTitle="Global Academy of Technology (2020 - 2024)"
            result="7.14/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Science(PCMCS) "
            subTitle="Mahesh PU College(2018 - 2020)"
            result="80/100%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          
        </div>
      </div>
      {/* part Two */}

     
      </div>    </motion.div>

  );
}

export default Education