import { motion } from "framer-motion";
import { styles } from "../styles";
import { bruno } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen"></div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Bruno{" "}
              <span
                className="text-eerieBlack font-mova font-extrabold uppercase 
      sm:text-[110px] text-[70px] md:text-[90px] lg:text-[110px]"
              >
                Carzedda
              </span>
            </h1>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        <div>
          <img
            className="absolute bottom-0 ml-[20vw] 
            lg:ml-[45vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[53vw]
            sm:h-[90vh] md:h-[90vh] xl:h-[90vh]"
            src={bruno}
            alt="Bruno"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
