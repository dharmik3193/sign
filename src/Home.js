const Home = () => {
     return (
          <>

               {/* Preloader */}
               {/* <div className="preloader">
                         <div className="lds-ellipsis">
                              <div />
                              <div />
                              <div />
                              <div />
                         </div>
                    </div> */}
               {/* Preloader End */}
               {/* Document Wrapper
=============================== */}
               <div id="main-wrapper">
                    {/* Header */}
                    <header id="header">
                         {/* Navbar */}
                         <nav className="primary-menu navbar navbar-expand-md bg-transparent border-bottom-0">
                              <div className="container position-relative">
                                   <div className="col-auto col-lg-2">
                                        {/* Logo */}
                                        <a className="logo" href="index.html" title="Codesign">
                                             {" "}
                                             <img src="images/C-odesign.png" alt="Codesign" />{" "}
                                        </a>
                                        {/* Logo End */}
                                   </div>
                                   <div className="col navbar-accordion px-0">
                                        <button
                                             className="navbar-toggler ms-auto"
                                             type="button"
                                             data-bs-toggle="collapse"
                                             data-bs-target="#header-nav"
                                        >
                                             <span />
                                             <span />
                                             <span />
                                        </button>
                                        <div
                                             id="header-nav"
                                             className="collapse navbar-collapse justify-content-end"
                                        >
                                             <ul className="navbar-nav">
                                                  <li className="nav-item">
                                                       <a
                                                            className="nav-link"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#about"
                                                            href="#"
                                                       >
                                                            About Us
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="col-auto d-flex justify-content-end">
                                        <ul className="social-icons">
                                             <li className="social-icons-twitter">
                                                  <a
                                                       data-bs-toggle="tooltip"
                                                       href="http://www.twitter.com/"
                                                       target="_blank"
                                                       title="Twitter"
                                                  >
                                                       <i className="fab fa-twitter" />
                                                  </a>
                                             </li>
                                             <li className="social-icons-facebook">
                                                  <a
                                                       data-bs-toggle="tooltip"
                                                       href="http://www.facebook.com/"
                                                       target="_blank"
                                                       title="Facebook"
                                                  >
                                                       <i className="fab fa-facebook" />
                                                  </a>
                                             </li>
                                             <li className="social-icons-instagram">
                                                  <a
                                                       data-bs-toggle="tooltip"
                                                       href="http://www.instagram.com/"
                                                       target="_blank"
                                                       title="Instagram"
                                                  >
                                                       <i className="fab fa-instagram" />
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </nav>
                         {/* Navbar End */}
                    </header>
                    {/* Header End */}
                    <div className="container py-4 py-lg-0">
                         <div className="row min-vh-100">
                              {/* Coming Soon Information
    ============================== */}
                              <div className="col-lg-8 align-items-center d-flex flex-column py-5">
                                   <div className="row py-5 my-auto text-center text-lg-start">
                                        <div className="col-12 mx-auto">
                                             <h1 className="text-9 text-white bg-danger d-inline-block fw-700 rounded px-3 py-2 mb-4">
                                                  Coming Soon!
                                             </h1>
                                             <h2 className="text-15 fw-600 mb-4">
                                                  Our new website is on its way.
                                             </h2>
                                        </div>
                                        <div className="col-md-8 col-lg-9 col-xl-8 mx-auto me-lg-auto ms-lg-0">
                                             <p className="text-5 text-muted mb-3">
                                                  Get notified when we launch.
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
                                                                 required
                                                                 placeholder="Enter Your Email Here.."
                                                            />
                                                            <button
                                                                 id="subscribe-form-submit"
                                                                 name="subscribe-form-submit"
                                                                 className="btn btn-primary px-4 shadow-none"
                                                                 type="submit"
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
                              {/* Contact Us
    ========================= */}
                              <div className="col-lg-4 my-auto py-lg-5">
                                   <div className="row bg-light rounded shadow-md border text-center mx-0 py-4 mb-4 mb-lg-0">
                                        <div className="col-11 mx-auto">
                                             <h3 className="fw-600 mb-3 mt-3">Contact Us</h3>
                                             <p className="text-black-50 mb-4">
                                                  For Customer Support, Send us a note.
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
                                                       />
                                                  </div>
                                                  <div className="d-grid mt-4">
                                                       <button
                                                            id="submit-btn"
                                                            className="btn btn-primary"
                                                            type="submit"
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
               {/* About Popup
================================== */}
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
                                        We're a digital agency based in USA. We combine our passion for
                                        design focused in people with advanced development technologies.
                                        Thousands of clients have procured exceptional results while working
                                        with our dedicated team.
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
                                                       Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry’s
                                                       standard dummy text.
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
                                                       Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry’s
                                                       standard dummy text.
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
                                                       Lorem Ipsum is simply dummy text of the printing and
                                                       typesetting industry. Lorem Ipsum has been the industry’s
                                                       standard dummy text.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <hr className="my-5" />
                                   {/* Recent Work */}
                                   <h3 className="text-center my-5">
                                        Some of our most recent projects.
                                   </h3>
                                   <div className="portfolio popup-img-gallery">
                                        <div className="row g-4">
                                             <div className="col-sm-6 col-lg-4">
                                                  <div className="portfolio-box rounded">
                                                       <div className="portfolio-img rounded">
                                                            {" "}
                                                            <img
                                                                 className="img-fluid d-block"
                                                                 src="images/images-intro-bg-2.jpg"
                                                                 alt=""
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <a
                                                                      className="popup-img stretched-link"
                                                                      href="images/intro-bg-2.jpg"
                                                                 />
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Project Title</h5>
                                                                      <span className="text-light">Category</span>{" "}
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
                                                                 src="images/images-intro-bg-3.jpg"
                                                                 alt=""
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <a
                                                                      className="popup-img stretched-link"
                                                                      href="images/intro-bg-3.jpg"
                                                                 />
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Project Title</h5>
                                                                      <span className="text-light">Category</span>{" "}
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
                                                                 src="images/images-intro-bg-4.jpg"
                                                                 alt=""
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <a
                                                                      className="popup-img stretched-link"
                                                                      href="images/intro-bg-4.jpg"
                                                                 />
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Project Title</h5>
                                                                      <span className="text-light">Category</span>{" "}
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
                                                                 src="images/images-intro-bg-5.jpg"
                                                                 alt=""
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <a
                                                                      className="popup-img stretched-link"
                                                                      href="images/intro-bg-5.jpg"
                                                                 />
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Project Title</h5>
                                                                      <span className="text-light">Category</span>{" "}
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
                                                                 src="images/images-intro-bg-6.jpg"
                                                                 alt=""
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <a
                                                                      className="popup-img stretched-link"
                                                                      href="images/intro-bg-6.jpg"
                                                                 />
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Project Title</h5>
                                                                      <span className="text-light">Category</span>{" "}
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
                                                                 src="images/images-intro-bg.jpg"
                                                                 alt=""
                                                            />
                                                            <div className="portfolio-overlay">
                                                                 {" "}
                                                                 <a
                                                                      className="popup-img stretched-link"
                                                                      href="images/intro-bg.jpg"
                                                                 />
                                                                 <div className="portfolio-overlay-details">
                                                                      <h5 className="text-white fw-400">Project Title</h5>
                                                                      <span className="text-light">Category</span>{" "}
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



          </>
     )
}

export default Home;