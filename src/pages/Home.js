import React from 'react'
import Intro from '../components/Intro/Intro'
import FirstCta from '../components/FirstCta/FirstCta'
import About from '../components/About/About'
import Customer from '../components/Customer/Customer'
import SecondCta from '../components/SecondCta/SecondCta'
import Need from '../components/Need/Need'
import Choose from '../components/ChooseUs/Choose'
import Newsletter from '../components/Newsletter/Newsletter'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Intro/>
        <FirstCta/>
        <About/>
        <Customer/>
        <SecondCta/>
        <Need/>
        <Choose/>
        <Newsletter/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home