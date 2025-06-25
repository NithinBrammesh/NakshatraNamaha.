import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import Service from './pages/Service';
import AboutUs from './pages/about';
import OurWork from './pages/OurWork'; 
import Blogs from './pages/Blogs'; 
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import WordPress from './pages/WordPress';
import Video from './pages/Video';
import SocialMedia from './pages/SocialMedia';
import Ecommerce from './pages/Ecommerce';
import SeoService from './pages/SeoService';
import B2BMarket from './pages/B2BMarket';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import UIUXDevelopment from './pages/UIUXDevelopment';
import AnimationDevelopment from './pages/AnimationDevelopment';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/OurClientSays" element={<Home />} />
   
        <Route path="/about" element={<AboutUs />} />
     <Route path="/service" element={<Service />} />
       <Route path="/work" element={<OurWork />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/jobs/automation-tester" element={<ApplyJob />} /> */}
          <Route path="/jobs/:slug" element={<JobDetail />} />

            {/* Services */}
        <Route path="/services/website" element={<WebsiteDevelopment />} />
         <Route path="/services/wordpress" element={<WordPress />} />
          <Route path="/services/video" element={<Video />} />
          <Route path="/services/social-media-marketing/" element={<SocialMedia />} />
            <Route path="/services/Ecommerce" element={<Ecommerce/>} />
            <Route path="/services/SeoService" element={<SeoService/>} />
             <Route path="/services/b2b" element={<B2BMarket/>} />
              <Route path="/services/software" element={<SoftwareDevelopment/>} />
               <Route path="/services/uiux" element={<UIUXDevelopment/>} />
                <Route path="/services/2d-animation" element={<AnimationDevelopment/>} />
      </Routes>
    </Router>
  );
}
