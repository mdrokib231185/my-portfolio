import React from "react";
import './Portfolio.css'
import img1 from "../../assests/rokib.jpg";
import img2 from "../../assests/mt1.png";
import img3 from "../../assests/banner02.jpg";
import img4 from "../../assests/Screenshot_40.png";
import img5 from "../../assests/Screenshot_1.png";


const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Electric Manufacture (Full Stack Project)</h3>
          <p>Its is manufacture website</p>
          <p> Firebase Authentication added</p>
          <p> Admin Dashboard added payment System added</p>
          <p>
            Technology used: React JS, Node JS, MongoDB, React Router,
            Bootstrap, React-Bootstrap, Firebase, React Firebase Hook, JWT,
            Heroku. Its
          </p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/mdrokib231185/manufacturer-full-stack-project"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/mdrokib231185/manufacturer-full-stack-server-site"
              className="btn"
              target="_blank"
            >
              Server
            </a>
            <a
              href="https://assignment-12-9793d.web.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img2} style={{ height: 215 }} alt="" />
          </div>
          <h3>MotorBike Inventory (Full Stack Project)</h3>
          <p>It’s is a motorbike inventory website</p>
          <p>Users can Add, Delete and View his/her inventory items</p>
          <p>
            Users can make a delivery and restock an item with the help of this
            system.
          </p>
          <p>
            Technology Used : React JS, Node JS, MongoDB, React Router,
            Bootstrap, React-Bootstrap, Firebase, React Firebase Hook, JWT,
            Heroku
          </p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/mdrokib231185/warehouse-full-stack-client-site"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/mdrokib231185/warehouser-full-stack-server-site"
              className="btn"
              target="_blank"
            >
              Server
            </a>
            <a
              href="https://assignment-11-90b2a.web.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img3} alt="" />
          </div>
          <h3>Teeth Care (React Authentication)</h3>
          <p> Its is a Teeth care website</p>
          <p> Google login implement</p>
          <p> Email password empelement</p>
          <p>React firebase authentication implement</p>
          <p>
            Technology used: React Js, React Firebase, Bootstrap , HTML, CSS3
          </p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/mdrokib231185/react-authentication"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn ">
              Server
            </a>
            <a
              href="https://assignment10-645d4.firebaseapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img5} alt="" />
          </div>
          <h3>React Router </h3>
          <p> Its is a React Router website</p>
          <p> Review section add</p>
          <p> Dashboard add chart add </p>
          <p>Blog Section add</p>
          <p>Technology used: React Js, Bootstrap ,React chart HTML, CSS3</p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/mdrokib231185/react-router"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn ">
              Server
            </a>
            <a
              href="https://mellifluous-twilight-6d598a.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img4} alt="" />
          </div>
          <h3>Mobile Phone buy</h3>
          <p> Its is a mobile phone bur website</p>
          <p> Add to cart</p>
          <p> Randomly choice 1 iteams</p>

          <p>Technology used: HTML, CSS3, Bootstrap</p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/mdrokib231185/mobile-phone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn ">
              Server
            </a>
            <a
              href="https://effulgent-meerkat-98d088.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
