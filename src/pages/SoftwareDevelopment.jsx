// src/SocialMedia.js
import React from 'react';
import { motion } from 'framer-motion';
import './SoftwareDevelopment.css';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { FaUserCheck } from 'react-icons/fa6';
import { RiExpandDiagonalFill } from 'react-icons/ri';
import { MdVerifiedUser, MdOutlineDashboardCustomize } from 'react-icons/md';
import { BiShieldAlt2 } from 'react-icons/bi';

import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';
import SoftwareProcessTimeline from './SoftwareProcessTimeline';
import ReasonsToChooseSoftware from './ReasonsToChooseSoftware';

export default function SoftwareDevelopment() {
  const services = [
   {
  icon: '/images/app-development.png',
  title: 'Customized software development',
  points: [
    'We ensure all your requirements are addressed and communicated for feedback.',
    'Leveraging the latest technologies, we create intuitive and innovative interfaces for your software.',
    'Our solutions are custom-built to effectively resolve your business challenges.',
    'Our developers deliver software with 100% excellence and precision.',
  ]
}
,
{
  icon: '/images/motion.webp',
  title: 'Software consulting',
  points: [
    'You can consult with us and discuss your project at any time. We provide expert recommendations tailored to your industry based on your inputs.',
    'Adaptability and cost-effectiveness are key factors we prioritize for your business.',
    'We ensure consultation after each module is built for project approval.',
    'With our expertise, the developers at Webomindapps create the best-customized software to meet your specific needs.',
  ]
}
,{
  icon: '/images/native.png',
  title: 'Software integration',
  points: [
    'The developers at Nakshatra Namaha Creations are highly skilled in implementing the latest technologies into your software.',
    'We leverage APIs to seamlessly integrate applications.',
    'Our customized software is designed to tackle any integration challenges efficiently.',
    'We follow best practices in web app design, testing, and execution to ensure smooth and effective integration.',
  ]
}
,
{
  icon: '/images/crossplat.png',
  title: 'Customized CRM development services',
  points: [
    'At Nakshatra Namaha Creations, we don’t just develop software—we also provide SRM services.',
    'We assist in enhancing your business processes by addressing all your requirements.',
    'Our services focus on automating operations to boost efficiency.',
    'With our CRM software solutions, we help strengthen your business’s relationship with customers.',
  ]
},
{
  icon: '/images/cms.png',
  title: 'Software testing',
  points: [
    'Nakshatra Namaha Creations has a team of dedicated software testers to ensure the quality of every solution we develop.',
    'We thoroughly test each project to eliminate errors or bugs before delivery.',
    'Our goal is to provide high-performance, hassle-free, and error-free software.',
    'We also offer extended support at any stage of software usage.',
  ]
},
{
  icon: '/images/global.png',
  title: 'Software maintenance and support',
  points: [
    "To meet our clients' needs, we offer comprehensive application maintenance and support.",
    'Our 24/7 instant support ensures quick resolution of any technical issues.',
    'If an application encounters an error, we prioritize resolving it immediately.',
    'Each module undergoes thorough testing, bug fixes, and rechecking before deployment.',
  ]
}



  ];

  const cards = [
  {
    title: 'Unique solutions for your business',
    icon: <HiAdjustmentsHorizontal size={28} color="#26abe1" />,
    text: `As your business grows and complexities arise, customized software adapts to your workflow, meets technological needs, and offers personalized solutions.`,
  },
  {
    title: "Customer-centric adaptability",
    icon: <FaUserCheck size={28} color="#26abe1" />,
    text: `Customers expect personalized solutions, and businesses can adapt based on feedback, enhancing value, loyalty, and retention—over 70% prefer customized software, according to McKinsey.`,
  },    
   {
    title: 'Improved flexibility and scalability',
    icon: <RiExpandDiagonalFill size={28} color="#26abe1" />,
    text: `Customized software offers scalability, flexibility for updates, cost-effective maintenance, and eliminates licensing risks compared to off-the-shelf solutions.`,
  },
  {
    title: 'Reliability and consistency',
    icon: <MdVerifiedUser size={28} color="#26abe1" />,
    text: `Custom software ensures top performance, reliability, and dedicated support for seamless maintenance, security, and issue resolution.`,
  },
  {
    title: 'Improved flexibility and scalability',
    icon: <RiExpandDiagonalFill size={28} color="#26abe1" />,
    text: `Customized software offers scalability, flexibility for updates, cost-effective maintenance, and eliminates licensing risks compared to off-the-shelf solutions.`,
  },
  {
    title: 'Reliability and consistency',
    icon: <MdVerifiedUser size={28} color="#26abe1" />,
    text: `Custom software ensures top performance, reliability, and dedicated support for seamless maintenance, security, and issue resolution.`,
  },
  {
    title: 'Minimal interface problem',
    icon: <MdOutlineDashboardCustomize size={28} color="#26abe1" />,
    text: `With software tailored to your needs, interface issues are minimal, requiring little training as each department operates with familiar, customized features.`,
  },
  {
    title: 'Additional security',
    icon: <BiShieldAlt2 size={28} color="#26abe1" />,
    text: `Generic software is vulnerable due to its open code, whereas custom-built software remains a secure, closed-code solution, minimizing intrusions to nearly zero.`,
  }
  ];

  return (
    <>
      <div className="software-develop-hero">
        <div className="software-develop-overlay">
          <div className="software-develop-content">
                <h1>A trusted software development company in Mysore, specializing in creating custom solutions tailored to your needs.</h1>
            <p>
Maximize your digital potential with our software development expertise. We empower businesses across industries with cutting-edge UI/UX design, IoT integration, and AI-driven solutions, delivering versatile software tailored to any challenge. </p>
            <motion.a
              href="/contact"
              className="software-develop-talk-btn"
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

      <div className="software-develop-section">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="software-develop-title">Reliable Software Development Company in Mysore</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="software-develop-wrapper">
            <p className="software-develop-description">
            Nakshatra Namaha Creations is a leading software development company in Mysore, delivering exceptional, user-centric solutions tailored to meet your business objectives. Our team of experts develops high-performance, seamless, and user-friendly software across various platforms, ensuring smooth functionality and reliability. Committed to innovation and precision, we create solutions that empower businesses to enhance connectivity, streamline operations, and drive growth in the digital landscape. We also specialize in web development, providing comprehensive digital solutions to meet diverse business needs.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="software-develop-services">
        <h2 className="software-develop-services-title">Software Development Services We Offer</h2>
        <div className="software-develop-services-grid">
          {services.map((service, idx) => (
            <div className="software-develop-services-card" key={idx}>
              <img src={service.icon} alt={service.title} className="software-develop-services-icon" />
              <h4 className="software-develop-services-heading">{service.title}</h4>
              <ul className="software-develop-services-list">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <SoftwareProcessTimeline/>

      <div className="software-develop-card-wrapper">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="software-develop-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="software-develop-card-icon">{card.icon}</div>
            <h3 className="software-develop-card-title">{card.title}</h3>
            <p className="software-develop-card-desc">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="software-develop-industry">
        <div className="software-develop-industry-left">
          <h2>Why choose Nakshatra Namaha Creations as a Social Media Marketing Company in Mysore?</h2>
          <p>
         At Nakshatra Namaha Creations, we specialize in software development in Mysore, delivering seamless and efficient solutions. With a focus on quality and client satisfaction, we blend expertise with innovation to help businesses thrive in the digital space. Here’s why we’re Mysore’s trusted choice for software development. We also offer web development services to meet diverse business needs.
          </p>
        </div>
        <div className="software-develop-industry-right">
          <img src="/images/rajanna1.png" alt="Industries Mockup" />
        </div>
      </div>

      <ReasonsToChooseSoftware />
      <FaqAccordion />
      <InfoSection />
    </>
  );
}
