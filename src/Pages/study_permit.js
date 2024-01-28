import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Study_permit(){
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
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return(
    <div>
      <Header />
        <div className="banner_section">
          <img src={Img.student_visa_banner} className="banner_img" alt=""></img>
          <div className="banner_content">
            <a href="https://calendly.com/growingglobeimmigration">
              <button className="embark_book_appoint_2"><strong>Book An Appointment</strong></button>
            </a>
          </div>
        </div>
        <div className="immigrate_canada_section" id="top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 animation">
                <h3 className="study_permit_title anm_mod full fast">Study Permit</h3>
              </div>
              <div className="col-md-6 animation">
                <p className="study_permit_para anm_mod full fast">A study permit is a document issued by the Canadian government that allows foreign nationals to study at designated learning institutions (DLIs) in the country. It serves as an essential requirement for most international students planning to pursue their academic aspirations in Canada.</p>
                <p className="study_permit_para anm_mod full fast">To ensure a smooth and successful study permit application process, it is imperative to have all the required documents ready beforehand.</p>
                <p className="study_permit_para anm_mod full fast">The specific documents necessary may vary depending on your unique circumstances, including whether you are applying through the Student Direct Stream (SDS) or the regular non-SDS stream... <a className="open-modal read_more_btn" href="#modal">Read More</a></p>
              </div>
              <div className="col-md-6">
                <img src={Img.study_permit} className="study_permit_img" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="requirements_section animation">
          <div className="container">
            <div className="row align_item_center">
              <div className="col-md-12">
                <h3 className="requirements_title">SDS & Non-SDS</h3>
              </div>
              <div className="col-md-6">
                <div className="sdm_box">
                  <h3 className="sdm_stream_title anm_mod full fast">Student Direct Stream</h3>
                  <ul>
                    <li className="sdm_stream_ul_li anm_mod full fast">Only for Study Permit</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Visa Processing within 20 days</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Only Online Application Submíssion</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Mandatory GIC of at least 10,000 or more</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Applicable to certain Asian and African countries</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Up to 85% of Success Rate</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">IELTS mandatory</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">1-year Tuition Fee to be paid in advance</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sdm_box">
                  <h3 className="sdm_stream_title anm_mod full fast">Non- SDS Stream</h3>
                  <ul>
                    <li className="sdm_stream_ul_li anm_mod full fast">For Canada Study/Work Permit and Immigration Purposes</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Visa Processing within 45-90 days</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Online and Offline Application Submission</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">GIC not a mandatory requirement</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Applicable to candidates from any country</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">Up to 65% of Success Rate</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">IELTS, PTE or TIEFL accepted</li>
                    <li className="sdm_stream_ul_li anm_mod full fast">6-Months Tuition Fee to be paid in advance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why_glowing_section animation">
          <div className="container">
            <div className="row align_item_center">
              <div className="col-md-12">
                <h3 className="study_permit_title anm_mod full fast">Why Growing Globe Immigration?</h3>
                <ul className="why_glowing_ul">
                  <li className="anm_mod full fast">At our consultancy, we understand the intricacies of the study permit application process for both SDS and non-SDS streams and are here to assist you every step of the way.</li>
                  <li className="anm_mod full fast">Our knowledgeable consultants will ensure that you have a smooth experience, from document preparation to submitting your application.</li>
                  <li className="anm_mod full fast">Our team of experts is ready to provide you with the guidance and support you need to navigate the study permit application process, tailored to your specific circumstances and stream.</li>
                  <li className="anm_mod full fast">Let us help you turn your aspirations of studying in Canada into a reality.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_us_today_section animation">
           <div className="container-fluid">
              <div className="row align_item_center">
                <div className="col-md-12">
                  <h3 className="contact_us_today_text anm_mod full fast">Contact us today to start your journey <br /> towards a world-class education in Canada.</h3>
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
                 <img src={Img.study_permit} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Study Permit</h3>
                    <p className="get_ready_para">A study permit is a document issued by the Canadian government that allows foreign nationals to study at designated learning institutions (DLIs) in the country. It serves as an essential requirement for most international students planning to pursue their academic aspirations in Canada.</p>
                    <p className="get_ready_para">To ensure a smooth and successful study permit application process, it is imperative to have all the required documents ready beforehand. The specific documents necessary may vary depending on your unique circumstances, including whether you are applying through the Student Direct Stream (SDS) or the regular non-SDS stream.</p>
                 </div>
              </div>
              <div className="col-md-12">
                 <div className="p-3">
                    <p className="get_ready_para">If you are eligible for the SDS stream, you will need to meet specific requirements, such as language proficiency tests, financial documents, and an acceptance letter from a designated learning institution. Our team of experts is well-versed in the SDS stream requirements and can provide tailored guidance to help you meet these criteria efficiently.</p>
                    <p className="get_ready_para">For those applying through the non-SDS stream, the documentation requirements may differ slightly. Our consultancy is experienced in handling both SDS and non-SDS applications and can provide you with personalized solutions based on your stream.</p>
                    <p className="get_ready_para">At our consultancy, we understand the intricacies of the study permit application process for both SDS and non-SDS streams and are here to assist you every step of the way. Our knowledgeable consultants will ensure that you have a smooth experience, from document preparation to submitting your application.</p>
                    <p className="get_ready_para">Contact us today to start your journey towards a world-class education in Canada. Our team of experts is ready to provide you with the guidance and support you need to navigate the study permit application process, tailored to your specific circumstances and stream. Let us help you turn your aspirations of studying in Canada into a reality.</p>
                 </div>
                 <center><button className="business-visit-visa">Book An Appointment</button></center>

              </div>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  );
}

export default Study_permit;
