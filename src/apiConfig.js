import axios from "axios";

const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));
const userData = JSON.parse(localStorage.getItem("userData"));
const accesstoken = userData?.DATA.accesstoken;
const uCurrency = userData?.DATA.tCurrency;
const iUserId = userData?.DATA.iUserID;

const apiClient = axios.create({
  baseURL: "https://discover-city.com/wsDiscover1.2Test",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": xApiKey || "7t9f798b765gge89f45e5ef9150fa073f8a61b78",
    accesstoken: accesstoken || "71276be18aa81db5f79699bd1a5ab732",
    iUserId: iUserId,
    uCurrency: uCurrency || "AED",
    Cookie: "ci_session=nsv47btvehm8iegkhccaappu0e663trp",
  },
});

export default apiClient;
