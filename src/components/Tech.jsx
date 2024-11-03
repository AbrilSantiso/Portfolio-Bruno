import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadTextLight}>Skills.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center mt-14">
        {technologies.map((technology) => (
          <div className="w-13 h-23" key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
