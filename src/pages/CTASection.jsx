import React from "react";
import "./CTASection.css"; // Make sure this CSS file exists

const CTASection = () => {
  return (
    <div className="container17">
      <div className="row align-items-center gx-5">
        {/* IMAGE Section (LEFT) */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/images/rji.png" // Replace with your actual path
            alt="Get in Touch"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* RIGHT - Form Section */}
        <div className="col-lg-6">
          <div className="cta-content">
            <h4 className="sec_title1 mb-3">
              Here's how you can connect with the NNC team:
            </h4>
            <p className="py-1">
              We help businesses of all sizes achieve their goals. We believe every brand, big or small, deserves to shine.
            </p>

            <form className="mt-3" id="potentialForm">
              <input type="text" name="name" placeholder="Enter name" className="form-control mb-2" required />
              <input type="text" name="phone" placeholder="Enter number" className="form-control mb-2" required />
              <input type="email" name="email" placeholder="Please enter your work email" className="form-control mb-2" required />
              <textarea name="message" rows="4" maxLength="150" placeholder="Enter your message" className="form-control mb-3" required></textarea>

              <button className="btn btn-primary d-flex align-items-center gap-2">
                Talk to our experts
                <svg viewBox="0 0 12 10" fill="#fff" xmlns="http://www.w3.org/2000/svg" className="icon-arrow" width={16} height={16}>
                  <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
