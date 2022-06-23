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
