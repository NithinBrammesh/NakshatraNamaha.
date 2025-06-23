import React from "react";
import './OurService.css';

function OurService({ title, description, listItems, Details, imageSrc }) {
  return (
    <div className="service-wrapper">
      <div className="service-row">
        {/* Left: Title */}
        <div className="service-left">
          <h3>{title}</h3>
        </div>

        {/* Middle: Description & List */}
        <div className="service-middle">
          <p>{description}</p>
          <ul>
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right: Image + Button */}
      
          <div className="service-img-wrapper">
            <img src={imageSrc} alt={title} />
          </div>
          <a href="/home" className="service-btn">
            {Details}
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
 
  );
}

export default OurService;
