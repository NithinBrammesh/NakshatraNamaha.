// src/components/WPFeatureCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  LuScale,
  LuQuote,
  LuCamera,
  LuSmartphone,
  LuScissorsLineDashed,
  LuUserCog,
} from 'react-icons/lu';

import './VideoFeaturedCard.css'

export default function VideoFeaturedCard() {


const cards = [
  {
    icon: <LuScale className="section-icon" />,  
    title: 'Scalable Solutions',
    paragraph:
      'Our services are designed to accommodate businesses of all sizes, adapting to your specific requirements while maintaining quality and efficiency.',
    color: 'blue',
  },
  {
    icon: <LuQuote className="section-icon" />, 
    title: 'Creative Storytelling',
    paragraph:
      'We craft engaging narratives that effectively communicate your brand’s message, making it memorable and impactful for your audience.',
    color: 'blue',
  },
  {
    icon: <LuCamera className="section-icon" />,  
    title: 'High-Quality Visuals',
    paragraph:
      'Every video features professional-grade visuals and crisp sound, ensuring a polished and visually appealing final product.',
    color: 'blue',
  },
  {
    icon: <LuSmartphone className="section-icon" />, 
    title: 'Multi-Platform Compatibility',
    paragraph:
      'Videos are optimized to perform seamlessly across various platforms, including websites, social media and presentations.',
    color: 'blue',
  },
  {
    icon: <LuScissorsLineDashed className="section-icon" />,
    title: 'Post-Production Excellence',
    paragraph:
      'We deliver refined videos with expert editing, sound enhancements and graphics to achieve a professional finish.',
    color: 'blue',
  },
  {
    icon: <LuUserCog className="section-icon" />,
    title: 'Comprehensive Support',
    paragraph:
      'Our team manages every stage of the video production process, ensuring a seamless and stress-free experience.',
    color: 'blue',
  },
];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <>
      <div className='wpfeature-header'>
        <h2>What can you expect from Nakshatra Namaha Creations?</h2>
      </div>
      <div className="wpfeature-grid">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`wpfeature-card color-${card.color?.toLowerCase() || 'default'}`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="wpfeature-card-top">
              <h3>{card.title}</h3>
              <div className="wpfeature-icon-wrap">{card.icon}</div>
            </div>
            <p className="wpfeature-desc">{card.paragraph}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
