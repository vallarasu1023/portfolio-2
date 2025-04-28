import '../styles/hero.css'
import { FaFacebook,FaLinkedin,FaGithub ,FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"
import { BsHouse,BsPerson ,BsFileEarmarkText ,BsImages, BsEnvelope ,BsHddStack,BsX} from "react-icons/bs"
import React, { useEffect, useRef ,useState} from 'react';
import Typed from 'typed.js';
import {FaHtml5,FaCss3Alt,  FaJs, FaReact, FaNodeJs,} from "react-icons/fa";
  import {SiBootstrap,SiJquery,SiMongodb,SiExpress,} from "react-icons/si";
import { BsChevronRight } from "react-icons/bs";
import AOS from "aos";
import { BsTelephone } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsList } from 'react-icons/bs';
import axios from 'axios'; // Import axios for making HTTP requests
import profilepic from "../assets/profiled1.jpg"
import smallprofile from "../assets/profile 3.jpg"
import background from "../assets/photo.jpeg"
import resume  from "../assets/Vallarasu_Resume.pdf"
import p4 from "../assets/p4.png"
import p1 from "../assets/p1.png"
import afd from "../assets/afd.png"
import p2 from "../assets/p2.png"
import p6 from "../assets/p6.png"
import pg from "../assets/pg.png"
// import { BsList } from 'react-icons/bs';






function Hero(){

const typedRef = useRef(null);
const [loading, setLoading] = useState(false);
const [sent, setSent] = useState(false);
const [error, setError] = useState("");
const [menuOpen, setMenuOpen] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSent(false);
  setError("");

  try {
    const response = await axios.post("https://portfolio-1-mso2.onrender.com/submit-form", formData);

    if (response.status === 200) {
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000); // optional: hide success msg
    } else {
      setError("Something went wrong. Please try again.");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};




// Typed.js for typing animation
useEffect(() => {
  const typed = new Typed(typedRef.current, {
    strings: [
      "Full Stack Developer",
      "Frontend Developer",
      "React Developer",
      "MERN Stack Developer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });

  return () => {
    typed.destroy();
  };
}, []);

// AOS initialization for scroll animations
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

// nav sections active state on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navmenu ul li a");

useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navmenu ul li a");

  const onScroll = () => {
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === currentId) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

// Scroll-to-reveal logic
useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section:not(#home)"); // Select all sections except the home section
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect(); // Get position of the section relative to the viewport
      if (rect.top <= window.innerHeight - 100) { // Check if the section is in view
        section.classList.add("fade-in"); // Add fade-in class to trigger animation
      }
    });
  };

  window.addEventListener("scroll", handleScroll); // Listen for scroll events
  handleScroll(); // Run on load to reveal sections already in view

  return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  
}, []);


useEffect(() => {
  const handleScroll = () => {
    const blogPosts = document.querySelectorAll(".reveal"); // Select all reveal sections
    blogPosts.forEach((post) => {
      const rect = post.getBoundingClientRect(); // Get the position of each section
      if (rect.top <= window.innerHeight - 100) {
        post.classList.add("fade-in"); // Add fade-in class when in view
      }
    });
  };

  window.addEventListener("scroll", handleScroll); // Listen for scroll events
  handleScroll(); // Run on load to reveal sections already in view

  return () => window.removeEventListener("scroll", handleScroll); // Cleanup
}, []);

