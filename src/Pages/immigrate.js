import {useState, useRef} from "react";
import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";
import 'react-multi-carousel/lib/styles.css';
import Grow from '@mui/material/Grow';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { isVisible } from "@testing-library/user-event/dist/utils/index.js";

function Immigrate(){
  const [isOpenModalA, setIsOpenModalA] = useState(false);

  const [atlantic, setAtlantic] = React.useState(false);
  const handleAtlanticOpen = () => setAtlantic(true);
  const handleAtlanticClose = () => setMyModals(false);

  const [myModals, setMyModals] = useState({
    modalA: false,
    modalB: false,
    
  });
  const getModalHanlder = (modalName) => {
    return {
      isOpen: myModals[modalName],
      open: () => setMyModals((state) => ({ ...state, [modalName]: true })),
      close: () => setMyModals((state) => ({ ...state, [modalName]: false })),
      toggle: () =>
        setMyModals((state) => ({ ...state, modalA: !state[modalName] })),
    }
  }
  const modalA = getModalHanlder("modalA")
  const modalB = getModalHanlder("modalB")

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
          <img src={Img.immigrate_banner} className="banner_img" alt=""></img>
          <div className="banner_content">
            <a href="https://calendly.com/growingglobeimmigration">
              <button className="embark_book_appoint_2"><strong>Book An Appointment</strong></button>
            </a>
      </div>
        </div>
        <div className="immigrate_canada_section animation" id="top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="study_permit_title anm_mod full fast">Immigrate</h3>
              </div>
              <div className="col-md-6">
                <p className="immigrate_para anm_mod full fast">Welcome to Growing Globe immigration, your trusted partner in helping you navigate the Canadian immigration landscape. We understand that pursuing your Canadian dreams involves exploring various immigration programs, and we're here to provide you with comprehensive information about the programs offered at both the federal and provincial levels.</p>
              </div>
              <div className="col-md-6">
                <img src={Img.immigrate} className="study_permit_img" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="requirements_section animation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="let_us_introduce_title anm_mod full fast">Federal Programs:-</h3>
              </div>
              <div className="col-md-4 d-flex ">
                <div onClick={atlantic} className="visa_card anm_mod full fast">
                   <img src={Img.express_entry} className="visa_img"></img>
                   <div className="visa_content" >
                      <h3 className="visa_title">Express Entry</h3>
                      <p className="visa_para">1. Get ready for an exciting journey with the Express Entry program, your fast track to Canadian permanent residency. Within Express Entry, there are three economic immigration categories:....<a className="open-modal read_more_btn" href="#modal">Read More</a></p>
                   </div>
                </div>
              </div>
                <Modal
              
                open={atlantic}
                onClose={modalA.close}>
                  <Grow in={myModals}
                    {...(myModals ? { timeout: 1000 } : {})}>
                      <Box className="popup-style">
                        <div className="express-entry-img">
                          <img src={Img.express_entry} className="express_entry_img" alt=""></img>
                        </div>
                          <h3 className="express_entry_title">Express Entry</h3>
                          <p className="get_ready_para">Get ready for an exciting journey with the Express Entry program, your fast track to Canadian permanent residency. Within Express Entry, there are three economic immigration categories:</p>
                          <ul className="ul">
                            <li>Federal Skilled Worker Class: Designed for skilled workers with foreign work experience, this category assesses your eligibility based on factors such as education, work experience, language proficiency, and adaptability.                     
                            </li>
                            <li>Federal Skilled Trades Class: If you have experience in a skilled trade and wish to become a permanent resident, this category is for you. It considers factors such as work experience, language skills, and job offers or qualifications.
                            </li>
                            <li>Canadian Experience Class: If you have gained at least one year of skilled work experience in Canada, this category recognizes your contribution and provides a pathway to permanent residency.
                            </li>
                          </ul>
                      </Box>
                  </Grow>
              </Modal>
              <div className="col-md-4 d-flex">
                <div onClick={atlantic} className="visa_card anm_mod full fast">
                   <img src={Img.athlentic_immigration_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Atlantic Immigration Program</h3>
                      <p className="visa_para">Embark on a special journey through the Atlantic Immigration Pilot, a program focused on attracting skilled workers and international graduates to the vibrant Atlantic provinces. This program offers pathways to permanent... <a className="open-modal read_more_btn" href="#modal2">Read More</a></p>
                   </div>
                </div>
              </div>
              <Modal 
              open={atlantic}
              onClose={modalB.close}>
                <Grow in={myModals}
                  {...(myModals ? { timeout: 1000 } : {})}>
                    <Box className="popup-style">
                    <div className="col-md-7">
                 <img src={Img.athlentic_immigration_program} className="popup-image" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3">
                    <h3 className="express_entry_title">Atlantic Immigration Program</h3>
                    <p className="get_ready_para">Embark on a special journey through the Atlantic Immigration Pilot, a program focused on attracting skilled workers and international graduates to the vibrant Atlantic provinces. This program offers pathways to permanent residency, including opportunities for intermediate-skilled workers with job offers from designated employers.</p>
                 </div>
              </div>
                    </Box>
                </Grow>
            </Modal>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.agreefood_immigration_pilot} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Agri-Food Immigration Pilot</h3>
                      <p className="visa_para">This pilot program focuses on addressing labor shortages in the agri-food sector. It offers pathways for experienced workers in specific occupations within the industry to become permanent residents of Canada.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.rural_and_northern_immigration_pilot} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Rural and Northern Immigration Pilot</h3>
                      <p className="visa_para">This community-driven program aims to address labor market needs in rural and northern communities across Canada. It provides opportunities for skilled foreign workers to settle in these communities and contribute to their growth.</p>
                   </div>
                </div>
              </div>
                                           
              <div className="col-md-4">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.caregiver_programs} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Caregiver Programs</h3>
                      <p className="visa_para">1. If you have experience in caring for children, elderly, or people with medical needs, the Caregiver Programs offer opportunities to work in Canada and eventually become a permanent resident. These programs include the... <a className="open-modal read_more_btn" href="#modal3">Read More</a></p>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="immigrate_canada_section animation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="let_us_introduce_title anm_mod full fast">Provincial Programs:-</h3>
                <p className="unlock_additional_para anm_mod full fast">Unlock additional opportunities for permanent residency through the Provincial Nominee Programs. Each province and territory in Canada has its unique PNP designed to meet specific labor market needs and attract skilled workers, entrepreneurs, and international graduates. These programs enable provinces to nominate individuals who can contribute to their local economy. Let's explore the streams available in each province and territory:</p>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.quebec_skilled_worker_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Quebec Skilled Worker Program (QSWP)</h3>
                      <p className="visa_para">Immerse yourself in the rich cultural experience of Quebec through the Quebec Skilled Worker Program. This program has unique selection criteria tailored to skilled workers who aspire to settle in the province of Quebec... <a className="open-modal read_more_btn" href="#modal4">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.ontario_immigrant_nominee_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Ontario Immigrant Nominee Program (OINP)</h3>
                      <p className="visa_para">1. Experience the warmth and opportunities of Ontario through the Ontario Immigrant Nominee Program. It offers different streams catering to skilled workers, international graduates, and entrepreneurs who can contribute to... <a className="open-modal read_more_btn" href="#modal5">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.british_columbia_provincial_nominee_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">British Columbia Provincial Nominee Program</h3>
                      <p className="visa_para">Discover the beauty and possibilities of British Columbia with the British Columbia Provincial Nominee Program. It offers various categories, such as Skills Immigration, Express Entry BC, Entrepreneur Immigration... <a className="open-modal read_more_btn" href="#modal6">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.AINP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Alberta Immigrant Nominee Program (AINP)</h3>
                      <p className="visa_para">1. Set your sights on Alberta and its thriving labor market with the Alberta Immigrant Nominee Program. It offers different streams for skilled workers, international graduates, and self-employed individuals looking to make... <a className="open-modal read_more_btn" href="#modal7">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.SINP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Saskatchewan Immigrant Nominee Program (SINP)</h3>
                      <p className="visa_para">1. Discover the opportunities offered by the Saskatchewan Immigrant Nominee Program. It has various streams, including the International Skilled Worker Category, Saskatchewan Experience Category, and Entrepreneur... <a className="open-modal read_more_btn" href="#modal8">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.MPNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Manitoba Provincial Nominee Program (MPNP)</h3>
                      <p className="visa_para">1. Explore the Manitoba Provincial Nominee Program, which offers pathways for skilled workers, international graduates, and entrepreneurs to settle and work in the province. The program includes streams such as Skilled Worker... <a className="open-modal read_more_btn" href="#modal9">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.NSNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Nova Scotia Nominee Program (NSNP)</h3>
                      <p className="visa_para">Experience the charm of Nova Scotia through the Nova Scotia Nominee Program. It has streams for skilled workers, international graduates, and entrepreneurs, aiming to attract individuals who can contribute to the ... <a className="open-modal read_more_btn" href="#modal10">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.new_brunswick_provincial_nominee_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">New Brunswick Provincial Nominee Program</h3>
                      <p className="visa_para">Discover the opportunities available in New Brunswick through the New Brunswick Provincial Nominee Program. It has streams for skilled workers, entrepreneurs, and international graduates, providing pathways to...<a className="open-modal read_more_btn" href="#modal11">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.PEIPN} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Prince Edward Island Provincial Nominee Program</h3>
                      <p className="visa_para">Explore the Prince Edward Island Provincial Nominee Program, designed to attract skilled workers, international graduates, and entrepreneurs to Prince Edward Island. It offers various streams, including Express Entry, Labor Impact, Business Impact, and the Atlantic Immigration Pilot Program.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.NLPNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Newfoundland and Labrador Provincial</h3>
                      <p className="visa_para">Discover the opportunities available through the Newfoundland and Labrador Provincial Nominee Program. This program is designed to attract skilled workers, entrepreneurs... <a className="open-modal read_more_btn" href="#modal12">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.YNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Yukon Nominee Program (YNP)</h3>
                      <p className="visa_para">Experience the unique opportunities offered by the Yukon Nominee Program. This program aims to attract skilled workers, business owners, and individuals with connections to the Yukon territory. It has streams such.. <a className="open-modal read_more_btn" href="#modal13">Read More</a></p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.NTNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Northwest Territories Nominee Program</h3>
                      <p className="visa_para">Explore the opportunities offered by the Northwest Territories Nominee Program. This program aims to attract skilled workers, entrepreneurs, and individuals with connections to the Northwest Territories... <a className="open-modal read_more_btn" href="#modal14">Read More</a></p>
                   </div>
                </div>
              </div>
                                           
              <div className="col-md-4 d-flex">
                <div className="visa_card anm_mod full fast">
                   <img src={Img.NNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Nunavut Nominee Program</h3>
                      <p className="visa_para">1. Explore the opportunities offered by the Nunavut Nominee Program, designed to attract skilled workers and entrepreneurs to the unique and vibrant territory of Nunavut. The program aims to address the specific labor market... <a className="open-modal read_more_btn" href="#modal15">Read More</a></p>
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
                <h3 className="study_permit_title anm_mod full fast">Why Growing Globe Immigration?</h3>
                <ul className="why_glowing_ul">
                  <li className="anm_mod full fast">We understand that each provincial program has its own specific requirements and processes.</li>
                  <li className="anm_mod full fast">Our team of experienced immigration professionals is well-versed in the details of each program and can guide you through the entire application process, ensuring you have the best chance of success in your Canadian immigration journey.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_us_today_section animation">
           <div className="container-fluid">
              <div className="row align_item_center">
                <div className="col-md-12">
                  <h3 className="contact_us_today_text anm_mod full fast">Feel free to reach out to us for personalized support and guidance.</h3>
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
                 <img src={Img.express_entry} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Express Entry</h3>
                    <p className="get_ready_para">Get ready for an exciting journey with the Express Entry program, your fast track to Canadian permanent residency. Within Express Entry, there are three economic immigration categories:</p>
                    <ul className="ul">
                      <li>Federal Skilled Worker Class: Designed for skilled workers with foreign work experience, this category assesses your eligibility based on factors such as education, work experience, language proficiency, and adaptability.                     
                      </li>
                      <li>Federal Skilled Trades Class: If you have experience in a skilled trade and wish to become a permanent resident, this category is for you. It considers factors such as work experience, language skills, and job offers or qualifications.
                      </li>
                      <li>Canadian Experience Class: If you have gained at least one year of skilled work experience in Canada, this category recognizes your contribution and provides a pathway to permanent residency.
                      </li>
                    </ul>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>

                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>
        <div id="modal2" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.athlentic_immigration_program} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Atlantic Immigration Program</h3>
                    <p className="get_ready_para">Embark on a special journey through the Atlantic Immigration Pilot, a program focused on attracting skilled workers and international graduates to the vibrant Atlantic provinces. This program offers pathways to permanent residency, including opportunities for intermediate-skilled workers with job offers from designated employers.</p>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal3" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.caregiver_programs} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Caregiver Programs</h3>
                    <p className="get_ready_para">If you have experience in caring for children, elderly, or people with medical needs, the Caregiver Programs offer opportunities to work in Canada and eventually become a permanent resident. These programs include the Home Child Care Provider and Home Support Worker streams.</p>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal4" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.quebec_skilled_worker_program} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Quebec Skilled Worker Program (QSWP)</h3>
                    <p className="get_ready_para">Immerse yourself in the rich cultural experience of Quebec through the Quebec Skilled Worker Program. This program has unique selection criteria tailored to skilled workers who aspire to settle in the province of Quebec. It evaluates applicants based on factors such as education, work experience, language proficiency, and adaptability.</p>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal5" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.ontario_immigrant_nominee_program} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Ontario Immigrant Nominee Program (OINP)</h3>
                    <p className="get_ready_para">Experience the warmth and opportunities of Ontario through the Ontario Immigrant Nominee Program. It offers different streams catering to skilled workers, international graduates, and entrepreneurs who can contribute to Ontario's thriving economy. Streams include the Human Capital Category, Employer Job Offer Category, Business Category, and the Masters Graduate and PhD Graduate streams.</p>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal6" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.british_columbia_provincial_nominee_program} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">British Columbia Provincial Nominee Program (BC PNP)</h3>
                    <p className="get_ready_para">Discover the beauty and possibilities of British Columbia with the British Columbia Provincial Nominee Program. It offers various categories, such as Skills Immigration, Express Entry BC, Entrepreneur Immigration, and Regional Pilot, designed to welcome skilled workers, international graduates, and entrepreneurs. Each category has specific requirements and criteria.</p>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal7" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.AINP} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Alberta Immigrant Nominee Program (AINP)</h3>
                    <p className="get_ready_para">Set your sights on Alberta and its thriving labor market with the Alberta Immigrant Nominee Program. It offers different streams for skilled workers, international graduates, and self-employed individuals looking to make Alberta their new home. Streams include the Alberta Opportunity Stream, Alberta Express Entry Stream, Self-Employed Farmer Stream, and the Foreign Graduate Start-up Visa Stream.</p>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal8" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.SINP} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Saskatchewan Immigrant Nominee Program (SINP)</h3>
                    <p className="get_ready_para">Discover the opportunities offered by the Saskatchewan Immigrant Nominee Program. It has various streams, including the International Skilled Worker Category, Saskatchewan Experience Category, and Entrepreneur Category, designed to attract skilled workers, graduates, and entrepreneurs to the province. Each category has different sub-streams and criteria.</p>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal9" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.MPNP} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Manitoba Provincial Nominee Program (MPNP)</h3>
                    <p className="get_ready_para">Explore the Manitoba Provincial Nominee Program, which offers pathways for skilled workers, international graduates, and entrepreneurs to settle and work in the province. The program includes streams such as Skilled Worker Overseas, Skilled Worker in Manitoba, International Education Stream, Business Investor Stream, and the Farm Investor Pathway.</p>
            <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal10" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.NSNP} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Nova Scotia Nominee Program (NSNP)</h3>
                    <p className="get_ready_para">Experience the charm of Nova Scotia through the Nova Scotia Nominee Program. It has streams for skilled workers, international graduates, and entrepreneurs, aiming to attract individuals who can contribute to the province's economy and community. Streams include the Nova Scotia Demand: Express Entry, Nova Scotia Experience: Express Entry, Entrepreneur Stream, and International Graduate Entrepreneur Stream.</p>
                    <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal11" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.new_brunswick_provincial_nominee_program} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">New Brunswick Provincial Nominee Program (NBPNP)</h3>
                    <p className="get_ready_para">Discover the opportunities available in New Brunswick through the New Brunswick Provincial Nominee Program. It has streams for skilled workers, entrepreneurs, and international graduates, providing pathways to permanent residency for eligible candidates. Streams include the Express Entry Labour Market Stream, Skilled Workers with Employer Support, Entrepreneurial Stream, and Post-Graduate Entrepreneurial Stream.</p>
                    <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal12" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.NLPNP} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Newfoundland and Labrador Provincial Nominee Program (NLPNP)</h3>
                    <p className="get_ready_para">Discover the opportunities available through the Newfoundland and Labrador Provincial Nominee Program. This program is designed to attract skilled workers, entrepreneurs, and international graduates who can contribute to the province's economic growth. It offers various streams, including the Skilled Worker Category, International Graduate Category, and Entrepreneur Category. Each stream has specific requirements and criteria to assess your eligibility for nomination by Newfoundland and Labrador. Successful nomination can lead to permanent residency in Canada.</p>
                    <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal13" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.YNP} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Yukon Nominee Program (YNP)</h3>
                    <p className="get_ready_para">Experience the unique opportunities offered by the Yukon Nominee Program. This program aims to attract skilled workers, business owners, and individuals with connections to the Yukon territory. It has streams such as the Skilled Worker Stream, Critical Impact Worker Stream, Business Nominee Stream, and the Express Entry-aligned Program. The program provides pathways to permanent residency for eligible candidates who can contribute to the economic growth and development of the Yukon territory.</p>
                    <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal14" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.NTNP} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Northwest Territories Nominee Program (NTNP)</h3>
                    <p className="get_ready_para">Explore the opportunities offered by the Northwest Territories Nominee Program. This program aims to attract skilled workers, entrepreneurs, and individuals with connections to the Northwest Territories. It offers various streams, including the Skilled Worker Stream, Express Entry Stream, Critical Impact Worker Stream, and Business Stream. Each stream has specific requirements and criteria to assess your eligibility for nomination by the Northwest Territories. Successful nomination can lead to permanent residency in Canada.</p>
                    <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>

        <div id="modal15" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-12">
                   <a href="#close" title="Close" className="close close-top">X</a>
              </div>
              <div className="col-md-7">
                 <img src={Img.NNP} className="express_entry_img" alt=""></img>
              </div>
              <div className="col-md-5">
                 <div className="p-3 mt_50">
                    <h3 className="express_entry_title">Nunavut Nominee Program (NNP)</h3>
                    <p className="get_ready_para">Explore the opportunities offered by the Nunavut Nominee Program, designed to attract skilled workers and entrepreneurs to the unique and vibrant territory of Nunavut. The program aims to address the specific labor market needs of Nunavut and contribute to its economic development. It offers various streams, including the Skilled Worker Stream and Entrepreneur Stream, each with its own requirements and criteria. Successful nomination through the NNP can lead to permanent residency in Canada.</p>
                    <a href="https://calendly.com/growingglobeimmigration">
                 <center><button className="business-visit-visa">Book An Appointment</button></center></a>
                    
                 </div>
              </div>
            </div>
            <a href="#close" title="Back" class="close">
                <img src={Img.back} className="back_img" alt=""></img>
            </a>
          </div>
        </div>      

      <Footer />
    </div>
  );
}

export default Immigrate;
