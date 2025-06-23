// src/components/FeatureCardGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding,FaPaintBrush,FaMobileAlt, FaLaptopCode, FaVideo, FaBullhorn } from 'react-icons/fa';
import { SiAdobelightroom } from 'react-icons/si';
import './FeatureCardGrid.css';

export default function FeatureCardGrid() {
  const cards = [
    {
      title: 'Mobile App Development',
      icon: <FaMobileAlt className="section-icon" />,
      paragraph:
        'We provide Mobile App Development solutions that focus on creating high-performance apps with a smooth user experience, supporting both Android and iOS platforms to meet business needs.',
      color: 'Blue',
    },
    {
      title: "Website Development",
      icon: <FaLaptopCode className="section-icon" />,
      paragraph:
        'As the Website Development Company in Mysore, we develop custom websites with user-friendly navigation, optimized for search engines and mobile devices to help businesses grow their online presence.',
      color: 'red',
    },
    {
      title: 'Corporate Video Production',
      icon: <FaVideo className="section-icon" />,
      paragraph:
        'Our Corporate Video Production services help businesses communicate their story clearly and professionally, producing engaging videos that enhance brand identity and captivate audiences.',
      color: 'green',
    },
    {
      title: 'Digital Marketing',
      icon: <FaBullhorn className="section-icon" />,
      paragraph:
        'Custom software adapts to your company’s needs, is highly scalable and flexible, and poses no licensing risks unlike off-the-shelf products.',
      color: 'yellow',
    },
    {
      title: 'Graphic Design',
      icon: <FaPaintBrush className="section-icon" />,
      paragraph:
        'Our Graphic Designing services deliver visually impactful designs that effectively represent your business’s message across various platforms, ensuring strong brand recognition.',

      color: 'green',
    },
        {
      title: '2D Animation',
      icon: <SiAdobelightroom  className="section-icon" />,
      paragraph:
        'Our Animation services include 2D and explainer videos that simplify complex ideas, making them engaging and easy for your audience to understand, bringing your business to life.',
      color: 'blue',
    },
            {
      title: 'B2B Marketing Services',
      icon: <FaBuilding className="section-icon" />,
      paragraph:
        'We offer B2B Marketing Services that focus on building strong business relationships, generating leads and increasing growth through effective communication and outreach strategies.',
      color: 'red',
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
    <div className="feature-grid">
      {cards.map((card, i) => (
        <motion.div
          key={i}
         className={`feature-card color-${card.color?.toLowerCase() || 'default'}`}

          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="feature-header">
            <h3>{card.title}</h3>
            <div className="icon-wrap">{card.icon}</div>
          </div>
          <p className="card-text">{card.paragraph}</p>
        </motion.div>
      ))}
    </div>
  );
}
