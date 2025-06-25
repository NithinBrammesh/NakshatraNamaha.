import React from "react";
import "./B2BDesignPhases.css";
import {
  LuLightbulb,
  LuMegaphone,
  LuHeadset,
  LuTrendingUp,
  LuSearch,
  LuClock
} from "react-icons/lu";
const designPhases = [
  {
    title: "Strategic Business Solutions",
    description:
      "We design strategies aligned with your goals to deliver measurable results and growth.",
    icon: <LuLightbulb size={40} className="b2b-section-icon" />, // 💡 Innovative ideas/strategy
    color: "blue",
  },
  {
    title: "Innovative Marketing Campaigns",
    description:
      "We craft impactful campaigns that connect your brand with the right audience effectively.",
    icon: <LuMegaphone size={40} className="b2b-section-icon" />, // 📣 Promotions/marketing
    color: "blue",
  },
  {
    title: "Dedicated Support Team",
    description:
      "Our team is committed to assisting you with timely solutions and reliable guidance.",
    icon: <LuHeadset size={40} className="b2b-section-icon" />, // 🎧 Customer support
    color: "blue",
  },
  {
    title: "Scalable and Future-Ready Strategies",
    description:
      "Our solutions grow with your business and adapt to changing market trends seamlessly.",
    icon: <LuTrendingUp size={40} className="b2b-section-icon" />, // 📈 Growth/trending
    color: "blue",
  },
  {
    title: "SEO-Optimized Solutions",
    description:
      "Our websites and content are crafted to rank better and increase online visibility.",
    icon: <LuSearch size={40} className="b2b-section-icon" />, // 🔍 SEO/search
    color: "blue",
  },
  {
    title: "Timely Project Delivery",
    description:
      "Your projects are completed on schedule without compromising on quality or performance.",
    icon: <LuClock size={40} className="b2b-section-icon" />, // ⏰ On-time delivery
    color: "blue",
  },
];

export default function B2BDesignPhases() {
  return (
    <div className="b2b-section-wrapper11">
      <h2 className="b2b-section-title">What can you expect from Nakshatra Namaha Creations?</h2>
      <div className="b2b-section-grid">
        {designPhases.map((item, idx) => (
          <div className="b2b-section-card" key={idx}>
            <div className="b2b-section-icon">{item.icon}</div>
            <h4 className="b2b-section-heading">{item.title}</h4>
            <p className="b2b-section-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
