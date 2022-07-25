import React from "react";
import { Link } from "react-router-dom";

const WinnerCard = (props) => {
  const contestOverProcess = props.contestOverProcess;

  if (contestOverProcess.status === "processing") {
    return (
      <div>
        <h4>
          <i className="fa fa-spin fa-spinner"></i>
          {contestOverProcess.response}
        </h4>
      </div>
    );
  }

  if (contestOverProcess.status === "done") {
    return (
      <div className="winner-main">
        <div className="col-12 text-center mt-5">
          <h1 className="text-primary">Congratulation!</h1>
        </div>

        <div
          className="row d-flex justify-content-center"
          style={{ padding: 40 }}
        >
          {contestOverProcess.response.map((winner, i) => (
            <div className="col-2" key={i}>
              <div className="card" style={{ width: "100%", padding: 0 }}>
                <img src={winner.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{winner.name}</h5>
                  <p className="card-text">
                    Congratulation! You are the <b>KingMan</b>, We will send
                    your gift to your address.
                  </p>
                </div>
                <img
                  src={require("../../images/congratulations.gif")}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
          ))}

          <div className="col-12 text-center mt-5">
            <Link to="/Home">
              <button className="btn btn-primary">Back to More Contents</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default WinnerCard;
