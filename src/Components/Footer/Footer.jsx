import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
      return (
        <footer>
          <a href="#" className="footer-logo">
            Rokib
          </a>
          <ul className="permalinks">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="footer-social">
            <a href="https://www.facebook.com/Rokib231185" target="_blank">
              <FaFacebookSquare />
            </a>
            <a href="https://github.com/mdrokib231185" target='blank'>
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rokib-hasan-16038b22a"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="footer-copyright">
            <small>&copy; Md Rokib hasan. All Right Reserved {new Date().getFullYear()}</small>
            <p>Dinajpur, Rangpur, Bangladesh</p>
          </div>
        </footer>
      );
};

export default Footer;