import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareEdit } from 'react-icons/bi'
import './Navbar.css'



const Navbar = () => {
      const [active, setActive] = useState('#')
      return (
            <nav>
                  <a href="#"><AiOutlineHome/></a>
                  <a href="#about"><AiOutlineUser/></a>
                  <a href="#experience"><BiBook/></a>
                  <a href="#services"><RiServiceLine/></a>
                  <a href="#contact"><BiMessageSquareEdit/></a>
            </nav>
      );
};

export default Navbar;