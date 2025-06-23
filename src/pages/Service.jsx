// src/Services.js
import React from 'react';



import './Service.css';
import { motion } from 'framer-motion';
import FeatureCardGrid from './FeatureCardGrid';
import ClientSlider from './ClientSlider';
import InfoSection from '../components/InfoSection';


export default function Services() {

  return (
    <>
   <div className="services-hero">
  <div className="services-overlay">
    <div className="services-content">
      <h1>Our Services</h1>
      <p>
        We offer a wide range of creative services to help businesses of all sizes achieve their goals.
      </p>
    </div>
  </div>
</div>
<div className="section-vertical">
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section-title">Amplify Your Brand with Professional Digital Solutions</h2>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="section-content-wrapper">
      <div className="section-line"></div>
      <p className="section-description">
        At Nakshatra Namaha Creations, we specialize in helping brands reach new heights with cutting-edge digital
        solutions. Whether you’re looking to build a strong online presence, engage your audience, or drive business
        growth, our team of experts is here to create tailored strategies that align with your vision. From web
        development and app design to digital marketing and branding, we offer a comprehensive range of services to
        amplify your brand and connect with your customers effectively.
      </p>
    </div>
  </motion.div>
</div>
<FeatureCardGrid/>
<ClientSlider/>
<InfoSection/>
    </>
  );
}
