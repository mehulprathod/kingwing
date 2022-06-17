import React, { Fragment } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import HttpPostRequest from "../../../http/HttpPostRequest";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    var formData = new FormData(event.target);
    event.preventDefault();

    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });
    try {
      await HttpPostRequest("/users/create", data);
      toast.success("Welcome to KingWing");
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Fragment>
      <Header />
      <section className="container regi">
        <div className="container-fluid border rounded-3">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Register Sample"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center my-3">Registration Form</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Enter your Name"
                />
                <br />
                <label htmlFor="phone" className="grey-text">
                  Enter mobile number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="1234567890"
                  className="form-control"
                  pattern="[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                  placeholder="Enter your password"
                  autoComplete="off"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Confirm your password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                  placeholder="Enter your confirm password"
                />
                <br />
                <label htmlFor="photo" className="grey-text">
                  Photo
                </label>
                <input
                  type="file"
                  name="image"
                  id="photo"
                  className="form-control"
                />

                <div className="text-center my-4">
                  <button className="btn btn-primary py-2 px-4" type="submit">
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <Link to={"/login"} className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Register;
