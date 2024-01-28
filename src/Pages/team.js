import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";

function Team(){
  return(
    <div>
      <Header />
        <div className="team_section">
          <div className="container-fluid">
            <div className="row mb_50">
              <div className="col-md-12 ">
                <center>
                  <h2 className="team_title">UNLOCKING CANADA’S POTENTIAL:<br/> DISCOVER GGI’S IMPRESSIVE TEAM <br/>OF 13 RCICS</h2>
                </center>
              </div>
            </div>
            <div className="team_card_box">
              <div className="row">
                <div className="col-md-6">
                  <div className="team_card ">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_1} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Vinay Sachdeva</h5>
                        <h5 className="team_card_name">RCIC #: R707205</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name"></h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 15</span></h3>
                      <div class="ttm-social-links-wrapper">
                          <ul class="social-icons list-inline">
                              <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/vinay-sachdeva-9029a2246"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                              <li class="social-twitter"><a class=" tooltip-top" href="mailto:office@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                          </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/vinaysachdeva pt-3">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animation team_mobile_fix">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_15} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Sargun Singh</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">                      
                      <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                      </ul>
                      </h5>
                      <h5 className="team_card_type_name"></h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box">15 </span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/sargun-singh-057255239"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:Office@immigratetoontario.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/sargun">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6 animation">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_6} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Bhavuk Arora</h5>
                        <h5 className="team_card_name">RCIC #: R710982</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 4</span></h3>
                      <div class="ttm-social-links-wrapper">
                          <ul class="social-icons list-inline">
                              <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/bhavuk1"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                              <li class="social-twitter"><a class=" tooltip-top" href="mailto:Info@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                          </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/bhavuk">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animation team_mobile_fix">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_14} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Karan Suri</h5>
                        <h5 className="team_card_name">RCIC #: R517850</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 7</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/karan-suri-rcic-b04976139"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:karan.suri@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/karan">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">               
                <div className="col-md-6 animation">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_7} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Harinder Kahlon</h5>
                        <h5 className="team_card_name">RCIC #: R710204</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">Leadership</h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 15</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/harinder-kahlon-81859a75?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bl56HlvcvQOGTDei9iO2lLA%3D%3D"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:harinder.kahlon@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/harinder-kahlon">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animation team_mobile_fix">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_12} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Sukhwinder Singh</h5>
                        <h5 className="team_card_name">RCIC #: R708954</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 2</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                             <li class="social-twitter"><a class=" tooltip-top" href="mailto:sukhwinder.singh@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/sukhwinder">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>               
              </div>
              <div className="row mt_30">
                <div className="col-md-6 animation">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                          <div className="image-container">
                            <img alt="" src={Img.team_5} className="team_card_img"></img>
                          </div>
                        <h5 className="team_card_name">Umer Sheikh</h5>
                        <h5 className="team_card_name">RCIC #: R707509</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 2</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                             <li class="social-twitter"><a class=" tooltip-top" href="mailto:umer.sheikh@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/umer">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animation team_mobile_fix">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_9} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Piyush Jain</h5>
                        <h5 className="team_card_name">RCIC #: R705479</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 4</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/piyush-jain-rcic-628683215"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:piyush.jain@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/piyushjain">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6 animation">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_8} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Sultan Singh Rana</h5>
                        <h5 className="team_card_name">RCIC #R710368: </h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                          <li>Urdu</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 3</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:singh@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>             
                <div className="col-md-6 animation team_mobile_fix">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_3} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Amandeep Kaur</h5>
                        <h5 className="team_card_name">RCIC #: R711248</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                      <ul className="languages_ul">
                        <li>English</li>
                        <li>Hindi </li>
                        <li>Punjabi</li>
                        <li>Urdu</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 5</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/amandeep-kaur-3328ba99"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:amandeep.kaur@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/amandeep">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6 animation">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_2} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Tabinda Khan</h5>
                        <h5 className="team_card_name">RCIC #: R710562</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi </li>
                          <li>urdu</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 2</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:tabinda.khan@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/tabinda">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>             
                <div className="col-md-6 animation team_mobile_fix">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_13} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Ebhote Francis</h5>
                        <h5 className="team_card_name">RCIC #: R506578</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Esan</li>
                          <li>Yoruba</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 11</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="javascript:void(0);"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:ebhote.francis@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/francis_ebhote">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6 animation">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_16} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Parminder Singh Chahal</h5>
                        <h5 className="team_card_name">RCIC #: R705477</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                          <li>Marathi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box">4</span></h3>
                      <a href="https://calendly.com/growingglobeimmigration/parminder-singh">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animation team_mobile_fix">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_4} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Victoria</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">Leadership</h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 15</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/victoria-ospina-bb095b2a"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:publicrelations@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
                    </div>
                  </div>
                </div>                            
              </div>               
              <div className="row mt_30">
                <div className="col-md-6 animation">
                  <div className="team_card anm_mod full fast">
                    <div className="team_card_inner_1">
                      <center>
                        <div className="image-container">
                          <img alt="" src={Img.team_17} className="team_card_img"></img>
                        </div>
                        <h5 className="team_card_name">Gurkanwar Brar</h5>
                        <h5 className="team_card_name">RCIC #: R708421</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul className="languages_ul">
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box">3</span></h3>
                      <div class="ttm-social-links-wrapper">
                        <ul class="social-icons list-inline">
                          <li class="social-facebook"><a class="tooltip-top" target="_blank" href="https://www.linkedin.com/in/gurkanwar-brar-6b535622b"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li class="social-twitter"><a class=" tooltip-top" href="mailto:gurkanwar.singh@growingglobeimmigration.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <a href="https://calendly.com/growingglobeimmigration/gurkanwar-brar">
                         <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                      </a>
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

export default Team;
