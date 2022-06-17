import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contests from "../Contests/Contests";
import HttpPostRequest from "../../http/HttpPostRequest";
import { toast } from "react-toastify";

const Home = () => {
  const [contestData, setContestData] = useState([]);

  const loadContests = async () => {
    try {
      const contests = await HttpPostRequest("/contest/gets");
      setContestData(contests);
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
