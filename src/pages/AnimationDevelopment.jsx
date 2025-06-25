// src/AnimationDevelopment.js
import React from 'react';
import { motion } from 'framer-motion';
import './AnimationDevelopment.css';
import { MdOutlineVideoLibrary, MdOutlineSlowMotionVideo, MdOutlineDraw } from 'react-icons/md';
import { GiPerson, GiPuppet, GiFilmStrip } from 'react-icons/gi';

import {
  MdAnimation,
  MdAutoStories,
  MdHighQuality,
  MdAccessTime,

} from "react-icons/md";

import { LuSettings2 } from "react-icons/lu"; // for 'Customized Solutions'

import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';
import TwoDAnimationFeatureCard from './TwoDAnimationFeatureCard';

export default function AnimationDevelopment() {
  const services = [
  {
    title: 'Explainer Videos',
    icon: <MdOutlineVideoLibrary size={28} color="#26abe1" />,
    points: [
      'Simplify your marketing efforts with engaging explainer video content.',
      'Transform complex ideas into clear and engaging messages with explainer videos.',
      'Deliver your brand message effectively with visually appealing and clear animations.',
      'Reach wider audiences across platforms with adaptable and optimized explainer videos.',
    ],
  },
  {
    title: 'Character Animation',
    icon: <GiPerson size={28} color="#26abe1" />,
    points: [
      'Custom-designed characters to suit your brand’s vision and message.',
      'Showcase emotions, actions and personalities through expertly designed character animations.',
      'Trust our experts to design unique and professional character animations.',
      'Delivering high-quality animations that add value to your brand or project.',
    ],
  },
  {
    title: 'Puppet Animation',
    icon: <GiPuppet size={28} color="#26abe1" />,
    points: [
      "Custom-designed animations that match your brand's unique vision and message.",
      'Deliver your message effectively with detailed and audience-friendly puppet animations.',
      'Create memorable content with unique characters and movements using professional puppet animation.',
      'Engage viewers with lifelike movements and compelling narratives through our puppet animation.',
    ],
  },
  {
    title: 'Storyboard & Pre-visualization',
    icon: <GiFilmStrip size={28} color="#26abe1" />,
    points: [
      'Our animation process begins with clear storyboards and scene planning.',
      'Helps align creative vision and client expectations before production.',
      'Ensures each shot, transition, and element is accounted for early.',
      'Reduces revision cycles and improves final animation quality.',
    ],
  },
  {
    title: 'Motion Graphics',
    icon: <MdOutlineSlowMotionVideo size={28} color="#26abe1" />,
    points: [
      'Enhance your brand identity with creative and dynamic motion graphics.',
      'Create promotional videos that leave a lasting impression on viewers.',
      'Bring static visuals to life with vibrant and meaningful motion graphics.',
      'Capture audience attention with engaging designs and smooth transitions.',
    ],
  },
  {
    title: 'Storyboard and Concept Design',
    icon: <MdOutlineDraw size={28} color="#26abe1" />,
    points: [
      'Ensuring seamless flow and clarity in every stage of the storyboard process.',
      'Bringing concepts to life with attention to detail and innovative techniques.',
      'Designing storyboards that connect with your audience and leave a memorable impact.',
      'Turning abstract concepts into structured visual stories for better communication.',
    ],
  },
];

  const cards = [
     {
    title: 'Expertise in Diverse Animation Styles',
    icon: <MdAnimation size={28} color="#26abe1" />,
    text: `We offer a wide range of animation services, including character animation, puppet animation and more. Each project is crafted to reflect your unique requirements and vision. Our team ensures the animations are dynamic and visually appealing. This versatility sets us apart as a trusted animation partner.`,
  },
  {
    title: 'Focus on Storytelling',
    icon: <MdAutoStories size={28} color="#26abe1" />,
    text: `Every animation we create is designed to tell a compelling story that engages viewers. We take the time to understand your ideas and translate them into captivating visuals. Through creative design and seamless motion, we bring your narrative to life. Our storytelling approach ensures your audience remains invested.`,
  },
  {
    title: 'High-Quality Visuals',
    icon: <MdHighQuality size={28} color="#26abe1" />,
    text: `We prioritize quality in every frame, ensuring crisp and engaging animations. Using modern tools and techniques, we deliver animations that meet industry standards. From vibrant motion graphics to intricate stop-motion, every detail is refined. This commitment to excellence makes us a reliable choice for your animation needs.`,
  },
  {
    title: 'Timely Delivery and Support',
    icon: <MdAccessTime size={28} color="#26abe1" />,
    text: `We understand the importance of deadlines and ensure timely delivery of every project. Our team works efficiently without compromising on quality or creativity. We also provide post-delivery support to make adjustments if required. This dedication to client satisfaction is a key reason to choose us.`,
  },
  {
    title: 'Customized Solutions for Every Client',
    icon: <LuSettings2 size={28} color="#26abe1" />,
    text: `Every animation project is unique and we adapt to meet your specific goals. Whether it’s for branding, advertising or education, our animations align with your objectives. We collaborate closely with you throughout the process to ensure the best results. Our personalized approach ensures every project stands out.`,
  },
  ];

  return (
    <>
      <div className="animation-hero">
        <div className="animation-overlay">
          <div className="animation-content">
            <h1>Most driven 2D Animation Company in Mysore</h1>
            <p>
             Nakshatra Namaha Creations, a trusted 2D animation studio and proud Google Partner, brings stories to life through stunning two-dimensional visuals. Using hand-drawn and digitally crafted techniques, we create engaging animations for films, games, and marketing.
               </p>
            <motion.a
              href="/contact"
              className="animation-talk-btn"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text">Talk to our animation team</span>
              <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      <div className="animation-section">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="animation-title">2D Animation Company in Mysore</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="animation-wrapper">
            <p className="animation-description">
             By using professional graphics, we bring ideas to life through impact and engaging visuals as a reliable 2D Animation Company in Mysore. Our staff consists of creatives and specialists who work with clients to create business-oriented animation for education, entertainment and many more. The objective here is storytelling and design. Each animation here is created to leave behind long-lasting impressions while meeting the diverse needs of their clients. Whether you are talking about explainer videos, animated ads, puppet animation or character animations, our 2D animation services help in effectively communicating with the masses and capturing audience attention. We make sure that each project is unique, using modern tools and techniques set to your vision because we are based in Mysore.
              </p>
          </div>
        </motion.div>
      </div>

      <div className="animation-services">
        <h2 className="animation-services-title">2D Animation Service We Offer</h2>
        <div className="animation-services-grid">
          {services.map((service, idx) => (
            <div className="animation-services-card" key={idx}>
          <div className="animation-services-icon">{service.icon}</div>
              <h4 className="animation-services-heading">{service.title}</h4>
              <ul className="animation-services-list">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
           
     <TwoDAnimationFeatureCard/>

      <div className="animation-industry">
        <div className="animation-industry-left">
          <h2>Why choose Nakshatra Namaha Creations as a 2D Animation Company in Mysore?</h2>
          <p>
       Choosing the right partner for your animation needs is crucial for impactful storytelling. As a 2D Animation Company in Mysore, we specialize in character animation, puppet animation, stop-motion and motion graphics. Our team is dedicated to delivering engaging visuals that elevate your brand. We combine creativity with technical expertise to craft animations that connect with your audience. Here’s why Nakshatra Namaha Creations is the ideal choice for your 2D animation projects.  </p>
        </div>
        <div className="animation-industry-right">
          <img src="/images/rajanna1.png" alt="2D Animation Showcase" />
        </div>
      </div>

      <div className="animation-card-wrapper">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="animation-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="animation-card-icon">{card.icon}</div>
            <h3 className="animation-card-title">{card.title}</h3>
            <p className="animation-card-desc">{card.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="b2b-industries-wrapper">
        <div className="b2b-industries-left">
          <h2>Industries We Serve</h2>
          <p>
          We offer innovative digital solutions as a leading Mobile App and Website Development Company in Mysore, catering to industries such as service, education, entertainment, real estate, etc. Our expertise helps businesses enhance efficiency, engage their audience and achieve their goals seamlessly.
            </p>
          <div className="b2b-industries-list">
            <ul>
              <li>Service Industry</li>
              <li>Education Industry</li>
              <li>Finance</li>
              <li>Healthcare</li>
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
        <div className="b2b-industries-right">
          <img src="/images/rock22.webp" alt="Industries" />
        </div>
      </div>
      <FaqAccordion />
      <InfoSection />
    </>
  );
}
