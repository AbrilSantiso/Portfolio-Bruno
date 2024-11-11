import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { about } from "../assets";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 md:px-8 py-12">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadTextLight} text-center lg:text-left`}>
            Sobre mí.
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white text-base md:text-lg max-w-full leading-7 md:leading-8"
        >
          Soy estudiante de Licenciatura en Publicidad, próximo a recibirme, y
          desde que comencé la carrera en 2022 descubrí y desarrollé una gran
          pasión por lo audiovisual y la comunicación. Cada proyecto me permitió
          explorar distintos roles, desde el armado del guion hasta la dirección
          y la edición, trabajando principalmente en Adobe Premiere y comenzando
          a incursionar en After Effects. Los proyectos que verás a continuación
          reflejan esta experiencia y motivación. Mi interés y mi curiosidad que
          hacen la función de motor diario no se quedaron dentro de la facultad:
          disfruto salir a filmar en la calle, buscando buenos planos para luego
          en la edición y montaje darles mi impronta y convertirlos en pequeñas
          historias. Me interesa también la escritura que se extiende más allá
          de los guiones ficticios, como los spots de “Brahma” y “Unicef”, entre
          mis proyectos vas a poder ver algunas reseñas y análisis de películas
          y álbumes que me inspiraron e incluso me formaron, además de “Charly y
          la influencia”, un análisis de las influencias de Charly García a lo
          largo de su discografía, donde exploro si la influencia artística
          puede llegar a considerarse plagio, como parte del proyecto final que
          realicé en el curso de periodismo de rock en el instituto Eter en
          2023.
        </motion.p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-end">
        <motion.div variants={textVariant()} className="w-full lg:w-4/5 ml-8">
          <img
            src={about}
            alt={"Conjunto de fotos"}
            className="w-full h-auto object-contain" // Responsivo
          />
          <h6 className="text-center mt-4 text-white text-sm md:text-base">
            Video: Belgrano
          </h6>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");