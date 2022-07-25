import React, { useEffect, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactionsDetail } from "../../../store/transactions/transactions.action";

const Transactions = (props) => {
  const dispatch = useDispatch();
  const _transactions = useSelector(
    (state) => state.transactionsReducer.transactionsDetail
  );
  const [transactionData, setTransactionData] = useState([]);

  // const loadTransactions = async () => {
  //   try {
  //     const data = {};
  //     dispatch(loadTransactionsDetail(data));
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = {};
        dispatch(loadTransactionsDetail(data));
      } catch (error) {
        toast.error(error);
      }
    };

    loadTransactions();
  });

  useEffect(() => {
    setTransactionData(_transactions);
  }, [_transactions]);

  return (
    <div className="container" style={{ marginBottom: "12px" }}>
      <h3>Transactions</h3>
      {transactionData.map((transaction, i) => (
        <div
          className="border rounded-3 px-3 mb-2"
          style={{ paddingBlock: "10px" }}
          key={i}
        >
          <div className="d-flex justify-content-between">
            <div>
              <strong>{transaction.transactionId}</strong>
              <p style={{ margin: "8px 0 0 0" }}>
                {moment(transaction.created_at).format("lll")}
              </p>
            </div>
            <div style={{ paddingTop: "15px" }}>
              <strong>{transaction.description}</strong>
            </div>
            <div>
              <strong
                style={{
                  color:
                    !transaction.action || transaction.action === "credit"
                      ? "green"
                      : "red",
                }}
              >
                &#8377; {transaction.amount}
              </strong>
              <p style={{ margin: "8px 0 0 0" }}>{transaction.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
