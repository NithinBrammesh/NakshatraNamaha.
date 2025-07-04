import React from 'react';
import './Careers.css';
import InfoSection from '../components/InfoSection';
import ClientSlider from './ClientSlider';

export default function Careers() {

  const jobs = [
    {
      title: 'React Native Developer',
      type: 'Full Time',
      jdLink: '/jobs/react-native-developer',
      applyLink: 'mailto:info@nakshatranamahacreations.com',
    },
    {
      title: 'Mern Stack Developer',
      type: 'Full Time',
      jdLink: '/jobs/mern-stack-developer',
      applyLink: 'mailto:info@nakshatranamahacreations.com',
    },
    {
      title: 'Node JS Developer',
      type: 'Full Time',
      jdLink: '/jobs/nodejs-developer',
      applyLink: 'mailto:info@nakshatranamahacreations.com',
    },
    {
      title: 'DevOps Engineer',
      type: 'Full Time',
      jdLink: '/jobs/devops-engineer',
  applyLink: 'mailto:info@nakshatranamahacreations.com',
    },
    {
      title: 'Automation (Selenium) Tester',
      type: 'Full Time',
      jdLink: '/jobs/automation-tester',
       applyLink: 'mailto:info@nakshatranamahacreations.com',
    },
    {
      title: 'BDM',
      type: 'Full Time',
      jdLink: '/jobs/bdm',
     applyLink: 'mailto:info@nakshatranamahacreations.com',
    },
    {
      title: 'WordPress Developer',
      type: 'Full Time',
      jdLink: '/jobs/wordpress-developer',
      applyLink: 'mailto:info@nakshatranamahacreations.com',
    },
    {
      title: 'Graphic Designer',
      type: 'Full Time',
      jdLink: '/jobs/graphic-designer',
     applyLink: 'mailto:info@nakshatranamahacreations.com',

    },
  ];
  return (
    <>
      <div className="careers-hero">
        <div className="careers-overlay">
          <div className="careers-content">
            <h5>Careers</h5>
            <p>

              Be Part of Something Bigger – Explore Exciting Career Opportunities!
            </p>
          </div>
        </div>
      </div>
      <div className="careers-list container py-5">
        {jobs.map((job, index) => (
          <div className="job-card row align-items-center shadow-sm mb-4 p-4 rounded" key={index}>
            <div className="col-md-4">
              <h5 className="job-title fw-bold">{job.title}</h5>
              <p className="text-muted mb-0">
                <i className="fas fa-briefcase me-2"></i> {job.type}
              </p>
            </div>
            <div className="col-md-8 d-flex justify-content-md-end justify-content-start mt-3 mt-md-0">
              <div className="button-wrap ms-md-auto">
                <a href={job.jdLink} className="btn btn-outline-primary me-3">
                  Job Description
                </a>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    (window.location.href = 'mailto:info@nakshatranamahacreations.com')
                  }
                >
                  Apply
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      <ClientSlider />
      <InfoSection />
    </>
  );
}
