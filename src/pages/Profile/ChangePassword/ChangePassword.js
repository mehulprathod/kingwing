import React from "react";

const ResetPassword = () => {
  return (
    <section className="container" style={{height: "535px"}}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <img
              src="https://i.pinimg.com/originals/97/e5/a7/97e5a7728ed2444a7ab4aef4adac3a86.jpg"
              className="img-fluid"
              alt="Reset Password Sample"
            />
          </div>
          <div className="col-md-6">
            <form>
              <p className="h4 text-center my-3">Reset Password</p>
              <label
                htmlFor="defaultFormRegisterOldPasswordEx"
                className="grey-text"
              >
                Old Password
              </label>
              <input
                type="password"
                name="password"
                id="defaultFormRegisterOldPasswordEx"
                className="form-control"
                placeholder="Enter old password"
                autoComplete="off"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterNewPasswordEx"
                className="grey-text"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="defaultFormRegisterNewPasswordEx"
                className="form-control"
                placeholder="Enter new password"
                autoComplete="off"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterConfirmEx"
                className="grey-text"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                autoComplete="off"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
                placeholder="Enter confirm password"
              />

              <div className="text-center my-4">
                <button className="btn btn-primary py-2 px-4" type="submit">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
