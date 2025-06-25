// src/pages/services/SeoDevelopment.jsx

import React from 'react';
import './SeoService.css';
import { motion } from 'framer-motion';
import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';

import { FaClipboardCheck, FaSearch, FaKey, FaFileAlt, FaEdit, FaCode, FaMobileAlt, FaLink, FaChartLine } from 'react-icons/fa';
import SeoTypesSection from './SeoTypesSection';
import SeoFeatureCardGrid from './SeoFeatureCardGrid';


export default function SeoService() {
  

const cards = [
  {
    title: 'Studying Your Business',
    icon: <FaClipboardCheck size={28} color="#0072b1" />,
    text: `Analyze the client’s requisition document and key business aspects to establish priorities effectively.`,
  },
  {
    title: 'Website SEO Audit',
    icon: <FaSearch size={28} color="#0072b1" />,
    text: `Perform a thorough SEO audit and implement strategic improvements to enhance search engine rankings.`,
  },
  {
    title: 'Keyword Analysis',
    icon: <FaKey size={28} color="#0072b1" />,
    text: `Perform keyword research and refine website content for better search engine optimization.`,
  },
  {
    title: 'Content Optimization',
    icon: <FaFileAlt size={28} color="#0072b1" />,
    text: `Integrate high-quality content with targeted keywords to boost organic search traffic.`,
  },
  {
    title: 'On-Page Optimization',
    icon: <FaEdit size={28} color="#0072b1" />,
    text: `Improve website readability by optimizing URLs, titles, meta descriptions, and image tags.`,
  },
  {
    title: 'Schema Optimization',
    icon: <FaCode size={28} color="#0072b1" />,
    text: `Implement schema markup including business, article, blog, video, and product schemas.`,
  },
  {
    title: 'Mobile Optimization (AMP)',
    icon: <FaMobileAlt size={28} color="#0072b1" />,
    text: `Enhance mobile loading speed using Accelerated Mobile Pages (AMP) for better performance.`,
  },
  {
    title: 'Off-Page Optimization',
    icon: <FaLink size={28} color="#0072b1" />,
    text: `Acquire backlinks from authoritative sources and increase brand visibility on external platforms.`,
  },
  {
    title: 'Driving Website Traffic',
    icon: <FaChartLine size={28} color="#0072b1" />,
    text: `Utilize advanced SEO strategies to improve rankings and attract high-quality traffic.`,
  },
];

    const services = [
    {
      icon: '/images/vendor.png',
      title: 'On-page SEO',
      points: [
        'Comprehensive keyword research and strategic implementation to improve search engine rankings.',
        'Optimized title tags and meta descriptions to boost click-through rates.',
        'Creating engaging, high-quality, and valuable content for both users and search engines.',
        'Clear and concise URLs to help search engine crawlers index your website efficiently.'
      ]
    },
    {
      icon: '/images/global.png',
      title: 'Off-page SEO',
      points: [
        'Identifying high-authority domains and pages to secure quality backlinks and enhance credibility.',
        'Developing engaging and valuable social media content to drive traffic and improve search engine rankings.',
        'Crafting high-quality guest posts on reputable industry websites to establish authority and build strong backlinks.',
      ]
    },
    {
      icon: '/images/cms.png',
      title: 'Technical SEO',
      points: [
        'Enhancing design, images, and website elements to improve speed and user experience',
        'Setting up XML sitemaps to assist search engine bots in understanding website structure.',
        'Ensuring mobile responsiveness to meet user demand and improve search engine rankings.',
       
      ]
    },

    {
      icon: '/images/native.png',
      title: 'Local SEO',
      points: [
        'Boosting local search rankings by listing your business on local directories and top review platforms.',
        'Setting up and optimizing Google My Business to enhance local visibility and attract more customers.',
      ]
    },
    {
      icon: '/images/crossplat.png',
      title: 'International SEO',
      points: [
        'Reach international audiences with top-notch SEO services in Bangalore from Nakshatra Namaha Creations.',
        'Optimize your business website for multiple countries, regions, and languages to enhance global search rankings.',

      ]
    },
    {
      icon: '/images/crossplat.png',
      title: 'E-Commerce SEO',
      points: [
        'Optimize your e-commerce website on platforms like Shopify, Magento, and WooCommerce to boost sales.',
        'Implement conversion strategies by enhancing product pages and site navigation for better visibility and higher conversions.',
      
      ]
    },
  ];


  return (
    <>
      <div className="seo-hero">
        <div className="seo-overlay">
          <div className="seo-content">
            <h1>Trusted SEO services provider in Mysore, specializing in optimizing online presence and driving organic growth.</h1>
            <p>
            Maximize your digital potential with our expert SEO services. We help businesses across industries enhance their online presence with advanced keyword strategies, AI-driven optimization, and data-driven insights, ensuring higher rankings and increased visibility.
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

      <div className="seo-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="seo-title-wrapper">
            <h2 className="seo-title">Reliable SEO Service Company in Mysore</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="seo-section-wrapper1">
            <p className="seo-description">
            Nakshatra Namaha Creations is a leading SEO services company in Mysore, delivering exceptional, results-driven strategies tailored to meet your business objectives. Our team of professionals optimizes websites for higher search rankings, enhanced visibility, and seamless user experiences across all digital platforms. Committed to innovation and precision, we help businesses strengthen their online presence, drive organic traffic, and achieve sustainable growth in the digital landscape.

              </p>
          </div>
        </motion.div>
      </div>
  
      <div className="seo-solutions-wrapper2">
  <h2 className="seo-solutions-title">Performance-focused SEO Services We Offer</h2>
  <div className="seo-solutions-grid">
    {services.map((service, idx) => (
      <div className="seo-solutions-card" key={idx}>
        <img src={service.icon} alt={service.title} className="seo-solutions-icon" />
        <h4 className="seo-solutions-heading">{service.title}</h4>
        <ul className="seo-solutions-list">
          {service.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

<div className="scroll-panel seo-process-wrapper">
  <motion.h2
    className="seo-process-title"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Our SEO Website Development Process
  </motion.h2>

  <motion.p
    className="seo-process-subtitle"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <strong>Cutting-Edge SEO Web Development</strong>
  </motion.p>

  <motion.div
    className="seo-process-desc"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <p>
      At Nakshatra Namaha Creations, our SEO-focused website development process is built around performance, visibility, and user experience.
      We follow a structured approach to bring your vision to life with strategic, search-engine-ready solutions.
    </p>
  </motion.div>
</div>


      <div className="seo-feature-wrapper">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="seo-feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="seo-feature-icon">{card.icon}</div>
            <h3 className="seo-feature-title">{card.title}</h3>
            <p className="seo-feature-desc">{card.text}</p>
          </motion.div>
        ))}
      </div>
     <SeoTypesSection/>
     <div className="seo-section-wrapper">
  <div className="seo-section-left">
    <h2>Why choose Nakshatra Namaha Creations as ecommerce development company in Mysore?</h2>
    <p>
      As the most trusted ecommerce development company in Mysore, Nakshatra Namaha Creations has highly experienced ecommerce developers in Mysore, who are knowledgeable and well versed with the latest technologies that helps in attractive ui/ux design, quick loading, enhanced mobile responsiveness, and device compatibility for the website.
    </p>
  </div>
</div>
    <SeoFeatureCardGrid/>
 <div className="industry-section-wrapper">
  <div className="industry-section-left">
    <h2>High-ROI SEO strategies tailored for diverse industries.</h2>
<br />
    <div className="industry-section-list">
      <ul>
        <li>SEO for healthcare websites</li>
        <li>SEO for technology websites</li>
        <li>SEO for digital product/SaaS companies</li>
        <li>SEO for education websites</li>
      </ul>
      <ul>
      
        <li>SEO for NGO services</li>
        <li>SEO for small businesses/sole proprietorship</li>
        <li>SEO for professional services</li>
      </ul>
      
  </div>
    </div>
    <div className="industry-section-right">
    <img src="/images/rak.webp" alt="Industries Mockup" />
  </div>
  
</div>


      <FaqAccordion />
      <InfoSection />
    </>
  );
}
