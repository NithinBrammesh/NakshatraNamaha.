import React from "react";


import {  MdRocketLaunch } from "react-icons/md";

import './ EcomTypesSection.css';
import {
  LuLayoutDashboard,         // Custom Website Design
  LuWarehouse,               // Custom E-commerce Store
  LuShoppingBasket,          // Shopping Cart Development
  LuNetwork,                 // Marketplace Services
  LuPuzzle,                  // Plugin Development

} from "react-icons/lu"; 
import { FaMobileAlt, FaLock, FaHeadset } from "react-icons/fa";


const ecommerceSteps = [
  {
    title: "Custom Website Design for E-commerce",
    description:
      "Our e-commerce design company Mysore will help you stay top among your competitive fellas as we provide an attractive and engaging website, design so aptly that makes it possible for user to leverages all the features.",
      icon: <LuLayoutDashboard size={40} />,
  },
  {
    title: "Custom E-commerce Store",
    description:
      "Our secure e-commerce web development services in Mysore are customizable that offer solutions to meet all the client’s requirement.",
   icon: <LuWarehouse size={40} />,
  },
  {
    title: "Shopping Cart Development",
    description:
      "We have expertise in creating robust and feature-rich shopping carts that have been proving to enhance business conversion and revenue.",
  icon: <LuShoppingBasket size={40} />,
  },
  {
    title: "E-commerce Marketplace Services in India",
    description:
      "We render development services in India for e-commerce marketplace for all enterprises running on multi-platform selling models worldwide.",
      icon: <LuNetwork size={40} />,
  },
  {
    title: "Module and Plugin Development for E-commerce",
    description:
      "We can help in enriching your e-commerce stores easily with high-end plugins and module development and features advanced functionalities.",
    icon: <LuPuzzle size={40} />,
  },
    {
    title: "Highly Responsive E-commerce Development",
    description:
      "We build responsive e-commerce website for you to deliver user-friendly experiences irrespective of the kind of device used to operate the platform.",
    icon: <MdRocketLaunch size={40} />,
  },
  {
    title: "E-commerce Application Development",
    description:
      "Our e-commerce mobile apps are easy to download, install and use; all apps are handy and available on fingertips that increases the business visibility chances.",
    icon: <FaMobileAlt size={40} />,
  },
  {
    title: "Secure Payment Gateway",
    description:
      "Our multiple payment gateways integration into the e-commerce store development allows secure and reliable online transactions.",
       icon: <FaLock size={40} />,
  },
    {
    title: "Maintenance and Support",
    description:
      "We offer around the clock maintenance and support e-commerce services in India for ensuring smooth and flawless e-commerce experience for all.",
   icon: <FaHeadset size={40} />,
  },
];

export default function  EcomTypesSection() {
  return (
    <div className="ecommerce-types-wrapper">
      <h2 className="ecommerce-types-title">Types of Web Design</h2>
      <div className="ecommerce-types-grid">
        {ecommerceSteps.map((item, idx) => (
          <div className="ecommerce-types-card" key={idx}>
            <div className="ecommerce-types-icon">{item.icon}</div>
            <h4 className="ecommerce-types-heading">{item.title}</h4>
            <p className="ecommerce-types-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
