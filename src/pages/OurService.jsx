import React from "react";
import './OurService.css';

function OurService({ title, description, listItems, Details, imageSrc }) {
  return (
    <div className="service">
      <div className="row each_service animate__animated animate__fadeInUp">
        {/* Service Title */}
        <div className="col-md-3">
          <h3 className="service_title">{title}</h3>
        </div>

        {/* Service Description */}
        <div className="col-md-5 offset-md-1">
          <p>{description}</p>
          <ul className="list-styled">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Service Image and Details Button */}
        {/* <div className="col-md-31 service_img">
          <div className="service_image_wrapper">
            <img
              src={imageSrc}
              alt={title}
              className="service_image"
            />
          </div> */}
        
            <a href="/home" className="service-btn">
              {Details}
              <i className="fas fa-arrow-right arrow-icon1"></i>
            </a>
          </div>
        </div>
    
    
  );
}

export default OurService;
