import HttpPostRequest from "../../http/HttpPostRequest";

export const doLogin = (data) => {
  return async (dispatch) => {
    try {
      const loginResponse = await HttpPostRequest("/user/login", data);
      localStorage.setItem("AUTH_TOKEN", loginResponse.token);
      localStorage.setItem("AUTH_EMAIL", loginResponse.email);
      dispatch({
        type: "SET_LOGIN_USER_DATA",
        value: loginResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const doRegister = (data) => {
  return async (dispatch) => {
    try {
      const registerResponse = await HttpPostRequest("/users/create", data);
      dispatch({
        type: "SET_REGISTER_USER_DATA",
        value: registerResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const updateUser = (data) => {
  return async (dispatch) => {
    try {
      const updateResponse = await HttpPostRequest("/user/update", data);
      dispatch({
        type: "UPDATE_USER_DATA",
        value: updateResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const loadUser = (data) => {
  return async (dispatch) => {
    try {
      const profileResponse = await HttpPostRequest("/user/profile", data);
      dispatch({
        type: "SET_USER_DATA",
        value: profileResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const changePass = (data) => {
  return async (dispatch) => {
    try {
      const changePassResponse = await HttpPostRequest(
        "/password/change",
        data
      );
      dispatch({
        type: "CHANGE_PASSWORD",
        value: changePassResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
