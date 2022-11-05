import React from 'react'
import "./SecondCta.css"
import SupportIcon from '@mui/icons-material/Support';
import { useTypewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'




const SecondCta = () => {



    const [text] = useTypewriter({
        words: [ "Need a helping hand with your content or publishing requirements?"],
        loop: 4, 
        typeSpeed: 110,
        deleteSpeed: 50,
        delaySpeed: 1500
        });

  return (
    <div className='container second-cta'>
        <SupportIcon style={{fontSize:"3rem"}}/>
        <h2>
                {text}
                <span className="cursor">|</span>
        </h2>

        <div className='cta2-edit'><a href="#contact" className='cta2'>Talk to us now</a></div>
    </div>
  )
}

export default SecondCta