import React from "react";

const UserContests = (props) => {
  const contestDetail = props.contestDetail;

  return (
    <div
      className="deals"
      style={{ width: "99%", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <div className="deals_title">{contestDetail.product.name}</div>
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
                      src={contestDetail.product.image[0]}
                      alt=""
                      height={200}
                      width={200}
                      data-pagespeed-url-hash={4210287633}
                    />
                  </div>
                  <div className="deals_content">
                    <div className="deals_info_line d-flex flex-row justify-content-start">
                      <div className="deals_item_category">
                        <a href=" ">{contestDetail.product.category.name}</a>
                      </div>
                    </div>
                    <div className="deals_info_line d-flex flex-row justify-content-start">
                      <div className="deals_item_name">
                        {contestDetail.product.name}
                      </div>
                      <div className="deals_item_price ml-auto">
                        Rs. {contestDetail.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContests;
