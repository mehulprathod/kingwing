import React from "react";
import Countdown from "react-countdown";

const CountDownCard = (props) => {
  console.log("props.date", props.date);

  const renderer = ({ completed, formatted }) => {
    if (completed) {
      // Render a completed state
      return <div> Processing... </div>;
    } else {
      // Render a countdown
      return (
        <div
          className="deals_timer_box clearfix"
          data-target-time=""
          style={props.style ? props.style : {}}
        >
          <div className="deals_timer_unit">
            <div id="deals_timer1_hr" className="deals_timer_hr">
              {formatted.hours}
            </div>
            <span>hours</span>
          </div>
          <div className="deals_timer_unit">
            <div id="deals_timer1_min" className="deals_timer_min">
              {formatted.minutes}
            </div>
            <span>mins</span>
          </div>
          <div className="deals_timer_unit">
            <div id="deals_timer1_sec" className="deals_timer_sec">
              {formatted.seconds}
            </div>
            <span>secs</span>
          </div>
        </div>
      );
    }
  };

  if (!props.date) return <h4> Loading... </h4>;

  return (
    <Countdown
      renderer={renderer}
      date={props.date}
      zeroPadTime={2}
      daysInHours
    />
  );
};

export default CountDownCard;
