import axios from "axios";

const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));
const userData = JSON.parse(localStorage.getItem("userData"));
const accesstoken = userData?.DATA.accesstoken;
const uCurrency = userData?.DATA.tCurrency;
const iUserId = userData?.DATA.iUserID;

const apiClient = axios.create({
  baseURL: "/wsDiscover1.2Test",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": xApiKey || "7t9f798b765gge89f45e5ef9150fa073f8a61b78",
    // "X-API-KEY": "c2b3c1cc1a4e63bc0dad43262c222503",
    accesstoken: accesstoken || "02aebde6182eb1e8bd97266c6e2ea77e",
    iUserId: iUserId,
    uCurrency: uCurrency || "AED",
    Cookie: "ci_session=nsv47btvehm8iegkhccaappu0e663trp",
  },
  withCredentials: true,
});

export default apiClient;
