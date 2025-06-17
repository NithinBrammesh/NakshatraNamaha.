import { useState, useRef } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimer = useRef(null);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="container12">
        <div className='conttt'>
          <div className="contact-top-bar d-flex justify-content-between align-items-center py-2">
            <div className="contact-info">
              <span className="me-3"><i className="fa fa-envelope"></i> info@nakshatranamahacreations.com</span>
              <span><i className="fa fa-phone"></i> +91 9900566466</span>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/Nakshatranamahacreations/" className="me-2"><i className="fab fa-facebook"></i></a>
              <a href="https://x.com/nncbengaluru" className="me-2"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/nakshatra-namaha-creations/" className="me-2"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/nnc.digitalmysuru/"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="realtive-top bg">
        <nav className="navbar navbar-expand-lg navbar-light container justify-content-between" style={{ height: '110px' }}>
          <a className="navbar-brand" href="/">
            <img src="./images/image.png" alt="Logo" />
          </a>

          <button className="navbar-toggler custom-toggler" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={`collapse navbar-collapse justify-content-centre ${mobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>

              {/* Dropdown Services */}
              <li
                className={`nav-item dropdown position-static ${dropdownOpen ? 'show' : ''}`}
                onMouseEnter={() => {
                  clearTimeout(dropdownTimer.current);
                  setDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 500);
                }}
              >
                <button className="nav-link dropdown-toggle btn btn-link" type="button">
                  Services <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                </button>

                <div className={`dropdown-menu w-100 mt-5 py-4 shadow-sm ${dropdownOpen ? 'show' : ''}`}>
                  <div className="ramanna">
                    <div className="row">
                      <div className="col-lg-3 col-md-12 text-center border-end">
                        <img src="./images/ecom.jpg" alt="promo" className="img-fluid mb-3" style={{ maxHeight: '120px' }} />
                        <p className="text-muted small">
                          Enhance your business’s online presence using innovative technologies.
                        </p>
                      </div>
                      <div className="col-lg-9 col-md-12">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <a className="dropdown-item" href="/services/website">Website Development</a>
                            <a className="dropdown-item" href="/services/ecommerce">E-Commerce Website Development</a>
                            <a className="dropdown-item" href="/services/video">Corporate Video Production</a>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <a className="dropdown-item" href="/services/digital-marketing">Digital Marketing</a>
                            <a className="dropdown-item" href="/services/design">Graphic Design</a>
                            <a className="dropdown-item" href="/services/2d-animation">2D Animation</a>
                            <a className="dropdown-item" href="/services/b2b">B2B Marketing Services</a>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <a className="dropdown-item" href="/services/software">Software Development</a>
                            <a className="dropdown-item" href="/services/smm">Social Media Marketing</a>
                            <a className="dropdown-item" href="/services/uiux">UI/UX Design</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/work">Our Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/careers">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
