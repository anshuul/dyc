const guestDiscoverApis = {
  featuredOfferList: "/deal/discoverFeaturedOfferList",
  featuredOfferList2: "/deal/discoverFeaturedOfferList2",
};
const guestGlobalApis = {
  featuredOfferList: "/deal/productFeaturedOfferList",
  featuredOfferList2: "/deal/productFeaturedOfferList2",
};

const loggedInDiscoverApis = {
  featuredOfferList: "/discover/featuredOfferList",
  featuredOfferList2: "/discover/featuredOfferList2",
  listByGroup: "/deal/discoverListByGroup",
};

const loggedInGlobalApis = {
  listByGroup: "/deal/productListByGroup",
  featuredOfferList: "/globaltix/featuredOfferList",
  featuredOfferList2: "/globaltix/featuredOfferList2",
};

const Apis = (api, type, userType) => {
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
