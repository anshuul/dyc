import axios from "axios";

const apiClient = axios.create({
  baseURL: "/wsDiscover1.2Test",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "30022c2f09f2230e2ca142f02847f985",
    "accesstoken": "9a3ab03ccc27ad2da0902d72da482f4d",
    "iUserId": "153",
    'X-API-KEY': 'c2b3c1cc1a4e63bc0dad43262c222503', 
    'uCurrency': 'AED', 
    'Cookie': 'ci_session=nsv47btvehm8iegkhccaappu0e663trp',
  },
  withCredentials: true,
});


export default apiClient;
