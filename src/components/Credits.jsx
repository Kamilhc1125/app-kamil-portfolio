import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Credits = () => {
  return (
    <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md-h-[550px] h-[350px]"
      >
        <p className={styles.sectionSubText}>License information</p>
        <h3 className={styles.sectionHeadText}>Credits.</h3>
        <p className="py-2 text-sm text-secondary">This work is based on "Stylized planet" (https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70) by cmzw (https://sketchfab.com/cmzw) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>
        <p className="py-2 text-sm text-secondary">This work is based on "Gaming Desktop PC" (https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66) by Yolala1232 (https://sketchfab.com/Yolala1232) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>
      </motion.div>
  )
}

export default SectionWrapper(Credits, "");

