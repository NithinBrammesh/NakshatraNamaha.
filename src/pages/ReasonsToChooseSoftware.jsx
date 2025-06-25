import React from 'react';
import { motion } from 'framer-motion';
import './ReasonsToChooseSoftware.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cards = [
  {
    title: 'Best skilled developers',
    description:
      'At Nakshatra Namaha Creations, our expert developers create customized software tailored to your business needs. They carefully analyze provided data and meticulously develop each module to deliver feature-rich solutions for your company.',
    iconTag: <i className="fa-solid fa-laptop-code"></i>, // represents development
  },
  {
    title: 'Robust security',
    description:
      'We provide highly secure and fully customized software, conducting thorough security checks during testing to assess risks. At Nakshatra Namaha Creations, security remains our top priority in software development.',
    iconTag: <i className="fa-solid fa-shield-halved"></i>, // represents protection
  },
  {
    title: '100% Transparency',
    description:
      'At Nakshatra Namaha Creations, we believe transparency is key to success. We keep the software development process open to clients, discussing and implementing any suggestions or requirements promptly.',
    iconTag: <i className="fa-solid fa-eye"></i>, // represents transparency/visibility
  },
  {
    title: '24/7 Maintenance and support',
    description:
      'The support team at Nakshatra Namaha Creations is always available to assist you throughout your software journey, even after delivery. Our developers not only provide guidance but also ensure complete software maintenance. Any issues are promptly addressed and resolved to enhance performance and accelerate your business growth.',
    iconTag: <i className="fa-solid fa-headset"></i>, // represents 24/7 support
  },
  ];
  
const ReasonsToChooseSoftware = () => {
  return (
    <div className="software-feature-grid">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`software-feature-card color-${card.color?.toLowerCase() || 'default'}`}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="software-feature-header">
            <div className="software-icon-wrap">{card.iconTag}</div>
            <h3>{card.title}</h3>
          </div>
          <p className="software-card-text">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ReasonsToChooseSoftware;
