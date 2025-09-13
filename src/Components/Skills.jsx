import Certificate1 from '../assets/images/NxtLogic.jpg'
import Certificate2 from '../assets/images/frontend.png'
import Certificate3 from '../assets/images/UIUX.png'
import Certificate4 from '../assets/images/api skills.png'
import Certificate5 from '../assets/images/Tech vedha.png'
import Certificate6 from '../assets/images/FullStack.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss,SiExpress  } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const MySkills = [
    { name: "HTML", label: "Structure", icon: <FaHtml5 className="text-[#E44D26]" /> },
    { name: "CSS", label: "User Interface", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "TailwindCSS", label: "User Interface", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", label: "Interaction", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React JS", label: "Framework", icon: <FaReact className="text-cyan-400 " /> },
    { name: "NodeJS", label: "Web Server", icon: <FaNodeJs className="text-green-500  " /> },
    { name: "Express JS", label: "Server Framework", icon: <SiExpress size={40} className="text-white bg-black rounded-full p-2" /> },
    { name: "Mongo DB", label: " Database", icon: <DiMongodb className="text-[#4db33d] " /> },
]


// Skills data

const data = [

      {
        name: 'Mern Stack',
        image: Certificate6,
        content: 'Completed 30-day intensive training in Full Stack Development with practical, hands-on projects.'
    },
      {
        name: 'Web Development – Tech Vedhu',
        image: Certificate5,
        content: 'Completed an intensive course covering core web development concepts and best practices (June–July 2025).'
    },
        {
            name: 'Nxtlogic Internship',
            image: Certificate1,
            content: 'Completed a front-end internship focused on real-time projects and team collaboration.'
        },
   
    {
        name: 'UI/UX Design Training',
        image: Certificate3,
        content: 'Training in UI/UX design principles and user-centered workflows.'
    },
    {
        name: 'API Development Skills',
        image: Certificate4,
        content: 'Gained experience in building and integrating RESTful APIs.'
    },
     {
        name: 'Frontend Bootcamp ',
        image: Certificate2,
        content: 'Certified for completing a comprehensive front-end development program.'
    },
  
];

// Skills left side

const Skills = () => {
    return (
        <section id='skills' className="min-h-screen md:bg-conic md:from-primary  md:to-secondary from-0% to-100% md:flex md:flex-row pb-5 sm:flex sm:flex-col  items-center bg-gradient-to-l from-primary to-secondary ">
            <div className="md:w-1/2   text-white text-3xl md:text-4xl font-bold md:font-extra font-poppins   mb-4 md:m-4 ">
                <h1 className=" text-center pt-5">SKILLS</h1>
                <div className=" p-5">

                    <div className="grid grid-cols-1  md:grid-cols-2  gap-5">
                        {MySkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center  gap-4 p-4 bg-[#334155] hover:bg-[#1f2937] rounded-xl transition-all border border-[#333]"
                            >
                                <div className="md:text-3xl  ">{skill.icon}</div>
                                <div className=''>
                                    <p className="md:font-semibold  font-poppins font-medium  text-lg">{skill.name}</p>
                                    <p className="text-base text-gray-400   md:font-extra font-poppins font-medium ">{skill.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="md:flex  mt-20">
                        <p className="  text-base  font-poppins font-normal ">With a solid foundation in front-end technologies like HTML, CSS, TailwindCSS, and JavaScript,
                            I create responsive and visually appealing interfaces.
                            I specialize in building modern web applications using React and ensure seamless interactions and user experience.</p>
                    </div> */}

                </div>
            </div>

{/* Certificates Right side */}


            <div className="md:w-1/2  text-white text-3xl md:text-4xl font-bold md:font-extra font-poppins  pt-2  md:m-4 ">
                <h1 className="text-center m-5">CERTIFICATES</h1>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="md:w-[400px] md:h-[350px] md:px-6 w-[280px] h-[350px] "
                >
                    {data.map((d, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#334155] border border-gray-600 md:w-[400px]  p-4 rounded-xl h-full flex flex-col items-center  hover:bg-[#1f2937] transition">
                                <img src={d.image} alt={d.name} className="w-[300px] h-48 object-fill rounded-lg mb-3 border border-white" />
                                <p className="text-base font-poppins  mb-1 text-center">{d.name}</p>
                                <p className="text-sm md:text-base   md:font-extra font-poppins font-medium text-gray-300  text-center">{d.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
               
            </div>
        </section>
    )
}

export default Skills
