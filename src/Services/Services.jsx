import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import './Services.css'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Do</h5>
      <h2>Services</h2>
      <div className="container service-container">
        {/* UI/Ux design */}
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Website Ui/Ux Design expert</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Design Quality is very important for every website, </p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>
                make sure 100% quality & satisfaction before delivering the
                project.
              </p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>I can create any type of website for your business</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Provide unique, clean & awesome graphical design interface.</p>
            </li>
          </ul>
        </article>
        {/* web Development  */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Any website Design and development</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Full stack website developmnet</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>React Website development</p>
            </li>

            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Unique website design and development</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Any full Stack Project complete few days after order</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>I have enough Knowledge front end development</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>I have a Good Experience Back End development</p>
            </li>
          </ul>
        </article>
        {/* problem trobuleshoot */}
        <article className="service">
          <div className="service-head">
            <h3>Problem Troubleshot</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>I am expert any problem solution</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Expert in debug or fixing Problem</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Troubleshooting, Analyzing,Brainstorming </p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Critical thinking, Decision making</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Designing ,Drawing conclusions</p>
            </li>
            <li>
              <BsPatchCheck className="service-list-icon" />
              <p>Test development</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
