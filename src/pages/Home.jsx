import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import OurProcess from './OurProcess';
import OurClients from './OurClients';
import Portfolio from './PortFolio';
import ClientsSay from './ClientsSay';
import OurClientsSays from './OurClientsSays';
import ProcessTimeline from './ProcessTimeline';
import CTASection from './CTASection';
import FaqAccordion from './FaqAccordion';
import InfoSection from '../components/InfoSection';
import StickyServices from './StickyServices';
import AllServices from './AllServices';
import TopWeb from './TopWeb';
import Buissness from './Buissness';
import OurProcessScroll from './OurProcessScroll';

// import OwlCarousel from 'react-owl-carousel';



function Home() {


  return (
    <div>
      <div className='baya'>
        {/* Hero Section */}
        <div className="main">
          <div className="heading px-4">
            <div className="heading1 max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                Innovation & Experience<br />driving future growth for your business
              </h1>
              <div className="mt-6">
                <p id="para2" className="text-gray-700 text-base md:text-lg leading-relaxed">
                  At Nakshatra Namaha Creations, we turn your vision into reality.
                  Recognized as Mysore’s best in website design, development, and mobile apps, we deliver
                  creative, detail-driven solutions tailored to your needs. Your story, our mission.
                </p>
              </div>
            </div>

            <ul className="buttons mt-6 d-flex gap-3">
              <a href="/our" className="cta-button">
                Explore our projects
              </a>
            </ul>
          </div>
          
        </div>
 

        {/* Digital Section */}
        <div className="digital-section">
          <h2 className="digital-heading">
         <span className="primary-text">We Shape Your</span> <br /> Digital Presence with Creative Website Solutions
          </h2>
          <p className="digital-paragraph">
            Since 2015, our team has been shaping digital experiences, serving over 890+ clients across 4 countries.
            As the best mobile app development company in Mysore, we offer a comprehensive range of services to help businesses grow in the online space.

            As the best website development company in Mysore, we specialize in everything from website design and web applications to mobile app development.
            We provide user-friendly, high-performing solutions tailored to meet your unique needs. Whether you are looking to enhance your web presence or improve customer engagement, our solutions ensure practical and effective results for your business.

            Partner with us to explore new possibilities for your business online. Let us help you achieve your goals with a strategy focused on growth and success in the digital world. Recognized as the best website design company in Mysore, we are a top choice for entrepreneurs seeking web design services due to our proven track record and commitment to excellence.
          </p>
        </div>
      </div>

      {/* Additional Homepage Sections */}
        <StickyServices />
      <AllServices />
      {/* <OurProcess /> */}
      <OurProcessScroll/>
      <OurClients />
        <Buissness />
           <TopWeb />
      <Portfolio />
      <ClientsSay />
      <OurClientsSays />
      <ProcessTimeline />
      <CTASection />
      <FaqAccordion />
      <InfoSection />
   
    </div>
  );
}

export default Home;
