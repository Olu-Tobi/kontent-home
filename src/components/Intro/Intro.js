import React from 'react'
import "./Intro.css"
import Navbar from '../Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import intoImage from "../../assets/kontent2.png"
import elipse1 from "../../assets/Ellipse3.png"
import elipse2 from "../../assets/Ellipse4.png"
import vector from "../../assets/Vector4.png"
import vector2 from "../../assets/Vector6.png"


const Intro = () => {
  return (
   
        
        <div className="intro-container">
          <Navbar/>
            <div className="container edit-container">
              <div className="left-container">

              <Carousel>
      <Carousel.Item >
      <h1 style={{color:"black"}}>CREATE</h1>
       
      </Carousel.Item>

      <Carousel.Item >
      <h1 style={{color:"black"}}>PUBLISH</h1>
       
      </Carousel.Item>

      <Carousel.Item >
      <h1 style={{color:"black"}}>GROW</h1>
        
      </Carousel.Item>
    </Carousel>


                <h2>THINK QUALITY? Think us!</h2>
                <h3>Looking for First-class <a href=""  style={{color: "#ffa500"}}>Content </a>  <br/>or <a href="" style={{color: "#ff00d2"}}>Self-publishing </a>  Service support?</h3>
                <p>We help brands communicate better. <br/>We can't wait to serve you and help <br/> you publish your beautiful story</p>
                <a href="#contact" className='big-btn'>Talk to us now</a>
                
              </div>
              <div className="right-container">
                <img src={elipse1} alt="ellipse" className='ellipse ellipse1'/>
                <img src={intoImage} alt="intro img"/>
                <img src={elipse2} alt="ellipse" className='ellipse ellipse2'/>
              </div>
            </div>
            <img src={vector} alt="" className='vector'/>
            <img src={vector2} alt="" className='vector2'/>
        </div>
        
  )
}

export default Intro