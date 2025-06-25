// src/Services.js
import React from 'react';

import './WordPress.css';
import { motion } from 'framer-motion';
import WordPressFeaturedCard from './WordPressFeaturedCard';
import { FaVectorSquare, FaChartLine, FaLightbulb } from 'react-icons/fa';
import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';



export default function WordPress() {

  const services = [
    {
      icon: '/images/motion.webp',
      title: 'Custom WordPress Development',
      points: [ 
        'Expert in selecting the best tools and technologies for robust WordPress solutions.',
        'Customized WordPress websites designed to elevate your business and drive success.',
        'Deep understanding of key development choices to ensure website reliability and performance.',
        'Years of experience delivering seamless WordPress sites that meet market demand.',
      ]
    },
    {
      icon: '/images/online-store.png',
      title: 'WordPress E-Commerce Development',
      points: [
        'Focus on high-quality, user-friendly design and flawless functionality in every e-commerce website.',
        'Proven experience in delivering innovative WordPress e-commerce sites that drive business growth and engagement.',
        'Expertise in developing online stores with WooCommerce and custom integrations.',
        'Skilled in selecting the right tools and technologies for optimal website performance and scalability.',
      ]
    },
    {
      icon: '/images/crossplat.png',
      title: 'WordPress Headless Development',
      points: [
        'Broad platform compatibility to deliver content across websites, apps, and devices.',
        'Ensures a seamless and consistent experience with a decoupled WordPress backend.',
        'Ideal for brands looking to scale efficiently with minimal resources.',
        'Enables faster updates and streamlined content management for evolving business needs.',
      ]
    },
    {
      icon: '/images/application.png',
      title: 'WordPress Migration',
      points: [
        'Effortlessly migrate your website to WordPress without data loss or downtime.',
        'Ensure secure transfer of databases, content, and media files with robust protection.',
        'Tailored migration plans for websites of all sizes and complexities.',
        'Retain search engine rankings by properly redirecting URLs and maintaining SEO settings.',
      ]
    },
    {
      icon: '/images/crossplat.png',
      title: 'WordPress Maintenance and Support',
      points: [
        'Reliable performance backed by our expert WordPress maintenance and support team.',
        'Proficient in optimizing and maintaining WordPress sites for smooth functionality.',
        'Efficient support services to ensure your website remains secure and up-to-date.',
        'Improved site performance and reduced downtime through proactive maintenance and timely updates.',
      ]
    },
    {
      icon: '/images/lms.png',
      title: 'WordPress LMS Development',
      points: [
        'LMS websites built with industry standards for top-tier performance and reliability.',
        'Leveraging the latest WordPress tools to keep your learning platform innovative and up-to-date.',
        'Delivering smooth, intuitive user experiences tailored for learners and educators.',
        'Supporting educational growth with reliable, feature-rich LMS solutions.',
      ]
    },
    {
      icon: '/images/native.png',
      title: 'WordPress API Integration Services',
      points: [
        'Reliable performance backed by our expert WordPress API integration team.',
        'Proficient in integrating third-party APIs for dynamic, high-performance websites.',
        'Seamlessly designed integrations to ensure consistency across all platforms.',
        'Improved ROI by connecting your website with essential tools and services effortlessly.',
      ]
    },
    {
      icon: '/images/app-development.png',
      title: 'WordPress Theme and Plugin Development',
      points: [
        'Tailor-made themes designed to align with your brand identity and business goals.',
        'Creating bespoke plugins to extend your websites functionality and enhance performance.',
        'Developing lightweight, responsive themes and plugins for faster load times.',
        'Providing maintenance and updates to keep your themes and plugins optimized.',
      ]
    },

  ];
  const cards = [
    {
      title: 'Innovative evolution.',
      icon: <FaVectorSquare size={28} color="#4c28ec" />,
      text: `We offer comprehensive WordPress theme customization tailored to your specific needs. 
      Our team works closely with you to adjust and personalize themes, ensuring they align with 
      your brand’s identity and functionality requirements.`,
    },
    {
      title: 'Dynamic progression.',
      icon: <FaChartLine size={28} color="#4c28ec" />,
      text: `We ensure that every website we develop evolves with time. We focus on delivering 
      flexible, innovative solutions that scale with your business, always staying ahead of the 
      user-friendly WordPress websites that grow alongside your brand.`,
    },
    {
      title: 'Tailored excellence.',
      icon: <FaLightbulb size={28} color="#4c28ec" />,
      text: `We streamline our workflow by offering easy-to-use, SEO-friendly WordPress themes and 
      plugins that are fully customizable. This ensures your website performs well in search rankings 
      while providing flexibility for future updates and modifications.`,
    },
  ];

  return (
    <>
      <div className="wordpressapp-hero">
        <div className="wordpressapp-overlay">
          <div className="wordpressapp-content">
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

      <div className="wordpressapp-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="wordpressapp-title">Reliable WordPress Website Development Company in Mysore</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="wordpressapp-section-wrapper">
           
            <p className="wordpressapp-description">
              Nakshatra Namaha Creations is a leading WordPress development company in Mysore, delivering exceptional, user-centric websites that align with your business objectives. Our team of professionals builds WordPress websites with seamless functionality, strong performance, and a refined, user-friendly experience. We specialize in custom themes, plugins, and responsive designs to ensure optimal performance across devices. Committed to innovation and precision, we create websites that enhance your brand’s online presence and foster meaningful connections in the digital landscape.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="wordpressservices-wrapper">
        <h2 className="wordpressservices-title">Mobile Application Development Services We Offer</h2>
        <div className="wordpressservices-grid">
          {services.map((service, idx) => (
            <div className="wordpressservices-card" key={idx}>
              <img src={service.icon} alt={service.title} className="wordpressservices-icon" />
              <h4 className="wordpressservices-heading">{service.title}</h4>
              <ul className="wordpressservices-list">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <WordPressFeaturedCard />

      <div className="wordpressapp-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="wordpressapp-title">Why choose Nakshatra Namaha Creations as a WordPress Website Development Company in Mysore?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="wordpressapp-section-wrapper">

            <p className="wordpressapp-description">

              At Nakshatra Namaha Creations, we specialize in WordPress website development in Mysore, delivering seamless and engaging user experiences. With a focus on quality and client satisfaction, we blend expertise with creativity to help businesses thrive in the digital world. Here's why we are Mysore's trusted choice for WordPress website development.
            </p>
          </div>
        </motion.div>
      </div>|
      
      <div className="wpcard-wrapper">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="wpcard"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="wpcard-icon-bg">{card.icon}</div>
            <h3 className="wpcard-title">{card.title}</h3>
            <p className="wpcard-desc">{card.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="industry-section-wrapper">
        <div className="industry-section-left">
          <h2>Importance of WordPress websites</h2>
          <p>
            As a leading WordPress website development company in Mysore, we provide innovative digital solutions across industries like service, education, entertainment, real estate, and more. Our expertise enables businesses to improve efficiency, engage their audience, and seamlessly achieve their goals through custom WordPress websites tailored to their specific needs.
          </p>
          <div className="industry-section-list">
            <ul>
              <li>Build a website with full customization</li>
              <li>Best user interface</li>
              <li>Content management website</li>
              <li>Multiple theme options</li>
              <li>Attractive design</li>
              <li>Free and light-weighted plugins</li>
              <li>Best blogging site</li>
            </ul>

            <ul>
              <li>Fast loading and easy access</li>
              <li>Cost-effective</li>
              <li>Create multiple pages</li>
              <li>Mobile responsive and browser compatibility</li>
              <li>Search engine optimization</li>
              <li>Social media integration</li>
            </ul>

          </div>
        </div>
        <div className="industry-section-right">
          <img src="/images/Kavu.webp" alt="Industries Mockup" />
        </div>
      </div>
        <FaqAccordion/>
        <InfoSection/>
    </>
  );
}
