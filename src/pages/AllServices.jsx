import React from "react";
import OurService from "./OurService";
import "./OurService.css";

function AllServices() {
  return (
    <div className="service">
      <div className="service_layer">
        <h2>OUR SERVICE</h2>
        <h1>Crafting Digital Experiences Beyond Websites</h1>
      </div>

      <OurService
        title="Webapp Development"
        description="We develop high-performance mobile applications designed to enhance your business efficiency and customer experience. Our services include:"
        listItems={[
          "+ Flutter App Development",
          "+ React Native Development",
          "+ Cross-platform app solutions",
        ]}
        Details="Details"
        imageSrc="./images/mobile1.jpeg"  
      />

      <OurService
        title="Corporate Video Production"
        description="We specialize in creating impactful corporate videos that strengthen your brand and communicate your message effectively. Our services include:"
        listItems={[
          "+ Concept development and scripting",
          "+ High-quality video shooting and editing",
          "+ Professional voiceovers and sound design",
        ]}
        Details="Details"
        imageSrc="./images/video1.jpeg"
      />

      <OurService
        title="Graphic Design"
        description="Our graphic design services are crafted to enhance your brand’s visual identity and make a lasting impact. Unlock the full potential of design with:"
        listItems={[
          "+ Creative branding and logo design",
          "+ Custom graphics and illustrations",
          "+ Engaging designs for social media"
        ]}
        Details="Details"
        imageSrc="./images/graphic.jpeg"
      />

      <OurService
        title="B2B Marketing Services"
        description="Our B2B marketing services are designed to enhance your brand's reach and drive meaningful business relationships. We specialize in:"
        listItems={[
          "+ B2B marketing strategies",
          "+ Targeted content creation and distribution",
          "+ Lead generation and Brand Positioning"
        ]}
        Details="Details"
        imageSrc="./images/b2b1.jpeg"
      />
    </div>
  );
}

export default AllServices;