import React from 'react';
import Cta from './Cta';
import './Header.css'




const Header = () => {
      return (
            <header>
                  <div className="container header-container">
                        <h5>Hello I'm</h5>
                        <h1>MD ROKIB HASAN</h1>
                        <h5 className="text-light">Full Stack Web Developer</h5>
                        <Cta></Cta>
                        
                  </div>
            </header>
      );
};

export default Header;