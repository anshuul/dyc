import axios from "axios";

const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));
const userData = JSON.parse(localStorage.getItem("userData"));
const accessToken = userData?.accesstoken;
const uCurrency = userData?.tCurrency;
const iUserId = userData?.iUserID;

const apiClient = axios.create({
  baseURL: "/wsDiscover1.2Test",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": xApiKey || "7t9f798b765gge89f45e5ef9150fa073f8a61b78",
    accesstoken: accessToken,
    iUserId: iUserId,
    uCurrency: uCurrency,
    Cookie: "ci_session=nsv47btvehm8iegkhccaappu0e663trp",
  },
  withCredentials: true,
});

export default apiClient;
