import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

const HttpPostRequest = async (path, data = {}) => {
  var token = localStorage.getItem("AUTH_TOKEN");

  const headers = { Authorization: token };

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}${path}`, data, { headers: headers })
      .then(function (response) {
        try {
          if (response.data.code !== 200) {
            throw new Error(response.data.data);
          }

          resolve(response.data.data);
        } catch (error) {
          console.log(error);
          throw new Error(error.message);
        }
      })
      .catch(function (error) {
        reject(error.message);
      });
  });
};

export default HttpPostRequest;
