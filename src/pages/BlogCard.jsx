import React from 'react';
import { motion } from 'framer-motion';
import './BlogCard.css'; // you can move inline if needed


export default function BlogCard() {
  const blogs = [
    {
      image: '/images/blog.webp',
      title: 'How a Well-Designed Website Can Help Businesses Stand Out',
      date: 'October 22, 2024',
      day: '22',
      month: 'Oct',
      link: '#',
    },
    {
      image: '/images/blog1.webp',
      title: 'How Custom Website Development Can Drive Growth',
      date: 'October 22, 2024',
      day: '22',
      month: 'Oct',
      link: '#',
    },
    {
      image: '/images/blog3.webp',
      title: 'How Website Speed Optimization Impacts Conversion',
      date: 'October 12, 2024',
      day: '12',
      month: 'Oct',
      link: '#',
    },
    {
      image: '/images/blog4.webp',
      title: 'The Role of Mobile Apps in Business Operations',
      date: 'October 10, 2024',
      day: '10',
      month: 'Oct',
      link: '#',
    },
    {
      image: '/images/blog5.webp',
      title: 'Why Mobile-Optimized Websites Are Crucial Today',
      date: 'October 9, 2024',
      day: '09',
      month: 'Oct',
      link: '#',
    },
    {
      image: '/images/blog6.webp',
      title: 'How 2D Animation Can Simplify Sales Communication',
      date: 'October 5, 2024',
      day: '05',
      month: 'Oct',
      link: '#',
    },
  ];

  return (
    <section className="blog-wrapper">
      <div className="container19">
        <h2 className="section-title17">Latest Blog Insights</h2>
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <motion.a
              href={blog.link}
              key={index}
              className="blog-card"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="blog-image-wrap">
                <img src={blog.image} alt={blog.title} className="blog-img" />
                <div className="date-badge">
                  <span className="day">{blog.day}</span>
                  <span className="month">{blog.month}</span>
                </div>
              </div>
              <div className="blog-body"> 
                <span className="blog-date-text">📅 {blog.date}</span>
                <h4 className="blog-title">{blog.title}</h4>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>


  );
}
