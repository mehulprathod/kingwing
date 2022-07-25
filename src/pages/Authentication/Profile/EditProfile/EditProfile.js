import React, { useEffect, useState } from "react";

import "./EditProfile.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateUser } from "../../../../store/users/users.action";

const EditProfile = () => {
  const dispatch = useDispatch();
  const _userProfile = useSelector(
    (state) => state.usersReducer.loadUserProfile
  );
  const [profile, setProfile] = useState(false);
  const handleSubmit = async (event) => {
    var formData = new FormData(event.target);

    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });
    event.preventDefault();

    dispatch(updateUser(data))
      .then(() => {
        toast.success("Updated Successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const loadProfile = async () => {
    try {
      const data = {};
      dispatch(loadUser(data));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    setProfile(_userProfile);
  }, [_userProfile]);

  const changeValue = (event, filed) => {
    var newData = {};
    newData[filed] = event.target.value;
    setProfile({ ...profile, ...newData });
  };

  return (
    <section className="container mt-3">
      <div className="container-fluid">
        <form onSubmit={handleSubmit} autoComplete="off">
          <p className="h4 text-center my-3">Edit Profile</p>
          <div className="row mt-3">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6">
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
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="grey-text"
              >
                Address
              </label>
              <textarea
                className="form-control"
                name="address"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <label htmlFor="defaultFormCityEx" className="grey-text">
                City
              </label>
              <input
                type="text"
                name="city"
                id="defaultFormCityEx"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
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
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6">
              <label htmlFor="photo" className="grey-text">
                Photo
              </label>
              <input
                type="file"
                name="image"
                id="photo"
                className="form-control"
              />
            </div>
          </div>

          <div className="text-center my-4">
            <button className="btn btn-primary py-2 px-4" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
