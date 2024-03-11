const guestDiscoverApis = {
    discoverFeaturedOfferList: '/deal/discoverFeaturedOfferList'
}
const Apis = (api, type, userType) => {
    if (type === "others" && userType === "guest") {
        return guestDiscoverApis[api]
    }
}

export default Apis