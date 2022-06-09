import React from "react";
import "./About.css";
import me from "../../assests/rok.png";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <BsAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Year Experience</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients </h5>
              <small>10+ Clients WorldWide</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Project</h5> <small>10+ Projects Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nulla
            veritatis, id velit voluptates cumque tempora? Eum quod nam, quo
            doloremque, dolores veritatis beatae magni, praesentium ex
            perferendis atque harum!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
