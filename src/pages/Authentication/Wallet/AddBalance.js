import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  addBalance,
  loadBalanceDetail,
  loadTransactionsDetail,
} from "../../../store/transactions/transactions.action";

const AddBalance = () => {
  const dispatch = useDispatch();
  const closeButton = useRef(null);

  const handleAddBalance = async (event) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    const data = {};

    formData.forEach(function (value, key) {
      data[key] = value;
    });

    dispatch(addBalance(data))
      .then(() => {
        closeButton.current.click();
        dispatch(loadBalanceDetail());
        dispatch(loadTransactionsDetail());
        toast.success("Success");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Balance
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form onSubmit={handleAddBalance}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Balance
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Balance
                  </label>
                  <input
                    type="number"
                    name="balance"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    id="message-text"
                    defaultValue={""}
                  />
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
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBalance;
