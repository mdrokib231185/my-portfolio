import React from 'react';
import Resume from '../../assests/MD_+ROKIB+HASAN+RESUME+(10).pdf'
import me from '../../assests/IMG20201221124120-removebg-preview (1).png'
import HeaderSocial from './HeaderSocial';
const Cta = () => {
      return (
            <div className=''>
                 <div className='cta'> <a href={Resume} download className='btn'>Download Resume</a>
                  <a href="#contact" className='btn btn-primary'>Let's Talk</a></div>
                  <HeaderSocial></HeaderSocial>
                  <div className='me'>
                        <img src={me} alt="" />
                  </div>
                  <a href="#contact" className='scroll-down'>Scroll Down</a>
            </div>
      );
};

export default Cta;