const initState = {
  contests: [],
  contestDetail: false,
};

const contestsReducer = (state = initState, action) => {
  switch (action.type) {
    
    case "GET_CONTESTS_DATA":
      return { ...state, ...{ contests: action.value } };

    case "GET_CONTEST_DETAIL":
      return { ...state, ...{ contestDetail: action.value } };

    default:
      return state;
  }
};

export default contestsReducer;
