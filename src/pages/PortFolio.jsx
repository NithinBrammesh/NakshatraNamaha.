import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from 'react-icons/fa';
import './PortFolio.css';
import { motion } from 'framer-motion';


const Portfolio = () => {
    const [clients] = useState([
        {
            image: '/images/portfoilo3.webp',
            name: 'RAJATHADRI ROYALINN',
            description: 'Hotel Management',
        },
        {
            image: '/images/portfolio4.webp',
            name: 'SK DEVELOPERS',
            description: 'Real Estate',
        },
        {
            image: '/images/portfolio2.webp',
            name: 'PURAN INTERIORS',
            description: 'Interior Design',
        },
        {
            image: '/images/portfolio1.webp',
            name: 'NESARA AYURVEDA',
            description: 'Health Care',
        },
    ]);

    return (

        <div className="column-line">
            <section className="two-column-section">
                <div className="container-fluid px-0">
                    {/* Top content */}
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4">
                            <h2 className="mb3">Our Portfolio</h2>
                            <h2 className="mb4">Our Creative Portfolio</h2>
                        </div>
                        <div className="col-md-6 mb-4">
                            <p>
                                Check our diverse collections of websites professionally designed and developed by our expert team. We are committed to finish the projects by the
                                stipulated timeline, this guarantees full satisfaction from our clients. Browse through our portfolio and experience firsthand on how quality fills
                                our Website Development Services. At Nakshatra Namaha Creations, we take pride in being a Best Website development company in Mysore, offering tailored
                                services to help businesses establish a strong online presence. As a trusted website development company in Mysore, our team specializes in creating
                                user-friendly, responsive websites that cater to your unique needs and goals. Let us help you bring your vision to life with cutting-edge web
                                development services at Mysore!
                            </p>
                        </div>
                    </div>

                    {/* Portfolio cards */}
                    <div className="portfolio-grid">
                        {clients.map((client, index) => (
                            <div className="portfolio-card" key={index}>
                                <img src={client.image} alt={client.name} className="portfolio-image" />
                                <h4 className="portfolio-name">{client.name}</h4>
                                <p className="portfolio-category">{client.description}</p>
                            </div>
                        ))}
                    </div>


                    {/* Button */}
                    <motion.div
                        className="d-flex justify-content-center mt-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <button type="button" className="btn btn-success">
                            Explore Our Projects <FaArrowRight className="ms-2" />
                        </button>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Portfolio;
