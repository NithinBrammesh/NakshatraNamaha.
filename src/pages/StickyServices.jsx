import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StickyServices.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "WordPress Website Development",
    desc: "As a best WordPress Website Development​ Company in Mysore, we design visually appealing, user-friendly websites with a focus on clean layouts and responsive visuals. Our designs ensure a seamless user experience, with attention to visual consistency and professional aesthetics. We prioritize fast load times, SEO optimization and scalable performance, ensuring your site is secure, mobile-responsive and delivers exceptional results across all devices.",
    img: "/images/may4.webp",
  },
  {
    title: "React JS Website Development",
    desc: "As a React JS Website Development Company in Mysore, we create visually appealing, custom web designs with a user-friendly interface and responsive layouts. Our focus on high performance ensures fast load times with lightweight code, minified CSS and JavaScript and PageSpeed optimization. Additionally, we optimize for both mobile and SEO, ensuring your website delivers a seamless experience and performs well across all devices.",
    img: "/images/reactjs.jpg",
  },
  {
    title: "Ecommerce Website Development",
    desc: "As an Ecommerce Website Development Company in Mysore, we build visually appealing, user-friendly platforms designed for seamless shopping experiences. Our responsive designs adapt to all devices, ensuring a consistent look and feel. We prioritize performance, optimizing for fast loading times and reliable functionality to enhance user satisfaction and boost conversions. Each project reflects modern aesthetics, intuitive navigation and smooth operation, driving results for your business.",
    img: "/images/ecom.jpg",
  },
  {
    title: "Node JS Website Development",
    desc: "As a Node JS Website Development Company in Mysore, we build websites with a user-friendly interface and custom web design focused on high performance and fast load times using lightweight code. Our development includes minified CSS and JavaScript for efficiency and an SEO-friendly structure to boost search visibility. With mobile optimization and PageSpeed optimization, we ensure a seamless experience across all devices.",
    img: "/images/nodejs1.jpg",
  },
 

];

const ScrollCard = ({ service, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { scale: 1, y: 0 },
        {
          scale: 0.8,
          y: -100,
          ease: "power1.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top center+=100",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="card text-white"
      style={{ zIndex: index + 1 }} // Higher z-index = newer card on top
    >
      <img src={service.img} className="card-img" alt={service.title} />
      <div className="card-img-overlay bg-dark bg-opacity-50 rounded p-3">
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text11">{service.desc}</p>
      </div>
    </div>
  );
};

const StickyServices = () => {
 
  return (
 
    <div className="services-container">
  <div className="sticky-services-inner">
      {/* LEFT SIDE TEXT */}
      <div className="left-content" >

        <h1>Our Website Development Services</h1>
        <p>
          Nakshatra Namaha Creations is a leading website development and design company in Mysore.
          We craft custom, SEO-friendly, and mobile-optimized websites that deliver fast performance and seamless user experience.
        </p>
        <div className="row custom-row">
          {services.map((service, index) => (
            <div key={index} className="col-md-61 ">
              <h4 className="underline1">
                {service.title} <i className="fa-solid fa-arrow-right"></i>
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE ANIMATED CARDS */}
      <div className="right-images">
        {services
          .slice(0)
          .reverse()
          .map((service, index) => (
            <ScrollCard key={index} service={service} index={index} />
          ))}
      </div>
    </div>
</div>
  );
};

export default StickyServices;
