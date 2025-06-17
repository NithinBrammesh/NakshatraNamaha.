import React from "react";
import "./ClientsSay.css"

const  ClientsSays=()=>{
return( 
<div className="rock1">
  <div className="container8 my-4">
  <div className="blog-row">
  <div className="blog-heading">
    <h5>Our Blog</h5>
    <h2>Recent Blog & Articles</h2>
  </div>

  <div className="blog-text">
    <p>
      Stay updated with the latest advancements in technology! Our blogs and articles keep you informed about the newest trends and innovations shaping your daily work life.
      At Nakshatra Namaha Creations, we help businesses establish a strong online presence. From responsive websites to mobile apps, our team brings your vision to life with
      cutting-edge digital solutions tailored to your needs.
    </p>
  </div>

  <div className="blog-btn">
    <button type="button" className="btn btn-primary">VIEW BLOG</button>
  </div>
</div>


  </div>
  <div className="card12">
  <div className="row align-items-center r5">
  <div className="col-md-4 mb-5">
  <div className="blog-card-wrapper">
    <img src="/images/app-mobile.jpeg" alt="Blog Cover" className="blog-image" />
    <div className="blog-overlay-box">
      <p className="meta-info">October 08, 2024</p>
      <h5>Why a mobile optimized website is crucial for business success?</h5>
      <a href="/blog" className="text-link">
        Read Blog
        <svg viewBox="0 0 12 10" fill="#000" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
          <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
        </svg>
      </a>
    </div>
  </div>
</div>

<div className="col-md-4 mb-5">
  <div className="blog-card-wrapper">
    <img src="/images/mobile.png" alt="Blog Cover" className="blog-image" />
    <div className="blog-overlay-box">
      <p className="meta-info">August 03, 2024</p>
      <h5>
      How Custom Website Development Can Drive Business Growth in 2024</h5>
      <a href="/blog" className="text-link">
        Read Blog
        <svg viewBox="0 0 12 10" fill="#000" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
          <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
        </svg>
      </a>
    </div>
    </div>
    
 
  </div>
  </div>
</div>
</div>


);
}

export default ClientsSays;