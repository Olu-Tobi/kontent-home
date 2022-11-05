import React from 'react'
import "./About.css"
import Popup from '../Popup/Popup'
import { useState } from 'react'
import Humans from "../../assets/Humaaans.png"

import VerifiedIcon from '@mui/icons-material/Verified';
import content from "../../assets/content.svg"
import publish from "../../assets/publish.svg"

const About = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [learnMoreContent, setLearnMoreContent] = useState(false)
    const [learnMorePublish, setLearnMorePublish] = useState(false)
    const pText = 'Kontent Home is perhaps the most affordable and smartest way to create premium content without breaking the bank! We help you save your most important resources- time and money while still giving you top notch quality on time.'
    return (
    <div id='about' className='about-container'>
        <div className="container content-container">
            <div className='left-about'>
                <h2>WHO WE ARE</h2>
                <p>{pText.substring(0,150)}...</p>
                <button className='about-btn' onClick={() => setButtonPopup(true)}>Continue reading</button>
                
                <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
                    <h2>WHO WE ARE</h2>
                    <p className='about-ptext'>Kontent Home is perhaps the most affordable and smartest way to create premium content without breaking the bank! We help you save your most important resources- <span>time and money</span> while still giving you top notch quality on time. 

We are a content creation and publishing service company in the implementation of content production for a wide variety of needs and channels. We relentlessly are in pursuit of excellence, obsessed about customer centricity while focusing on innovative improvement and prudent cost management. We are blessed with a highly talented team, and we ensure  that the best qualified talent works on your project while delivering speed, quality, excellence and cost advantages, which is important in today’s highly competitive business environment.

Through our highly skilled team combining a variety of expertise, we produce quality content for brands and publish any form of content. If there is a desire for individual and high-quality content, we realize your dream with our <span>creative in-house content and publishing team</span>.

We provide the bridge from written words to published, imagination to image, and intent to accessibility. Write, design, visualize, create, and dream — we got you. It doesn't matter your kind of audience, we can take your words and images and make them presentable, economically valuable and marketable to your ideal audience. 
</p>
                </Popup>
            </div>
            <div className='right-about'>
                <img src={Humans} alt=""/>
            </div>
        </div>

        <div className='line'></div>
        
        <div className="container container-content">
            <h2>WHAT WE DO</h2>

       
                <div className="content-dev">
                    <div className='content'>
                        <div className="content-img">
                            <img src={publish} alt=""/>
                        </div>
                        <div className='content-text'>
                        <h3>CONTENT CREATION</h3>
                        <button className='about-btn' onClick={() => setLearnMoreContent(true)}>Learn More</button>
                        </div>

                        <Popup trigger={learnMoreContent} setTrigger = {setLearnMoreContent}>
                        <h3>CONTENT CREATION</h3>
                        <div className="inner-content">
                            <VerifiedIcon/><p>We produce engaging content that helps build brand's visibility and help brand stand out in a noisy marketplace</p>
                        </div>

                        <div className="inner-content">
                            <VerifiedIcon/><p>We create quality content that turn your prospect into a buying and loyal advocate</p>
                        </div>

                        <div className="inner-content">
                            <VerifiedIcon/><p>We produce contents that ignites business growth and thus increase sales</p>
                        </div>

                        <div className="inner-content">
                            <VerifiedIcon/><p>We help brands build a powerful online presence, manager their public image, build digital influence and affluence </p>
                        </div>
                        </Popup>
                    </div>

                    <div className='content'>
                        <div className="publish-img">
                            <img  src={content} alt=""/>
                        </div>
                        <div className='content-text'>
                        <h3>BOOK PUBLISHING</h3>
                        <button className='about-btn' onClick={() => setLearnMorePublish(true)}>Learn More</button>
                        </div>

                        <Popup trigger={learnMorePublish} setTrigger = {setLearnMorePublish}>
                        <h3>BOOK PUBLISHING</h3>
                        <div className="inner-content">
                            <VerifiedIcon/><p>We publish and print high quality books or any form of written content on a budget</p>
                        </div>

                        <div className="inner-content">
                            <VerifiedIcon/><p>We help you upload and sell your books globally using the leading Bookstore platforms- Amazon, Barnes & Nobles, Bookbaby, Shopify and more</p>
                        </div>
                        </Popup>
                    </div>
                </div>
          
            
        </div>
    </div>
  )
}

export default About