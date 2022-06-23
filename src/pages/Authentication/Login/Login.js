import React, { Fragment } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../../store/users/users.action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    var formData = new FormData(event.target);
    event.preventDefault();

    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    dispatch(doLogin(data))
      .then(() => {
        toast.success("Welcome back to KingWing");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    // try {
    //   const loginResponse = await HttpPostRequest("/user/login", data);
    //   localStorage.setItem("AUTH_TOKEN", loginResponse.token);
    //   localStorage.setItem("AUTH_EMAIL", loginResponse.email);
    //   toast.success("Welcome back to KingWing");
    //   navigate("/home");
    // } catch (error) {
    //   toast.error(error);
    // }
  };

  return (
    <Fragment>
      <Header />
      <section className="container logi">
        <div className="container-fluid border rounded-3">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Login Sample"
              />
            </div>
            <div className="col-md-6 my-3">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="login"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                  placeholder="Enter email address"
                />
                <br />
                {/* Password input */}
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                  placeholder="Enter password"
                />
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example3"
                      style={{ marginLeft: "5px", lineHeight: "2" }}
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to={"/forgot-password"} className="text-body">
                    Forgot password?
                  </Link>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button className="btn btn-primary py-2 px-4" type="submit">
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to={"/register"} className="link-danger">
                      Register
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

export default Login;
