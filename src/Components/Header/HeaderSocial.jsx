import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocial = () => {
      return (
            <div className='header-social'>
                  <a href="https://www.linkedin.com/in/md-rokib-hasan-16038b22a" target="_blank"><BsLinkedin/></a>
                  <a href="https://github.com/mdrokib231185" target="_blank"><BsGithub/></a>
                  <a href="https://www.facebook.com/Rokib231185" target="_blank"><BsFacebook/></a>
                  
            </div>
      );
};

export default HeaderSocial;