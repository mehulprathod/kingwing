import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { loadUserContest } from "../../../store/contests/contests.action";

import UserContests from "./UserContests";

const UserContestCard = () => {
  const dispatch = useDispatch();
  const _userContest = useSelector(
    (state) => state.contestsReducer.userContest
  );
  const [contestDetail, setContestDetail] = useState([]);

  // const loadContests = async () => {
  //   try {
  //     const data = {};
  //     dispatch(loadUserContest(data));
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  useEffect(() => {
    const loadContests = async () => {
      try {
        const data = {};
        dispatch(loadUserContest(data));
      } catch (error) {
        toast.error(error);
      }
    };

    loadContests();
  });

  useEffect(() => {
    setContestDetail(_userContest);
  }, [_userContest]);

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
