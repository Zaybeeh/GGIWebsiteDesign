import React from "react";
// import "./../Assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./../Assets/vendor/aos/aos.js";
// import "./../Assets/vendor/glightbox/js/glightbox.min.js";
// import "./../Assets/vendor/purecounter/purecounter_vanilla.js";
// import "./../Assets/vendor/swiper/swiper-bundle.min.js";
// import "./../Assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "./../Assets/vendor/php-email-form/validate.js";
// import "./../Assets/js/swiper.min.js";
import {Logo, FooterImg} from "../Utilities/Icons.js";
import {Link} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-12 footer-info">
            <center>
              <Link className="logo align-items-center">
                <img src={Logo.footer_logo} alt=""></img>
              </Link>
            </center>

          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Quick Links</h4>
            <div className="footer-link">
              <ul>
                <li><a href="/about_us">About Us</a></li>
                <li><a href="/visit_visa">Visit Visa</a></li>
                <li><a href="/study_permit">Study Permit</a></li>
                <li><a href="/work_visa">Work Visa</a></li>
              </ul>
              <ul>
                <li><a href="/business_visa">Business Visa</a></li>
                <li><a href="/immigrate">Immigration</a></li>
                <li><a href="/contactus">Contact Us</a></li>
                <li><a href="/blogs">Blog</a></li>
              </ul>
            </div>
            <div><br />
              <h4>Follow Us</h4>
              <div className="social_links">
                <a href="https://www.facebook.com/GrowingGlobeImmigration/"><i className="fa fa-facebook footer_icon" aria-hidden="true"></i></a>
                <a href="https://twitter.com/growing_globe"><img src={Logo.twitter_logo} className="twitter_img mr-3" alt=""></img></a>
                <a href="https://instagram.com/growingglobeimmigration?igshid=MmIxOGMzMTU="><i className="fa fa-instagram footer_icon" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/company/growing-globe-immigration-inc/"><i className="fa fa-linkedin footer_icon" aria-hidden="true"></i></a>
              </div>
            </div>

          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Contact</h4>
            <ul>
              <li><Link to="tel:16477055403">Canada : +16477055403</Link></li>
              <li><Link to="tel:971501328189">UAE : +971501328189</Link></li>
              <li><Link to="tel:18008890542">India : 18008890542</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Locations</h4>
            <div className="flex_this">
              <ul>
                <li><a className="footer_subtitle">Canada</a></li>
                <li><a href="/contactus">Toronto </a></li>
                <li><a href="/contactus">Mississauga</a></li>
                <li><a href="/contactus">Alberta</a></li>
                <li><a className="footer_subtitle">UAE</a></li>
                <li><a href="/contactus">Dubai</a></li>

              </ul>
              <ul>
                <li><a className="footer_subtitle">India</a></li>
                <li><a href="/contactus">New Delhi</a></li>
                <li><a href="/contactus">Jalandhar</a></li>
                <li><a href="/contactus">Ahmedabad</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-contact text-center text-md-start">
            <div>
              <img src={FooterImg.footer_img4} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img2} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img3} className="footer_img" alt=""></img>
            </div>

          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="copyright">
          &copy; Copyright <strong><span>Growing Globe Immigration</span></strong>. All Rights Reserved 
        </div>
      </div>

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>
    </footer>
  );
}

export default Footer;
