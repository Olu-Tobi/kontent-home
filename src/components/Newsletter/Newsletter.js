import React from 'react'
import "./Newsletter.css"
import Mailchimp from "react-mailchimp-form"
import pen1 from "../../assets/pen1.png"
import pen2 from "../../assets/pen2.png"



   
       


const Newsletter = () => {

    
  return (
   <div className="newsletter-max">
        <img className="pen1" src={pen1} alt=""/>
       
        <div className="container">
            <div className="newsletter-con">
           

           
            <p>Get helpful contents, publishing & marketing tips to help you create and sell your stories more effectively! You can choose to unsubscribe anytime.</p>
            
            

             <Mailchimp
                action = {process.env.REACT_APP_MAILCHIMP_URL}
                fields ={[
                    {
                        name: 'EMAIL',
                        placeholder: 'your@email.com',
                        type:'email',
                        required: 'true'
                    }
                ]}

                messages = {{
                    sending : "Sending...",
                    success: "Thank you, your sign-up request was successful! Please check your email inbox to confirm.",
                    error: "An unexpected error occured! Please try again",
                    duplicate: "This subscriber already exists!",
                    button: "Subscribe now"
                }}

                className='MailchimpStyle'
             />

                 
            </div>
        </div>
        <img className='pen2' src={pen2} alt=""/>
   </div>
  )
}

export default Newsletter