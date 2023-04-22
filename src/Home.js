import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

const Home = () => {

     const [email, setEmail] = useState('')
     const [name, setName] = useState('');
     const [addcourse, setAddcourse] = useState('');
     const subscribe = (e) => {
          e.preventDefault()
          axios.post('https://attractive-gold-wetsuit.cyclic.app/add_newsletter', {
               email: email
          })
               .then(function (res) {
                    console.log(res);
               })
               .catch(function (error) {
                    console.log(error);
               });
     }

     const add_inquiry = (e) => {
          e.preventDefault()
          axios.post('https://attractive-gold-wetsuit.cyclic.app/add_inquiry', {
               name: name,
               email: email,
               course: addcourse
          })
               .then(function (res) {
                    console.log(res);
                    setName('')
                    setEmail('');
                    setAddcourse('')
                    alert("Request submitted successfully. Thanks!!")
               })
               .catch(function (error) {
                    console.log(error);
               });
     }

     return (
          <>

               {/* ===========================================Document Wrapper=============================== */}
               <div id="main-wrapper">
                    {/* Header */}
                    <Header />
                    {/* Header End */}
                    <div className="container py-4 py-lg-0">
                         <div className="row">
                              {/* =====================================Coming Soon Information============================== */}
                              <div className="col-lg-8 align-items-center d-flex flex-column">
                                   <div className="row py-5 text-center text-lg-start">
                                        <div className="col-12 mx-auto">
                                             <h1 className="text-9 text-white bg-color d-inline-block fw-700 rounded px-3 py-2 mb-4">
                                                  Under Maintenance!
                                             </h1>
                                             <h2 className="text-15 fw-600 mb-4">
                                                  Our website is under maintenanace.
                                             </h2>
                                        </div>
                                        <div className="col-md-8 col-lg-9 col-xl-8 mx-auto me-lg-auto ms-lg-0">
                                             <p className="text-5 text-muted mb-3">
                                                  Get notified when we back.
                                             </p>
                                             {/* Subscribe Form */}
                                             <div className="subscribe-form">
                                                  <form role="form">
                                                       <div className="input-group">
                                                            <input
                                                                 type="email"
                                                                 id="subscribe-form-email"
                                                                 name="subscribe-form-email"
                                                                 className="form-control border-2 required"
                                                                 required={true}
                                                                 placeholder="Enter Your Email Here.."
                                                                 onChange={(e) => { setEmail(e.target.value) }}
                                                            />
                                                            <button
                                                                 id="subscribe-form-submit"
                                                                 name="subscribe-form-submit"
                                                                 className="btn btn-primary px-4 shadow-none"
                                                                 onClick={subscribe}
                                                            >
                                                                 <span className="d-none d-sm-block">Notify Me</span>
                                                                 <span className="text-4 d-block d-sm-none">
                                                                      <i className="fas fa-arrow-right" />
                                                                 </span>
                                                            </button>
                                                       </div>
                                                  </form>
                                                  <div className="subscribe-form-result mt-3" />
                                             </div>
                                             {/* Subscribe End */}
                                        </div>
                                   </div>
                              </div>
                              {/* Coming Soon Information End */}
                              {/* ========================================Contact Us========================= */}
                              <div className="col-lg-4 py-lg-5">
                                   <div className="row bg-light rounded shadow-md border text-center mx-0 py-4 mb-4 mb-lg-0">
                                        <div className="col-11 mx-auto">
                                             <h3 className="fw-600 mb-3 mt-3">Contact Us</h3>
                                             <p className="text-black-50 mb-4">
                                                  For Student Support, Send us a note.
                                             </p>
                                             {/* Contact Form */}
                                             <form id="contact-form">
                                                  <div className="mb-3">
                                                       <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            className="form-control border-2"
                                                            placeholder="Enter Your Name"
                                                            required
                                                            onChange={(e) => { setName(e.target.value) }}
                                                       />
                                                  </div>
                                                  <div className="mb-3">
                                                       <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            className="form-control border-2"
                                                            placeholder="Enter Your Email"
                                                            required
                                                            onChange={(e) => { setEmail(e.target.value) }}
                                                       />
                                                  </div>
                                                  <div className="mb-3">
                                                       <textarea
                                                            id="form-message"
                                                            name="form-message"
                                                            className="form-control border-2"
                                                            rows={2}
                                                            placeholder="Enter Your Query"
                                                            required
                                                            defaultValue={""}
                                                            onChange={(e) => { setAddcourse(e.target.value) }}
                                                       />
                                                  </div>
                                                  <div className="d-grid mt-4">
                                                       <button
                                                            id="submit-btn"
                                                            className="btn btn-primary"
                                                            onClick={add_inquiry}
                                                       >
                                                            Send Message
                                                       </button>
                                                  </div>
                                             </form>
                                             {/* Contact Form end */}
                                        </div>
                                   </div>
                              </div>
                              {/* Contact Us End */}
                         </div>
                    </div>
               </div>
               {/* Document Wrapper End */}
               {/* ======================================About Popup================================== */}
               <div id="about" className="modal fade" role="dialog" aria-hidden="true">
                    <div
                         className="modal-dialog modal-xl modal-dialog-centered"
                         role="document"
                    >
                         <div className="modal-content">
                              <div className="modal-header">
                                   <h5 className="modal-title fw-600 text-7 mx-auto">About Us</h5>
                                   <button
                                        type="button"
                                        className="btn-close ms-0"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                   />
                              </div>
                              <div className="modal-body p-4">
                                   <p className="lead text-center">
                                        We're a IT training providers based in Surat(India). We combine our passion for
                                        design focused in people with advanced development technologies.
                                        Many students have procured exceptional results while getting trained
                                        by our dedicated team.
                                   </p>
                                   <div className="row">
                                        <div className="col-lg-4">
                                             <div className="featured-box text-center">
                                                  <div className="featured-box-icon text-primary">
                                                       {" "}
                                                       <i className="far fa-thumbs-up" />
                                                  </div>
                                                  <h4 className="fw-600">Why Choose Us</h4>
                                                  <p className="text-3">
                                                       Codesign Multimedia Institute brings you online, self-paced, mentor driven courses that not only helps professionals gain theoretical expertise but also the practical experience in a wide variety of courses including courses on Computer Courses such as IT Course, which is very popular.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="col-lg-4">
                                             <div className="featured-box text-center">
                                                  <div className="featured-box-icon text-primary">
                                                       {" "}
                                                       <i className="far fa-paper-plane" />
                                                  </div>
                                                  <h4 className="fw-600">Our Mission</h4>
                                                  <p className="text-3">
                                                       We are committed to create skilled professionals, to fulfill the gap between industry and employee by providing advanced quality training and assessment services in skill and behavioral areas.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="col-lg-4">
                                             <div className="featured-box text-center">
                                                  <div className="featured-box-icon text-primary">
                                                       {" "}
                                                       <i className="far fa-eye" />
                                                  </div>
                                                  <h4 className="fw-600">Our Vision</h4>
                                                  <p className="text-3">
                                                       Our Vision is to make professional, who believe in themselves and are equipped with the latest state of the art in their respective fields, who are confident and can compete in the challenging world. We want to become a leading training institute to provide real world hands on training to our students.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <hr className="my-5" />
                                   {/* Recent Work */}
                                   <h3 className="text-center my-5">
                                        Courses We Offer
                                   </h3>
                                   <div className="portfolio popup-img-gallery">
                                        <div className="row g-4">
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/apex.webp')}
                                                                 alt="Oracle Apex Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Oracle Application Express(APEX)</h5>
                                                                      <span className="text-light">Web Based ERP software development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/js-development1.webp')}
                                                                 alt="MERN Stack Development Training"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Fullstack JS Development</h5>
                                                                      <span className="text-light">Front-end & Back-end JS Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/react-js.webp')}
                                                                 alt="React JS Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">React JS</h5>
                                                                      <span className="text-light">Front-end JS Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/nodejs.webp')}
                                                                 alt="Node JS Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Node JS</h5>
                                                                      <span className="text-light">Back-end JS Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/php.webp')}
                                                                 alt="PHP Web Development Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">PHP Web Development</h5>
                                                                      <span className="text-light">PHP Front-end & Back-end Web Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/python.webp')}
                                                                 alt="Python Web Development Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Python Web Development</h5>
                                                                      <span className="text-light">Python Front-end & Back-end Web Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/android.webp')}
                                                                 alt="Android App development Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Android</h5>
                                                                      <span className="text-light">Android Mobile App Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/flutter.webp')}
                                                                 alt="Flutter App Development In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Flutter</h5>
                                                                      <span className="text-light">Cross Platform Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/native.webp')}
                                                                 alt="React Native Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">React Native</h5>
                                                                      <span className="text-light">Hybrid App Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/uiux.webp')}
                                                                 alt="Ui / Ux Design Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Ui / Ux Design</h5>
                                                                      <span className="text-light">Designing</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/webdesign.webp')}
                                                                 alt="Web Design Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Web Design</h5>
                                                                      <span className="text-light">Website Designing</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/graphics.webp')}
                                                                 alt="Graphics Design Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Graphics Design</h5>
                                                                      <span className="text-light">Designing</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/digital.webp')}
                                                                 alt="Digital Marketing Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Digital Marketing</h5>
                                                                      <span className="text-light">Business Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src={require('./Images/smm.webp')}
                                                                 alt="Social Media Marketing Training In Surat"
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Social Media Marketing</h5>
                                                                      <span className="text-light">Business Development</span>{" "}
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* About Popup End */}

               <Footer />



          </>
     )
}

export default Home;