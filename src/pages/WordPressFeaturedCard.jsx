// src/components/WordPressFeaturedCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineDevicePhoneMobile,
  HiOutlinePuzzlePiece,
  HiOutlineWrenchScrewdriver
} from "react-icons/hi2";
import { LuSearchCheck, LuRefreshCcwDot, LuPaintbrush } from "react-icons/lu";
import './WordPressFeaturedCard.css';

export default function WordPressFeaturedCard() {
  const cards = [
    {
      icon: <HiOutlineDevicePhoneMobile className="section-icon" />,
      title: 'Mobile Responsive',
      paragraph:
        'WordPress is inherently mobile responsive, ensuring compatibility and adaptability across all devices.',
      color: 'blue',
    },
    {
      icon: <HiOutlinePuzzlePiece className="section-icon" />,
      title: 'Plenty of Widgets',
      paragraph:
        'Custom widgets in WordPress enhance user experience and allow seamless integration across pages.',
      color: 'blue',
    },
    {
      icon: <HiOutlineWrenchScrewdriver className="section-icon" />,
      title: 'Bulk Plugins',
      paragraph:
        'Access to a vast library of plugins makes WordPress highly versatile and easy to extend with new functionality.',
      color: 'blue',
    },
    {
      icon: <LuSearchCheck className="section-icon" />,
      title: 'SEO Friendly',
      paragraph:
        'WordPress provides powerful SEO tools and plugins to improve your site ranking on search engines quickly.',
      color: 'blue',
    },
    {
      icon: <LuRefreshCcwDot className="section-icon" />,
      title: 'Upgrade and Support',
      paragraph:
        'With frequent updates and community support, WordPress keeps your site secure and high-performing.',
      color: 'blue',
    },
    {
      icon: <LuPaintbrush className="section-icon" />,
      title: 'Theme Customization',
      paragraph:
        'WordPress themes are easily customizable, enabling users to edit design, layout, and content effortlessly.',
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
      <div className='wordpress-expect'>
        <h2>What can you expect from Nakshatra Namaha Creations?</h2>
      </div>
      <div className="wordpress-feature-grid">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`wordpress-feature-card color-${card.color?.toLowerCase() || 'default'}`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="wordpress-feature-header">
              <h3>{card.title}</h3>
              <div className="wordpress-icon-wrap">{card.icon}</div>
            </div>
            <p className="wordpress-card-text">{card.paragraph}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
