// src/pages/services/WebsiteDevelopment.jsx

import React from 'react';
import './WebsiteDevelopment.css';
import { motion } from 'framer-motion';
import MobileProcessTimeline from './MobileProcessTimeline';
import MobileFeaturedCard from './MobileFeaturedCard';
import DesignTypesSection from './DesignTypesSection';
import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';

export default function WebsiteDevelopment() {

    const services = [
  {
    icon: '/images/android.png',
    title: 'Android App Development',
    points: [
      'Expert in selecting the best technologies and tools for robust Android solutions.',
      'Customized Android apps designed to elevate your business and drive success.',
      'Deep understanding of essential tech choices to ensure app reliability and performance.',
      'Years of experience delivering seamless Android apps that meet market demands.',
    ]
  },
  {
    icon: '/images/apple.png',
    title: 'iOS App Development',
    points: [
      'Focus on high-quality, user-friendly design and flawless functionality in every iOS app.',
      'Proven experience in delivering innovative iOS apps that support business growth and engagement.',
      'Expertise in developing iOS apps for iPhones, iPads and other Apple devices.',
      'Skilled in choosing the right technologies and tools for optimal iOS app performance.',
    ]
  },
  {
    icon:  '/images/app-development.png',
    title: 'Hybrid App Development',
    points: [
      'Broad platform compatibility to reach users on both iOS and Android.',
      'Delivers a seamless and consistent experience across all devices.',
      'Perfect for brands aiming to expand their reach with limited resources.',
      'Ensures faster updates and streamlined app management for evolving needs.',
    ]
  },
  {
    icon: '/images/native.png',
    title: 'Native App Development',
    points: [
      'Native apps aligned with design standards for top-tier performance and reliability.',
      'Leveraging the latest OS features to keep your app innovative and up-to-date.',
        'Delivering smooth, intuitive user experiences tailored to each platform.',
      'Supporting business growth with reliable, platform-optimized app solutions.',
    ]
  },
  {
    icon: '/images/crossplat.png',
    title: 'Cross Platform App Development',
    points: [
      'Reliable performance backed by our expert cross-platform development team.',
      'Expert in React Native and Flutter for dynamic, high-performance apps.',
        'Efficiently designed apps that ensure consistency across all devices and platforms.',
      'Improved ROI by reaching users on both platforms effortlessly.',

    ]
  },
];
  return (
    <>
      <div className="website-hero">
        <div className="website-overlay">
          <div className="website-content">
            <h1>Trusted mobile app development company in Mysore, specializing in creating custom applications.</h1>
            <p>
             
Maximize your digital potential with our mobile app development expertise. We equip businesses across industries with advanced UI/UX designs, IoT integration, and AI-driven solutions, creating versatile apps for any challenge.
            </p>
                          <motion.a
      href="/contact"
      className="talk-btn"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <span className="text">Talk to our expert</span>
      <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </motion.a>
          </div>

        </div>
      </div>

      <div className="website-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="website-title">Reliable Mobile Application Development Company in Mysore</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="website-section-wrapper">
            <div className="website-line"></div>
            <p className="website-description">
          Nakshatra Namaha Creations is a leading mobile app development company in Mysore, designed with exceptional, user-centric solutions meeting your business objectives. Our team of professionals develops mobile applications that are smooth and seamless in functionalities with strong performance, refined and user-friendly across iOS, Android and cross-platform frameworks. We commit to innovation and precision while building apps that help businesses provide their audience with effective connectivity to grow, in depth, in the digital landscape.
            </p>
          </div>
        </motion.div>

      </div>
      
      <div className="app-dev-wrapper">
  <h2 className="app-dev-title">Mobile Application Development Services We Offer</h2>
  <div className="app-dev-grid">
    {services.map((service, idx) => (
      <div className="app-dev-card" key={idx}>
        <img src={service.icon} alt={service.title} className="app-dev-icon" />
        <h4 className="app-dev-heading">{service.title}</h4>
        <ul className="app-dev-list">
          {service.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

</div>
<MobileProcessTimeline/>
<MobileFeaturedCard/>

      <div className="website-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="website-title">Why choose Nakshatra Namaha Creations as a Mobile App Development Company in Mysore?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="website-section-wrapper">
            <div className="website-line"></div>
            <p className="website-description">
          At Nakshatra Namaha Creations, we specialize in Mobile App Development in Mysore that delivers a seamless and engaging experience. With a focus on quality and client satisfaction, we combine expertise with creativity to help businesses succeed in the digital space. Here’s why we’re Mysore’s trusted choice for mobile app development.
            </p>
          </div>
        </motion.div>
      </div>

          <DesignTypesSection/>
          
          <div className="industries-wrapper">
      <div className="industries-left">
        <h2>Industries we serve</h2>
        <p>
          We offer innovative digital solutions as a leading Mobile App and
          Website Development Company in Mysore, catering to industries such as
          service, education, entertainment, real estate, etc. Our expertise
          helps businesses enhance efficiency, engage their audience and
          achieve their goals seamlessly.
        </p>
        <div className="industries-list">
          <ul>
            <li>Service Industry</li>
            <li>Education Industry</li>
            <li>Finance</li>
            <li>Health</li>
            <li>Real Estate</li>
          </ul>
          <ul>
            <li>Entertainment</li>
            <li>Automobile</li>
            <li>Fitness</li>
            <li>Hospitality</li>
            <li>Logistics</li>
          </ul>
        </div>
      </div>
      <div className="industries-right">
        <img src="/images/rak.webp" alt="Industries Mockup" />
      </div>
    </div>
    <FaqAccordion/>
    <InfoSection/>
    </>
  );
}
