// src/pages/services/EcommerceDevelopment.jsx

import React from 'react';
import './Ecommerce.css';
import { motion } from 'framer-motion';
import ECommerceScroll from './ECommerceScroll';
import EcomTypesSection from './ EcomTypesSection';

import { FaGlobe, FaPencilAlt, FaUsers } from "react-icons/fa";
import { FaCheck, } from "react-icons/fa";
import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';



export default function Ecommerce() {
  const cards = [
    {
      title: 'Global eCommerce development',
      icon: <FaGlobe size={28} color="#0072b1" />,
      text: `Nakshatra Namaha Creations breaks down geographical barriers, linking buyers and sellers across the globe to transform the online shopping experience.`,
    },
    {
      title: 'Tailored solutions',
      icon: <FaPencilAlt size={28} color="#0072b1" />,
      text: `Select us for tailored eCommerce development with Magento, WooCommerce, OpenCart, and Shopify platforms.`,
    },
    {
      title: 'Engaging user experience',
      icon: <FaUsers size={28} color="#0072b1" />,
      text: `Our skilled team designs visually attractive and intuitive retail websites.`,
    },
  ];


  const services = [
    {
      icon: '/images/vendor.png',
      title: 'Single Vendor eCommerce Website',
      points: [
        'A seller providing products solely through their online store to a wide customer base.',
        'Reduces compatibility issues, ensures quick feature updates and deployment, streamlines staff training, and saves time in procurement.',
        'Offers a limited product range with potential reliance on a single vendor. Key benefits include compatibility, speed, efficient training, and time-saving.',
        'compatibility, speed, training, time-saving.'
      ]
    },
    {
      icon: '/images/global.png',
      title: 'Multivendor eCommerce Website',
      points: [
        'A marketplace where multiple vendors showcase and sell their products to a broad customer base.',
        'Wide product variety, enhanced competition, competitive pricing, and expanded customer reach.',
        'Ensuring quality standards, reliable shipping, and strong seller partnerships.',
        'Product variety, competitive pricing, broader market, and customer reach.'
      ]
    },
    {
      icon: '/images/cms.png',
      title: 'Custom CMS-Based eCommerce Website',
      points: [
        'A tailored eCommerce website powered by a custom content management system.',
        'Customizable features, enhanced functionality, seamless content management, and full control over your eCommerce website.',
        'Longer development time, higher costs, potential technical challenges, and continuous maintenance needs.',
        'Customization, flexibility, content management, control.'
      ]
    },

    {
      icon: '/images/native.png',
      title: 'E-commerce app development',
      points: [
        'Developing a mobile app for e-commerce to boost customer engagement and streamline shopping experiences.',
        'Enhanced usability, seamless mobile access, promotional push notifications, and strengthened customer loyalty.',
        'Development expenses, multi-device compatibility, and continuous maintenance with updates.',
        'Improved aesthetics, seamless usability, streamlined navigation, and higher conversion rates.',
      ]
    },
    {
      icon: '/images/crossplat.png',
      title: 'Redesigning e-commerce store',
      points: [
        'Redesigning an e-commerce website to improve aesthetics, usability, and performance for a better user experience.',
        'Enhanced design, improved usability, streamlined navigation, and higher conversion potential for increased sales.',
        'Requires time and cost investment, smooth data migration, SEO compatibility, and seamless system integration.',
        'Boosted aesthetics, seamless usability, and streamlined navigation with cutting-edge eCommerce web design solutions.',
      ]
    },
    {
      icon: '/images/crossplat.png',
      title: 'eCommerce SEO',
      points: [
        'Optimizing e-commerce websites with targeted SEO strategies to enhance visibility and boost organic rankings.',
        'Boosting organic traffic, enhancing search rankings, increasing product visibility, and driving higher conversion rates.',
        'Organic traffic growth, higher rankings, product visibility, improved conversions.',
        'Conducting keyword research, optimizing pages and products, implementing technical SEO, and analyzing performance for continuous improvement.',
      ]
    },
  ];

  return (
    <>
      <div className="ecom-hero">
        <div className="ecom-overlay">
          <div className="ecom-content">
            <h1>
              Trusted e-commerce website development company in Mysore, specializing in building custom online stores.</h1>
            <p>
              Boost your business with our e-commerce website development, featuring seamless UI/UX, secure payments, and AI-driven solutions for a superior shopping experience.
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

      <div className="ecom-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="ecom-title-wrapper">
            <h2 className="ecom-title">Best ecommerce development company in mysore</h2>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="ecom-section-wrapper">
            <p className="ecom-description">
              Nakshatra Namaha Creations believes in delivering clean and efficiently functioning e-commerce solutions to our clients worldwide. We create mobile-responsive online stores and apps compatible across all platforms including iOS and Android. Our highly skilled team of ecommerce developers works closely with clients to deliver scalable and robust online stores for both web and mobile.

              We offer comprehensive custom ecommerce services to SMEs and large businesses globally, enabling them to vividly present their offerings and thrive in the digital marketplace. From simple e-commerce sites to advanced B2B/B2C portals, shopping cart systems, and payment integrations, we cater to all your ecommerce needs.
            </p>
          </div>
        </motion.div>
      </div>


      <div className="ecom-service-wrapper">
        <h2 className="ecom-service-title">E-Commerce Website Development Services We Offer</h2>
        <div className="ecom-service-grid">
          {services.map((service, idx) => (
            <div className="ecom-service-card" key={idx}>
              <img src={service.icon} alt={service.title} className="ecom-service-icon" />
              <h4 className="ecom-service-heading">{service.title}</h4>
              <ul className="ecom-service-list">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="scroll-panel ecommerce-process-wrapper">
        <motion.h2
          className="ecommerce-process-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our E-Commerce Website Development Process
        </motion.h2>

        <motion.p
          className="ecommerce-process-subtitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <strong>Cutting-Edge E-Commerce Web Development</strong>
        </motion.p>

        <motion.div
          className="ecommerce-process-desc"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            At Nakshatra Namaha Creations, our e-commerce website development process is focused on efficiency, quality, and user experience.
            We follow a structured approach to transform your vision into a fully functional online store.
          </p>
        </motion.div>
      </div>
      <ECommerceScroll />
      < EcomTypesSection />
      <div className="ecommerce-section-wrapper">
        <div className="ecommerce-section-left">
          <h2> Why choose nakshatra namaha creations as ecommerce development company in mysore?</h2>
          <p>
            As the most trusted ecommerce development company in Mysore, Nakshatra Namaha Creations has highly experienced ecommerce developers in Mysore, who are knowledgeable and well versed with the latest technologies that helps in attractive ui/ux design, quick loading, enhanced mobile responsiveness, and device compatibility for the website.
          </p>
          <div className="ecommerce-section-list">
            <ul>
              <li>High Compatibility</li>
              <li>Shopping Cart Development</li>
              <li>Great Flexibility</li>
              <li>Omnichannel Solutions</li>
              <li>Integrated CMS / ERP / CRM / PIM</li>
              <li>Multichannel Presence</li>
              <li>New Modules Development</li>
              <li>E-commerce for All Industries</li>
              <li>Progressive Web Application (PWA)</li>
            </ul>
            <div className="ecommerce-section-right">
              <img src="/images/ecmg.png" alt="Industries Mockup" />
            </div>
          </div>
        </div>
      </div>

      <div className="ecommerce-feature-wrapper">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="ecommerce-feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="ecommerce-feature-icon">{card.icon}</div>
            <h3 className="ecommerce-feature-title">{card.title}</h3>
            <p className="ecommerce-feature-desc">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="wp-intro-wrapper">
        <div className="wp-intro-left">
          <h2>Different eCommerce platforms and frameworks</h2>

          <ul className="wp-feature-list">
            <li><FaCheck /> Harness the power of WooCommerce with its detailed analytics, customizable design, extensive extension library, and strong security features to ensure a successful and secure online store.</li>
            <li><FaCheck />  Unlock the potential of Magento development to build scalable and customizable e-commerce websites, featuring advanced functionalities, seamless integrations, and outstanding performance for your business.</li>
            <li><FaCheck /> We harness the versatility of OpenCart to create feature-rich online stores, utilizing its user-friendly interface, wide range of plugins, and efficient management of products, orders, and customer data.</li>
            <li><FaCheck /> BigCommerce is an excellent platform to propel your business, offering enterprise-grade features, flexible customization, seamless integrations, and dependable performance for a successful eCommerce venture.</li>

          </ul>

        </div>

      </div>
      <FaqAccordion />
      <InfoSection />

    </>
  );
}
