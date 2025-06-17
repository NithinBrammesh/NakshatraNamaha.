import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './InfoSection.css';

const InfoSection = () => {
  return (
    <footer className="footer-row1">
      {/* Subscribe Section */}
  
      <section className="subscribe-section">
        <h2>SUBSCRIBE NOW</h2>
        <p>Subscribe to Nakshatra Namaha Creations, our monthly look.</p>
        <form className="subscribe-form">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Contact Section */}
      <section className="contact-section1">
        <h2>CONTACT US</h2>
        <p>+91 9900566466</p>
        <p>
          <a href="mailto:info@nakshatranamahacreations.com">
            info@nakshatranamahacreations.com
          </a>
        </p>
        <address>
          SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage,<br />
          C-Block, JP Nagar, Mysuru, Karnataka 570008
        </address>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <h2>QUICK LINKS</h2>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-services">Our Services</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
        
      </section>
 
    </footer>
  );
};

export default InfoSection;
