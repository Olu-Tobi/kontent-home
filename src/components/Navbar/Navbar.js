import React, { useState } from 'react'
import "./Navbar.css"
import Hamburger from '../Hamburger/Hamburger';
import logo from "../../assets/Colored.png"
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#');
    const [hamOpen, setHamOpen] = useState(false)
    
    const toggleHam = () => {
      setHamOpen(!hamOpen)
    }
  return (
    <>
    <div className='navbar' >
        <div className="brand"><img src={logo} alt="logo"/></div>
        <div className='nav-items'>
        <a href="#" onClick={() => {setActiveNav('#')}} className={activeNav ==='#' && 'active'}><HomeIcon className='i-con' />Home</a>
        <a href="#services"  onClick={() => {setActiveNav('#services'); setHamOpen(!hamOpen)}} className={activeNav ==='#services' && 'active'} > <HomeRepairServiceIcon className='i-con'/>Our service bouquet</a>
        <a href="#contact" onClick={() => {setActiveNav('#contact'); setHamOpen(!hamOpen)}} className={activeNav ==='#contact' && 'active'}> <RequestQuoteIcon className='i-con'/>Request a quote</a>
        <a href="#about" onClick={() => {setActiveNav('#about'); setHamOpen(!hamOpen)}} className={activeNav ==='#about' && 'active'}> <InfoIcon className='i-con'/>About us</a>
        <a href="#contact" onClick={() => {setActiveNav('#contact'); setHamOpen(!hamOpen)}} className={activeNav === '#contact' && 'active'}> <ContactMailIcon className='i-con'/>Talk to us</a>
        </div>
        <div className='ham' onClick={toggleHam}>
          <Hamburger isOpen={hamOpen}/>
        </div>
    </div>

    <style jsx>
      {
        `
    @media screen and (max-width: 600px) {
          .navbar{
            width:100%;
           
          }
          .navbar>.brand>img{
            margin-left:0;
            width:25%;
          }

          .navbar > .nav-items > a{
    
              font-size: 0.9rem;
            
          }
          
          
          .ham{
              display: block;
              z-index: 10;
          }

          
          .navbar > .nav-items{
              display: ${hamOpen? "flex":"none"};
              flex-direction: column;
              background: #fff;
              
              height: 1150%;
              width: 70vw;
              position: absolute;
              left: 30%;
              top: 50%;
              padding-left: 1rem;
          
              z-index:10;
              
              
        }
        .nav-items> a{
          margin-top:3rem;
          
        }

        .i-con{
          display: inline !important;
          margin: 0 1rem;
        }

        

        

  	}
        `
      }
    </style>


    </>
  )
}

export default Navbar