const initState = {
  balanceDetail: false,
  addBalance: false,
  transactionsDetail : []
};

const transactionsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_BALANCE_DATA":
      return { ...state, ...{ balanceDetail: action.value } };

    case "ADD_BALANCE":
      return { ...state, ...{ addBalance: action.value } };

    case "GET_TRANSACTIONS_DATA":
      return { ...state, ...{ transactionsDetail: action.value } };

    default:
      return state;
  }
};

export default transactionsReducer;
