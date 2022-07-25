const initState = {
  loginUserProfile: false,
  registerUserProfile: false,
  updateUserProfile: false,
  loadUserProfile: false,
  changePassword: false,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_LOGIN_USER_DATA":
      return { ...state, ...{ loginUserProfile: action.value } };

    case "SET_REGISTER_USER_DATA":
      return { ...state, ...{ registerUserProfile: action.value } };

    case "UPDATE_USER_DATA":
      return { ...state, ...{ updateUserProfile: action.value } };

    case "SET_USER_DATA":
      return { ...state, ...{ loadUserProfile: action.value } };

    case "CHANGE_PASSWORD":
      return { ...state, ...{ changePassword: action.value } };

    default:
      return state;
  }
};

export default usersReducer;
