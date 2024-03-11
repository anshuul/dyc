const guestDiscoverApis = {
  discoverFeaturedOfferList: "/deal/discoverFeaturedOfferList",
  countryCityList: "/deal/countryCityList",
  categoryListDiscover: "/deal/categoryListDiscover",
  key: "/key" ,
  signUp: "/admin/prelogin1" ,
  currency: "/discover/currencyList",
  otpSend: "/admin/checkEmail",
};
const Apis = (api, type, userType) => {
  if (type === "others" && userType === "guest") {
    return guestDiscoverApis[api];
  }
};

export default Apis;
