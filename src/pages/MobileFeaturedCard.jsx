  // src/components/FeatureCardGrid.jsx
  import React from 'react';
  import { motion } from 'framer-motion';
  import {
    FaPalette,
    FaCogs,
    FaRocket,
    FaHandshake,
    FaShieldAlt,
    FaHandsHelping,
  } from "react-icons/fa";
  import './MobileFeaturedCard.css';

  export default function MobileFeaturedCard() {
  
  const cards = [
    {
      title: "Design",
      icon: <FaPalette className="section-icon" />,
      paragraph:
        "Our team crafts visually stunning designs that capture your brand’s essence. We focus on user-friendly layouts that engage visitors and create a lasting impression.",
      color: "blue",
    },
    {
      title: "Customization",
      icon: <FaCogs className="section-icon" />,
      paragraph:
        "Every business is unique, so we tailor each solution to fit your specific needs. From functionality to aesthetic details, we ensure every element aligns with your vision.",
      color: "blue",
    },
    {
      title: "Performance",
      icon: <FaRocket className="section-icon" />,
      paragraph:
        "Our websites are optimized for speed and efficiency, enhancing user experience and improving SEO. We build to ensure smooth performance on all devices and platforms.",
      color: "blue",
    },
    {
      title: "Transparency",
      icon: <FaHandshake className="section-icon" />,
      paragraph:
        "We believe in open communication and honesty at every step. Our clients stay informed and involved, from project milestones to cost estimates and timelines.",
      color: "blue",
    },
    {
      title: "Security",
      icon: <FaShieldAlt className="section-icon" />,
      paragraph:
        "Data protection is our priority. We implement the latest security protocols to safeguard your business and user information, creating a secure online environment.",
      color: "blue",
    },
    {
      title: "End-to-End Support",
      icon: <FaHandsHelping className="section-icon" />,
      paragraph:
        "Our dedicated team ensures your project is managed seamlessly, offering guidance and assistance whenever needed.",
      color: "blue",
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
        <div className='app-expect'>
      <h2>What can you expect from Nakshatra Namaha Creations?</h2>
    </div>
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
      </>
    );
  }
