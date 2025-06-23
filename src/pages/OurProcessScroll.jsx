import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './OurProcessScroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaPaintBrush, FaProjectDiagram, FaShieldAlt, FaLock, FaUsers, FaBullseye, FaEnvelope, FaTools, FaClock, FaStar } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import {
  faLaptop,
  faMagnifyingGlass,
  faClock,
  faCircleInfo,
  faMobileAlt,
  faEnvelope,
  faPaintBrush,
  faLayerGroup,
  faLightbulb,
  faWrench,
  faShieldAlt,
  faUsers,
  faUserCog,
  faTools,
  faSmile
} from '@fortawesome/free-solid-svg-icons';


gsap.registerPlugin(ScrollTrigger);

const OurProcessScroll = () => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const getScrollAmount = () => -(containerRef.current.scrollWidth - window.innerWidth);

    const tween = gsap.to(containerRef.current, {
      x: getScrollAmount,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top top',
      end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
      pin: true,
      scrub: true,
      animation: tween,
      invalidateOnRefresh: true,
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);



  
  return (
    <>
      <div className="space-50vh" />
      <div className="scroll-wrapper" ref={wrapperRef}>
        <div className="scroll-container" ref={containerRef}>

   <div className="scroll-panel standout-panel">
      <h2 className="standout-title">WHAT MAKES US STAND OUT</h2>
    </div>

<div className="scroll-panel panel-whyChoose">
  <div className="panel-content-split">
    {/* Left Side: Mission & Vision */}
    <div className="panel-left">
      <h2>Why Choose Us</h2>
      <p className="intro-text">
        Experience unparalleled Mobile App and Website Development Services that combine both Creativity and Technical expertise or making your vision a reality.
      </p>
      <div className="mission-vision-wrapper">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            Our Mission is to help businesses succeed by providing exceptional website design and mobile app development services tailored to your business needs, ensuring high-quality results.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            Our Vision is to become the top choice for businesses seeking success in the digital world. Known for our creativity, innovation, and high-quality work, we aim to be recognized as the best website and mobile app developers in Bangalore.
          </p>
        </div>
      </div>
    </div>

    {/* Right Side: Stats */}
    <div className="panel-right">
      <div className="stat-box">
        <div className="circle12">8+</div>
        <div>
          <h4>Years of experience</h4>
          <p>We've spent 8+ years mastering the art of web development and design.</p>
        </div>
      </div>
      <div className="stat-box">
        <div className="circle12">800 +</div>
        <div>
          <h4>Project Completed</h4>
          <p>With over 800+ successful projects for different clients.</p>
        </div>
      </div>
      <div className="stat-box">
        <div className="circle12">895+</div>
        <div>
          <h4>Activated Clients</h4>
          <p>895+ clients have already partnered with us, who rely on us for digital success.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="scroll-panel company-highlight-panel">
  <div className="panel-inner-layout">
    <div className="panel-text-content">
      <h2>Best Website Development Company in Mysore</h2>
      <p>
        Nakshatra Namaha Creations is a leader in delivering innovative and dynamic web solutions,
        offering services such as Website Development, Mobile App Development, Graphic Design, Animation,
        Corporate Video Production, Digital Marketing, and B2B Marketing Services.
      </p>
      <p>
        As the best website design company in Mysore, we create visually stunning and functional websites
        tailored to engage your target audience effectively.
      </p>
      <p>
        Known for being the best website development company in Mysore, we provide high-performance corporate
        websites, e-commerce platforms, and custom web solutions designed to deliver a seamless user experience.
      </p>
      <p>
        Moreover, as the best mobile app development company in Mysore, we craft cutting-edge mobile applications
        that are scalable, user-friendly, and aligned with your business goals.
      </p>
    </div>

    <div className="panel-image-wrapper">
      <img
        src="/images/best1.jpg"
        alt="Web Development Mysore"
        className="responsive-panel-image"
      />
    </div>
  </div>
</div>

    <div className="scroll-panel why-choose-wrapper">
  <h2 className="why-choose-heading">Why Your Business Needs a Website in 2025</h2>
  <div className="why-choose-grid">

    <div className="why-choose-item">
      <FontAwesomeIcon icon={faLaptop} className="icon" />
      <h4>92%</h4>
      <p>Consider easy navigation as crucial for a good website experience.</p>
    </div>

    <div className="why-choose-item">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      <h4>72%</h4>
      <p>Prefer researching businesses online before making contact.</p>
    </div>

    <div className="why-choose-item">
      <FontAwesomeIcon icon={faClock} className="icon" />
      <h4>66%</h4>
      <p>Will leave a website if it takes more than 3 seconds to load.</p>
    </div>

    <div className="why-choose-item">
      <FontAwesomeIcon icon={faCircleInfo} className="icon" />
      <h4>80%</h4>
      <p>Expect businesses to have an updated and informative website.</p>
    </div>

    <div className="why-choose-item">
      <FontAwesomeIcon icon={faMobileAlt} className="icon" />
      <h4>69%</h4>
      <p>Are more likely to engage with mobile-optimized websites.</p>
    </div>

    <div className="why-choose-item">
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
      <h4>55%</h4>
      <p>Prefer contacting businesses through their websites.</p>
    </div>

  </div>
</div>



 <div className="scroll-panel panel-ourProcess">
      <div className="panel-content">
        <h2 className="section-title">Our Process</h2>

        <div className="process-grid">
          <div className="process-card">
            <FontAwesomeIcon icon={faPaintBrush} className="icon" />
            <h4>Custom Designs</h4>
            <p>Unique visuals to engage audiences</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faLayerGroup} className="icon" />
            <h4>Scalable Framework</h4>
            <p>Structured for future growth</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faLightbulb} className="icon" />
            <h4>Innovative Solutions</h4>
            <p>Creative approaches to every project</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faWrench} className="icon" />
            <h4>Latest Technology</h4>
            <p>Modern tools and platforms used</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <h4>Advanced Protection</h4>
            <p>Comprehensive cybersecurity measures</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h4>User-Centric Design</h4>
            <p>Prioritizing ease for end-users</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faUserCog} className="icon" />
            <h4>Dedicated Team</h4>
            <p>Skilled experts for your success</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faTools} className="icon" />
            <h4>Maintenance Support</h4>
            <p>Ongoing reliability for performance</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <h4>Timely Delivery</h4>
            <p>Meeting deadlines with precision</p>
          </div>

          <div className="process-card">
            <FontAwesomeIcon icon={faSmile} className="icon" />
            <h4>Client Satisfaction</h4>
            <p>Going beyond expectations</p>
          </div>
        </div>
      </div>
    </div>
      <div className="scroll-panel panel-cta">
      <div className="cta-content11">
        <p className="cta-subtitle11">Ready to elevate your digital presence?</p>
        <h1 className="cta-heading11">LET’S BUILD YOUR NEXT<br />BIG IDEA TOGETHER</h1>
        <div className="cta-button11">
          <span>Get in Touch</span>
          <FaArrowUpRightFromSquare className="icon" />
        </div>
      </div>
    </div>
        </div>
      </div>
      <div className="space-100vh" />
    </>
  );
};

export default OurProcessScroll;
