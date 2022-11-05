import React from 'react'
import "./Footer.css"
import black from "../../assets/Black.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
  return (
    <div className="footer-max">

        <div className="container footer-container">
            <div className="socials">
              <img className = "socials-logo" src={black} alt=""/>
              <p>We're online!<br/>How can we help you today?</p>
              <div className='social-handles'>
                    <a href="https://instagram.com/kontenthome"><InstagramIcon className='social-icon' style={{color: "E4405F",   fontSize: "2rem"}}/></a> 
                    <a href=""><FacebookIcon className='social-icon' style = {{color: "3B5999", fontSize: "2rem"}}/></a>
                    <a href="https://www.linkedin.com/company/kontent-home/"><LinkedInIcon className='social-icon' style = {{color: "0077b5", fontSize: "2rem"}}/></a>
                    <a href="https://api.whatsapp.com/send?phone=+2349054710573"><WhatsAppIcon className='social-icon' style = {{color: "#25D366", fontSize: "2rem"}}/></a>
              </div>

            </div>

            <div className="quick-links">
              <h3 className='quick-text'>Quick links</h3>
                <ul>
                  <li> <a href="#about">About Us</a></li>
                  <li> <a href="#contact">Contact Us</a> </li>
                  <li><a href="#contact">Request a Quote</a> </li>
                  <li><a href="#contact">Self-publishing</a> </li>
                  <li><a href="#contact">Work With Us</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Testimonials</a> </li>
                  <li><a href="">Case Studies</a> </li>
                  <li><a href="">Careers</a></li>
                  <li><a href="#contact">Partnerships</a></li>
                  <li><a href="">FAQS</a></li>
                </ul>
            </div>

            <div className="contact-handles">
            <h3 className='quick-text'>Contact us</h3>
              <a href="mailto:info@kontenthome.com" style={{color: "black"}}><EmailIcon/>  info@kontenthome.com</a>
              <div><CallIcon/> +234 905 471 0573</div>
            </div>

            
        </div>
        <div className="line footer-line"></div>
            <p className='write'>&copy; kontenthome 2022</p>
    
    </div>
  )
}

export default Footer