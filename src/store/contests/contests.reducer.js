const initState = {
  contests: [],
  contestDetail: false,
  hasContestInZone: false,
  userContest: [],
  hasContestDone: false,
};

const contestsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CONTESTS_DATA":
      return { ...state, ...{ contests: action.value } };

    case "GET_CONTEST_DETAIL":
      return { ...state, ...{ contestDetail: action.value } };

    case "GET_USER_CONTEST":
      return { ...state, ...{ userContest: action.value } };

    case "SET_CONTEST_OVER_PROCESS":
      if (state.contestDetail._id === action.value.contest) {
        return { ...state, ...{ hasContestInZone: action.value } };
      } else {
        return { ...state, ...{ hasContestDone: action.value } };
      }

    default:
      return state;
  }
};

export default contestsReducer;
