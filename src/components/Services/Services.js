import React from 'react'
import "./Services.css"
import VerifiedIcon from '@mui/icons-material/Verified';

const Services = () => {
  return (
    <div id='services' className="services-max">
        <div className="container con-text">
            <h2>OUR SERVICE BOUQUET </h2>
        </div>

        <div className="container services-con">
        <article className='service'>
          <div class="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul class="service__list">
            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>Content Writing</p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>Copywriting </p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>Social Media Management</p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>Digital Marketing</p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>Web Development</p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>Web Content Management </p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>Visual Communication & Designs </p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>PowerPoint Creation</p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon'/>
            <p>Voice Overs</p>
            </li>
          </ul>
        </article>

        <article className='service serve-color'>
          <div class="service__head color2">
            <h3>Book Publishing</h3>
          </div>

          <ul class="service__list">
            <li>
            <VerifiedIcon className='service__list-icon icon2'/>
            <p>Manuscript Critique </p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon icon2'/>
            <p>Book Ghostwriting</p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon icon2'/>
            <p>Typesetting & Formatting </p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon icon2'/>
            <p>Professional Book Editing</p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon icon2'/>
            <p>Book Cover Design</p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon icon2'/>
            <p>PowerPoint Creation </p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon icon2'/>
            <p>Book Project Management </p>
            </li>

            <li>
            <VerifiedIcon className='service__list-icon icon2'/>
            <p>Consultancy </p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  )
}

export default Services