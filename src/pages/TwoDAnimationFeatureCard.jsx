// src/components/2DAnimationFeatureCard.jsx
import React from 'react';
import { motion } from 'framer-motion';


import {
  LuMessagesSquare,      // For 'Idea Discussion'
  LuLayoutTemplate,      // For 'Concept Development'
  LuFileText,            // For 'Script Writing'
  LuUser,                // ✅ Replaces LuUserSquare - 'Character Design'
  LuClapperboard,        // For 'Animation Creation'
  LuAudioWaveform,       // ✅ Replaces LuWaveform - 'Audio Integration'
  LuCircleCheck,         // ✅ Replaces LuCheckCircle2 - 'Review and Feedback'
  LuInbox                // For 'Final Delivery'
} from 'react-icons/lu';

import './TwoDAnimationFeatureCard.css';


export default function TwoDAnimationFeatureCard(){
  const cards = [
    {
    icon: <LuMessagesSquare className="twoD-section-icon" />,
    title: 'Idea Discussion',
    paragraph: 'Understanding your vision and goals for the animation project.',
    color: 'blue',
  },
  {
    icon: <LuLayoutTemplate className="twoD-section-icon" />,
    title: 'Concept Development',
    paragraph: 'Creating storyboards and initial designs to visualize the narrative.',
    color: 'blue',
  },
  {
    icon: <LuFileText className="twoD-section-icon" />,
    title: 'Script Writing',
    paragraph: 'Developing a clear and engaging script for the animation.',
    color: 'blue',
  },
  {
    icon: <LuUser className="twoD-section-icon" />,
    title: 'Character Design',
    paragraph: 'Designing characters that align with your brand and story.',
    color: 'blue',
  },
  {
    icon: <LuClapperboard className="twoD-section-icon" />,
    title: 'Animation Creation',
    paragraph: 'Bringing characters and scenes to life with smooth, professional animation techniques.',
    color: 'blue',
  },
  {
    icon: <LuAudioWaveform className="twoD-section-icon" />,
    title: 'Audio Integration',
    paragraph: 'Adding voice overs, sound effects and music to enhance the animation.',
    color: 'blue',
  },
  {
    icon: <LuCircleCheck className="twoD-section-icon" />,
    title: 'Review and Feedback',
    paragraph: 'Sharing progress and refining animations based on your inputs.',
    color: 'blue',
  },
  {
    icon: <LuInbox className="twoD-section-icon" />,
    title: 'Final Delivery',
    paragraph: 'Providing the completed animation in the format of your choice.',
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
      <div className='twoD-section-title'>
        <h2>Our 2D Animation Process: Animating Ideas with Excellence</h2>
        <p>
Our 2D Animation Process transforms your ideas into engaging and precise visuals. Each step is crafted to ensure a smooth workflow, delivering captivating animations. We focus on bringing your vision to life with creativity and professionalism.</p>
      </div>
      <div className="twoD-feature-grid">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`twoD-feature-card color-${card.color?.toLowerCase() || 'default'}`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="twoD-feature-header">
              <h3>{card.title}</h3>
              <div className="twoD-icon-wrap">{card.icon}</div>
            </div>
            <p className="twoD-card-text">{card.paragraph}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
