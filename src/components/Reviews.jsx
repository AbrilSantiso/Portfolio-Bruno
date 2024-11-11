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
        ciudades. Viena actúa como nexo entre ellos y la situación que deciden
        afrontar. En primera instancia, ellos desconocen Viena (Celine admite
        haber ido de muy chiquita) tal como se desconocen ellos, y en el
        transcurso de la película iran conociendo la ciudad así como se iran
        conociendo uno al otro. El terreno es desconocido en todo sentido, hay
        una decisión en Viena y no una ciudad que ya hayan estado alguno de
        ellos dos. Uno puede pensar a Viena como una ciudad enigmática y, en
        cierta parte, inusual para dos personas que no la tenían como primera
        opción a visitar, este mismo enigma e incertidumbre ante el contexto
        tambien se ve reflejado en la relación que van formando Jesse y Celine.
        El no hablar el idioma, el show raro al que le ofrecen asistir unos
        artistas del lugar aportan a esta enigmática aventura. Me gustó la
        escena de la vuelta al mundo y, viendo a Viena desde arriba, se dan su
        primer beso, su relación ya trasciende a la ciudad en donde están. El
        segundo acto transcurre en Paris, 9 años después, en donde cada uno está
        en pareja y transitaron su vida y su camino por separado después de esa
        promesa fallida de reencontrarse 6 meses después en la misma estación de
        Viena. En esta segunda parte se desarrolla, aunque se siguen conociendo,
        lo que (no) fue y lo que podría haber sido y que mejor ciudad para
        representar la nostalgia que Paris, la idealización del pasado es eje
        central de la película y parte de la esencia parisina (un saludo a
        Midnight in Paris). Esta idealización del pasado va a estar mas presente
        en Jesse que se lamenta constantemente por el reencuentro fallido, y no
        en Celine que tiene una postura un tanto más fría si se quiere.
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