//toogle 
const toggleMenu = () => setMenuOpen(prev => !prev);
const closeMenu = () => setMenuOpen(false);




       
return(
    <div>
    <header
      id="header"
      className={`header dark-background d-flex flex-column${menuOpen ? ' header-show' : ''}`}
    >
      {/* Toggler icon on responsive devices */}
      <div className="header-toggle" onClick={toggleMenu}>
        {menuOpen ? <BsX /> : <BsList />}
      </div>

      <div className="profile-img">
        <img src={smallprofile} alt="Profile" className="img-fluid rounded-circle" />
      </div>

      <a href="index.html" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Vallarasu S</h1>
      </a>

      <div className="social-links text-center">
        <a href="https://x.com/Vallarasu1023" className="twitter"><FaXTwitter /></a>
        <a href="https://www.facebook.com/share/1L7S4RJ8ip/" className="facebook"><FaFacebook /></a>
        <a href="https://www.instagram.com/_its_vallarasu_/?next=%2F&hl=en" className="instagram"><FaInstagram /></a>
        <a href="https://github.com/vallarasu1023/blog-pro-new" className="google-plus"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/vallarasu-s-572228289" className="linkedin"><FaLinkedin /></a>
      </div>

      <nav
        id="navmenu"
        className={`navmenu${menuOpen ? ' active' : ''}`}
        onClick={closeMenu}
      >
        <ul>
          <li>
            <a href="#hero" className="active">
              <span className="navicon"><BsHouse /></span>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <span className="navicon"><BsPerson /></span>About
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className="navicon"><BsHddStack /></span>Skills
            </a>
          </li>
          <li>
            <a href="#resume">
              <span className="navicon"><BsFileEarmarkText /></span>Resume
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <span className="navicon"><BsImages /></span>Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="navicon"><BsEnvelope /></span>Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
    {/* hero */}
  <main className="main ">

  <section id="hero" className="hero section dark-background ">
      <img src={background} alt="" data-aos="fade-in" className="" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Vallarasu</h2>
        <p>
          I'm <span className="typed" ref={typedRef}></span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
        </p>
      </div>
      </section>
      {/* <!-- /Hero Section --> */}
      <section id="about" className="about section reveal ">


<div className="container section-title" data-aos="fade-up">
  <h2>About</h2>
  <p> I'm a Full Stack MERN Developer with a passion for building web applications. 
    I have hands-on experience with MongoDB, Express.js, React.js, and Node.js. As a fresher, 
    I'm eager to learn, grow, and create useful and user-friendly websites. 
    I enjoy coding, solving problems, and working on real-world projects..</p>
</div>
<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="row gy-4 justify-content-center">
    <div className="col-lg-4">
      <img src={profilepic} className="img-fluid"  alt=""/>
    </div>
    <div className="col-lg-8 content">
      <h2>UI/UX Designer &amp; Full Stack Mern Developer.</h2>
      <p className="fst-italic py-3"  id="p3">
      I'm a passionate and self-driven Full Stack MERN Developer with a strong eye for UI/UX design.
      I specialize in building responsive, scalable web applications using the latest technologies.
      I love turning ideas into reality through clean code and creative design
      </p>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li><span className="arrow"><BsChevronRight/></span> <strong>Birthday:</strong> <span>23 oct 2003</span></li>
            <li><span className="arrow"><BsChevronRight/></span> <strong>Phone:</strong> <span>+91 6383789064</span></li>
            <li><span className="arrow"><BsChevronRight/></span> <strong>City:</strong> <span>Madurai,Tamil Nadu</span></li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li><span className="arrow"><BsChevronRight/></span> <strong>Age:</strong> <span>22</span></li>
            <li><span className="arrow"><BsChevronRight/></span> <strong>Degree:</strong> <span>B.com.Computer Application</span></li>
            <li><span className="arrow"><BsChevronRight/></span> <strong>Email:</strong> <span>vallarasusaravanakumar@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <p className="py-3" id="p3">
      I'm committed to continuous learning and staying up-to-date with the latest trends in web development.
          I enjoy solving complex problems, collaborating with creative minds, and delivering solutions that exceed expectations.
          Whether it's building modern UIs or robust backends, I bring passion and precision to every project.
      </p>
    </div>
  </div>
</div>
</section>
{/* about end */}
<section id="skills" className="skills section  light-background">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p>"I am passionate about continuous learning and development. I specialize in web development using technologies like HTML, CSS, JavaScript, React, and Node.js, among others. With a strong foundation in both front-end and back-end technologies.
             I am always eager to expand my skill set and contribute to impactful projects.</p>
        </div>

        <div className="skills-grid ">
          <div className="skill-item" data-tooltip="Modern HTML5 structure">
            <FaHtml5 className="skill-icon" style={{ color: "#e34c26" }} />
            <p>HTML5</p>
          </div>
          <div className="skill-item"data-tooltip="Styling with CSS3">
            <FaCss3Alt className="skill-icon" style={{ color: "#264de4" }} />
            <p>CSS3</p>
          </div>
          <div className="skill-item"data-tooltip="JavaScript fundamentals">
            <FaJs className="skill-icon" style={{ color: "#f0db4f" }} />
            <p>JavaScript</p>
          </div>
          <div className="skill-item"data-tooltip="Responsive UI with Bootstrap 5">
            <SiBootstrap className="skill-icon" style={{ color: "#7952b3" }} />
            <p>Bootstrap 5</p>
          </div>
          <div className="skill-item"data-tooltip="jQuery for DOM manipulation">
            <SiJquery className="skill-icon" style={{ color: "#0769ad" }} />
            <p>jQuery</p>
          </div>
          <div className="skill-item"data-tooltip="Building UIs with React">
            <FaReact className="skill-icon" style={{ color: "#61dbfb" }} />
            <p>ReactJS</p>
          </div>
          <div className="skill-item" data-tooltip="NoSQL Database - MongoDB">
            <SiMongodb className="skill-icon" style={{ color: "#4db33d" }} />
            <p>MongoDB</p>
          </div>
          <div className="skill-item"data-tooltip="Server-side JS with Node.js">
            <FaNodeJs className="skill-icon" style={{ color: "#68a063" }} />
            <p>Node.js</p>
          </div>
          <div className="skill-item"data-tooltip="Express framework for backend">
            <SiExpress className="skill-icon" style={{ color: "#000000" }} />
            <p>Express.js</p>
          </div>
        </div>
      </div>
    </section>
    
<section id="resume" className="resume section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Download my resume to learn more about my educational background, skills, 
          and the projects I’ve worked on as I begin my career journey.</p>
          </div>
      <div className="container">
        <div className="row">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Carrer Objective</h3>

            <div className="resume-item pb-0">
              <h4>Vallarasu</h4>
              <p><em>As a passionate and detail-oriented Full Stack MERN Developer, and web developmemt I aim to leverage my skills in MongoDB, Express.js, React.js, and Node.js to contribute to innovative web development projects.
                 Eager to join a forward-thinking organization where I can continuously learn, solve real-world problems, and grow into a seasoned professional while delivering scalable and efficient solutions.</em></p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Commerce &amp; Computer Application</h4>
              <h5>2021 - 2024</h5>
              <p><em>The American College - Madurai , Tamil Nadu</em></p>
              <p>Cumulative GPA: 6.6/10</p>
            </div>

            <div className="resume-item">
              <h4>Computer Science</h4>
              <h5>2020 - 2021</h5>
              <p><em>MNU Jayaraj Nadar Higher Sec School - Madurai , Tamil Nadu</em></p>
              <p>HSC 12rh Grade (71.17%)</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <h4>1.RAPIDO CLONE (MY CREATIVE EXPERIENCE)</h4>
              <h5>2025 - Present</h5>
              {/* <p><em>Experion, New York, NY </em></p> */}
              <ul>
                <li> Built a responsive clone of the Rapido bike taxi booking platform using HTML, CSS3, JavaScript, jQuery, and Bootstrap.
                     The project replicates key features such as ride booking UI, fare estimates, location input, and responsive layouts. 
                     Focused on clean design and mobile-first responsiveness to enhance user experience. This project demonstrates my creativity, 
                     attention to detail, and front-end development skills </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>2.BLOG SITE PLATFORM                                                                                                                            </h4>
              <h5>2025 - present</h5>
              <ul>
                <li>Developed a comprehensive full-stack blogging platform using the MERN stack. The platform features user authentication (login/signup), blog posting, and image uploads.
                     Users can search and filter blog posts and search images via an integrated image API, with the option to download images directly from the platform.
                     Data is securely stored in database and the platform is fully responsive, providing an optimal experience on all devices.</li>
                <li>Technologies  used: React.js, Html , CSS3, JavaScript , Node.js, Express.js ,MongoDb</li>
              </ul>
            </div>
          </div>
        </div>
      </div><br/>
      <button className="button" download>
      <a className="a-resume" href={resume} download >
Download Cv
</a>
</button>
    </section>
    <section id="portfolio" className="portfolio section light-background">


<div className="container section-title" data-aos="fade-up">
  <h2>Project</h2>
  <p>Developed a comprehensive full-stack blogging platform using the MERN stack. The platform features user authentication (login/signup),
     blog posting, and image uploads. Users can search and filter blog posts and search images via an integrated image API,
     with the option to download images directly from the platform.
     Data is securely stored in database and the platform is fully responsive, providing an optimal experience on all devices.
  </p>
</div>

<div className="container">
  <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div className="portfolio-content h-100">
          <img src={p4} className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>page 1</h4>
            <p>Signup Form</p>
          </div>
        </div>
      </div>



      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
        <div className="portfolio-content h-100">
          <img src={p1} className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Page 2</h4>
            <p>Search Image</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
        <div className="portfolio-content h-100">
          <img src={p2} className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>page 3</h4>
            <p>Home Page</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
        <div className="portfolio-content h-100">
          <img src={p6} className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Page 4</h4>
            <p>Login Form</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div className="portfolio-content h-100">
          <img src={afd} className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>page 5</h4>
            <p>Post the Blog</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
        <div className="portfolio-content h-100">
          <img src={pg} className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Page 5</h4>
            <p>Footer Links</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"><BsGeoAlt /></i>
                <div>
                  <h3>Address</h3>
                  <p>54/3 Nehru Nagar 2nd Street Alagappan Nagar Madurai</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"><BsTelephone /></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 6383789064</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"><BsEnvelope/></i>
                <div>
                  <h3>Email Us</h3>
                  <p>Vallarasusaravanakumar@gmail.com</p>
                </div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.409440045068!2d78.09261107479215!3d9.8998159902005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf90955b4e69%3A0xc891fac14feddb87!2s54D%2F51%2C%20T%20V%20S%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625003!5e0!3m2!1sen!2sin!4v1745319002057!5m2!1sen!2sin" 
                frameBorder="0"
      style={{ border: 0, width: '100%', height: '270px' }}
      allowFullScreen
      loading="lazy"
   referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
  
            </div>
          </div>

          <div className="col-lg-7">
      <form
        onSubmit={handleSubmit}
        className="php-email-form"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="row gy-4">
          <div className="col-md-6">
            <label htmlFor="name-field" className="pb-2">Your Name</label>
            <input
              type="text"
              name="name"
              id="name-field"
              className="form-control"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email-field" className="pb-2">Your Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email-field"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="subject-field" className="pb-2">Subject</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject-field"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="10"
              id="message-field"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-center">
        {/* Show success message */}
        {sent && (
          <div className="sent-message">
            <strong>Your message has been sent.</strong>
            <span className="highlight-text"> Thank you!</span>
          </div>
        )}

        {/* Show error message */}
        {error && <div className="error-message">{error}</div>}

        {/* Submit button with spinner */}
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? (
            <div className="loading-spinner inside-btn"></div> // Spinner inside button
          ) : (
            "Send Message" // Text when not loading
          )}
        </button>
      </div>
          </div>
      </form>
    </div>
        </div>
      </div>
    </section>    
</main>
{/* foooter */}

<footer id="footer" class="footer position-relative light-background">

<div class="container footer-fade-in">
  <div class="copyright text-center">
    <p>© 2025 <strong class="px-1 sitename">Vallarasu S</strong> | <span class="highlight">Full Stack Mern Developer</span></p>
    <p>Thanks for visiting my portfolio. Let’s stay connected through my <span class="highlight">social profiles</span>.</p>
  </div>
</div>



</footer>


  </div>
  
  

)
}  
export default Hero