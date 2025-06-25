import React, { useRef, useEffect } from "react";
import "./SoftwareProcessTimeline.css";
import { HiLightBulb } from 'react-icons/hi';                  // Requirement
import { BiAnalyse } from 'react-icons/bi';                   // Analysis
import { FaCode } from 'react-icons/fa';                      // Coding
import { MdDesignServices } from 'react-icons/md';            // Designing & Implementation
import { VscDebugAlt } from 'react-icons/vsc';                // Testing
import { MdSupportAgent } from 'react-icons/md';  

const originalSteps = [
   {
     title: 'Requirement',
     icon: <HiLightBulb size={28} color="#26abe1" />,
     text: `Before starting any project, we first understand the client’s vision to ensure their business success.`,
   },
   {
     title: 'Analysis',
     icon: <BiAnalyse size={28} color="#26abe1" />,
     text: `We collect all requirements and assess the existing software to determine what needs maintenance and what needs to be newly developed.`,
   },
   {
     title: 'Coding',
     icon: <FaCode size={28} color="#26abe1" />,
     text: `Our developers evaluate the required programming languages and start coding based on the specified requirements.`,
   },
   {
     title: 'Designing & implementation',
     icon: <MdDesignServices size={28} color="#26abe1" />,
     text: `During this phase, each module and database design is completed, and your custom-developed software is deployed.`,
   },
   {
     title: 'Testing',
     icon: <VscDebugAlt size={28} color="#26abe1" />,
     text: `After deploying the application or software, the next phase is testing. Each module is thoroughly checked for errors or bugs and fixed accordingly.`,
   },
   {
     title: 'Maintenance & support',
     icon: <MdSupportAgent size={28} color="#26abe1" />,
     text: `We provide ongoing support for the customized software throughout its tenure.`,
   },
];

export default function SoftwareProcessTimeline() {
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
    <section className="software-process-timeline">
      <h2>Our Software Development Process: Cutting-Edge Software Solutions</h2>
      <p className="software-subtitle">At Nakshatra Namaha Creations, our software development process is designed for efficiency, quality, and user satisfaction. We follow a structured approach to transform your ideas into fully functional software solutions.</p>

      <div className="software-timeline-wrapper">
        <button onClick={() => scroll("left")} className="software-scroll-btn">
          &laquo;
        </button>

        <div className="software-timeline-container" ref={scrollRef}>
          {steps.map((step, index) => (
            <div className="software-timeline-card" key={index}>
              <div className="software-icon-box">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="software-scroll-btn">
          &raquo;
        </button>
      </div>
    </section>
  );
}
