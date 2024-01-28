import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Visit_visa(){
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
        <div className="banner_section">
          <img src={Img.visit_visa_banner} className="banner_img" alt=""></img>
          <div className="banner_content">
              <a href="https://calendly.com/growingglobeimmigration">
                 <button className="embark_book_appoint_2"><strong>Book An Appointment</strong></button>
              </a>
          </div>
        </div>
        <div className="immigrate_canada_section animation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="let_us_introduce_title anm_mod full fast">When it comes to visiting Canada, there are different types of visas that cater to various purposes and circumstances.</h3>
              </div>
              <div className="col-md-4 d-flex  anm_mod full fast">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.temporary_resident_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Temporary Resident Visa (Visitor Visa)</h3>
                      <p className="visa_para">This is the most common type of visit visa for Canada. It is required for travelers from countries that are not visa-exempt. It allows visitors to enter Canada for tourism, visiting family or friends, attending business meetings, or participating in short-term courses or conferences.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex anm_mod full fast">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.electronic_travel_authorization} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Electronic Travel Authorization (eTA)</h3>
                      <p className="visa_para">Citizens of visa-exempt countries, excluding the United States, need to obtain an eTA before traveling to Canada by air. The eTA is linked to your passport and allows for short visits, such as tourism, business meetings, or transit through Canada.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex anm_mod full fast">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.super_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Super Visa</h3>
                      <p className="visa_para">The Super Visa is designed for parents and grandparents of Canadian citizens or permanent residents. It allows them to visit Canada for an extended period, up to two years, without the need for frequent visa renewals.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex anm_mod full fast">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.business_visitor_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Business Visitor Visa</h3>
                      <p className="visa_para">This visa is for individuals visiting Canada for business-related purposes, such as attending conferences, negotiating contracts, or exploring investment opportunities. It is essential to have a letter of invitation from a Canadian organization and provide... <a className="open-modal read_more_btn" href="#modal">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex anm_mod full fast">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.parent_and_grandparent_visitor_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Parent and Grandparent Visitor Visa</h3>
                      <p className="visa_para">This visa allows parents and grandparents of Canadian citizens or permanent residents to visit Canada for extended periods. It requires sponsorship from their Canadian family member and meeting certain financial criteria.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex anm_mod full fast">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.tourist_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Tourist Visa</h3>
                      <p className="visa_para">The tourist visa is for individuals visiting Canada for recreational or leisure purposes, such as sightseeing, visiting national parks, or exploring cultural attractions. It is essential to demonstrate sufficient funds to cover the trip and a well-planned itinerary.</p>
                   </div>
                </div>
              </div>
              
              <div className="col-md-4 d-flex anm_mod full fast">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.transit_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Transit Visa</h3>
                      <p className="visa_para">If you have a connecting flight through a Canadian airport and your nationality requires a visa, you may need a transit visa to pass through Canada. This visa allows you to transit through Canada for a limited period without the intention of entering the country.</p>
                   </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>

        <div className="why_glowing_section animation">
          <div className="container">
            <div className="row align_item_center">
              <div className="col-md-12">
                <h3 className="study_permit_title anm_mod full fast">Important Note</h3>
                <ul className="why_glowing_ul anm_mod full fast">
                  <li>Remember that specific requirements, application processes, and durations of stay can vary for each type of visit visa.</li>
                  <li>It's crucial to consult the official website of Immigration, Refugees and Citizenship Canada (IRCC) or seek professional advice to ensure accurate and up-to-date information based on your nationality and circumstances.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_us_today_section animation">
           <div className="container-fluid">
              <div className="row align_item_center">
                <div className="col-md-12">
                  <h3 className="contact_us_today_text anm_mod full fast">Contact us today, To Get Visit Visa today for Canada.</h3>
                  <a href="https://calendly.com/growingglobeimmigration">
                     <button className="book_an_appointment_btn_2 anm_mod full fast mt_10">Book An Appointment</button>
                  </a>
                </div>
              </div>
           </div>
        </div>

        <div id="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.business_visitor_visa} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Business Visitor Visa</h3>
                    <p className="get_ready_para">This visa is for individuals visiting Canada for business-related purposes, such as attending conferences, negotiating contracts, or exploring investment opportunities. It is essential to have a letter of invitation from a Canadian organization and provide documentation demonstrating the business nature of the visit.</p>
                    <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center>
              </a>
                 </div>
              </div>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  );
}

export default Visit_visa;
