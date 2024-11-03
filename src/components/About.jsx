import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { about } from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className='flex'>
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadTextLight}>Sobre mí.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-white text-[18px] max-w-3xl leading-[40px]">
       Soy estudiante de Licenciatura en Publicidad, próximo a recibirme, y desde que comencé la carrera en 2022 descubrí y desarrollé una gran pasión por lo audiovisual y la comunicación. Cada proyecto me permitió explorar distintos roles, desde el armado del guion hasta la dirección y la edición, trabajando principalmente en Adobe Premiere y comenzando a incursionar en After Effects. Los proyectos que verás a continuación reflejan esta experiencia y motivación.
       Mi interés y mi curiosidad que hacen la función de motor diario no se quedaron dentro de la facultad: disfruto salir a filmar en la calle, buscando buenos planos para luego en la edición y montaje darles mi impronta y convertirlos en pequeñas historias. Me interesa tambien la escritura que se extiende más allá de los guiones ficticios, como los spots de “Brahma” y “Unicef”, entre mis proyectos vas a poder ver algunas reseñas y análisis de películas y álbumes que me inspiraron e incluso me formaron, además de “Charly y la influencia”, un análisis de las influencias de Charly García a lo largo de su discografía, donde exploro si la influencia artística puede llegar a considerarse plagio, como parte del proyecto final que realicé en el curso de periodismo de rock en el instituto Eter en 2023.
      </motion.p>
    </div>
    <div>
    <motion.div variants={textVariant()}>

            <img
          src={about}
          alt={"Conjunto de fotos"}
          style={{ marginLeft: '200px' }}
        />
        <h6           style={{ marginLeft: '210px', marginTop:"20px" }}
        >Video: Belgrano</h6>
              </motion.div>
              

    </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
