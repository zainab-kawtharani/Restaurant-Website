import React from 'react';

import './Footer.css';

import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'
import { FooterOverlay,Newsletter } from '../../components';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
   <FooterOverlay/>
   <Newsletter/>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Lebanon, Bierut : Achrafieh - City Center</p>
        <p className='p__opensans'>01-342234</p>
        <p className='p__opensans'>01-342213</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='logo'/>
        <p className='p__opensans'>The best way to find yourself is to help others</p>
        <img src={images.spoon} alt='spoon' style={{marginTop:'15px'}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
  
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>10:00 Am-2:00 Am</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>10:00 Am-3:00 Am</p>



      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
