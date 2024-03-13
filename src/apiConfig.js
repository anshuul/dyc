import axios from "axios";

const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));
const signUpData = JSON.parse(localStorage.getItem("signUpData"));
const accessToken = signUpData?.accesstoken;
const uCurrency = signUpData?.tCurrency;
const iUserId = signUpData?.iUserID;

console.log("accesstoken: ", accessToken);

const apiClient = axios.create({
  baseURL: "/wsDiscover1.2Test",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": xApiKey,
    accesstoken: accessToken,
    iUserId: iUserId,
    uCurrency: uCurrency,
    Cookie: "ci_session=nsv47btvehm8iegkhccaappu0e663trp",
  },
  withCredentials: true,
});

export default apiClient;
