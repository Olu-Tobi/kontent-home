import React, {useState } from 'react'
import "./Customer.css"
import busycon from "../../assets/busycon.svg"
import busypub from "../../assets/busypub.svg"
import busypro from "../../assets/busypro.svg"
import republish from "../../assets/republish.svg"
import Popup from '../Popup/Popup'
import FirstForm from '../Forms/FirstForm'
import SecondForm from '../Forms/SecondForm'


const Customer = () => {

    const [buttonPop, setButtonPop] = useState(false)
    const [PopNew, setPopNew] = useState(false)
    
    const [popNewer, setPopNewer] = useState(false)
    
    

    

    
  return (
<div class="customer-wrapper" id='customer'>
    <div className="container"><h2 className='customer-heading'>Who is kontent home for?</h2></div>
    <div className='container customer-container'>
   

        <div className='container-description'>
            <div className='customer-content flex-start'>
            <h3>I am too busy to create contant for my soocial media / website</h3>
            <button className='customer-btn1 uni-btn' onClick={() => setButtonPop(true)}>Hand over the headache to us now!</button>

            <Popup trigger={buttonPop} setTrigger = {setButtonPop}>
                <FirstForm/>
            </Popup>
            </div>
            
            <img src={busycon} alt=""/>
        </div>
     

        <div className='container-description flex-endcon'>

            <img src={busypub} alt=""/>

            <div className='customer-content flex-end'>
            <h3>I want to publish & print my book with class on a budget</h3>
            <button className='customer-btn2 uni-btn' onClick={() => setPopNew(true)}>Publish now</button>
            </div>
            <Popup trigger={PopNew} setTrigger = {setPopNew}>
                <SecondForm/>
            </Popup>
            
        </div>
        

        <div className='container-description'>
            <div className='customer-content flex-start'>
            <h3>I am too busy to manage my book project </h3>
            <p>Let our book project consultants manage your book project and all the processes of your book from book writing development to launch and marketing…</p>
            <a href='#contact' className='customer-btn3 uni-btn'>Hire a book project manager </a>
            </div>
            
            <img src={busypro} alt=""/>
        </div>
       
       
        <div className='container-description flex-endcon'>
            <img src={republish} alt=""/>

            <div className='customer-content flex-end'>
            <h3>I want to republish a bad book</h3>
            <button className='customer-btn4 uni-btn' onClick={() => setPopNewer(true)}>Republish now</button>
            </div>
            <Popup trigger={popNewer} setTrigger = {setPopNewer}>
                <SecondForm/>
            </Popup>
        
            
        </div>
        
    </div>
</div>
  )
    
}

export default Customer