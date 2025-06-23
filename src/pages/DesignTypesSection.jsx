import React from "react";
import "./DesignTypesSection.css";
import { FaCode } from "react-icons/fa";
import { MdBugReport } from "react-icons/md"
import { MdRocketLaunch } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";

const designTypes = [
    {
    title: "Development & Coding",
    description:
      "Skilled developers build a robust and scalable app, focusing on performance and seamless functionality.",
    icon: <FaCode size={40} />,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We rigorously test the app for bugs, security and usability, guaranteeing a smooth user experience.",
icon: <MdBugReport size={40} />
  },
  {
    title: "Launch & Support",
    description:
      "After launch, we provide ongoing support and updates to keep your app current and effective.",
    icon: <MdRocketLaunch size={40} />,
  },
  {
    title: "Requirement Gathering & Analysis",
    description:
      "We collaborate with you to understand business goals and user needs, ensuring clarity in requirements.",
    icon: <BsClipboardCheck size={40} />,
  },
  {
    title: "Design & Prototyping",
    description:
      "Our team creates intuitive designs and prototypes, providing a visual roadmap for the app's look and feel.",
    icon: <TbLayoutDashboard size={40} />,
  },

];

export default function DesignTypesSection() {
  return (
    <div className="design-types-wrapper">
      <h2 className="design-types-title">Types of Web Design</h2>
      <div className="design-types-grid">
        {designTypes.map((item, idx) => (
          <div className="design-types-card" key={idx}>
            <div className="design-types-icon">{item.icon}</div>
            <h4 className="design-types-heading">{item.title}</h4>
            <p className="design-types-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
