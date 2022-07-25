import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changePass } from "../../../../store/users/users.action";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _changePassword = useSelector(
    (state) => state.usersReducer.changePassword
  );

  const handleChangePassword = async (event) => {
    var formData = new FormData(event.target);
    event.preventDefault();
    const data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    dispatch(changePass(data))
      .then(() => {
        toast.success(_changePassword);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="container">
      <div className="container-fluid">
        <form onSubmit={handleChangePassword}>
          <p className="h4 text-center my-3">Change Password</p>
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
            name="new_password"
            id="defaultFormRegisterNewPasswordEx"
            className="form-control"
            placeholder="Enter new password"
            autoComplete="off"
          />
          <br />
          <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
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
    </section>
  );
};

export default ChangePassword;
