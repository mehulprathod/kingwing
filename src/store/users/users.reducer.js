const initState = {
  loginUserProfile: false,
};

const usersReducer = (state = initState, action) => {
  switch (action.value) {
    case "SET_LOGIN_USER_DATA":
      return { ...state, ...{ loginUserProfile: action.value } };

    default:
      return state;
  }
};

export default usersReducer;
