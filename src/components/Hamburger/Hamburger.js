import "./Hamburger.css"

import React from 'react'

const Hamburger = ({isOpen}) => {
  return (
    <>
    <div class="hamburger">
        <div class="burger burger1"/>
        <div class="burger burger2"/>
        <div class="burger burger3"/>
    </div>

    <style jsx>{`
                
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
                
            `}</style>
    </>
  )
}

export default Hamburger