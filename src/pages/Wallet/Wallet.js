import React, { Fragment, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { toast } from "react-toastify";
import HttpPostRequest from "../../http/HttpPostRequest";
import Transactions from "./Transactions";
import AddBalance from "./AddBalance";

const Wallet = () => {
  const [balanceData, setBalanceData] = useState(false);
  const [item, setItem] = useState(0);

  const loadBalance = async () => {
    try {
      const data = {};
      const balanceResponse = await HttpPostRequest("/user/balance/get", data);
      setBalanceData(balanceResponse);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    loadBalance();
  }, []);

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
            <AddBalance
              changeBalance={loadBalance}
              loadItem={() => setItem(item + 1)}
            />
          </div>
        </div>
      </div>
      <Transactions newItem={item} />
      <Footer />
    </Fragment>
  );
};

export default Wallet;
