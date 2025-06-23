// src/pages/Blogs.jsx

import React from 'react';
import './Blogs.css';
import BlogCard from './BlogCard';
import InfoSection from '../components/InfoSection';
import ClientSlider from './ClientSlider';

export default function Blogs() {
  return (
    <>
      <div className="blogs-hero">
        <div className="blogs-overlay">
          <div className="blogs-content">
            <h5>Our Blogs</h5>
            <p>
           Follow us and get updated on latest technologies and tools
            </p>
          </div>
        </div>
      </div>

     
      <BlogCard/>
      <ClientSlider/>
        <InfoSection/>
    </>
  );
}
