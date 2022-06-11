import React from 'react';

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import { SiBloglovin } from 'react-icons/si'
import { Link } from "react-router-dom";
import './Nav.css'

const NavbarMenu = () => {
      return (
        <nav>
          <a href="#">
            <AiOutlineHome />
          </a>
          <a href="#about">
            <AiOutlineUser />
          </a>
          <a href="#experience">
            <BiBook />
          </a>
          <a href="#services">
            <RiServiceLine />
          </a>
          <a href="#contact">
            <BiMessageSquareEdit />
          </a>
          <a href="#blogs">
            <SiBloglovin />
          </a>
        </nav>
      );
};

export default NavbarMenu;