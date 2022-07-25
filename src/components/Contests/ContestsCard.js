// import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ContestsCard.css";
import CountDownCard from "./CountDownCard";

const Contests = (props) => {
  const _contestIsDone = useSelector(
    (state) => state.contestsReducer.hasContestIsDone
  );

  const [winner, setWinner] = useState(_contestIsDone);

  useEffect(() => {
    setWinner(_contestIsDone);
  }, [_contestIsDone]);

  const contest = props.contest;

  return (
    <Fragment>
      <div
        className="deals"
        style={{ width: "99%", paddingLeft: "20px", paddingRight: "20px" }}
      >
        <div className="deals_title">{contest.product.name}</div>
        <div className="deals_slider_container">
          <div className="owl-carousel owl-theme deals_slider owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 1022,
                }}
              >
                <div
                  className="owl-item active"
                  style={{ width: "310.391px", marginRight: 30 }}
                >
                  <div className="owl-item deals_item">
                    <div className="deals_image">
                      <img
                        src={contest.product.image[0]}
                        alt=""
                        height={200}
                        width={200}
                        data-pagespeed-url-hash={4210287633}
                      />
                    </div>
                    <div className="deals_content">
                      <div className="deals_info_line d-flex flex-row justify-content-start">
                        <div className="deals_item_category">
                          <a href=" ">{contest.product.category.name}</a>
                        </div>
                      </div>
                      <div className="deals_info_line d-flex flex-row justify-content-start">
                        <div className="deals_item_name">
                          {contest.product.name}
                        </div>
                        <div className="deals_item_price ml-auto">
                          Rs. {contest.price}
                        </div>
                      </div>
                      <div className="available">
                        <div className="available_line d-flex flex-row justify-content-start">
                          <div className="available_title">
                            Left:{" "}
                            <span>
                              {contest.contestSize - contest.totalJoined}
                            </span>
                          </div>
                          <div className="sold_title ml-auto">
                            Total Size : <span>{contest.contestSize}</span>
                          </div>
                        </div>
                        <div className="available_bar">
                          <span
                            style={{
                              width:
                                (contest.totalJoined * 100) /
                                  contest.contestSize +
                                "%",
                            }}
                          />
                        </div>
                      </div>
                      <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                        <div className="deals_timer_title_container">
                          <div className="deals_timer_title">Hurry Up</div>
                          <div className="deals_timer_subtitle">
                            Offer ends in:
                          </div>
                        </div>
                        <div className="deals_timer_content ml-auto">
                          <CountDownCard date={contest.closeDate} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to={`/contest/${contest._id}`}>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            style={{ margin: "20px 0 -20px 0" }}
          >
            JOIN
          </button>
        </Link>
      </div>

      {winner &&
        winner.status === "processing" &&
        winner.contest === contest._id && (
          <div className="winner_card d-flex justify-content-center align-items-center flex-column">
            <h4 className="text-white">
              <i className="fa fa-spin fa-spinner fa-3x"></i>
            </h4>
            <div className="text-white mt-3">
              <h4>Processing...</h4>
            </div>
          </div>
        )}

      {winner && winner.status === "done" && winner.contest === contest._id && (
        <div className="winner_card d-flex justify-content-center align-items-center flex-column">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png"
                  className="winner-card-image"
                  alt="..."
                />
                <div className="winner-card">
                  <div className="winner-card-info">
                    <h3 className="py-3">Name : </h3>
                    <p>
                      Congratulation! You are the <b>KingMan</b>, We will send
                      your gift to your address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Contests;
