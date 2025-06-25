// src/B2B.js
import React from 'react';
import { motion } from 'framer-motion';

import './B2BMarket.css';

import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';
import {
  FaChessBoard,
  FaMagnet,
  FaPenNib,
  FaUserTie,
  FaBullseye
} from 'react-icons/fa';
import B2BDesignPhases from './B2BDesignPhases';
import B2BFeatureGrid from './B2BFeatureGrid';


const services = [
{
    icon: <FaChessBoard />, // Strategic Planning
    title: 'Strategic Planning',
    points: [
      'Develop focused strategies to align your business goals with market opportunities.',
      'Identify key objectives and create actionable plans for measurable results.',
      'Build impactful campaigns that connect with the right audience effectively.',
      'Ensure efficient resource utilization for maximizing productivity and profitability.',
    ]
  },
  {
    icon: <FaMagnet />, // Lead Generation
    title: 'Lead Generation',
    points: [
      'Generate high-quality leads with strategies designed to connect with your target audience.',
      'Increase conversion rates by connecting with the right prospects at the right time.',
      'Optimize your outreach efforts to ensure consistent business growth and long-term success.',
      'Strengthen your market presence with impactful and scalable lead generation solutions.',
    ]
  },
  {
    icon: <FaPenNib />, // Content Marketing
    title: 'Content Marketing',
    points: [
      "Create engaging and relevant content to capture your audience's attention effectively.",
      'Build trust and credibility through consistent and high-quality content delivery.',
      'Enhance SEO performance with content designed to improve search engine rankings.',
      'Establish authority in your industry through insightful articles, blogs and case studies.',
    ]
  },
  {
    icon: <FaUserTie />, // Account-Based Marketing
    title: 'Account-Based Marketing',
    points: [
      'Design strategies focused on engaging high-value business accounts.',
      'Connect directly with decision-makers to achieve meaningful business outcomes.',
      'Prioritize high-potential accounts to maximize ROI effectively.',
      'Use direct channels to ensure your message reaches the right audience.',
    ]
  },
  {
    icon: <FaBullseye />, // Brand Positioning
    title: 'Brand Positioning',
    points: [
      'Create a strong and consistent message that reflects your business values.',
      'Build trust and credibility through effective brand positioning strategies.',
      'Strengthen your market presence with innovative approaches to branding.',
      'Highlight your unique strengths to differentiate your brand from competitors.',
    ]
  }
];

const steps = [
  {
    number: 1,
    title: 'Understanding Your Goals',
    text: 'Analyze your business needs to create a focused marketing strategy.',
  },
  {
    number: 2,
    title: 'Strategic Planning',
    text: 'Develop a comprehensive plan that aligns with your growth objectives.',
  },
  {
    number: 3,
    title: 'Audience Targeting',
    text: 'Identify and connect with the right businesses and decision-makers.',
  },
  {
    number: 4,
    title: 'Content Creation',
    text: 'Craft compelling materials to engage your target audience effectively.',
  },
  {
    number: 5,
    title: 'Lead Generation',
    text: 'Implement proven methods to generate valuable leads for your business.',
  },
  {
    number: 6,
    title: 'Account-Based Marketing',
    text: 'Personalize campaigns to strengthen connections with key clients.',
  },
  {
    number: 7,
    title: 'Brand Positioning',
    text: 'Build trust and credibility to enhance your market presence.',
  },
];

export default function B2BMarket() {
  return (
    <>
      {/* HERO */}
      <div className="b2b-hero">
        <div className="b2b-overlay">
          <div className="b2b-content">
            <h1>Most driven B2B Marketing Service in Mysore</h1>
            <p>

At Nakshatra Namaha Creations, our comprehensive design services cater to companies seeking to strengthen their brand presence and communicate their value propositions effectively in the competitive B2B landscape
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

      {/* INTRO SECTION */}

      <div className="b2b-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="b2b-title">B2B Marketing Services in Mysore</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="b2b-section-wrapper">
            <p className="b2b-description">
            B2B Marketing Services in Mysore are designed to help businesses achieve growth through strategic planning and focused execution. With expertise in lead generation, account-based marketing and brand positioning, we create campaigns that connect you with the right audiences. Our solutions enable your business to build meaningful relationships and achieve measurable success in competitive markets. Through content marketing, account-based strategies and targeted lead generation, our B2B Marketing Services in Mysore deliver results that align with your business objectives. We focus on enhancing your brand's visibility and credibility using effective and reliable approaches. Whether it’s strategic planning or positioning your brand for success, our methods are aimed at creating value and driving sustainable business growth.

              </p>
          </div>
        </motion.div>
      </div>

      {/* SERVICE CARDS */}
      <div className="b2b-card-wrapper">
        {services.map((card, i) => (
          <motion.div
            key={i}
            className="b2b-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
           <div className="b2b-icon-bg">
  {card.icon}
</div>

            <h3 className="b2b-card-title">{card.title}</h3>
            <ul className="b2b-card-list">
              {card.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

  <div className="b2b-process-header">
  <h2>Our B2B Marketing Services Process: The Path to Success</h2>
  <p>
    Our B2B Marketing Services Process is designed to deliver effective solutions that drive growth.
    Each step is strategically planned to meet your business goals with measurable results.
  </p>
</div>

   {/*  */}
       <div className="process-grid">
      {steps.map((step) => (
        <div className="process-card" key={step.number}>
          <div className="process-badge">{step.number}</div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      ))}
    </div>

   <B2BDesignPhases />

      {/* WHY CHOOSE US */}
      <section className="b2b-whychoose-section">
        <div className="b2b-whychoose-container">
          <div className="b2b-whychoose-text">
            <h2>Why choose Nakshatra Namaha Creations for B2B Video Services?</h2>
          </div>
          
          <div className="b2b-description-wrapper">
            <p className="b2b-description">
            Choosing the right partner for B2B Marketing Services in Mysore can significantly impact your business growth. At Nakshatra Namaha Creations, we specialize in strategic planning, lead generation, content marketing, account-based marketing and brand positioning. Our goal is to help your business connect with the right partners and achieve measurable success. With a focus on innovative solutions and results-driven strategies, we ensure your marketing efforts deliver impactful outcomes.
             </p>   
          </div>
          
        </div>
        
      </section>

   <B2BFeatureGrid/>

      {/* INDUSTRIES SECTION */}
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
