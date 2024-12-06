import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Reviews = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadTextLight}`}>Reseñas.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-xl md:text-2xl max-w-full leading-7 md:leading-8 font-bold"
      >
        La elección de las ciudades en la trilogía Before Sunrise.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-base md:text-lg max-w-full leading-7 md:leading-8"
      >
        En Viena se conocen, en Paris se reencuentran y en Morea (Grecia)
        tambalean. Creo yo que esta trilogía es un gran ejemplo de pensar una
        -buena- película como decisiones constantes y que nada -por mas que
        parezca- está librado al azar o puesto ahí sin relevancia alguna para
        esta carga simbólica que la sustenta, en este caso, el rol de las
        ciudades.
      </motion.p>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <div className="flex justify-center mt-6">
          <a
            href="https://letterboxd.com/brunoc01/films/reviews/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-700 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300">
              Seguir leyendo en Letterboxd
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Reviews, "reviews");
