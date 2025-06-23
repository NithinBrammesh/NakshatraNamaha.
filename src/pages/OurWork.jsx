// src/Services.js

import React from 'react';
import { motion } from 'framer-motion';
import './OurWork.css';


export default function OutWork() {


  return (
    <>
<div className="ourwork-hero">
  <div className="ourwork-overlay">
    <div className="ourwork-content">
      <h1>Our Works</h1>
      <p>
        A Journey of Innovation and Excellence
      </p>
    </div>

  </div>

    
</div>
  <section className="why-section container my-5">
  <div className="row align-items-start justify-content-center">

        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="why-heading">
           
Our work reflects innovation and expertise, delivering strategies that drive real results

          </h2>
        </motion.div>

        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h5 className="sub-heading">Take a closer look at our excellence</h5>
          <p>
         Discover the stories behind our success. Our portfolio contains a variety of projects that were researched, designed and delivered to meet specific measurable objectives of our clients. Whether we've developed a custom mobile app or a compelling corporate ad film or an seo friendly website, our case studies present strategic thinking and creative execution that delivers our clients success. Browse through our work to see how we have turned ideas into tangible, impactful solutions to strengthen brands and businesses.
          </p>
        </motion.div>
      </div>
    </section>




    </>
  );
}
