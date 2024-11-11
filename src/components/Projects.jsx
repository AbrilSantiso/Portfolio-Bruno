import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  video,
  index,
  active,
  handleClick,
}) => {
  const isLongTitle = name.length > 13;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[230px] h-[420px] cursor-pointer card-shadow mb-[5px]`}
      onClick={() => handleClick(id, video, name)}
    >
      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div
          className={`flex items-center justify-${
            isLongTitle ? "start" : "center"
          } pr-[4.5rem]`}
        >
          <h3
            className={`font-extrabold font-beckman uppercase text-timberWolf tracking-[1px] absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0] leading-none z-20 sm:text-[12px] md:text-[16px] lg:text-[28px]`}
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <h2 className="font-bold sm:text-[24px] text-[28px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
              {description}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState({
    id: projects[0].id,
    video: projects[0].video,
    name: projects[0].name,
  });

  const handleClickOnProject = (id, video, name) => {
    setActive({ id, video, name });
  };

  const projectContainerRef = useRef(null);

  const scrollLeft = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollBy({
        left: -700,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollBy({
        left: 700,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadTextLight}`}>Proyectos.</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[5px] flex lg:flex-row flex-col min-h-[70vh] gap-5 items-center">
          <div
            className="flex items-center justify-center text-white rounded-full cursor-pointer hidden lg:block"
            onClick={scrollLeft}
          >
            <FaChevronLeft />
          </div>

          <div
            ref={projectContainerRef}
            className="mt-[5px] flex lg:flex-row flex-col min-h-[70vh] gap-5 overflow-x-auto scrollbar-hide"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={active.id}
                handleClick={handleClickOnProject}
              />
            ))}
          </div>

          <div
            className="flex items-center justify-center text-white rounded-full cursor-pointer hidden lg:block"
            onClick={scrollRight}
          >
            <FaChevronRight />
          </div>
        </div>

        <h3 className="font-extrabold font-beckman uppercase sm:text-[27px] text-[18px] text-timberWolf">
          {active.name}
        </h3>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <iframe
            src={active.video}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
