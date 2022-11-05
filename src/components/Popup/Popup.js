import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./Popup.css"

const Popup = (props) => {
  return (props.trigger) ? (
      <div className='popup'>
        <div class="popup-inner">
            <CloseIcon className='close-btn' onClick = {() => props.setTrigger(false)}/>
            {props.children}
        </div>
    </div>
  ):""
  
}

export default Popup