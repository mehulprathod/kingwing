import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./About.css"

const About = () => {
  return (
    <Fragment>
      <Header />
      <section className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <img
              src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png"
              className="img-about"
              height={500}
              alt=""
            />
          </div>
          <div className="col-md-8" style={{marginBottom:"10px"}}>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              blanditiis soluta delectus totam odio porro quibusdam est beatae
              placeat commodi id ipsum, vero nobis nostrum nesciunt, distinctio,
              quis doloremque magnam.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default About;
