import './Footer.css'

const Footer = () => {
     return (
          <div className="pg-footer">
               <footer className="footer">
                    <div className='container'>
                         <div className='row py-5'>
                              <div className='col-sm-12 col-md-6 col-lg-6'>
                                   <a className="logo" href="index.html" title="Codesign">
                                        {" "}
                                        <img src="images/C-odesign.png" alt="Codesign" />{" "}
                                   </a>
                              </div>
                              <div className='col-sm-12 col-md-6 col-lg-6'>
                                   <ul className="footer_location">
                                        <li className="my-2">Contact Us</li>
                                        <li className="my-1 d-flex">
                                             <div className='mx-2'><i class="fa fa-home"></i></div>
                                             <div>402, Middle Point, Opp. Dhara Arcade , Mahadev Chowk ,<br />Mota Varachha , Surat - 394101 ,Gujarat , India.</div>
                                        </li>
                                        <li className="my-1 d-flex">
                                             <div className='mx-2'><i class="fa fa-phone"></i> </div>
                                             <div><a href="tel:+919328600947">+91 93286 00947</a></div>
                                        </li>
                                        <li className="my-1 d-flex">
                                             <div className='mx-2'><i class="fa fa-envelope"></i> </div>
                                             <div><a href="mailto:codesignmultimedia@gmail.com"> codesignmultimedia@gmail.com </a></div>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>

     )
}

export default Footer;