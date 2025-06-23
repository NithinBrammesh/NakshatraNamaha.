import React from "react";
import './Buissness.css';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Buissness = () => {
  return (
    <section className="two-column-section py-7">
      <div className="container business-container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="leftside_column">
              <img
                src="/images/group.jpg"
                alt="Our Process"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="col-md-6 rightside_content">
            <h2 className="mb-4">Meet Our Team</h2>
            <p>
              Check out our diverse collection of websites professionally designed and developed by our expert team. We are committed to completing projects within
              the stipulated timeline, ensuring full satisfaction for our clients. Browse through our portfolio and see firsthand how quality defines our Website Development
              Services. At Nakshatra Namaha Creations, we take pride in being the best website development company in Mysore, offering tailored services to help businesses
              establish a strong online presence. As the best website design company in Mysore, we specialize in creating visually appealing and user-friendly websites that
              resonate with your brand identity. Additionally, as the best mobile app development company in Mysore, we extend our expertise to crafting innovative,
              responsive mobile applications. Let us help you bring your vision to life with cutting-edge web and mobile development solutions in Mysore!
            </p>
            <a href="/about" className="team-btn">
              Meet the Team
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buissness;
