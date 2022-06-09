import React from 'react';
import man1 from '../../assests/man.png'
import man2 from '../../assests/02 (1).jpg'
import man3 from '../../assests/03 (1).jpg'
import './Testimonial.css'

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Testimonial = () => {
      return (
        <section>
          <h5>Review from clients</h5>
          <h2>Testimonials</h2>
          <Swiper
            className="container testimonial-container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
           
            pagination={{ clickable: true }}
           
          >
            <SwiperSlide className="testimonial">
              <div className="client-avatar">
                <img src={man1} alt="" />
              </div>
              <h5 className="client-name"> Bill Yates</h5>
              <small className="client-review">
                Your thoughtfulness and support of MPCC is very much
                appreciated. You are a very dear friend to the Chamber, and I
                want to assure you that your confidence in MPCC will be
                justified.
              </small>
            </SwiperSlide>
            <SwiperSlide className="testimonial">
              <div className="client-avatar">
                <img src={man2} alt="" />
              </div>
              <h5 className="client-name">Rev. Zia Shapiro</h5>
              <small className="client-review">
                Greatest appreciation to you and your team for the outstanding
                job you did for us. The website is just what we wanted, and we
                were thrilled with the speed your team exercised. We feel
                privileged to have eLab Communciations as our online marketing
                partner!
              </small>
            </SwiperSlide>
            <SwiperSlide className="testimonial">
              <div className="client-avatar">
                <img src={man3} alt="" />
              </div>
              <h5 className="client-name"> Bob Kramer</h5>
              <small className="client-review">
                You have been absolutely wonderful for Kinship Center, and I
                can't thank you enough for all your tremendous skills, support
                and patience specially during our merger. You will always be
                Kinship Center's vendor of choice!
              </small>
            </SwiperSlide>
          </Swiper>
        </section>
      );
};

export default Testimonial;