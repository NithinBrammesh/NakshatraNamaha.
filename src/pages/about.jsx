// src/AboutUs.js
import React from 'react';
import './about.css'
import WebDesignServices from './WebDesignService';
import CounterWithLottie from './CounterWithLottie';
import CTASection from './CTASection';
import InfoSection from '../components/InfoSection';


export default function AboutUs() {
  return (
    <>
     <div className="hero-section">
      <div className="overlay">
        <div className="content55">
          <h1>We Innovate, We Build, We Transform</h1>
          <p>Cutting-edge web solutions to tackle your most complex business challenges!

          </p>
      
        </div>
      </div>

    </div>

      <section className="design-section">
      <div className="design-container">
        <div className="visual-left">
          <div className="circle">
            <div className="arrow-line"></div>
          </div>
        </div>

        <div className="content-right">
          <h2>
           What makes Nakshatra Namaha Creations the Leading <br />
            <strong>Mobile App and Website Development Company in Mysore?</strong>
          </h2>

          <div className="image-wrapper7">
            <img src="/images/team.jpg" alt="Web design team" className="rounded-img" />
            <div className="floating-text-box">
            <h3>
              <strong>Take a closer look at our excellence</strong>
            </h3>
              <p>
              At Nakshatra Namaha Creations, we take pride in being the best website development company in Mysore, offering a wide range of
               web services, including website development, app development, E-Commerce website development, WordPress website development, 
               Flutter App development, React Native Website Development, and React JS Website Development. With over 8 years of experience, 
               we deliver unique, high-performance solutions tailored to each client’s specific needs. Recognized as the best website design 
               company in Mysore, our skilled team blends creativity with the latest technologies to craft visually appealing and seamless 
               websites. As the best mobile app development company in Mysore, we also specialize in building intuitive, high-quality mobile 
               apps. From initial planning to final execution, we provide comprehensive services, ensuring timely delivery and continued support
                to help businesses thrive in the digital world.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about-nnc-section">
  <div class="about-nnc-container">
    <div class="about-left">
      <h2>Nakshatra Namaha Creations is a Reliable Website Development Company:</h2>
      <h3>As an expert in the field</h3>
    </div>
    <div class="about-divider"></div>
    <div class="about-right">
      <p>
        Since 2015, our team has been shaping digital experiences, serving over 890+ clients across 4 countries. As the best mobile app and website development company in Mysore, we offer a comprehensive range of services to help businesses grow in the online space.
      </p>
      <p>
        We specialize in everything from website design and web applications to mobile app development, providing user-friendly, high-performing solutions that meet your needs. Whether you’re looking to improve your web presence or enhance customer engagement, our expertise ensures that we deliver practical, effective results.
      </p>
      <p>
        Partner with us to explore new possibilities for your business online. Let us help you achieve your goals with a strategy that focuses on growth and success in the digital world. As a result, we are a top choice for entrepreneurs seeking web design services for numerous reasons:
      </p>
    </div>
  </div>
</section>

    <WebDesignServices/>
    <CounterWithLottie/>
    <CTASection/>
    <InfoSection/>
    </>
  );
}
