import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contests from "../Contests/Contests";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loadContests } from "../../store/contests/contests.action";

const Home = () => {
  const dispatch = useDispatch();
  const _contests = useSelector(
    (state) => state.contestsReducer.contests
  );
  const [contestData, setContestData] = useState(_contests);

  useEffect(() => {
    dispatch(loadContests());
  }, []);

  useEffect(() => {
    setContestData(_contests);
  }, [_contests]);

  return (
    <Fragment>
      <Header />
      <div className="deals_featured">
        <div className="container">
          <div className="row">
            {contestData.map((contest, i) => (
              <div className="col-md-4 mb-3" key={contest._id}>
                <Contests contest={contest} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
