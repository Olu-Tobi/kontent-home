import React from 'react'
import "./Choose.css"
import obsess from "../../assets/obsess.svg"
import money from "../../assets/money.svg"
import fund from "../../assets/fund.svg"
import prof from "../../assets/prof.svg"
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Choose = () => {
  return (
    <div className=" choose-max">
    <div className="container">
    <h2>Why choose us?</h2>
    </div>
    
       
            <div className="container">
                
                <div className="card-edit">
                    <img src={obsess} alt=""/>
                   <h3>CUSTOMER OBSESSION</h3>
                   <p>We are a customer centric company and truly obsessed about our customer's needs. We go to any length to get the desired story out of our customers</p>
                </div>
               
            </div>

            <div className="container">
                <div className="card-edit">
                    <img src={money} alt=""/>
                    <h3>AFFORDABILITY & SPEED</h3>
                    <p>We are the only content creation company that combines quality, affordability and speed- an oxymoron you rarely get anywhere else!</p>
                </div>
            </div>

            <div className="container ">
                <div className="card-edit">
                    <img src={fund} alt=""/>
                    <h3>NO UPFRONT FEE</h3>
                    <p>No upfront fee for any of our services i.e pay only when we have delivered your service and you are completely satisfied with our work</p>
                </div>
            </div>

            <div className="container ">
                <div className="card-edit">
                    <img src={prof} alt=""/>
                    <h3>PROFESSIONALISM</h3>
                    <div className="card-div">
                    <TaskAltIcon className='card-icon'/>
                    <p> Our team of professionals can handle just about any subject matter  you (or your clients) can think of </p>
                    </div> 

                    <div className="card-div">
                    <TaskAltIcon className='card-icon'/>
                    <p> Speed and On time-delivery </p>
                    </div>

                    <div className="card-div">
                    <TaskAltIcon className='card-icon'/>
                    <p> 100% Money-back Guarantee</p>
                    </div>
                </div>
            </div>

            <div className="container ver-edit">
               <div className="verdict">
                <p>We know running a business is an extremely daunting process. We understand you’re swamped juggling your client roster and trying to meet up with some deadlines. We know you want to focus on other important parts of your business. Who really has time to regularly update the content for their own blog, website or manage their social media? It’s kind of like the landscaper whose own yard is always in need of a little TLC. By not keeping fresh and quality content on your business website, blog, social media pages, you’re losing business (money). Let's help and serve you!</p>
               </div>
            </div>
        </div>
  )
}

export default Choose