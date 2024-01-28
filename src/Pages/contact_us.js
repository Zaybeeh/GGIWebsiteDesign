import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img, Icons} from "../Utilities/Icons.js";
import {Link} from 'react-router-dom';

function ContactUs(){
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsive_2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <div>
      <Header />
        <div className="banner_section" id="banner">
          <img src={Img.contactus_banner} className="banner_img" alt=""></img>
          <div className="banner_content">
              <a href="https://calendly.com/growingglobeimmigration">
                 <button className="embark_book_appoint_2"><strong>Book An Appointment</strong></button>
              </a>
          </div>
        </div>
        <div className="contact_section animation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="contact_section_title anm_mod full fast">Contact Us</h2>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4 contact-space">
                <div className="contact-card contact-card-contact">
                  <div className="contact-card-image anm_mod full fast">
                    <img className="img" src={Img.contact_canada} ></img>
                  </div>
                  <div className="contact-table">
                    <h4 className="contact-card-caption anm_mod full fast mb_30">
                      <strong>Canada Offices</strong>
                    </h4>
                    <div className="conatact_add_box anm_mod full fast">
                      <div>
                        <i className="fa fa-arrow-right red" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="contact-card-description"><Link className="link" to ="https://goo.gl/maps/pcUpkLnVg8os5TSn7" target="_blank" rel="noreferrer"> 99 Yorkville Avenue, Suite 200, Toronto, ON Canada M5R 1C1</Link></p>
                        <p className="contact-card-description"><Link className="link" to="tel:+1 647 705 5403">Phone No.: +1 647 705 5403</Link></p>
                      </div>
                    </div>
                    <hr className="hr_sty"/>
                    <div className="conatact_add_box anm_mod full fast">
                      <div>
                        <i className="fa fa-arrow-right red" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="contact-card-description"><Link className="link" to="https://goo.gl/maps/WxmtvhTTHSzKpmNE8" target="_blank" rel="noreferrer">218 Export Blvd Mississauga Suite 301</Link></p>
                        <p className="contact-card-description"><Link className="link" to="tel:+1 647 705 5403">Phone No.: +1 647 705 5403</Link></p>
                      </div>
                    </div>
                    <hr className="hr_sty"/>
                    <div className="conatact_add_box anm_mod full fast">
                      <div>
                        <i className="fa fa-arrow-right red" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="contact-card-description"><Link className="link" to="https://maps.app.goo.gl/W9zNEnjbgZ23YJhe7"target="_blank" rel="noreferrer">1280 Finch Ave W, Toronto, ON M3J 3K6, Unit 601</Link></p>
                      </div>
                    </div>
                    <hr className="hr_sty"/>
                    <div className="conatact_add_box anm_mod full fast">
                      <div>
                        <i className="fa fa-arrow-right red" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="contact-card-description"><Link className="link" to="https://maps.app.goo.gl/Y7GiULYc1cikEE46A" target="_blank" rel="noreferrer">4907 52 Ave, Whitecourt, Alberta</Link></p>
                        <p className="contact-card-description">Phone No.:<Link className="link" to="tel:+1(437) 770-7953"> +1(437) 770-7953</Link>, <Link className="link" to="tel:+1(647) 207-6121">+1(647) 207-6121</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 contact-space">
                <div className="contact-card contact-card-contact">
                  <div className="contact-card-image anm_mod full fast">
                    <img className="img" src={Img.contact_india} ></img>
                  </div>
                  <div className="contact-table">
                    <h4 className="contact-card-caption anm_mod full fast mb_30">
                      <strong>India Offices</strong>
                    </h4>

                    <div className="conatact_add_box anm_mod full fast">
                      <div>
                        <i className="fa fa-arrow-right red" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="contact-card-description"><Link className="link" to ="https://goo.gl/maps/TZmXNmBdq2RF4TRw7" target="_blank" rel="noreferrer">Second Floor, 33 Ajay Tower, Wazirpur, New Delhi 110052</Link></p>
                        <p className="contact-card-description"><Link className="link" to="tel:1800-889-0542">Phone No. : 1800-889-0542</Link></p>
                      </div>
                    </div>
                    <hr className="hr_sty"/>
                    <div className="conatact_add_box anm_mod full fast">
                      <div>
                        <i className="fa fa-arrow-right red" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="contact-card-description"><Link className="link" to ="https://goo.gl/maps/L5VVkbqpVU6TNwM46" target="_blank" rel="noreferrer">Shop no. 5 AGI Business center, Ground floor, near bus stand, Jalandhar, punjab</Link></p>
                        <p className="contact-card-description"><Link className="link" to="tel:1800-889-0542">Phone No.: 1800-889-0542</Link></p>
                      </div>
                    </div>
                    <hr className="hr_sty"/>
                    <div className="conatact_add_box anm_mod full fast">
                      <div>
                        <i className="fa fa-arrow-right red" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="contact-card-description"><Link className="link" to ="https://goo.gl/maps/W5SuerfMHTHTUesx8" target="_blank" rel="noreferrer">304 Shakti Extol, Nr Zydus Hospital, Thaltej, Ahmedabad 380054</Link></p>
                        <p className="contact-card-description"><Link className="link" to="tel:1800-889-0542">Phone No.: 1800-889-0542</Link></p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-4 contact-remove-space">
                <div className="contact-card contact-card-contact">
                  <div className="contact-card-image anm_mod full fast">
                    <img className="img" src={Img.contact_uae} ></img>
                  </div>
                  <div className="contact-table">
                    <h4 className="contact-card-caption anm_mod full fast mb_30">
                      <strong>UAE Offices</strong>
                    </h4>

                    <div className="conatact_add_box anm_mod full fast">
                      <div>
                        <i className="fa fa-arrow-right red" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="contact-card-description"><Link className="link" to ="https://goo.gl/maps/Rdw8SgD8gEYYwhcU8" target="_blank" rel="noreferrer">Office No. 1, Unit 2102, 21st Floor Metropolis Tower Al Abraj Street, Dubai, UAE</Link></p>
                        <p className="contact-card-description"><Link className="link" to="tel:+971 50 132 8189">Phone No. : +971 50 132 8189</Link></p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}


export default ContactUs;
