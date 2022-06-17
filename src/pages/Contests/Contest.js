import React, { useState, useEffect, Fragment, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HttpPostRequest from "../../http/HttpPostRequest";
import "./Contest.css";

const Contest = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(false);
  const closeButton = useRef(null);
  const navigate = useNavigate();

  const handleJoinContest = async () => {
    try {
      const data = {
        contest: id,
        number: Math.random() * 100000,
      };

      const joinResponse = await HttpPostRequest("/user/contest/joining/", data);
      toast.success(joinResponse);
      closeButton.current.click();
      navigate("/home");
    } catch (error) {
      toast.error(error);
    }
  };

  const loadContest = async () => {
    try {
      const data = await HttpPostRequest("/contest/detail", { contest: id });
      setDetail(data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    loadContest();
  }, [id]);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image_selected">
              <img src={detail.product?.image} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product_description">
              <div className="product_category">
                {detail.product?.category.name}
              </div>
              <div className="product_name">{detail.product?.name}</div>
              <p className="product_text">{detail.product?.description}</p>
              <h4 className="product_price">Contest price: {detail.price}</h4>
              <div className="action">
                <button
                  className="add-to-cart btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                  type="button"
                >
                  Join Contest
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Join Now
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Quis labore eu tempor est. Id in sint id deserunt
                            cupidatat irure occaecat. Amet ex dolore Lorem culpa
                            eu in amet esse qui amet minim. Do proident veniam
                            nisi incididunt cillum ut id sit minim labore esse
                            proident nisi amet.
                          </label>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          ref={closeButton}
                        >
                          Close
                        </button>

                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleJoinContest}
                        >
                          Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="like btn btn-primary" type="button">
                  <span className="fa fa-heart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contest;
