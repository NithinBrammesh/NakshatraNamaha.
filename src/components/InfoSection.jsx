import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './InfoSection.css';
import { Link } from 'react-router-dom';

const InfoSection = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row">

          {/* Quick Links & Social Media */}
          <div className="col-md-4 footer-column">
            <h5 className="footer-title">QUICK LINKS</h5>
            <ul className="footer-links">
              <li>  <Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/about">About Us</Link></li>
              <li> <Link to="/service" className="nav-link"> Services</Link></li>
              <li>  <Link className="nav-link" to="/work">Our Work</Link></li>
              <li> <Link className="nav-link" to="/careers">Careers</Link></li>
              <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
            </ul>
            <h5 className="footer-title mt-4">Social Media</h5>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/Nakshatranamahacreations/" target="_blank" rel="noreferrer">
                <img src="/images/facebook.png" alt="facebook-icon" />
              </a>
              <a href="https://www.youtube.com/c/NakshatraNamahaCreations" target="_blank" rel="noreferrer">
                <img src="/images/youtubr.png" alt="youtube-icon" />
              </a>
              <a href="https://www.linkedin.com/company/nakshatra-namaha-creation/" target="_blank" rel="noreferrer">
                <img src="/images/NNCWebsite.png" alt="linkedin-icon" />
              </a>
              <a href="https://www.instagram.com/nnc.digitalbengaluru/" target="_blank" rel="noreferrer">
                <img src="/images/instagram.png" alt="instagram-icon" />
              </a>
              <a href="https://x.com/nncbengaluru" target="_blank" rel="noreferrer">
                <img src="/images/twitter.png" alt="twitter-icon" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 footer-column">
            <h5 className="footer-title">CONTACT US</h5>
            <ul className="footer-contacts">
              <li><i className="fas fa-phone"></i> +91 9900566466</li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:info@nakshatranamahacreations.com">info@nakshatranamahacreations.com</a></li>
              <li>
                <i className="fas fa-location-dot"></i> <strong>BENGALURU</strong><br/>
                1st floor, Darshan Plazza, Dwaraka Nagar,<br/>
                Banashankari, 6th Stage 1st Block,<br/>
                Channasandra, Bengaluru, Karnataka - 560061
              </li>
              <li>
                <i className="fas fa-location-dot"></i> <strong>MYSURU</strong><br/>
                SUSWANI TOWERS, Akkamahadevi Rd,<br/>
                JP Nagar 2nd Stage, C-Block,<br/>
                Mysuru, Karnataka 570008
              </li>
              <li>
                <i className="fas fa-location-dot"></i> <strong>HYDERABAD</strong><br/>
                64/2 RT, Prakashnagar, Begumpet,<br/>
                Hyderabad, Telangana - 500016
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-4 footer-column">
            <h5 className="footer-title">OUR SERVICES</h5>
            <ul className="footer-links">
              <li><Link className="dropdown-item" to="/services/website">Mobile App Development</Link></li>
              <li> <Link  className="dropdown-item" to="/services/Ecommerce/">Website Development</Link ></li>
              <li> <Link className="dropdown-item" to="/services/video">Corporate Video Production</Link></li>
              <li>   <Link  className="dropdown-item" to="/services/social-media-marketing/">Digital Marketing</Link></li>
              <li>  <Link className="dropdown-item" to="/services/uiux">UI/UX Design</Link></li>
              <li><Link className="dropdown-item" to="/services/2d-animation">2D Animation</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InfoSection;
