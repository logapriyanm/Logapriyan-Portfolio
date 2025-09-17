import { useState, useRef } from "react";

import Html from '../assets/images/Chronoloki.png';
import Html1 from '../assets/images/lokitech.png';
import Javascript1 from '../assets/images/passgen.png';
import Javascript2 from '../assets/images/Calculator.png';
import WeatherApp from '../assets/images/WeatherApp.png';
import Orphanage from '../assets/images/Orphnage.png';
import BookBazaar from "../assets/images/BookBazaar.png";
import IntegratedFarm from "../assets/images/IntegratedFarm.png";
import CrudApp from "../assets/images/CRUDAPP.png";
import BlogImage from "../assets/images/BlogImage.png";
import ContactManagement from "../assets/images/ContactMERN.png"

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// ------------------- PROJECT DATA -------------------

const projects = [
  {
    title: "Logi Integrated Farm",
    description:
       " Enhanced my skills in building responsive layouts, managing state, and integrating interactive features. This project demonstrates my ability to create modern interfaces and deliver seamless user experiences for clients in the agriculture sector.",
    image: IntegratedFarm,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    category: "frontend",
    demoLink: "https://logi-integrated-farm.onrender.com",
    codeLink: "https://github.com/logapriyanm/Integrated-Farm.git"
  },
  {
  title: "Contact Management System",
  description:
    "Built a MERN stack contact management system with CRUD operations, search, and filtering. This project showcases my skills in full-stack development and creating efficient user interfaces.",
  image: ContactManagement,
  tags: [" React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
  category: "fullstack",
  demoLink: "https://contact-management-mern.onrender.com",
  codeLink: "https://github.com/logapriyanm/Contact-Management-MERN.git"
},

  {
    title: "Orphanage Management System",
    description:
      "A responsive React.js + Tailwind CSS web application for a non-profit organization, featuring dynamic content, an interactive donation system, volunteer sign-up, and contact management to support child welfare initiatives.",
    image: Orphanage,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    category: "frontend",
    demoLink: "https://orphanage-management-system-kxtd.onrender.com",
    codeLink: "https://github.com/logapriyanm/Orphanage-Management-System.git"
  },
  {
    title: "MERN Blog Website",
    description:
      "A full-stack blog platform built using MongoDB, Express.js, React, and Node.js. Features include category management, post creation, dynamic content rendering.",
    image: BlogImage,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    category: "fullstack",
    demoLink: "https://blog-mern-frontend-ujkd.onrender.com",
    codeLink: "https://github.com/logapriyanm/Blog-MERN.git"
  },
  {
    title: "Book Bazaar",
    description:
     "Developed a modern and interactive online bookstore where users can seamlessly browse, search, and discover books.  It reflects my understanding of frontend architecture, user experience design, and component-based development.",
    image: BookBazaar,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    category: "frontend",
    demoLink: "https://book-bazaar-ovgc.onrender.com",
    codeLink: "https://github.com/logapriyanm/Book-Bazaar.git"
  },
  {
    title: "Calculator",
    description:
      "A responsive web calculator built with Supports keyboard input, handles real-time calculations, and blocks invalid characters. Designed for clean usability and smooth interaction.",
    image: Javascript2,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    demoLink: "https://logapriyanm.github.io/Calculator/",
    codeLink: "https://github.com/logapriyanm/Calculator"
  },
  {
    title: "User Data",
    description:
      "A full-stack CRUD application with React.js frontend and Node.js backend. It allows users to add, edit, delete, and search user records, with persistent data storage using JSON files.",
    image: CrudApp,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "Node js", "Express js"],
    category: "fullstack",
    demoLink: "https://user-data-frontend-gtb4.onrender.com/",
    codeLink: "https://github.com/logapriyanm/User-Data.git"
  },
  {
    title: "Weather App",
    description:
      "A responsive React-based weather application that displays real-time weather data, including temperature, humidity, wind speed, and location coordinates.",
    image: WeatherApp,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    category: "frontend",
    demoLink: "https://weather-app-loki.onrender.com",
    codeLink: "https://github.com/logapriyanm/Weather-App-Loki.git"
  },
  {
    title: "Loki Technologies",
    description:
      "It features clean structure, bold typography, and a futuristic tech aesthetic—designed to impress and built to perform on all devices.",
    image: Html1,
    tags: ["HTML", "Bootstrap"],
    category: "frontend",
    demoLink: "https://logapriyanm.github.io/LOKI-Technologies/",
    codeLink: "https://github.com/logapriyanm/LOKI-Technologies"
  },
  {
    title: "Watch Shop",
    description:
      "A sleek and modern landing page for a premium watch store, highlighting luxury, technology, and elegance. Built with HTML, CSS, and Bootstrap for a clean and engaging user experience.",
    image: Html,
    tags: ["HTML", "Bootstrap"],
    category: "frontend",
    demoLink: "https://logapriyanm.github.io/Chrono-LOGI/",
    codeLink: "https://github.com/logapriyanm/Chrono-LOGI"
  },
  {
    title: "Password Generator",
    description:
      "A simple yet powerful JavaScript-based password generator that lets users customize password length and include numbers, capital/small letters, and symbols.",
    image: Javascript1,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    demoLink: "https://logapriyanm.github.io/Pass-Generator/",
    codeLink: "https://github.com/logapriyanm/Pass-Generator.git"
  },
];

// ------------------- PROJECT CARD -------------------

const ProjectCard = ({ title, description, image, tags, demoLink, codeLink }) => (
  <div className="bg-[#334155] hover:bg-[#1f2937] rounded-xl overflow-hidden shadow-md p-4 flex flex-col h-[500px] md:h-[500px]">
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

// ------------------- MAIN PROJECTS COMPONENT -------------------

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
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-r from-primary to-secondary md:p-10  flex flex-col items-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white text-center mb-4">Projects</h1>

      {/* Filter Buttons */}
      <div className="grid md:flex justify-center gap-4 mb-10 text-white font-medium">
        {["all", "fullstack", "frontend", "backend"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ${
              selectedCategory === cat ? "bg-blue-500 text-white" : "hover:text-blue-300"
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
          // ✅ Single project (controlled width, centered)
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full">
              <ProjectCard {...filteredProjects[0]} />
            </div>
          </div>
        ) : (
          // ✅ No projects
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
