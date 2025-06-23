import React, { useRef, useEffect } from "react";
import "./MobileProcessTimeline.css";
import { HiOutlineTemplate } from "react-icons/hi";
import { MdDeveloperMode, MdSupportAgent } from "react-icons/md";
import { BiBug } from "react-icons/bi";


const originalSteps = [
  {
    icon: <HiOutlineTemplate size={28} color="#4f46e5" />,
    title: "Design & Prototyping",
    description: "Our team creates intuitive designs and prototypes...",
  },
  {
    icon: <MdDeveloperMode size={28} color="#4f46e5" />,
    title: "Development & Coding",
    description: "Skilled developers build a robust and scalable app...",
  },
  {
    icon: <BiBug size={28} color="#4f46e5" />,
    title: "Testing & QA",
    description: "We rigorously test the app for bugs, security...",
  },
  {
    icon: <MdSupportAgent size={28} color="#4f46e5" />,
    title: "Launch & Support",
    description: "After launch, we provide ongoing support...",
  },
];

export default function MobileProcessTimeline() {
  const scrollRef = useRef(null);
  const ITEM_WIDTH = 300; // card width + margin

  // clone steps 3 times
  const steps = [...originalSteps, ...originalSteps, ...originalSteps];

  useEffect(() => {
    // Scroll to the middle set at load
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = originalSteps.length * ITEM_WIDTH;
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const maxScroll = ITEM_WIDTH * steps.length;
      const middle = originalSteps.length * ITEM_WIDTH;

      container.scrollBy({
        left: direction === "left" ? -ITEM_WIDTH : ITEM_WIDTH,
        behavior: "smooth",
      });

      setTimeout(() => {
        // Reset position if reached near ends
        if (container.scrollLeft <= ITEM_WIDTH) {
          container.scrollLeft = middle;
        } else if (container.scrollLeft >= maxScroll - ITEM_WIDTH * 2) {
          container.scrollLeft = middle;
        }
      }, 600); // match transition duration
    }
  };

  return (
    <section className="mobile-process-timeline">
      <h2>Our Mobile App Development Process</h2>
      <p className="subtitle">From concept to launch, here's how we build...</p>

      <div className="timeline-wrapper">
        <button onClick={() => scroll("left")} className="scroll-btn">
          &#8592;
        </button>

        <div className="timeline-container" ref={scrollRef}>
          {steps.map((step, index) => (
            <div className="timeline-card" key={index}>
              <div className="icon-box1">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="scroll-btn">
          &#8594;
        </button>
      </div>
    </section>
  );
}
