import React from "react";
import {
  FaBullseye,
  FaFileAlt,
  FaTools,
  FaQuoteRight,
  FaVideo,
  FaEye,
  FaFilter,
  FaShieldAlt,
  FaTrophy,
} from 'react-icons/fa';
import './SeoTypesSection.css';

const seoSteps = [
  {
    title: "Keyword Optimization",
    description:
      "Thoroughly research target audience keywords, optimize website and product descriptions, and secure top search rankings to drive organic traffic to your online store.",
    icon: <FaBullseye size={40} />,
  },
  {
    title: "Product Descriptions",
    description:
      "Craft engaging product descriptions that highlight unique features and benefits, enticing customers to explore and make a purchase.",
    icon: <FaFileAlt size={40} />,
  },
  {
    title: "Technical Perfection",
    description:
      "Optimize website speed and mobile-friendliness to enhance user experience, improve search rankings, and build customer trust and engagement.",
    icon: <FaTools size={40} />,
  },
  {
    title: "Social Validation and Testimonials",
    description:
      "Incorporate customer reviews and testimonials to showcase satisfaction, build trust, and drive more conversions.",
    icon: <FaQuoteRight size={40} />,
  },
  {
    title: "Inspiring Video Experiences",
    description:
      "Create compelling videos demonstrating product functionality and real-world applications to engage customers and drive sales.",
    icon: <FaVideo size={40} />,
  },
  {
    title: "Enhanced Visibility",
    description:
      "Boost search rankings to increase product visibility, enhance brand recognition, and attract potential buyers.",
    icon: <FaEye size={40} />,
  },
   {
    title: "Targeted Conversion Funnel",
    description:
      "Align your SEO strategy with customer intent to attract relevant traffic and maximize conversion rates.",
    icon: <FaFilter size={40} />,
  },
  {
    title: "Trust and Authority",
    description:
      "Secure top search rankings to enhance brand credibility and earn customer trust.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: "Competitive Edge",
    description:
      "Implement strategic tactics to surpass competitors and establish a strong online presence.",
    icon: <FaTrophy size={40} />,
  },
];

export default function SeoTypesSection() {
  return (
    <div className="seo-types-wrapper">
      <h2 className="seo-types-title">Types of Web Design</h2>
      <div className="seo-types-grid">
        {seoSteps.map((item, idx) => (
          <div className="seo-types-card" key={idx}>
            <div className="seo-types-icon">{item.icon}</div>
            <h4 className="seo-types-heading">{item.title}</h4>
            <p className="seo-types-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
