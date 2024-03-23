const guestDiscoverApis = {
  featuredOfferList: "/deal/discoverFeaturedOfferList",
  featuredOfferList2: "/deal/discoverFeaturedOfferList2",
  tourList: "/deal/discoverList",
  tourDetails: "/deal/discoverDetail",
  categoryList: "/deal/categoryListDiscover",
  tourSearch: "/deal/discoverKeySearch",
  listByGroup: "/deal/discoverListByGroup",
};
const guestGlobalApis = {
  featuredOfferList: "/deal/productFeaturedOfferList",
  featuredOfferList2: "/deal/productFeaturedOfferList2",
  tourList: "/deal/productList",
  tourDetails: "/deal/productDetails",
  categoryList: "/deal/categoryListProduct",
  tourSearch: "/deal/productKeySearch",
  listByGroup: "/deal/productListByGroup",
};

const loggedInDiscoverApis = {
  featuredOfferList: "/discover/featuredOfferList",
  featuredOfferList2: "/discover/featuredOfferList2",
  listByGroup: "/deal/discoverListByGroup",
  tourList: "/discover/discoverList",
  tourDetails: "/discover/discoverDetail",
  transactionPrepare: "/discover/discoverTransactionPrepare",
  tourSearch: "/discover/discoverKeySearch",
};

const loggedInGlobalApis = {
  listByGroup: "/deal/productListByGroup",
  featuredOfferList: "/globaltix/featuredOfferList",
  featuredOfferList2: "/globaltix/featuredOfferList2",
  tourList: "/globaltix/productList",
  tourDetails: "/globaltix/productDetails",
  categoryList: "/globaltix/categoryList",
  tourSearch: "/deal/productKeySearch",
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
