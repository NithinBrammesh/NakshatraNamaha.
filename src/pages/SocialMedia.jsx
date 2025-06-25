// src/SocialMedia.js
import React from 'react';
import { motion } from 'framer-motion';
import './SocialMedia.css';

import { HiShieldCheck } from 'react-icons/hi';         // HeroIcons
import { TbSocial } from 'react-icons/tb';               // Tabler Icons
import { MdCampaign } from 'react-icons/md';             // Material Icons
import { IoChatboxEllipses } from 'react-icons/io5';     // Ionicons v5
import { RiRocket2Fill } from 'react-icons/ri';

import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';
import ReasonsToChooseWordPress from './ReasonsToChooseWordPress';

export default function SocialMedia() {
  const services = [
    {
      icon: '/images/motion.webp',
      title: 'Social strategy',
      points: [
        'Nakshatra Namaha Creations provides strategic planning, from consultation to execution, ensuring a seamless experience.',
        'We design interactive interfaces that enhance user engagement and long-term customer relationships.',
        'Our unique approach focuses on delivering customized solutions tailored to your business needs.',
        'With result-driven tactics, we help you achieve your goals efficiently and effectively.',
      ]
    },
    {
      icon: '/images/online-store.png',
      title: 'Content curationt',
      points: [
        'Customer engagement is key—how you connect leaves a lasting impact.',
        'Our expert bloggers and publishers craft compelling content tailored to your brand',
        'We bring life to empty web pages with impactful storytelling and strategic messaging.',
        'Whether B2B or B2C, we ensure your services reach the right audience effectively.',
      ]
    },
    {
      icon: '/images/crossplat.png',
      title: 'Brand awareness',
      points: [
        'Social media branding is at the core of our strategy, helping you build a strong online presence.',
        'We craft well-defined strategies and tactics to ensure seamless customer reach.',
        'No matter the platform, we tailor branding solutions to match your business goals.',
        'Our expertise makes connecting with your audience easier and more effective.',
      ]
    },
    {
      icon: '/images/native.png',
      title: 'Community building',
      points: [
        'Establishing a strong community is essential for expanding your customer base.',
        'We leverage social platforms to enhance your brands visibility and engagement.',
        'Our strategies help you connect with a wider audience and build lasting relationships.',
        'A well-established community boosts brand awareness and drives long-term growth.',
      ]
    },
    {
      icon: '/images/app-development.png',
      title: 'Monitoring and analytics',
      points: [
        'We maintain complete transparency by keeping you informed about every aspect of your project.',
        'Your feedback is valued and integrated to refine strategies for optimal results.',
        'Brand credibility remains our top priority, ensuring trust and authenticity.',
        'Our expert social media marketing techniques help you achieve new heights of success.',
      ]
    },
    {
      icon: '/images/app-development.png',
      title: 'Platform selection',
      points: [
        'Identifying the right social media platforms is key to reaching your target audience.',
        'We analyze where your potential customers are most active to optimize marketing efforts.',
        'Platform selection is based on your business needs and customer preferences.',
        'Whether its Facebook, LinkedIn, Instagram, or Twitter, we tailor strategies for maximum impact.',
      ]
    },
  ];

  const cards = [
    {
      title: 'Create a secure imprint',
      icon: <HiShieldCheck size={28} color="#4c28ec" />,
      text: `Engage viewers with a professional profile, build trust, 
    and understand customer needs for stronger connections.`,
    },
    {
      title: 'Enhanced engagement',
      icon: <TbSocial size={28} color="#4c28ec" />,
      text: `Leverage top social media platforms like Facebook, Twitter, and Instagram, 
    using captions, hashtags, and engagement tools to reach your audience.`,
    },
    {
      title: 'Inexpensive business branding',
      icon: <MdCampaign size={28} color="#4c28ec" />,
      text: `Elevate your brand with creative, engaging social media ads 
    that attract local customers.`,
    },
    {
      title: 'Offer 24/7 support',
      icon: <IoChatboxEllipses size={28} color="#4c28ec" />,
      text: `Engage instantly on social platforms by tracking queries, 
    responding positively, and offering personalized support.`,
    },
    {
      title: 'Launch & Support',
      icon: <RiRocket2Fill size={28} color="#4c28ec" />,
      text: `Launching your site with ongoing support for continuous performance.`,
    },
  ];

  return (
    <>
      <div className="wordpressapp-hero">
        <div className="wordpressapp-overlay">
          <div className="wordpressapp-content">
            <h1>Leading Social Media Marketing Company in Mysore, for growing your brand online.</h1>
            <p>
              Elevate your brand’s digital presence with strategic social media marketing for impactful business growth.
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
<div className="socialmedia-section">
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="socialmedia-title">Best Social Media Marketing Company in Mysore</h2>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="socialmedia-section-wrapper">
    
      <p className="socialmedia-description">
        A strong social media presence is essential for brand growth and audience engagement. As a leading social media marketing company in Mysore, we craft customized strategies that align with your business goals. Our campaigns are designed with precision to ensure maximum reach, engagement, and conversions across platforms. With a focus on content, analytics, and engagement, our expert team creates impactful social media strategies that boost brand awareness and drive results. Through targeted marketing and creative storytelling, we help your business leave a lasting impression in the digital world.
      </p>
    </div>
  </motion.div>
</div>


      <div className="wordpressservices-wrapper">
        <h2 className="wordpressservices-title">Our Social Media Marketing services include</h2>
        <div className="wordpressservices-grid">
          {services.map((service, idx) => (
            <div className="wordpressservices-card" key={idx}>
              <img src={service.icon} alt={service.title} className="wordpressservices-icon" />
              <h4 className="wordpressservices-heading">{service.title}</h4>
              <ul className="wordpressservices-list">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>



      <div className="wordpressapp-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="wordpressapp-title">What are the advantages of social media marketing for your business?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="wordpressapp-section-wrapper">
            <div className="wordpressapp-line"></div>
            <p className="wordpressapp-description">
              Social media marketing helps businesses increase brand visibility, engage with their target audience, and drive more traffic to their website. It also boosts customer loyalty, enhances lead generation, and improves conversion rates through strategic content and advertising.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="socialcard-wrapper">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="socialcard"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="socialcard-icon-bg">{card.icon}</div>
            <h3 className="socialcard-title">{card.title}</h3>
            <p className="socialcard-desc">{card.text}</p>
          </motion.div>
        ))}
      </div>


      <div className="industry-section-wrapper">
        <div className="industry-section-left">
          <h2>Why choose Nakshatra Namaha Creations as a Social Media Marketing Company in Mysore?</h2>
          <p>
           As a leading social media marketing company in Mysore, Nakshatra Namaha Creations combines expertise, creativity, and a customer-centric approach to every project. We specialize in crafting dynamic social media strategies that enhance your brand’s online presence and drive business growth. From innovative startups to established brands, we deliver tailored solutions focused on engagement, visibility, and impactful results.
           </p>

        </div>
        <div className="industry-section-right">
          <img src="/images/rajanna1.png" alt="Industries Mockup" />
        </div>
      </div>

<ReasonsToChooseWordPress/>
      <FaqAccordion />
      <InfoSection />
    </>
  );
}
