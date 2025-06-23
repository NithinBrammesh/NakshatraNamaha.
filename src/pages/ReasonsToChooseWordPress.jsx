import React from 'react';
import './ReasonsToChooseWordPress.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const reasons = [
  {
    title: 'Best social media practices',
    description:
      'We excel in social media platforms and strategies, ensuring top-tier marketing standards. Our result-driven SMO strategies effectively promote your brand, maximizing reach and boosting traffic for greater customer engagement.',
    iconTag: <i className="fa-solid fa-share-nodes"></i>,
  },
  {
    title: 'Value industry standards',
    description:
      'We collaborate across industries to strategically position your brand on the most suitable networks. These connections enhance visibility, ensuring your brand reaches a wider and more relevant audience.',
    iconTag: <i className="fa-solid fa-network-wired"></i>,
  },
  {
    title: 'Branding with ROI',
    description:
      'Effective social media branding boosts audience engagement and ROI. Nakshatra Namaha Creations, a top social media company in Bangalore, crafts strategies to enhance your brand visibility. We set the right tone to attract customers, drive traffic, and generate leads.',
    iconTag: <i className="fa-solid fa-chart-line"></i>,
  },
  {
    title: 'Prioritize visual branding',
    description:
      'Social media branding goes beyond content—it’s also about visuals. Our expert graphic designers create engaging designs that captivate audiences. We prioritize visual branding to enhance recognition and ensure marketing success.',
    iconTag: <i className="fa-solid fa-palette"></i>,
  },
  {
    title: 'Clearly articulated',
    description:
      'We prioritize your integrity, ensuring your ideas are accurately represented. Our transparent approach fosters clear communication with clients. Every concept and design is thoroughly reviewed before launching on any social media platform.',
    iconTag: <i className="fa-solid fa-comments"></i>,
  },
  {
    title: 'Brand consistency',
    description:
      'Nakshatra Namaha Creations fosters strong client relationships through a consistent work culture, delivering exactly what is promised. We ensure timely execution with no delays and welcome your updates and feedback to enhance the final outcome.',
    iconTag: <i className="fa-solid fa-handshake"></i>,
  },
];

const ReasonsToChooseWordPress = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {reasons.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="social-card">
              <div className="social-inner d-flex align-items-start">
                <div className="social-icon">{item.iconTag}</div>
                <div className="social-content">
                  <h5 className="social-title">{item.title}</h5>
                  <p className="social-description">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToChooseWordPress;
