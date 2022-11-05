import React from 'react'
import "./Need.css"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import MmsIcon from '@mui/icons-material/Mms';
import BookIcon from '@mui/icons-material/Book';
import vector4 from "../../assets/Vector4.png"
import vector6 from "../../assets/Vector6.png"
import team from "../../assets/team.svg"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Diversity2Icon from '@mui/icons-material/Diversity2';

const Need = () => {
  return (
    <div className='need-max'>
    <img src={vector4} alt=""/>
    <img src={vector6} className="vector-place" alt=""/>
        <div className="container need-container">
            <h2 className='need-heading'>I NEED</h2>
            <div className="need-wrapper">
                <div className='need-style1 need-style'>
                    <ModeEditOutlineIcon className="need-icon"/>
                    <p>Professional book editing, formatting and proofreading services</p>
                </div>
                <div className='need-style2 need-style'>
                    <MmsIcon className="need-icon"/>
                    <p>A Content creator for my brand/ social media page <span style={{color: "white"}}>....</span></p>
                </div>
                <div className='need-style3 need-style'>
                    <BookIcon className="need-icon"/>
                    <p>Professional and high quality Book Cover design for my book</p>
                </div>
            </div>
            <a href = "#contact" className='need-btn'>Request a quote now</a>
        </div>
        <div className="line"></div>
        <div className="container cant-max">
        <div className="cant-container1 cant-edit">
            <p>Can't afford the exorbitant fees traditional publishers charge to publish a professional book?</p>
            <a href = "#customer" className='cant-btn'>Publish Now</a>
        </div>
        <div className=" cant-container2 cant-edit">
            <p>Need a PowerPoint presentation or visual design for my sermon or seminar ?</p>
            <a href = "#contact" className='cant-btn'>Let's Help you</a>
        </div>
        <div className=" cant-container3 cant-edit">
            <p>Too Busy to Write or not talented at writing? <br/>Hire a Ghostwriter to develop an article for you or write your book</p>
            <a href = "#contact" className='cant-btn'>Hire Now</a>
        </div>
        
        </div>
        <div className="line"></div>
        <div className="container">
        <div className=" max-one">
            <img src={team} alt=""/>
            <p>We are a team of brilliant and highly skilled professionals whose pricing you possibly can't get anywhere else in the world. At Kontent Home, we combine three key values-speed, affordability with quality- an oxymoron you rarely get anywhere.</p>
        </div>
        
            <div className='q-container'>
            <div className="q-text">
            <TaskAltIcon className='q-icon'/> <p> Are you an author/speaker?</p>
            </div>
            <div className="q-text">
            <TaskAltIcon className='q-icon'/><p> Do you have a book idea you are working on? </p>
            </div>
            <div className="q-text">
            <TaskAltIcon className='q-icon'/><p > Care about quality production but don't have the time to supervise the entire book production process?</p>
            </div>
            <div className="q-text">
            <TaskAltIcon className='q-icon'/><p> Can't afford the exorbitant fees traditional publishers charge to publish a professional book? </p>
            </div>
            <div className="q-text">
            <TaskAltIcon className='q-icon'/><p> Don't want to break the bank to become an author? </p>
            </div>
            <div className="q-text">
            <TaskAltIcon className='q-icon'/><p> What if you could get the same quality service elsewhere at an affordable cost? </p>
            </div>
  

<div className="q-cta">
    <Diversity2Icon className='div-icon'/>
    <p className='q-text2'>We designed Kontent Home for brands, authors and individuals like you who desire quality but don't want to break the bank. </p>

    <p className='q-text3'><em>How can we be of service today?</em></p>
    <a href="#contact">Send us a brief of your next project</a>
</div>
            </div>

            
        </div>
        </div>
        
   
  )
}

export default Need