import React, { useEffect, useState } from "react";

import "./EditProfile.css";
import HttpPostRequest from "../../../http/HttpPostRequest";
import { toast } from "react-toastify";

const EditProfile = () => {
  const [profile, setProfile] = useState(false);
  const handleSubmit = async (event) => {
    var formData = new FormData(event.target);

    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });
    event.preventDefault();

    try {
      await HttpPostRequest("/user/update?=", data);
      toast.success("Updated Successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  const loadProfile = async () => {
    try {
      const profileData = await HttpPostRequest("/user/profile");
      setProfile(profileData);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const changeValue = (event, filed) => {
    var newData = {};
    newData[filed] = event.target.value;
    setProfile({ ...profile, ...newData });
  };

  return (
    <section className="container mt-3">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} autoComplete="off">
            <p className="h4 text-center my-3">Edit Profile</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={(event) => changeValue(event, "name")}
              value={`${profile.name}`}
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="phone" className="grey-text">
              Mobile No :
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={(event) => changeValue(event, "phone")}
              value={`${profile.phone}`}
              className="form-control"
              pattern="[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}"
            />
            <br />
            <label htmlFor="exampleFormControlTextarea1" className="grey-text">
              Address
            </label>
            <textarea
              className="form-control"
              name="address"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <br />
            <label htmlFor="defaultFormCityEx" className="grey-text">
              City
            </label>
            <input
              type="text"
              name="city"
              id="defaultFormCityEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormSelectEx" className="grey-text">
              Country
            </label>
            <select
              className="form-select m-0"
              aria-label="Default select example"
            >
              <option value="in">India</option>
              <option value="nep">Nepal</option>
              <option value="rus">Russia</option>
              <option value="aus">Australia</option>
            </select>
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              onChange={(event) => changeValue(event, "email")}
              value={`${profile.email}`}
              id="defaultFormRegisterEmailEx"
              className="form-control"
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
