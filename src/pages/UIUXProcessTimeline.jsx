import React, { useRef, useEffect } from "react";
import "./UIUXProcessTimeline.css";
import { HiUserGroup } from 'react-icons/hi';          // For User Research
import { GiCompass } from 'react-icons/gi';            // For Crafting Strategy
import {  MdRocketLaunch } from 'react-icons/md';  
import { FaCode } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const originalSteps = [
  {
    title: 'User Research',
    icon: <HiUserGroup size={28} color="#26abe1" />,
    text: `Research is crucial in creating any design. Whether it’s user interface or user experience, understanding what users think about your product is essential. Thorough research provides a strong foundation for developing a clean and effective design.`,
  },
  {
    title: 'Crafting Strategy',
    icon: <GiCompass size={28} color="#26abe1" />,
    text: `Once the foundation for the design is set, the next step is strategy. This involves determining the best course of action, assessing risks, objectives, and the quality of content that will engage users effectively.`,
  },
  {
    title: 'Designing',
    icon: <MdDesignServices size={28} color="#26abe1" />,
    text: `We prioritize our client’s needs, which is why we go through multiple redesigning phases to deliver the desired results.`,
  },
  {
    title: 'Development',
    icon: <FaCode size={28} color="#26abe1" />,
    text: `We have a dedicated team that brings ideas to life through effective implementation. Our development team ensures that all code written for the design adheres to industry standards.`,
  },
  {
    title: 'Launch & Support',
    icon: <MdRocketLaunch size={28} color="#26abe1" />,
    text: `We launch your project and continue to support it, ensuring optimal performance, usability, and long-term success.`,
  },
];

export default function UIUXProcessTimeline() {
  const scrollRef = useRef(null);
  const ITEM_WIDTH = 300;

  const steps = [...originalSteps, ...originalSteps, ...originalSteps];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = originalSteps.length * ITEM_WIDTH;
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const maxScroll = ITEM_WIDTH * steps.length;
    const middle = originalSteps.length * ITEM_WIDTH;

    container.scrollBy({
      left: direction === "left" ? -ITEM_WIDTH : ITEM_WIDTH,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (container.scrollLeft <= ITEM_WIDTH) {
        container.scrollLeft = middle;
      } else if (container.scrollLeft >= maxScroll - ITEM_WIDTH * 2) {
        container.scrollLeft = middle;
      }
    }, 600);
  };

  return (
    <section className="uiux-timeline-section">
      <h2>Our UI/UX Design Process: From Concept to Experience</h2>
      <p className="uiux-subtitle">Building a remarkable website starts with understanding your vision and crafting a solution tailored to your needs. As the leading website development company in Mysore, our process ensures a smooth journey through every phase, resulting in a strong online presence.</p>

      <div className="uiux-timeline-wrapper">
        <button onClick={() => scroll("left")} className="uiux-scroll-btn">
          &laquo;
        </button>

        <div className="uiux-timeline-container" ref={scrollRef}>
          {steps.map((step, index) => (
            <div className="uiux-timeline-card" key={index}>
              <div className="uiux-icon-box">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="uiux-scroll-btn">
          &raquo;
        </button>
      </div>
    </section>
  );
}
