import React, { Fragment } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./ForgotPassword.css";
import { toast } from "react-toastify";
import HttpPostRequest from "../../../http/HttpPostRequest";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    var formData = new FormData(event.target);
    event.preventDefault();

    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    try {
      const forgotResponse = await HttpPostRequest("/password/forget/", data);
      toast.success(forgotResponse);
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="container forget-body">
        <div className="d-flex justify-content-center">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="text-center">
                <h3>
                  <i className="fa fa-lock fa-4x" />
                </h3>
                <h2 className="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <div className="panel-body">
                  <form
                    autoComplete="off"
                    className="form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                        <input
                          name="email"
                          placeholder="email address"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
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

export default ForgotPassword;
