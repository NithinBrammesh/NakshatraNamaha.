// src/UIUXDevelopment.js
import React from 'react';
import { motion } from 'framer-motion';
import './UIUXDevelopment.css';

import { MdAnalytics, MdVisibility, MdOutlineDesignServices } from 'react-icons/md';
import { FaVials } from 'react-icons/fa';  // For user testing (symbolic of experimentation)

import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';
import UIUXProcessTimeline from './UIUXProcessTimeline';

  export default function UIUXDevelopment() {
  const services = [
{
  icon: '/images/apple.png',
  title: 'Android app UI/UX',
  points: [
    'Nakshatra Namaha Creations is known for its high-quality, seamless integration across platforms.',
    'We ensure a consistent user experience on all devices with our expert UI/UX designs.',
    'Our Android mobile applications are crafted for smooth performance and high quality.',
    'As one of the best UI/UX companies in Bangalore, we prioritize delivering exceptional user experiences.',
  ]
},
{
  icon: '/images/android.png',
  title: 'iOS app UI/UX',
  points: [
    "iOS app designs follow Apple's Human Interface Guidelines (HIG) for consistency.",
    'We ensure robust, well-crafted app designs that prioritize clarity and precision.',
    'Our designs maintain a 1X resolution for optimal quality across all devices.',
    'Vector-based designs ensure no-loss clarity, even on high-resolution displays.',
  ]
},
{
  icon: '/images/app-development.png',
  title: 'Hybrid app UI/UX',
  points: [
    'Companies today require apps on both Android and iOS platforms for broader reach.',
    'Our expert designers create seamless Hybrid App UI/UX for optimal cross-platform performance.',
    'Hybrid app designs offer greater convenience and accessibility for users across devices.',
    'This approach makes mobile apps more advantageous, enhancing customer satisfaction.',
  ]
},
{
  icon: '/images/crossplat.png',
  title: 'Web app design',
  points: [
    'Nakshatra Namaha Creations is a top UI/UX design company in Mysore, providing standout digital experiences.',
    'We focus on web app design that enhances user interaction and brand connection.',
    'Our strategic use of UI/UX design helps create lasting positive impressions.',
    'This approach drives higher customer engagement, making your brand memorable.',
  ]
},
{
  icon: '/images/native.png',
  title: 'Website design',
  points: [
    'Nakshatra Namaha Creations, a leading UI/UX design company in Mysore, delivers exceptional web app experiences.',
    'We design web apps that seamlessly connect users with your brand.',
    'Our UI/UX strategy focuses on creating memorable, positive impressions.',
    'This approach significantly boosts customer engagement and brand loyalty.',
  ]
},
{
  icon: '/images/cms.png',
  title: 'Usability testing',
  points: [
    'Nakshatra Namaha Creations conducts thorough usability tests during web application and website design.',
    'We perform cross-platform usability checks across various devices for optimal performance.',
    'Our design process ensures error-free outputs with smooth navigation.',
    'We guarantee no bug reports after delivery, ensuring a seamless user experience.',
  ]
}

  ];

  const cards = [
    {
    title: 'The best design solutions for B2B and B2C',
    icon: <MdOutlineDesignServices size={28} color="#26abe1" />,
    text: `Whether for a large enterprise or a budding startup, we uphold professional integrity to deliver excellence in every project. We craft innovative solutions tailored to your specific needs while ensuring your involvement in every discussion about your website or mobile app design.`,
  },
  {
    title: 'Our result in UI/UX designing services',
    icon: <MdAnalytics size={28} color="#26abe1" />,
    text: `Every design we create is result-oriented, aligning with the client's perspective to deliver impactful outcomes. By transforming your requirements into strategic solutions, we ensure better-driven results. Our approach is rooted in research-based design, considering both your brand identity and user needs.`,
  },
  {
    title: 'Visual design',
    icon: <MdVisibility size={28} color="#26abe1" />,
    text: `The visual design (UX) is the first impression your application makes on users. At Webomindapps, we create interactive and intuitive designs that captivate and engage customers. Our designs effectively communicate your brand, products, and services while ensuring a seamless user experience.`,
  },
  {
    title: 'User testing',
    icon: <FaVials size={28} color="#26abe1" />,
    text: `As a leading UI/UX design agency in Mysore, we prioritize user-centric design by identifying real-world usability challenges and addressing them effectively. By analyzing user interactions, we refine and enhance website experiences to ensure seamless navigation and engagement.`,
  },
];  

  return (
    <>
      <div className="uiux-hero">
        <div className="uiux-overlay">
          <div className="uiux-content">
            <h1>Leading UI/UX Design Company in Mysore, creating seamless and engaging user experiences.</h1>
            <p>
              Enhance your digital presence with innovative UI/UX design services crafted for seamless user experiences and business growth.
                  </p>
            <motion.a
              href="/contact"
              className="uiux-talk-btn"
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

      <div className="uiux-section">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="uiux-title">Best UI/UX Design Company in Mysore</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="uiux-wrapper">
            <p className="uiux-description">
            A well-crafted, user-friendly UI/UX design is crucial for building a strong digital presence. As the leading UI/UX design company in Mysore, we create personalized solutions that align with your business goals. Our designs are meticulously crafted to ensure they are visually stunning and offer seamless functionality across all devices, providing an optimal user experience. As the top UI/UX design company in Mysore, our team focuses on blending aesthetics, usability, and accessibility to create designs that elevate your business. With a keen eye for detail and a commitment to quality, we ensure that every design is both visually appealing and highly functional, helping your brand leave a lasting impression in the digital space.
              </p>
          </div>
        </motion.div>
      </div>

      <div className="uiux-services">
        <h2 className="uiux-services-title">UI/UX Development Services We Offer</h2>
        <div className="uiux-services-grid">
          {services.map((service, idx) => (
            <div className="uiux-services-card" key={idx}>
              <img src={service.icon} alt={service.title} className="uiux-services-icon" />
              <h4 className="uiux-services-heading">{service.title}</h4>
              <ul className="uiux-services-list">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <UIUXProcessTimeline/>



      <div className="uiux-industry">
        <div className="uiux-industry-left">
          <h2>Why choose Nakshatra Namaha Creations as a UI/UX Design Company in Mysore?</h2>
          <p>
         As a leading UI/UX design company in Mysore, Nakshatra Namaha Creations combines expertise, creativity, and a user-centric approach in every project. We specialize in crafting visually compelling and highly functional designs that enhance user experience and boost online engagement. Whether for innovative startups or established brands, we deliver tailored UI/UX solutions focused on aesthetics, usability, and seamless interaction to elevate your digital presence.
            </p>
        </div>
        <div className="uiux-industry-right">
          <img src="/images/rajanna1.png" alt="Industries Mockup" />
        </div>
      </div>
            <div className="uiux-card-wrapper">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="uiux-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="uiux-card-icon">{card.icon}</div>
            <h3 className="uiux-card-title">{card.title}</h3>
            <p className="uiux-card-desc">{card.text}</p>
          </motion.div>
        ))}
      </div>

   
      <FaqAccordion />
      <InfoSection />
    </>
  );
}
