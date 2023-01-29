import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("token"))
      config.headers["Authorization"] =
        "Bearer " + localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// const api = axios.create({
//   baseURL: "http://localhost:3000/",
// });

let api = {
  user: {
    signup: (data) => axios.post("add-user", data),
    login: (data) => axios.post("login-user", data),
    addOrder: (data) => axios.post("add-order", data),
    getOrder: (data) => axios.get("get-order", data),
  },
};
export default api;
