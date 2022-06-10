import React from 'react';

import Cta from './Cta';
import './Header.css'




const Header = () => {
      return (
        <header>
          <div className="container header-container">
            <h5>Hello I'm</h5>

            <h2 className="">MD ROKIB HASAN</h2>

            <h5 className="text-light text-h2 ">Full Stack Web Developer</h5>
            <Cta></Cta>
          </div>
        </header>
      );
};

export default Header;