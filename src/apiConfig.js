import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://discover-city.com/wsDiscover1.2Test/",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "30022c2f09f2230e2ca142f02847f985",
    "accesstoken": "9a3ab03ccc27ad2da0902d72da482f4d",
    "iUserId": "153",
  },
});

export default apiClient;
