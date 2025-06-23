// src/Video.js
import React from 'react';
import { motion } from 'framer-motion';

import './Video.css';
import VideoTimeline from './VideoTimeline';
import VideoFeaturedCard from './VideoFeaturedCard';
import DesignVideoSection from './DesignVideoSection';
import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';

export default function Video() {
    const services = [
        {
            icon: '/images/video.png',
            title: 'Video Strategy',
            points: [
                'Craft compelling video strategies for impactful storytelling.',
                'Enhance brand visibility through innovative video solutions.',
                'Enhance brand visibility through innovative video solutions.',
                'Create videos that connect, inspire and influence your audience.',
            ]
        },
        {
            icon: '/images/open-book.png',
            title: 'Photoshoots',
            points: [
                'Professional photoshoots that capture your brands essence.',
                'High-quality visuals for websites, ads and social media.',
                'Memorable portraits that tell your story authentically.',
                'Delivering sharp, impactful photos for business use.',
            ]
        },
        {
            icon: '/images/new-product.png',
            title: 'Brand Storytelling Videos',
            points: [
                'Share your brand’s journey with captivating storytelling videos.',
                'Highlight key benefits and functionalities in a professional and engaging way.',
                'Simplify complex ideas with clear visuals and step-by-step explanations.',
                'Drive more sales by showcasing your product’s value through compelling visuals.',
            ]
        },
        {
            icon: '/images/calendar.png',
            title: 'Product Demonstration Videos',
            points: [
                'Showcase your product’s features effectively with our demonstration videos.',
                'Highlight key benefits and functionalities in a professional and engaging way.',
                'Simplify complex ideas with clear visuals and step-by-step explanations.',
                'Drive more sales by showcasing your product’s value through compelling visuals.',
            ]
        },
        {
            icon: '/images/calendar.png',
            title: 'Event Coverage and Highlights',
            points: [
                'Capture the essence of your events with professional video coverage.',
                'Perfect for corporate events, celebrations and memorable occasions.',
                'Preserve your event’s impact with videos that tell a compelling story.',
                'Relive your special moments with expertly crafted event highlight reels.',
            ]
        },
        {
            icon: '/images/bullhorn.png',
            title: 'Marketing and Promotional Videos',
            points: [
                'Highlight your products or services through dynamic video storytelling.',
                'Attract customers with visually engaging promotional content.',
                'Create impactful content that drives your marketing goals.',
                'Strengthen brand identity with cohesive and polished production.',
            ]
        },

    ];

    return (
        <>
            <div className="videoapp-hero">
                <div className="videoapp-overlay">
                    <div className="videoapp-content">
                        <h1>Corporate Video Production in Mysore, bringing your brand’s vision to life.</h1>
                        <p>
                            Elevate your brand's impact with innovative corporate video production, crafted for powerful engagement and growth.
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

            <div className="videoapp-section">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="videoapp-title">Corporate Video Production Company in Mysore</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="videoapp-section-wrapper">
                        <div className="videoapp-line"></div>
                        <p className="videoapp-description">

                            Corporate video production is an essential tool for businesses looking to communicate their vision, values, and services effectively. Whether it's showcasing your brand story, creating training videos, or delivering impactful client presentations, a well-crafted corporate video can leave a lasting impression. As the best corporate video production company in Mysore, we focus on creativity and precision, ensuring every video aligns with your business goals and resonates with your audience. Our team specializes in producing high-quality corporate videos designed to meet your specific needs. Every step is managed with attention to detail and professionalism. We combine innovative techniques and modern equipment to deliver videos that are visually engaging and convey your message clearly, helping you build trust and connection with your audience.
                        </p>
                    </div>
                </motion.div>
            </div>


<div className="videocard-wrapper">
  {services.map((card, i) => (
    <motion.div
      key={i}
      className="videocard"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
    >
      <div className="videocard-icon-bg">
        <img src={card.icon} alt={card.title} />
      </div>
      <h3 className="videocard-title">{card.title}</h3>
      <ul className="videocard-list">
        {card.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>


<VideoTimeline/>
<VideoFeaturedCard/>
    <section className="whychooseus-section">
      <div className="whychooseus-container">
        <div className="whychooseus-text">
          <h2>
            Why choose Nakshatra Namaha Creations as a Corporate
            Video Production Company in Mysore?
          </h2>
        </div>

        <div className="whychooseus-visual">
          <div className="circle-line-wrap">
            {/* <div className="blue-circle" /> */}
            {/* <div className="black-line" /> */}
          </div>
          <img
            src="/images/video1img.webp"
            alt="Camera setup"
            className="whychooseus-image"
          />
        </div>
             <div className="corporate-video-wrapper">
  <p className="corporate-video-description">
    Corporate video production is an essential tool for businesses looking to communicate their vision, values, and services effectively. Whether it's showcasing your brand story, creating training videos, or delivering impactful client presentations, a well-crafted corporate video can leave a lasting impression. As the best corporate video production company in Mysore, we focus on creativity and precision, ensuring every video aligns with your business goals and resonates with your audience. Our team specializes in producing high-quality corporate videos designed to meet your specific needs. Every step is managed with attention to detail and professionalism. We combine innovative techniques and modern equipment to deliver videos that are visually engaging and convey your message clearly, helping you build trust and connection with your audience.
  </p>
</div> 
      </div>
    </section>

    <DesignVideoSection/>
    <div className="industriesSection-wrapper">
  <div className="industriesSection-left">
    <h2>Industries we serve</h2>
    <p>
      We offer innovative digital solutions as a leading Mobile App and
      Website Development Company in Mysore, catering to industries such as
      service, education, entertainment, real estate, etc. Our expertise
      helps businesses enhance efficiency, engage their audience and
      achieve their goals seamlessly.
    </p>
    <div className="industriesSection-list">
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
  <div className="industriesSection-right">
    <img src="/images/rock22.webp" alt="Industries Mockup" />
  </div>
</div>

<FaqAccordion/>
<InfoSection/>

        </>
    );
}
