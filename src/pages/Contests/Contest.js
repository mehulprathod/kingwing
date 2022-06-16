import React from "react";

const Contest = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="container-fluid">
          <div className="wrapper row">
            <div className="previw col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1"></div>
                <img src="" alt="" />
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active"></li>
                </ul>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title"></h3>
              <p className="product-description"></p>
              <h4 className="price">Contest price: </h4>
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
                            for="flexCheckDefault"
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
                        >
                          Close
                        </button>

                        <button
                          type="button"
                          className="btn btn-primary"
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
    </div>
  );
};

export default Contest;
