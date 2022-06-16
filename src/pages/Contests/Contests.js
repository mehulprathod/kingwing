import React from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const Contests = (props) => {
  const contest = props.contest;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Processing... </div>;
    } else {
      // Render a countdown
      return (
        <div className="deals_timer_box clearfix" data-target-time="">
          <div className="deals_timer_unit">
            <div id="deals_timer1_hr" className="deals_timer_hr">
              {hours < 10 ? "0" : " "}
              {hours}
            </div>
            <span>hours</span>
          </div>
          <div className="deals_timer_unit">
            <div id="deals_timer1_min" className="deals_timer_min">
              {minutes < 10 ? "0" : " "}
              {minutes}
            </div>
            <span>mins</span>
          </div>
          <div className="deals_timer_unit">
            <div id="deals_timer1_sec" className="deals_timer_sec">
              {seconds < 10 ? "0" : " "}
              {seconds}
            </div>
            <span>secs</span>
          </div>
        </div>
      );
    }
  };

  return (
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
                        <Countdown
                          date={Date.now() + 500000000}
                          renderer={renderer}
                        />
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
  );
};

export default Contests;
