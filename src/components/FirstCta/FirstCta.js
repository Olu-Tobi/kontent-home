import React from 'react'
import "./FirstCta.css"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const FirstCta = () => {
  return (
    <div className='first-cta'>
        <div className="container cta-container">
            <ManageAccountsIcon style={{fontSize:"3rem"}}/>
            <h2>HOW CAN WE BE OF SERVICE TO YOU?</h2>
            <a href="#contact" className='cta-btn'>Request a quote now <ArrowForwardIosOutlinedIcon/></a>
        </div>
    </div>
  )
}

export default FirstCta