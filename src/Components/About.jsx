// import Profile from '../assets/images/logo.jpg';
import Profile1 from '/portfolio.png'
import { MdFileDownload } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Resume from '/Logapriyan.Resume.pdf';


const About = () => {
  return (

    <section id='about' className="flex flex-col   w-full  py-10 px-4 min-h-screen justify-between 
    md:bg-[repeating-conic-gradient(#87ACCA_0deg_0deg,_#1E293B_120deg_0deg)] bg-gradient-to-r from-primary to-secondary">

      <div className="flex justify-center flex-col md:flex-row  items-center md:items-start w-full ">
        <div className="w-full md:w-1/2 mx-10  md:m-15 flex flex-col items-center text-center md:text-left px-4">
          <h1 className=' text-3xl md:text-4xl font-bold md:font-extra font-poppins self-start text-white  mb-4  text-left  '>ABOUT ME</h1 >
          <p className='text-sm md:text-base md:font-poppins text-white mb-6 leading-6 text-left  '  ><span className='text-blue-800 font-bold'>MERN Stack Developer</span> with hands-on experience in building responsive, user-friendly 
            web applications using HTML, CSS, JavaScript, Tailwind CSS, React.js, Node.js, Express.js, and MongoDB.
             Strong understanding of modern web development principles, RESTful APIs, and UI/UX best practices.
              Passionate about continuous learning and staying updated with evolving full-stack technologies.
               Seeking an opportunity to contribute to impactful projects and grow as a developer in a collaborative environment.

          </p>

          <a href={Resume} download={Resume}><button className='flex items-center   px-2 py-1 mb-5  md:px-2 md:py-1.5      bg-blue-700  text-white rounded-lg
          hover:bg-blue-500 hover:border-primary hover:text-white  hover:cursor-pointer'

          >RESUME<MdFileDownload className='ml-2 h-5 w-5' /></button></a>

        </div>


        <div className="w-full md:w-1/2 flex justify-center md:m-10 md:justify-center ">

          <img src={Profile1} alt="profile" className='w-80 h-80  md:w-80 md:h-80  rounded-full border-2 border-white p-2' />
        </div>
      </div>

      {/* Social links */}

      <div className="mt-5 md:mb-10 text-center" >
        <h1 className="text-white text-xl md:font-extra font-poppins mb-2 ">Check Out My</h1>
        <hr className=' w-45 mx-auto border-white mb-4' />

        <div className="flex justify-center items-center flex-wrap gap-4">
          <button className='link-btn text-linkedin'><a href="https://www.linkedin.com/in/logapriyan-m/"><FaLinkedin size={20} /></a></button>
          <button className='link-btn text-black'><a href="https://github.com/logapriyanm"><FaGithub size={20} /></a></button>
          <button className='link-btn text-instagram'><a href="https://www.instagram.com/distres_x.heart_/"><FaInstagram size={20} /></a></button>
          <button className='link-btn text-youtube'><a href="https://www.youtube.com/@INFO_LOKI_TAMIL"><FaYoutube size={20} /></a></button>
        </div>

      </div>


    </section>


  )
}

export default About
