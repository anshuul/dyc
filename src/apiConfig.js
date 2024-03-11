import axios from "axios";

const apiClient = axios.create({
  baseURL: "/wsDiscover1.2Test",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "7t9f798b765gge89f45e5ef9150fa073f8a61b78",
    "accesstoken": "9a3ab03ccc27ad2da0902d72da482f4d",
    "iUserId": "153",
    'uCurrency': 'AED', 
    'Cookie': 'ci_session=nsv47btvehm8iegkhccaappu0e663trp',
  },
  withCredentials: true,
});


export default apiClient;
