import { useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProjectsData from "../Datas/ProjectsData";



// ------------------- PROJECT CARD -------------------

const ProjectCard = ({ title, description, image, tags, demoLink, codeLink }) => (
  <div className="bg-[#334155] hover:bg-[#1f2937] rounded-xl overflow-hidden shadow-md p-4 flex flex-col h-[580px]  md:h-[500px] lg:h-[520px]">
    <div className="relative w-full group">
      <img src={image} alt={title} className="rounded-lg w-full object-cover md:h-[200px]" />
      <div className="absolute inset-0 bg-blue-400 hover:rounded flex justify-center items-center gap-4 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black p-3 cursor-pointer rounded-full shadow hover:scale-110 transition">
              <FaExternalLinkAlt />
            </button>
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black p-3 cursor-pointer rounded-full shadow hover:scale-110 transition">
              <FaGithub />
            </button>
          </a>
        )}
      </div>
    </div>
    <h3 className="text-white text-lg text-center font-poppins font-semibold mt-4">{title}</h3>
    <p className="text-gray-300 mt-4 flex-1 text-center ">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2 justify-center">
      {tags.map((tag, i) => (
        <span key={i} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
          {tag}
        </span>
      ))}
    </div>
  </div>
);



const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const swiperRef = useRef(null);

  const slideOnce = (direction) => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    direction === "left" ? swiper.slidePrev() : swiper.slideNext();
  };

  const filteredProjects =
    selectedCategory === "all"
      ? ProjectsData
      : ProjectsData.filter((project) => project.category === selectedCategory);


  return (
    <div id="projects" className="min-h-screen bg-gradient-to-r from-primary to-secondary md:p-10  flex flex-col items-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white text-center mb-4">Projects</h1>

      {/* Filter Buttons */}
      <div className="grid md:flex justify-center gap-4 mb-10 text-white font-medium">
        {["all", "fullstack", "frontend"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ${selectedCategory === cat ? "bg-blue-500 text-white" : "hover:text-blue-300"
              }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className="relative container mx-auto px-4 overflow-hidden">
        {filteredProjects.length > 1 ? (
          <>
            {/* Left Hover Zone */}
            <div
              onClick={() => slideOnce("left")}
              className="absolute left-0 top-0 h-full w-[50px] z-10 cursor-w-resize"
            />

            {/* Swiper */}
            <Swiper
              modules={[Navigation]}
              navigation
              grabCursor={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full flex justify-center">
                    <ProjectCard {...project} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Hover Zone */}
            <div
              onClick={() => slideOnce("right")}
              className="absolute right-0 top-0 h-full w-[50px] z-10 cursor-pointer"
            />
          </>
        ) : filteredProjects.length === 1 ? (
          //  Single project (controlled width, centered)
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full">
              <ProjectCard {...filteredProjects[0]} />
            </div>
          </div>
        ) : (
          //  No projects
          <p className="text-white text-lg text-center">No projects found in this category.</p>
        )}
      </div>

      {/* View All Projects Button */}
      <div className="m-10">
        <a href="https://github.com/logapriyanm?tab=repositories">
          <button className="px-3 py-2 hover:bg-blue-800 border-2 rounded-lg border-blue-700 cursor-pointer text-white bg-blue-700 text-base md:text-xl font-medium">
            View All Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
