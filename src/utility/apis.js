const guestDiscoverApis = {
  featuredOfferList: "/deal/discoverFeaturedOfferList",
  featuredOfferList2: "/deal/discoverFeaturedOfferList2",
  tourList: "/deal/discoverList",
  tourDetails: "/deal/discoverDetail",
};
const guestGlobalApis = {
  featuredOfferList: "/deal/productFeaturedOfferList",
  featuredOfferList2: "/deal/productFeaturedOfferList2",
  tourList: "/deal/productList",
  tourDetails: "/deal/productDetails",
};

const loggedInDiscoverApis = {
  featuredOfferList: "/discover/featuredOfferList",
  featuredOfferList2: "/discover/featuredOfferList2",
  listByGroup: "/deal/discoverListByGroup",
  tourList: "/discover/discoverList",
  tourDetails: "/discover/discoverDetail",
  transactionPrepare: "/discover/discoverTransactionPrepare",
};

const loggedInGlobalApis = {
  listByGroup: "/deal/productListByGroup",
  featuredOfferList: "/globaltix/featuredOfferList",
  featuredOfferList2: "/globaltix/featuredOfferList2",
  tourList: "/globaltix/productList",
  tourDetails: "/globaltix/productDetails",
};

const Apis = (api, type, userType) => {
  console.log(api, "apiss");
  if (type === "UAE" && userType === "guest") {
    return guestDiscoverApis[api];
  }
  if (type !== "UAE" && userType === "guest") {
    return guestGlobalApis[api];
  }
  if (type === "UAE" && userType !== "guest") {
    return loggedInDiscoverApis[api];
  }
  if (type !== "UAE" && userType !== "guest") {
    return loggedInGlobalApis[api];
  }
};

export default Apis;
