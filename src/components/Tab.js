import React, { Fragment } from "react";
import EditProfile from "../pages/Profile/EditProfile/EditProfile";
import ChangePassword from "../pages/Profile/ChangePassword/ChangePassword";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Tab = () => {
  return (
    <Fragment>
      <Header />
      <div className="container mt-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="edit-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#edit-profile"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Edit Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reset-password-tab"
              data-bs-toggle="tab"
              data-bs-target="#reset-password"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Change Password
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="edit-profile"
            role="tabpanel"
            aria-labelledby="edit-profile-tab"
          >
            <EditProfile />
          </div>
          <div
            className="tab-pane fade"
            id="reset-password"
            role="tabpanel"
            aria-labelledby="reset-password-tab"
          >
            <ChangePassword />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Tab;
