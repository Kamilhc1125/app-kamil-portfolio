import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (

  <>
    <motion.div
      variants={textVariant()}
    >
        <p className={styles.sectionSubText}>What do I know</p>
        <h2 className={styles.sectionHeadText}>Technology stack.</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-12 mt-20">
      {technologies.map((technology) => (
        <div className="w-32 h-32" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </>
    
  )
}

export default SectionWrapper(Tech, "stack");