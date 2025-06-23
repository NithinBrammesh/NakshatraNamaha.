import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from 'react-icons/fa';
import './PortFolio.css';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [projects] = useState([
    {
      image: '/images/portfoilo3.webp',
      name: 'RAJATHADRI ROYALINN',
      category: 'Hotel Management',
    },
    {
      image: '/images/portfolio4.webp',
      name: 'SK DEVELOPERS',
      category: 'Real Estate',
    },
    {
      image: '/images/portfolio2.webp',
      name: 'PURAN INTERIORS',
      category: 'Interior Design',
    },
    {
      image: '/images/portfolio1.webp',
      name: 'NESARA AYURVEDA',
      category: 'Health Care',
    },
  ]);

  return (
    <div className="portfolio-wrapper">
      <section className="portfolio-section">
        <div className="container-fluid1 px-0">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h2 className="portfolio-heading-main">Our Portfolio</h2>
              <h2 className="portfolio-heading-sub">Our Creative Portfolio</h2>
            </div>
            <div className="col-lg-6 mb-4">
              <p className="portfolio-description">
                Check our diverse collections of websites professionally designed and developed by our expert team. We are committed to finishing the projects within the
                stipulated timeline, which guarantees full satisfaction from our clients. Browse through our portfolio and experience firsthand how quality defines
                our Website Development Services. At Nakshatra Namaha Creations, we take pride in being a best website development company in Mysore, offering tailored
                services to help businesses establish a strong online presence. As a trusted website development company in Mysore, our team specializes in creating
                user-friendly, responsive websites that cater to your unique needs and goals.
              </p>
            </div>
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <img src={project.image} alt={project.name} className="portfolio-image" />
                <h4 className="portfolio-client-name">{project.name}</h4>
                <p className="portfolio-client-category">{project.category}</p>
              </div>
            ))}
          </div>

          <motion.div
            className="portfolio-cta-button-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <button type="button" className="portfolio-cta-button">
              Explore Our Projects <FaArrowRight className="ms-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
