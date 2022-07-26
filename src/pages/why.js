import React from "react";
import { NavLink } from "react-router-dom";

function Why() {

        return(
        <body>
            <header>
            <nav className="navbar navbar-expand-lg">
               <div className="container">
                  <NavLink className="navbar-brand" to="/">
                     <img src="assets/img/Logomeraroommain.png"/>
                  </NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <div className="top_li">
                           <img src="assets/img/Vector.png"/>
                           <div className="top_contant_li">
                              <p>Contact us</p>
                              <h6><span>Get help and support</span></h6>
                           </div>
                        </div>
                        <div className="top_li">
                           <img src="assets/img/apps1.png"/>
                           <div className="top_contant_li">
                              <p>Download Our App</p>
                              <h6><span>For Better experience</span></h6>
                           </div>
                        </div>
                        <div className="top_li">
                           <img src="assets/img/website1.png"/>
                           <div className="top_contant_li">
                              <p>List Your Property</p>
                              <h6><span>Join Us for Best Revenue</span></h6>
                           </div>
                        </div>
                        <div className="top_li">
                           <img src="assets/img/user1.png"/>
                           <div className="top_contant_li">
                              <p><NavLink to="/welcome">Login</NavLink><NavLink to="/signup">Sign Up</NavLink></p>
                              <h6><span>Get Credits and Bonus</span></h6>
                           </div>
                        </div>
                     </ul>
                  </div>
               </div>
            </nav>
      </header>
      <section className="top_contact_hadd">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="contact_hedding">
                     <h6>Why mera room ?</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="contact_det">
                     <h6>The standard Lorem Ipsum<br/> passage, used since the 1500s</h6>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="why_img_box">
                     <img src="assets/img/3568951.png"/>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="finebas py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="redding">
                     <img src="assets/img/Group1033.png"/>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="roomdests">
                     <h6>Section 1.10.33 of "de Finibus<br/> Bonorum et Malorum", written <br/>by Cicero in 45 BC</h6>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <ul>
                     <li><img src="assets/img/check.png"/>For maximising revenue</li>
                      <li><img src="assets/img/check.png"/>To build online presence across channels</li>
                      <li><img src="assets/img/check.png"/>To reach more guests & optimise experience</li>
                      <li><img src="assets/img/check.png"/>For hassle-free operations</li>
                      <li><img src="assets/img/check.png"/>To build a brand loved by both travellers & city dwellers</li>
                      </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="nities">
                     <h6>Amenities</h6>
                     <h2>The standard Lorem Ipsum passage</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                     <button><NavLink to="">Contact Us</NavLink></button>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="sort_box">
                     <img src="assets/img/shot_3.png"/>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="option_room py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="best_in">
                     <img src="assets/img/Group00.png"/>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="insti_">
                     <h6>Mera Room is best option for student to live </h6>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                     <img src="assets/img/Frame62.png"/>
                  </div>
               </div>
            </div>
         </div>
      </section>

      
      <footer className="footer mt-5">
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <div className="hostel_foot">
                     <img src="assets/img/Logomeraroommain.png"/>
                  </div>
               </div>
               <div className="col-6 col-md-3">
                  <div className="Usefull_Links">
                     <h6>Usefull  Links</h6>
                     <ul>

                     <li><NavLink to="/welcome">Login</NavLink>
                  </li>
                  <li><NavLink to="/signup">Sign Up</NavLink></li>
                  <li><NavLink to="/faq">Faq</NavLink></li>
                  <li><NavLink to="/contact">Contact us</NavLink>
               </li>
               <li><NavLink to="/dashboard">Dashboard</NavLink>
               </li>
            </ul>
         </div>
      </div>
      <div className="col-6 col-md-3">
         <div className="Usefull_Links">
            <h6>Other Links</h6>
            <ul>

            <li><NavLink to="/why">Why</NavLink>
         </li>
         <li><NavLink to="/about">About</NavLink>
      </li>
      <li><NavLink to="/listproperty">List Property</NavLink></li>
      <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
      <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
   </ul>
</div>
</div>
<div className="col-md-3">
<div className="playstore">
   <h6>Download The App</h6>
   <img src="assets/img/Frame63.png"/>
</div>
</div>
</div>
<center className="pt-3">© 2022 - Mera Room | All rights reserved</center>
</div>
</footer>
        </body>
        );
    }
export default Why;