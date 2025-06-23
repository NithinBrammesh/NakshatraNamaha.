// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="container contact-section">
      <div className="row align-items-center" style={{ paddingLeft: '150px' }}>
        <div className="col-lg-7 text-section">
          <motion.h2
            className="let-grow"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let’s grow
          </motion.h2>
          <motion.h2
            className="let-grow-sub text-move"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            — together.
          </motion.h2>
        </div>

        <div className="col-lg-5">
          <motion.img
            src="/images/contactus111.png"
            alt="Contact Us"
            className="img-fluid contact-img"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-10 mx-auto">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="row g-4">
              <div className="col-md-6">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Phone *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject *"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label>Leave your message</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Messages *"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="cta-btn">
                  Send the message
                  <svg
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-arrow"
                  >
                    <path
                      d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
