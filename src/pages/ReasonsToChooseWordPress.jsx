import React from 'react';
import { motion } from 'framer-motion';
import './ReasonsToChooseWordPress.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cards = [
  {
    title: 'Best social media practices',
    description:
      'We excel in social media platforms and strategies, ensuring top-tier marketing standards. Our result-driven SMO strategies effectively promote your brand, maximizing reach and boosting traffic for greater customer engagement.',
    iconTag: <i className="fa-solid fa-share-nodes"></i>,
  },
  {
    title: 'Value industry standards',
    description:
      'We collaborate across industries to strategically position your brand on the most suitable networks. These connections enhance visibility, ensuring your brand reaches a wider and more relevant audience.',
    iconTag: <i className="fa-solid fa-network-wired"></i>,
  },
  {
    title: 'Branding with ROI',
    description:
      'Effective social media branding boosts audience engagement and ROI. Nakshatra Namaha Creations, a top social media company in Bangalore, crafts strategies to enhance your brand visibility. We set the right tone to attract customers, drive traffic, and generate leads.',
    iconTag: <i className="fa-solid fa-chart-line"></i>,
  },
  {
    title: 'Prioritize visual branding',
    description:
      'Social media branding goes beyond content—it’s also about visuals. Our expert graphic designers create engaging designs that captivate audiences. We prioritize visual branding to enhance recognition and ensure marketing success.',
    iconTag: <i className="fa-solid fa-palette"></i>,
  },
  {
    title: 'Clearly articulated',
    description:
      'We prioritize your integrity, ensuring your ideas are accurately represented. Our transparent approach fosters clear communication with clients. Every concept and design is thoroughly reviewed before launching on any social media platform.',
    iconTag: <i className="fa-solid fa-comments"></i>,
  },
  {
    title: 'Brand consistency',
    description:
      'Nakshatra Namaha Creations fosters strong client relationships through a consistent work culture, delivering exactly what is promised. We ensure timely execution with no delays and welcome your updates and feedback to enhance the final outcome.',
    iconTag: <i className="fa-solid fa-handshake"></i>,
  },
];

const ReasonsToChooseWordPress = () => {
  return (
    <div className="highlight-feature-grid">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`highlight-feature-card color-${card.color?.toLowerCase() || 'default'}`}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="highlight-feature-header">
              <div className="highlight-icon-wrap">{card.iconTag}</div>
            <h3>{card.title}</h3>
          
          </div>
          <p className="highlight-card-text">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ReasonsToChooseWordPress;
