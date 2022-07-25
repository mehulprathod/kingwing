import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Transactions from "./Transactions";
import AddBalance from "./AddBalance";
import { useDispatch, useSelector } from "react-redux";
import { loadBalanceDetail } from "../../../store/transactions/transactions.action";

const Wallet = () => {
  const dispatch = useDispatch();
  const _balanceDetail = useSelector(
    (state) => state.transactionsReducer.balanceDetail
  );
  const [balanceData, setBalanceData] = useState(false);

  // const loadBalance = async () => {
  //   try {
  //     const data = {};
  //     dispatch(loadBalanceDetail(data));
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  useEffect(() => {
    const loadBalance = async () => {
      try {
        const data = {};
        dispatch(loadBalanceDetail(data));
      } catch (error) {
        toast.error(error);
      }
    };

    loadBalance();
  }, []);

  useEffect(() => {
    setBalanceData(_balanceDetail);
  }, [_balanceDetail]);

  return (
    <Fragment>
      <Header />
      <div
        className="container border rounded-3 px-3 py-2"
        style={{ marginBottom: "12px" }}
      >
        <div
          className="d-flex justify-content-between
justify-content-between"
        >
          <div>
            <h3>My Balance</h3>
            <p style={{ margin: "0 0 0 1px" }}>&#8377; {balanceData.balance}</p>
          </div>
          <div style={{ paddingTop: "10px" }}>
            <AddBalance />
          </div>
        </div>
      </div>
      <Transactions />
      <Footer />
    </Fragment>
  );
};

export default Wallet;
