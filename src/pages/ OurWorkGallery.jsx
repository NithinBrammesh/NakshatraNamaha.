import React, { useState } from 'react';
import './OurWorkGallery.css'; 

const OurWorkGallery = () => {
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
    {
      image: '/images/scrr1.png',
      name: 'Avitri Spices',
    },
    {
      image: '/images/scrr2.png',
      name: 'Brindavan Constructions',
      category: 'Constructions',
    },
    {
      image: '/images/scrr3.png',
      name: 'Sarang Creations',
    },
  ]);

  return (
    <section className="our-work-section">
      <h2 className="section-title">Recent Works</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.name} className="portfolio-image" />
            <div className="portfolio-info">
              <h4 className="portfolio-client-name">{project.name}</h4>
              <p className="portfolio-client-category">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkGallery;
