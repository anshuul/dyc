import React from "react";

// Layout Types
import { authLayout, landingLayout, defaultListingLayout, defaultLayout, defaultPagesLayout, profileLayout, defaultDetailsLayout } from "./layouts";

// Route Views
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import LandingPage from "./containers/LandingPage";
import ListingPage from "./containers/ListingPage";
import ListingPageMap from "./containers/ListingPageMap";
import DetailsPage from "./containers/DiscoverPages/DetailsPage";
import CheckoutMerchant from "./containers/CheckoutMerchant";
import CheckoutOffers from "./containers/CheckoutOffers";
import ContactUs from "./containers/ContactUs";
import AboutUsPage from "./containers/AboutUsPage";
import BlogPage from "./containers/BlogPage";
import BlogListCategory from "./containers/BlogPage/BlogListCategory";
import BlogList from "./containers/BlogPage/BlogList";
import BlogDetails from "./containers/BlogPage/BlogDetails";
import BlogDetailsCategory from "./containers/BlogPage/BlogDetailsCategory";
import ProfileSetting from "./containers/ProfileSetting";
import TermsandConditions from "./containers/TermsandConditions";
import PrivacyPolicy from "./containers/PrivacyPolicy";
import KnowMore from "./containers/DiscoverPages/RaynaDetailsPage/KnowMore";
import CheckoutDiscover from "./containers/DiscoverPages/Checkout";
import Bookingsuccessfully from "./containers/DiscoverPages/Bookingsuccessfully";
import BookingFailed from "./containers/DiscoverPages/BookingFailed";
import BookingConfirming from "./containers/DiscoverPages/BookingConfirming";
import MyBookingDetails from "./containers/ProfileSetting/MyBookingDetails";
import EnterOTP from "./containers/EnterOTP";
import GroupListingPage from "./containers/GroupListingPage";
import RaynaDetailsPage from "./containers/DiscoverPages/RaynaDetailsPage";
import MyBookingDetailsNoQr from "./containers/ProfileSetting/MyBookingDetailsNoQr";

export const rotues = [
  {
    path: "/",
    exact: true,
    layout: landingLayout,
    component: () => <LandingPage />,
  },
  {
    path: "/home",
    exact: true,
    layout: landingLayout,
    component: () => <LandingPage />,
  },
  {
    path: "/login",
    layout: authLayout,
    component: () => <Login />,
  },
  {
    path: "/enter-otp",
    layout: authLayout,
    component: () => <EnterOTP />,
  },
  {
    path: "/signup",
    layout: authLayout,
    component: () => <Signup />,
  },
  {
    path: "/listing-page",
    layout: defaultListingLayout,
    component: () => <ListingPage />,
  },
  {
    path: "/group-listing-page",
    layout: defaultListingLayout,
    component: () => <GroupListingPage />,
  },
  {
    path: "/listing-page-map",
    layout: defaultListingLayout,
    component: () => <ListingPageMap />,
  },
  {
    path: "/details",
    layout: defaultDetailsLayout,
    component: () => <DetailsPage />,
  },
  {
    path: "/rayna-details",
    layout: defaultDetailsLayout,
    component: () => <RaynaDetailsPage />,
  },
  {
    path: "/discover/checkout",
    layout: defaultLayout,
    component: () => <CheckoutDiscover />,
  },
  {
    path: "/discover/successfully",
    layout: defaultLayout,
    component: () => <Bookingsuccessfully />,
  },
  {
    path: "/discover/booking-failed",
    layout: defaultLayout,
    component: () => <BookingFailed />,
  },
  {
    path: "/discover/booking-confirm",
    layout: defaultLayout,
    component: () => <BookingConfirming />,
  },
  {
    path: "/know-more",
    layout: authLayout,
    component: () => <KnowMore />,
  },
  {
    path: "/checkout-merchant",
    layout: defaultLayout,
    component: () => <CheckoutMerchant />,
  },
  {
    path: "/checkout-offers",
    layout: defaultLayout,
    component: () => <CheckoutOffers />,
  },
  {
    path: "/contact",
    layout: authLayout,
    component: () => <ContactUs />,
  },
  {
    path: "/about",
    layout: defaultPagesLayout,
    component: () => <AboutUsPage />,
  },
  {
    path: "/blog",
    layout: defaultPagesLayout,
    component: () => <BlogPage />,
  },
  {
    path: "/blog-category",
    layout: defaultPagesLayout,
    component: () => <BlogListCategory />,
  },
  {
    path: "/blog-list",
    layout: defaultPagesLayout,
    component: () => <BlogList />,
  },
  {
    path: "/blog-details",
    layout: defaultPagesLayout,
    component: () => <BlogDetails />,
  },
  {
    path: "/blog-details-category",
    layout: defaultPagesLayout,
    component: () => <BlogDetailsCategory />,
  },
  {
    path: "/profile-setting",
    layout: profileLayout,
    component: () => <ProfileSetting />,
  },
  {
    path: "/discover/booking-details",
    layout: profileLayout,
    component: () => <MyBookingDetails />,
  },
  {
    path: "/discover/booking-details2",
    layout: profileLayout,
    component: () => <MyBookingDetailsNoQr />,
  },
  {
    path: "/terms-conditions",
    layout: defaultPagesLayout,
    component: () => <TermsandConditions />,
  },
  {
    path: "/privacy-policy",
    layout: defaultPagesLayout,
    component: () => <PrivacyPolicy />,
  },
];
