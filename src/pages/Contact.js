import React, { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <Fragment>
      <Header />
      <div className="contact_info">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img src={require("../images/contact_1.png")} alt="" />
                  </div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Phone</div>
                    <div className="contact_info_text">+38 068 005 3570</div>
                  </div>
                </div>
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img src={require("../images/contact_2.png")} alt="" />
                  </div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Email</div>
                    <div className="contact_info_text">fastsales@gmail.com</div>
                  </div>
                </div>
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img src={require("../images/contact_3.png")} alt="" />
                  </div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Address</div>
                    <div className="contact_info_text">
                      10 Suffolk at Soho, London, UK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container">
                <div className="contact_form_title">Get in Touch</div>
                <form action="#" id="contact_form">
                  <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your name"
                      required=""
                      data-error="Name is required."
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your email"
                      required=""
                      data-error="Email is required."
                    />
                    <input
                      type="text"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="contact_form_text">
                    <textarea
                      id="contact_form_message"
                      className="text_field contact_form_message"
                      name="message"
                      rows={4}
                      placeholder="Message"
                      required=""
                      data-error="Please, write us a message."
                      defaultValue={""}
                    />
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                <div className="newsletter_title_container">
                  <div className="newsletter_icon">
                    <img src="images/send.png" alt="" />
                  </div>
                  <div className="newsletter_title">Sign up for Newsletter</div>
                  <div className="newsletter_text">
                    <p>...and receive %20 coupon for first shopping.</p>
                  </div>
                </div>
                <div className="newsletter_content clearfix">
                  <form action="#" className="newsletter_form">
                    <input
                      type="email"
                      className="newsletter_input"
                      required=""
                      placeholder="Enter your email address"
                    />
                    <button className="newsletter_button">Subscribe</button>
                  </form>
                  <div className="newsletter_unsubscribe_link">
                    <a href=" ">unsubscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
