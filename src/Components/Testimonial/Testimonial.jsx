import React from 'react';
import man from '../../assests/man.png'
import './Testimonial.css'

const Testimonial = () => {
      return (
        <section>
          <h5>Review from clients</h5>
          <h2>Testimonials</h2>
          <div className="container testimonial-container">
            <article className="testimonial">
              <div className="client-avatar">
                <img src={man} alt="" />
              </div>
              <h5 className="client-name">Md Rok khan </h5>
              <small className="client-review">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                debitis vero repudiandae dolore alias sapiente iure ea soluta
                reiciendis voluptatum delectus ipsam maxime natus fuga dolorum,
                sunt itaque, illo unde?
              </small>
            </article>
            <article className="testimonial">
              <div className="client-avatar">
                <img src={man} alt="" />
              </div>
              <h5 className="client-name">Md Rok khan </h5>
              <small className="client-review">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                debitis vero repudiandae dolore alias sapiente iure ea soluta
                reiciendis voluptatum delectus ipsam maxime natus fuga dolorum,
                sunt itaque, illo unde?
              </small>
            </article>
            <article className="testimonial">
              <div className="client-avatar">
                <img src={man} alt="" />
              </div>
              <h5 className="client-name">Md Rok khan </h5>
              <small className="client-review">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                debitis vero repudiandae dolore alias sapiente iure ea soluta
                reiciendis voluptatum delectus ipsam maxime natus fuga dolorum,
                sunt itaque, illo unde?
              </small>
            </article>
          </div>
        </section>
      );
};

export default Testimonial;