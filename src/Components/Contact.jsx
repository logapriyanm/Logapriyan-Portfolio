import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaYoutube } from 'react-icons/fa';
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {

  const form = useRef(); 
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");


  // emailjs


  const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
  setStatusMessage("");

  emailjs
    .sendForm(
      "service_h9nl995",
      "template_c0mgz0u",
      form.current,
      "8ezN_K_IPP9NEpqac"
    )
    .then(
      (result) => {
        setLoading(false);
        setStatusMessage(alert("✅ Message sent successfully!"));
        form.current.reset();
      },
      (error) => {
        setLoading(false);
        setStatusMessage("❌ Failed to send message. Try again later.");
        console.error(error.text);
      }
    );
};

  return (
    <section className="bg-[#0f172a] text-white py-16 px-4 md:px-24" id="contact">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-4 md:font-extra font-poppins  ">Get In Touch</h2>
      <p className="text-center text-gray-300 max-w-xl mx-auto mb-10">
        Ready to start your next project? Let's work together to create something amazing
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


        {/* Left side */}

        <div>
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-6">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-gray-400">logapriyanvky@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <FaPhoneAlt className="text-white" />
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-gray-400">+91 7904074107</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p className="text-gray-400">Erode</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8">
            <p className="font-bold mb-2 md:text-left text-center">Say Hello On</p>
            <div className="flex gap-4 md:justify-start justify-center">
              <button className='link-btn text-linkedin'><a href="https://www.linkedin.com/in/logapriyan-m/"><FaLinkedin size={20} /></a></button>
              <button className='link-btn text-black'><a href="https://github.com/logapriyanm"><FaGithub size={20} /></a></button>
              <button className='link-btn text-instagram'><a href="https://www.instagram.com/distres_x.heart_/"><FaInstagram size={20} /></a></button>
              <button className='link-btn text-youtube'><a href="https://www.youtube.com/@INFO_LOKI_TAMIL"><FaYoutube size={20} /></a></button>
            </div>
          </div>
        </div>

        {/* Right side: form */}
        <form ref={form} onSubmit={sendEmail} className="bg-[#1e293b] p-8 rounded-2xl space-y-4">
          <div className="grid md:grid-cols-2 gap-4  ">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="bg-transparent border border-gray-600 p-3 rounded-lg text-white focus:outline-blue-600 focus:outline-1"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="bg-transparent border border-gray-600 p-3 rounded-lg text-white focus:outline-blue-600 focus:outline-1"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="bg-transparent border border-gray-600 p-3 rounded-lg w-full text-white focus:outline-blue-600 focus:outline-1"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-transparent border border-gray-600 p-3 rounded-lg w-full text-white focus:outline-blue-600 focus:outline-1"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="bg-transparent border border-gray-600 p-3 rounded-lg w-full text-white focus:outline-blue-600 focus:outline-1"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className={`${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              } text-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300 cursor-pointer `}
          >
            {loading ? "Sending..." : "Send Message"} <FaPaperPlane className={loading ? "animate-spin " : ""} />
          </button>
          {statusMessage && (
            <p className="text-center text-sm mt-2 text-green-400 animate-fade-in">
              {statusMessage}
             </p>
          )}
        </form>
      </div>
    </section>
  );
};


export default Contact
