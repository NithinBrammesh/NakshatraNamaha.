import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProcessTimeline.css';

const steps = [
  { title: 'Discussion', desc: 'We gather website requirements by detailed client interaction.' },
  { title: 'Sketch', desc: 'Prototype layouts are created based on client needs.' },
  { title: 'Approval', desc: 'Final layout is refined and sent for approval.' },
  { title: 'Web Design', desc: 'Designs are aligned with client specs.' },
  { title: 'Graphic Design', desc: 'Infographics are added for better UI.' },
  { title: 'Optimization', desc: 'Speed optimization for better UX.' },
  { title: 'Testing', desc: 'Compatibility testing across devices.' },
  { title: 'Hosting', desc: 'Secure hosting & SSL deployment.' }
];

const ProcessTimeline = () => {
  const targetRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-95%']);
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '200px']);

  return (
    <section ref={targetRef} className="process-section">
      <h2 className="text-center mb-5">Our Development Process</h2>
      <div className="process-scroll-container">
        <div className="container">
          <div className="process-outer-container">
            {isDesktop ? (
              <motion.div className="process-wrap" style={{ x, y }}>
                {steps.map((step, idx) => (
                  <div className="process-box" key={idx}>
                    <div className={`process-circle circle-style-${idx % 8}`}>
                      {step.title}
                    </div>
                    <p className="process-desc">{step.desc}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="process-wrap">
                {steps.map((step, idx) => (
                  <div className="process-box" key={idx}>
                    <div className={`process-circle circle-style-${idx % 8}`}>
                      {step.title}
                    </div>
                    <p className="process-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
