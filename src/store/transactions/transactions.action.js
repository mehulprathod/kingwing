import HttpPostRequest from "../../http/HttpPostRequest";

export const loadBalanceDetail = (data) => {
  return async (dispatch) => {
    try {
      const balanceResponse = await HttpPostRequest("/user/balance/get", data);
      dispatch({
        type: "GET_BALANCE_DATA",
        value: balanceResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const addBalance = (data) => {
  return async (dispatch) => {
    try {
      const newBalance = await HttpPostRequest("/balance/add", data);
      dispatch({
        type: "ADD_BALANCE",
        value: newBalance,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const loadTransactionsDetail = (data) => {
  return async (dispatch) => {
    try {
      const transactionsResponse = await HttpPostRequest(
        "/transaction/gets",
        data
      );
      dispatch({
        type: "GET_TRANSACTIONS_DATA",
        value: transactionsResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
