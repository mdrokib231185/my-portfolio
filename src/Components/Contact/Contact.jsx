import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from 'emailjs-com'
import { toast } from "react-toastify";

const Contract = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gp6g28l",
        "template_gsruo4p",
        form.current,
        "lZXhB5b-qfIjwWwy1"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message Sent Success')
        },
        (error) => {
          console.log(error.text);
        }
    );
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article>
            <div className="contact-option">
              <MdOutlineMail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>mdrokhasan231185@gmail.com</h5>
              <a href="mailto:mdrokhasan231185@gmial.com" target="_blank">
                Send a message
              </a>
            </div>
          </article>
          <article>
            <div className="contact-option">
              <RiMessengerLine className="contact-option-icon" />
              <h4>Messanger</h4>
              <h5>Md Rokib hasan</h5>
              <a href="https://m.me/Rokib231185" target="_blank">
                Send a message
              </a>
            </div>
          </article>
          <article>
            <div className="contact-option">
              <RiWhatsappLine className="contact-option-icon" />
              <h4>Whatsapp</h4>
              <h5>+8801943047693</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+8801943047693"
                target="_blank"
              >
                Send a message
              </a>
            </div>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contract;
