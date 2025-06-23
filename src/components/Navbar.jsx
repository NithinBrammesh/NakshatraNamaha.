import { useState, useRef } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimer = useRef(null);

  return (
    <>


      {/* Main Navigation */}
      <header className="realtive-top bg" style={{ backgroundColor: '#f2f2f2' }}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100" style={{ height: '120px' }}>
  <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <img src="./images/image.png" alt="Logo" />
          </a>

          <button className="navbar-toggler custom-toggler" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={`collapse navbar-collapse justify-content-centre ${mobileMenuOpen ? 'show' : ''}`}>

            <ul className="navbar-nav gap-5 ms-auto" >


              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
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
                <a href="/service" className="nav-link">
                  Services <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                </a>


                <div className={`dropdown-menu mt- py-4 shadow-sm ${dropdownOpen ? 'show' : ''}`}>
                  <div className="container ramanna">

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

                            <Link className="dropdown-item" to="/services/website">Mobile App Development</Link>
                            <Link className="dropdown-item" to="/services/wordpress">WordPress Website Development</Link>
                              <a className="dropdown-item" href="/services/social-media-marketing/">E-Commerce Website Development</a>
                            <Link className="dropdown-item" to="/services/video">Corporate Video Production</Link>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <a className="dropdown-item" href="/services/social-media-marketing/">Social Media Marketing</a>
                            <a className="dropdown-item" href="/services/2d-animation">SEO Services</a>
                            <a className="dropdown-item" href="/services/b2b">B2B Marketing Services</a>
                             <a className="dropdown-item" href="/services/software">Software Development</a>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                           
                            <a className="dropdown-item" href="/services/smm">Social Media Marketing</a>
                            <a className="dropdown-item" href="/services/uiux">UI/UX Design</a>
                             <a className="dropdown-item" href="/services/2d-animation">2D Animation</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/work">Our Work</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/careers">Careers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
                  </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
