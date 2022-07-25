import HttpPostRequest from "../../http/HttpPostRequest";

export const loadContests = () => {
  return async (dispatch) => {
    try {
      const contests = await HttpPostRequest("/contest/gets");
      dispatch({
        type: "GET_CONTESTS_DATA",
        value: contests,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const loadContestDetail = (data) => {
  return async (dispatch) => {
    try {
      const contestDetails = await HttpPostRequest("/contest/detail", data);
      dispatch({
        type: "GET_CONTEST_DETAIL",
        value: contestDetails,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const loadUserContest = (data) => {
  return async (dispatch) => {
    try {
      const userContest = await HttpPostRequest("/get/user/contests", data);
      dispatch({
        type: "GET_USER_CONTEST",
        value: userContest,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
