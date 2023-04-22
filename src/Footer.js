import './Footer.css'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
     return (
          <div className="pg-footer">
               <footer className="footer">
                    <div className='container'>
                         <div className='row py-5'>
                              <div className='col-sm-12 col-md-6 col-lg-6'>
                                   <div>
                                        <a className="logo" href="/" title="Codesign Multimedia Institute">
                                             {" "}
                                             <img src="images/Codesignlogowhite.webp" alt="Codesign Multimedia Institute" />{" "}
                                        </a>
                                   </div>
                                   <div>
                                        <a href="https://www.instagram.com/codesign_multimedia_institute/" target="_blank" rel="noopener noreferrer"><AiFillInstagram fontSize={25} className='mx-2'/></a>
                                        <a href="https://www.facebook.com/profile.php?id=100088854465381&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><AiFillFacebook fontSize={25} className='mx-2'/></a>
                                        <a href="https://www.linkedin.com/company/90445650/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin fontSize={25} className='mx-2'/></a>
                                        <a href=" https://twitter.com/Codesign402?t=7T69Ab-xm1UqvDxx15PY3Q&s=08" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare fontSize={25} className='mx-2'/></a>
                                        <a href="https://wa.me/918160254080" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare fontSize={25} className='mx-2'/></a>
                                   </div>
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
                                             <div><a href="tel:+918160254080">+91 81602 54080</a></div>
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