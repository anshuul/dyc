const guestDiscoverApis = {
    discoverFeaturedOfferList: '/deal/discoverFeaturedOfferList',
    countryCityList: '/deal/countryCityList',
}
const Apis = (api, type, userType) => {
    if (type === "others" && userType === "guest") {
        return guestDiscoverApis[api]
    }
}

export default Apis