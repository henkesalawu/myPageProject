import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  return ( 
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/contact'>Contact details</Link>
            <div class='social-icons'>
            
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/wandahenkesalawu/'
              target='_blank'
              aria-label='LinkedIn'
            ><p>LinkedIn <i class='fab fa-linkedin' /></p>
            </Link>
          </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo' className='social-logo'>
              Wanda Henke-Salawu
          </div>
          
          <small class='website-rights'>Wanda Henke-Salawu © 2020</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;