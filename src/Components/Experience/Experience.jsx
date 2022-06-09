import React from 'react';
import './Experience.css'
import { ImHtmlFive2 } from 'react-icons/im'
import { TbBrandCss3 } from 'react-icons/tb'
import { TbBrandBootstrap } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";


const Experience = () => {
      return (
        <section id="experience">
          <h5>What skill i have</h5>
          <h2>My Experience</h2>
          <div className="container experience-container">
            <div className="experience-fronted">
              <h3>Frontend Development</h3>
              <div className="experience-content">
                <article className="experience-details">
                  <ImHtmlFive2 className='experience-icon' />
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience-details">
                  <TbBrandCss3 className='experience-icon' />
                  <div>
                    <h4>CSS3</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience-details">
                  <TbBrandBootstrap className='experience-icon' />
                  <div>
                    <h4>BOOTSTRAP</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience-details">
                  <SiTailwindcss className='experience-icon' />
                  <div>
                    <h4>TAILWIND CSS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience-details">
                  <TbBrandJavascript className='experience-icon' />
                  <div>
                    <h4>JAVASCRIPT</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience-details">
                  <FaReact className='experience-icon' />
                  <div>
                    <h4>REACT JS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>
            <div className="experience-backend">
              <h3>Backend Development</h3>
              <div className="experience-content">
                <article className="experience-details">
                  <FaNodeJs className='experience-icon' />
                  <div>
                    <h4>NODE JS</h4>
                    <small className="text-light">INTERMEDIATE</small>
                  </div>
                </article>
                <article className="experience-details">
                  <SiMongodb className='experience-icon' />
                  <div>
                    <h4>MONGO DB</h4>
                    <small className="text-light">INTERMEDIATE</small>
                  </div>
                </article>
                <article className="experience-details">
                  <SiMysql className='experience-icon' />
                  <div>
                    <h4>MY SQL</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="experience-details">
                  <SiExpress className='experience-icon' />
                  <div>
                    <h4>EXPRESS JS</h4>
                    <small className="text-light">Intermediate</small> 
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      );
};

export default Experience;