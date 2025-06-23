// src/pages/ContactUs.jsx

import React from 'react';
import './Contact.css';
import ContactUs from './ContactUs';
import InfoSection from '../components/InfoSection';

export default function Contact() {
  return (
    <>
      <div className="contact-hero">
        <div className="contact-overlay">
          <div className="contact-content">
            <h5>Contact Us</h5>
            <p>
              We'd love to hear from you! Reach out for queries, collaborations, or just a hello.
            </p>
          </div>
        </div>
      </div>
      <ContactUs/>
<div className="map-wrapper">
  <div className="map-frame">
    <iframe
      loading="lazy"
      title="Nakshatra Namaha Creations"
      src="https://maps.google.com/maps?q=Nakshatra%20Namaha%20Creations%207J7V%2BJQ9%2C%20Akkamahadevi%20Rd%2C%20JP%20Nagar%202nd%20Stage%2C%20C-Block%2C%20JP%20Nagar%2C%20Mysuru%2C%20Karnataka%20570008&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
<InfoSection/>
    </>
  );
}
