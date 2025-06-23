import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './InfoSection.css';

const InfoSection = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row">

          {/* Quick Links & Social Media */}
          <div className="col-md-4 footer-column">
            <h5 className="footer-title">QUICK LINKS</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About</a></li>
              <li><a href="/our-works">Works</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
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
              <li><a href="/mobile-app-development-company-in-bangalore">Mobile App Development</a></li>
              <li><a href="/website-development-company-in-bangalore">Website Development</a></li>
              <li><a href="/corporate-video-production-company-in-bangalore">Corporate Video Production</a></li>
              <li><a href="/digital-marketing-agency-in-bangalore">Digital Marketing</a></li>
              <li><a href="/graphic-design-company-in-bangalore">Graphic Designing</a></li>
              <li><a href="/2d-animation-studio-in-bangalore">2D Animation</a></li>
              <li><a href="/b2b-marketing-agency-in-bangalore">B2B Marketing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InfoSection;
