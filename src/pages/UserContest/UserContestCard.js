import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HttpPostRequest from "../../http/HttpPostRequest";
import UserContests from "./UserContests";

const UserContestCard = () => {
  const [contestDetail, setContestDetail] = useState([]);

  const loadContests = async () => {
    try {
      const data = {};
      const contestResponse = await HttpPostRequest("/get/user/contests", data);
      console.log(contestResponse);
      setContestDetail(contestResponse);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    loadContests();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="deals_featured">
        <div className="container">
          <div className="row">
            {contestDetail.map((contest, i) => (
              <div className="col-md-4 mb-3" key={contest._id}>
                <UserContests contestDetail={contest} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default UserContestCard;
