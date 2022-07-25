import React, { Fragment } from "react";
import EditProfile from "../pages/Authentication/Profile/EditProfile/EditProfile";
import ChangePassword from "../pages/Authentication/Profile/ChangePassword/ChangePassword";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const ListGroup = () => {
  return (
    <Fragment>
      <Header />
      <div className="container pl-4">
        <div className="row d-flex justify-content-between">
          <div
            className="col-md-3 nav flex-column nav-pills my-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
            style={{
              border: "1px solid #0e8ce4",
              width: "180px",
              height: "202px",
            }}
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Edit Profile
            </button>
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Change Password
            </button>
            <button
              className="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Manage Address
            </button>
            <button
              className="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Settings
            </button>
          </div>
          <div className="tab-content col-md-9" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <EditProfile />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <ChangePassword />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ListGroup;
