import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import {
  Container,
  Row,
  Col,
  SvgIcon,
  DownloadSection,
} from "../../../components/common";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Progress,
  Dropdown,
  DatePicker,
  Drawer,
} from "antd";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Gallery } from "react-grid-gallery";
import Slider from "react-slick";
import "../../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import "./index.scss";

import DetailsImg1 from "../../../assets/images/details-img-1.jpg";
import DetailsImg2 from "../../../assets/images/details-img-2.jpg";
import DetailsImg3 from "../../../assets/images/details-img-3.jpg";
import DetailsImg4 from "../../../assets/images/details-img-4.jpg";
import DetailsImg5 from "../../../assets/images/details-img-5.jpg";
import MapAddress from "../../../assets/images/map-address.png";
import ReviewImg1 from "../../../assets/images/top-creator2.png";
import ReviewImg2 from "../../../assets/images/top-creator3.png";
import ReviewImg3 from "../../../assets/images/top-creator4.png";
import ReviewImg4 from "../../../assets/images/top-creator5.png";
import ReviewImg5 from "../../../assets/images/top-creator6.png";
import ReviewImg6 from "../../../assets/images/top-creator7.png";
import DetailsImg6 from "../../../assets/images/privelanding-banner.jpg";
import apiClient from "../../../apiConfig";
import Apis from "../../../utility/apis";
import CustomLoader from "../../../components/common/Loader/CustomLoader";

const imagesArray = [
  {
    src: DetailsImg6,
    alt: "Travellerpass",
  },
  {
    src: DetailsImg2,
    alt: "Travellerpass",
  },
  {
    src: DetailsImg3,
  },
  {
    src: DetailsImg4,
  },
  {
    src: DetailsImg6,
  },
  {
    src: DetailsImg1,
  },
  {
    src: DetailsImg2,
  },
  {
    src: DetailsImg6,
    alt: "Travellerpass",
  },
  {
    src: DetailsImg2,
    alt: "Travellerpass",
  },
  {
    src: DetailsImg3,
  },
  {
    src: DetailsImg4,
  },
  {
    src: DetailsImg6,
  },
  {
    src: DetailsImg1,
  },
  {
    src: DetailsImg2,
  },
];

const reviewerData = [
  {
    key: 1,
    image: ReviewImg1,
    title: "Awesome Place!!!!👌",
    description:
      "Customers will experience a complete photography trip in London.",
    name: "Jerry123",
    date: "20th Mar 2022",
  },
  {
    key: 2,
    image: ReviewImg2,
    title: "Such a heaven Place 🔥",
    description:
      "Customers will experience a complete photography trip in London.",
    name: "Jerry123",
    date: "20th Mar 2022",
  },
  {
    key: 3,
    image: ReviewImg3,
    title: "Such a heaven Place 🔥",
    description:
      "Customers will experience a complete photography trip in London.",
    name: "Jerry123",
    date: "20th Mar 2022",
  },
  {
    key: 4,
    image: ReviewImg4,
    title: "Such a heaven Place 🔥",
    description:
      "Customers will experience a complete photography trip in London.",
    name: "Jerry123",
    date: "20th Mar 2022",
  },
  {
    key: 5,
    image: ReviewImg5,
    title: "Ambience is so beautifulllll",
    description:
      "Customers will experience a complete photography trip in London.",
    name: "Jerry123",
    date: "20th Mar 2022",
  },
  {
    key: 6,
    image: ReviewImg6,
    title: "Ambience is so beautifulllll",
    description:
      "Customers will experience a complete photography trip in London.",
    name: "Jerry123",
    date: "20th Mar 2022",
  },
];
const OutsideClickHandler = ({ onOutsideClick, children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onOutsideClick();
    }
  };

  return <div ref={wrapperRef}>{children}</div>;
};

const RaynaDetailsPage = () => {
  const [counts, setCounts] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

  const handleIncrement = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const handleDecrement = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] - 1, 0),
    }));
  };

  // const selectedData = `${counts.adult} Adult${counts.adult > 1 ? "s" : ""}, ${
  //   counts.child
  // } Child${counts.child > 1 ? "ren" : ""}, ${counts.infant} Infant${
  //   counts.infant > 1 ? "s" : ""
  // }`;

  // console.log("Selected Data:", selectedData);

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const [tourDetails, setTourDetails] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showLoader, setshowLoader] = useState(false)
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const param = searchParams.get("tourId");
  console.log("param: ", param);

  const [visible, setVisible] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const userData = localStorage.getItem("userData");
  const selectedCity = useSelector((state) => state.citySearch.selectedCity);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setshowLoader(true)
        const response = await apiClient.post(
          // Fetch data from API
          Apis(
            "tourDetails",
            selectedCity.vCountryName,
            userData ? "loggedIn" : "guest"
          ),
          {
            iCountryID: selectedCity.iCountryID,
            dCurrentLat: selectedCity.vCityLatitude,
            dCurrentLong: selectedCity.vCityLongitude,
            Language: "en",
            tourId: param,
          }
        );

        // Set the fetched tour details to the state
        setTourDetails(response.data?.DATA || null);
        console.log("response tourDetails: ", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setshowLoader(false)
    };

    fetchData();
  }, []);

  const [discoverOptions, setDiscoverOptions] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.post("/discover/discoverOptions", {
          tourId: param,
        });

        // Set the fetched tour details to the state
        setDiscoverOptions(response.data?.DATA || null);
        console.log("response tourDetails: ", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [param]);

  const transferTitles = discoverOptions
    ? discoverOptions.reduce((acc, option) => {
        option.transferIdData.forEach((transfer) => {
          if (!acc.includes(transfer.transferTitle)) {
            acc.push(transfer.transferTitle);
          }
        });
        return acc;
      }, [])
    : [];

  const handleCheckboxChange = (value) => {
    setSelectedCheckbox(value);
    setVisible(false); // Close the dropdown after selection
  };

  console.log("selectedCheckbox data: ", selectedCheckbox);

  // Function to handle checkbox click
  const handleCheckboxClick = (option) => {
    if (showCalendar) {
      // If showCalendar is already true, close it
      setShowCalendar(false);
    } else {
      // If showCalendar is false, open it
      setSelectedOption(option);
      setShowCalendar(true);
    }
  };
  // Function to handle unchecking of checkbox
  const handleCheckboxUncheck = () => {
    setSelectedDate(null); // Clear the selectedDate when the checkbox is unchecked
  };

  const [promoCodeValue, setPromoCodeValue] = useState("");

  const handlePromoCodeChange = (e) => {
    const promoCodeValue = e.target.value;
    console.log("Entered Promo Code:", promoCodeValue);
    setPromoCodeValue(promoCodeValue); // Update promo code value in state
  };

  const [bookingData, setBookingData] = useState(null);
  // Function to fetch booking data
  const fetchBookingData = async (tourOptionId, travelDate) => {
    try {
      // Get the transferId from the selected option
      const transferId = selectedOption.transferIdData[0]?.transferId; // Assuming the first transferId is the desired one

      const response = await apiClient.post("/discover/discoverBookingData", {
        tourOptionId,
        travelDate,
        transferId,
      });
      setBookingData(response.data?.DATA || null);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  // Function to check if a date is enabled based on specialdates and operationdays
  const isDateEnabled = (date) => {
    if (!date) return false; // Check if date object is valid
    if (selectedOption.specialdates) {
      const { fromDate, toDate } = selectedOption.specialdates;
      const startDate = new Date(fromDate);
      const endDate = new Date(toDate);
      return date >= startDate && date <= endDate;
    }
    const dayOfWeek = date.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, ...)
    const dayName = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ][dayOfWeek];
    return selectedOption.operationdays[dayName] === "1";
  };

  // Function to handle calendar change
  const handleCalendarChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);

    // Get the local time zone offset
    const offset = date.getTimezoneOffset() * 60000;

    // Adjust the date to the local time zone
    const localDate = new Date(date.getTime() - offset);

    // Format the date as "YYYY-MM-DD"
    const formattedDate = localDate.toISOString().slice(0, 10);

    // if (selectedOption) {
    //   const dayOfWeek = date.getDay();
    //   if (!selectedOption.specialdates) {
    //     if (!selectedOption.operationdays[dayOfWeek]) {
    //       return;
    //     }
    //   }

    //   fetchBookingData(selectedOption.tourOptionId, formattedDate);
    // }
    // Fetch booking data based on the selected date and available days

    // Fetch booking data if the date is enabled
    if (selectedOption && isDateEnabled(date)) {
      fetchBookingData(selectedOption.tourOptionId, formattedDate);
    }
  };

  // Disabled date logic based on specialdates and operationdays
  const isDateDisabled = (date) => {
    // If selectedOption is not set, disable all dates
    if (!selectedOption) return true;

    // Check if the date is enabled based on special dates or operation days
    return !isDateEnabled(date);
  };

  const handleOutsideClick = () => {
    setShowCalendar(false);
  };
  const [errorMessage, setErrorMessage] = useState("");

  const handleBookNow = async () => {
    if (!bookingData) return;

    const { tourOptionId, contractId } = bookingData;
    const travelDate = selectedDate.toISOString().slice(0, 10);
    const transferId = selectedOption.transferIdData[0]?.transferId;
    const grandTotal = calculateTotalPrice(selectedCheckbox, counts); 
    const requestBody = {
      tourId: param,
      tourOptionId,
      transferId,
      contractId,
      travelDate,
      adult: counts.adult,
      child: counts.child,
      infant: counts.infant,
    };

    try {
      const response = await apiClient.post(
        "/discover/discoverAvailability",
        requestBody
      );

      if (
        response.data &&
        response.data.DATA?.status === 1
        // response.data.message === "success"
      ) {
        // Redirect to checkout page if status is 1
        const countsParams = `&adult=${counts.adult}&child=${counts.child}&infant=${counts.infant}`;
        const promoCodeParam = encodeURIComponent(promoCodeValue);
        window.location.href = `/discover/checkout?tourId=${param}&person=${countsParams}&tPromoCode=${promoCodeParam}&tourOptionId=${tourOptionId}&travelDate=${travelDate}&transferId=${transferId}&timeSlotId=${selectedTimeSlot}&grandTotal=${grandTotal}&transferType=${selectedCheckbox}`;
      } else {
        if (response.data?.status === 0) {
          // window.location.href = "/discover/booking-failed";
        } else {
          setErrorMessage(
            response.data?.MESSAGE ||
              "You cannot book this tour on selected date due to cutoff time."
          );
          console.error("Booking unsuccessful:", response.data?.MESSAGE);
        }
      }
    } catch (error) {
      console.error("Error booking:", error);
    }
  };

  function parseHtmlStringToArray(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const ulElement = doc.querySelector("ul");
    if (ulElement) {
      return Array.from(ulElement.children).map((child) => child.outerHTML);
    } else {
      return [];
    }
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDrawer = () => {
    setShowAllImages(true);
  };

  const onClose = () => {
    setShowAllImages(false);
  };

  const detailSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleDateChange = (date, dateString) => {
    console.log("Selected Date:", dateString);
  };
  // Check if bookingData exists and has the DATA property
  if (bookingData && bookingData.DATA) {
    // Iterate over each item in the DATA array
    bookingData.DATA.forEach((item) => {
      // Check if item has transferIdData array
      if (item.transferIdData) {
        // Iterate over each transferIdData entry
        item.transferIdData.forEach((transfer) => {
          // Check if transfer has transferTitle property
          if (transfer.transferTitle) {
            // Log transferTitle
            console.log(transfer.transferTitle);
          } else {
            console.log("transferTitle is undefined for:", transfer);
          }
        });
      } else {
        console.log("transferIdData is undefined for:", item);
      }
    });
  } else {
    console.log("bookingData or bookingData.DATA is undefined");
  }

  const calculateTotalPrice = (selectedTransfer, counts) => {
    console.log("Selected Checkbox:", selectedTransfer);
    console.log("Counts:", counts);

    if (!discoverOptions || !selectedTransfer) {
      console.log(
        "Returning 0: Discover options or selected transfer not available"
      );
      return 0;
    }

    const transferOption = discoverOptions.find((option) =>
      option.transferIdData.some(
        (transfer) => transfer.transferTitle === selectedTransfer
      )
    );

    if (!transferOption) {
      console.log("Returning 0: Transfer option not found");
      return 0;
    }

    const transfer = transferOption.transferIdData.find(
      (transfer) => transfer.transferTitle === selectedTransfer
    );

    console.log("Transfer:", transfer);

    if (!transfer) {
      console.log("Returning 0: Transfer not found");
      return 0;
    }

    console.log("Transfer Price: ", transfer.adultPrice);

    const { adultPrice, childPrice } = transfer;

    if (!adultPrice || !childPrice) {
      console.log("Returning 0: Prices not available");
      return 0;
    }

    const totalAdultPrice = counts.adult * parseFloat(adultPrice);
    const totalChildPrice = counts.child * parseFloat(childPrice);

    const grandTotal = totalAdultPrice + totalChildPrice;

    console.log("Grand Total:", grandTotal);

    return grandTotal;
  };

  const selectedData = `${counts.adult} Adult${counts.adult > 1 ? "s" : ""}, ${
    counts.child
  } Child${counts.child > 1 ? "ren" : ""}, ${counts.infant} Infant${
    counts.infant > 1 ? "s" : ""
  }`;

  const items = [
    {
      key: "1",
      label: (
        <div className="participants-select">
          <h3>Participants</h3>
          <div className="participants-row">
            <div className="left-col">
              <h4>Adults</h4>
              <label>Age 13+</label>
            </div>
            <div className="plusminus">
              <Button onClick={() => handleDecrement("adult")}>
                <SvgIcon name="minus" viewbox="0 0 16.638 2.405" />
              </Button>
              <div className="counts">{counts.adult}</div>
              <Button onClick={() => handleIncrement("adult")}>
                <SvgIcon name="plus" viewbox="0 0 16.638 17.53" />
              </Button>
            </div>
          </div>
          <div className="participants-row">
            <div className="left-col">
              <h4>Children</h4>
              <label>Ages 2-12</label>
            </div>
            <div className="plusminus">
              <Button onClick={() => handleDecrement("child")}>
                <SvgIcon name="minus" viewbox="0 0 16.638 2.405" />
              </Button>
              <div className="counts">{counts.child}</div>
              <Button onClick={() => handleIncrement("child")}>
                <SvgIcon name="plus" viewbox="0 0 16.638 17.53" />
              </Button>
            </div>
          </div>
          <div className="participants-row">
            <div className="left-col">
              <h4>Infants</h4>
              <label>Under 2</label>
            </div>
            <div className="plusminus">
              <Button onClick={() => handleDecrement("infant")}>
                <SvgIcon name="minus" viewbox="0 0 16.638 2.405" />
              </Button>
              <div className="counts">{counts.infant}</div>
              <Button onClick={() => handleIncrement("infant")}>
                <SvgIcon name="plus" viewbox="0 0 16.638 17.53" />
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="twl-details-wrapper">
            {showLoader && <CustomLoader />}
      {tourDetails && (
        <>
          <MediaQuery maxWidth={767}>
            <div className="details-mobile-header">
              <Link to="/listing-page" className="back-arrow">
                <SvgIcon name="chevron-left" viewbox="0 0 4.029 6.932" />
              </Link>
              <div className="right-action">
                <Button type="link">
                  <SvgIcon name="heart-outline" viewbox="0 0 13.269 12.168" />
                </Button>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <div className="mobile-redeem-action">
              <div className="left-actions">
                <Button type="link">
                  <SvgIcon name="share-icon" viewbox="0 0 10.314 11.942" />
                </Button>
                <Button type="link">
                  <SvgIcon name="call-icon" viewbox="0 0 14.993 14.993" />
                </Button>
              </div>
              <Button type="primary" onClick={handleBookNow}>
                Book Nows
              </Button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
          </MediaQuery>
          <section>
            <Drawer
              className="moreimages-drawer"
              height={"100vh"}
              placement="bottom"
              title={
                <div className="right-action">
                  <Button type="link">
                    Favorite{" "}
                    <SvgIcon name="heart-outline" viewbox="0 0 13.269 12.168" />
                  </Button>
                  <Button type="link">
                    Share{" "}
                    <SvgIcon name="share-icon" viewbox="0 0 10.314 11.942" />
                  </Button>
                </div>
              }
              closeIcon={
                <SvgIcon name="chevron-left" viewbox="0 0 4.029 6.932" />
              }
              onClose={onClose}
              open={showAllImages}
            >
              {/* <Gallery images={imagesArray} enableImageSelection={false} /> */}
              <Gallery
                images={
                  tourDetails &&
                  tourDetails.rTourImageList &&
                  tourDetails.rTourImageList.map((image, index) => ({
                    src: image,
                    alt: `Image ${index + 1}`,
                  }))
                }
                enableImageSelection={false}
              />
            </Drawer>
            <Container className="container-upper">
              {/* <MediaQuery minWidth={768}>
                <div className="details-images">
                  <div className="showphotos-btn" onClick={showDrawer}>
                    <span>10</span> SHOW PHOTOS
                  </div>
                  <div className="left-image">
                    <img src={DetailsImg1} alt="Experience London skyline" />
                  </div>
                  <div className="right-image">
                    <img src={DetailsImg2} alt="Experience London skyline" />
                    <img src={DetailsImg3} alt="Experience London skyline" />
                    <img src={DetailsImg4} alt="Experience London skyline" />
                    <img src={DetailsImg5} alt="Experience London skyline" />
                  </div>
                </div>
              </MediaQuery> */}
              {tourDetails &&
                tourDetails.rTourImageList &&
                tourDetails.rTourImageList.length > 0 && (
                  <MediaQuery minWidth={768}>
                    <div className="details-images">
                      <div className="showphotos-btn" onClick={showDrawer}>
                        <span>{tourDetails.rTourImageList.length}</span> SHOW
                        PHOTOS
                      </div>
                      <div className="left-image">
                        <img
                          src={tourDetails.rTourImageList[0]}
                          alt="Tour Image 1"
                        />
                      </div>
                      <div className="right-image">
                        {showAllImages
                          ? tourDetails.rTourImageList.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`Tour Image ${index + 1}`}
                              />
                            ))
                          : tourDetails.rTourImageList
                              .slice(1, 6)
                              .map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`Tour Image ${index + 2}`}
                                />
                              ))}
                      </div>
                    </div>
                  </MediaQuery>
                )}

              {/* <MediaQuery maxWidth={767}>
                <div className="mobile-details-slider">
                  <Slider {...detailSlider}>
                    <div>
                      <img src={DetailsImg1} alt="Experience London skyline" />
                    </div>
                    <div>
                      <img src={DetailsImg2} alt="Experience London skyline" />
                    </div>
                    <div>
                      <img src={DetailsImg3} alt="Experience London skyline" />
                    </div>
                    <div>
                      <img src={DetailsImg4} alt="Experience London skyline" />
                    </div>
                    <div>
                      <img src={DetailsImg5} alt="Experience London skyline" />
                    </div>
                  </Slider>
                </div>
              </MediaQuery> */}

              <MediaQuery maxWidth={767}>
                <div className="mobile-details-slider">
                  <Slider {...detailSlider}>
                    {tourDetails.rTourImageList &&
                      tourDetails.rTourImageList.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image}
                            alt={`Experience London skyline ${index + 1}`}
                          />
                        </div>
                      ))}
                  </Slider>
                </div>
              </MediaQuery>

              <div className="details-row">
                <div className="details-left">
                  <div className="dtl-upper">
                    <div className="dtl-upperleft">
                      <div className="rating">
                        {/* <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-outline" viewbox="0 0 15.999 16" /> */}
                        {/* Render stars based on tourRating */}
                        {Array.from(
                          { length: Math.floor(tourDetails.tourRating) },
                          (_, index) => (
                            <SvgIcon
                              key={index}
                              name="star-filled"
                              viewbox="0 0 15 15"
                            />
                          )
                        )}
                        {Array.from(
                          { length: 5 - Math.floor(tourDetails.tourRating) },
                          (_, index) => (
                            <SvgIcon
                              key={index}
                              name="star-outline"
                              viewbox="0 0 15.999 16"
                            />
                          )
                        )}
                      </div>
                      <h1>{tourDetails.tourName}</h1>
                      <div className="location">
                        <SvgIcon name="map" viewbox="0 0 8.358 12.537" />
                        {tourDetails.cityName}, {tourDetails.countryName}
                      </div>
                    </div>
                    <MediaQuery minWidth={768}>
                      <div className="dtl-upperright">
                        <Button type="link">
                          Favorite{" "}
                          <SvgIcon
                            name="heart-outline"
                            viewbox="0 0 13.269 12.168"
                          />
                        </Button>
                        <Button type="link">
                          Share{" "}
                          <SvgIcon
                            name="share-icon"
                            viewbox="0 0 10.314 11.942"
                          />
                        </Button>
                      </div>
                    </MediaQuery>
                  </div>
                  <div className="overview-row">
                    <h2>Overview</h2>
                    <div>
                      <div
                        style={{ display: "inline-block" }}
                        dangerouslySetInnerHTML={{
                          __html: showFullDescription
                            ? tourDetails.tourShortDescription
                            : `${tourDetails.tourShortDescription.substring(
                                0,
                                424
                              )}...`,
                        }}
                      />
                      {!showFullDescription && (
                        <span>
                          <a
                            onClick={toggleDescription}
                            to="#"
                            style={{ cursor: "pointer" }}
                          >
                            Read More
                          </a>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="highlights-row highlights-row-rayna">
                    <h2>Highlights</h2>
                    <ul>
                      {tourDetails?.tourHighLights.map((highlight, index) => (
                        <li key={index}>
                          <div className="left-icon">
                            <img
                              src={highlight.rHighlightsIcon}
                              alt={highlight.rHighlightsTitle}
                            />
                          </div>
                          <div>
                            <label>{highlight.rHighlightsTitle}</label>
                            {highlight.rHighlights}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="details-right">
                  <div className="details-right-inner">
                    <Form name="basic" autoComplete="off" layout="vertical">
                      <div className="prive-details-form">
                        <div className="heading">
                          <h3>
                            <span>$50 </span>/ Person
                          </h3>
                        </div>
                        {discoverOptions && (
                          <div className="options-colum">
                            <h4>Options</h4>
                            <Checkbox.Group
                              onChange={(checkedValues) => {
                                const option = discoverOptions.find(
                                  (option) =>
                                    option.optionName === checkedValues[0]
                                );
                                option
                                  ? handleCheckboxClick(option)
                                  : handleCheckboxUncheck();
                              }}
                            >
                              <ul>
                                {discoverOptions.map((option, index) => (
                                  <li key={index}>
                                    <Checkbox value={option.optionName}>
                                      {option.optionName}
                                    </Checkbox>
                                    <div className="right-col">
                                      <span className="off-price">
                                        {option.price}
                                      </span>
                                      {/* Display the adultPrice from transferIdData */}
                                      {option.transferIdData &&
                                        option.transferIdData.length > 0 && (
                                          <>
                                            $
                                            {
                                              option.transferIdData[0]
                                                .adultPrice
                                            }{" "}
                                            <span>/ Person</span>
                                          </>
                                        )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </Checkbox.Group>
                          </div>
                        )}
                        {/* Render the Calendar component conditionally */}
                        <OutsideClickHandler
                          onOutsideClick={handleOutsideClick}
                        >
                          {showCalendar && (
                            <div className="calendar-container">
                              <Calendar
                                onChange={handleCalendarChange}
                                value={selectedDate}
                                // Disabled date logic
                                tileDisabled={({ date }) =>
                                  isDateDisabled(date)
                                }
                              />
                            </div>
                          )}
                        </OutsideClickHandler>

                        {bookingData && (
                          <>
                            <div className="availability-colum">
                              <h4>Availability</h4>
                              <Row>
                                <Col>
                                  <Form.Item
                                    name="transferOptions"
                                    label="TRANSFER OPTIONS"
                                  >
                                    <Select
                                      defaultValue="Transfer Options"
                                      popupClassName="transferoptions-select"
                                      suffixIcon={
                                        <SvgIcon
                                          name="down-arrow"
                                          viewbox="0 0 18 9"
                                        />
                                      }
                                      dropdownRender={(menu) => (
                                        <>
                                          <h3 className="title">
                                            Transfer Options
                                          </h3>
                                          {menu}
                                          {selectedCheckbox !==
                                            "Private Transfer" && (
                                            <>
                                              <Form
                                                name="search"
                                                autoComplete="off"
                                                layout="vertical"
                                              >
                                                <Form.Item
                                                  name="pul"
                                                  label="PICK UP LOCATION"
                                                >
                                                  <Input
                                                    value=""
                                                    placeholder="Business bay"
                                                  />
                                                </Form.Item>
                                              </Form>
                                              <div className="transfers-list">
                                                <ul>
                                                  <li>
                                                    <div className="icons">
                                                      <SvgIcon
                                                        name="map"
                                                        viewbox="0 0 8.358 12.537"
                                                      />
                                                    </div>
                                                    Business Bay
                                                  </li>
                                                  <li>
                                                    <div className="icons">
                                                      <SvgIcon
                                                        name="map"
                                                        viewbox="0 0 8.358 12.537"
                                                      />
                                                    </div>
                                                    Al Karama
                                                  </li>
                                                  <li>
                                                    <div className="icons">
                                                      <SvgIcon
                                                        name="map"
                                                        viewbox="0 0 8.358 12.537"
                                                      />
                                                    </div>
                                                    Marina
                                                  </li>
                                                  <li>
                                                    <div className="icons">
                                                      <SvgIcon
                                                        name="map"
                                                        viewbox="0 0 8.358 12.537"
                                                      />
                                                    </div>
                                                    Financial Center
                                                  </li>
                                                </ul>
                                              </div>
                                            </>
                                          )}
                                        </>
                                      )}
                                      options={transferTitles.map(
                                        (title, index) => ({
                                          value: title,
                                          label: (
                                            <Checkbox
                                              checked={
                                                selectedCheckbox === title
                                              }
                                              onChange={() =>
                                                handleCheckboxChange(title)
                                              }
                                            >
                                              {title}
                                            </Checkbox>
                                          ),
                                        })
                                      )}
                                      visible={visible}
                                      onVisibleChange={setVisible}
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Item name="date" label="DATE">
                                    <DatePicker
                                      popupClassName="pickdate-drop"
                                      onChange={handleDateChange}
                                      value={selectedDate}
                                      icon={false}
                                      suffixIcon={false}
                                      placeholder="DD / MM / YYYY"
                                    />
                                  </Form.Item>
                                </Col>
                                <Col>
                                  <Form.Item name="time" label="TIME">
                                    <Select
                                      value={
                                        bookingData &&
                                        bookingData.tourPriceTransfertimeDetails &&
                                        bookingData.tourPriceTransfertimeDetails
                                          .timeslot &&
                                        bookingData.tourPriceTransfertimeDetails
                                          .timeslot[0] &&
                                        bookingData.tourPriceTransfertimeDetails
                                          .timeslot[0].timeSlotId
                                      }
                                      onChange={(value) =>
                                        setSelectedTimeSlot(value)
                                      }
                                      placement="bottomRight"
                                      defaultValue="12:00"
                                      popupMatchSelectWidth={false}
                                      popupClassName="timeselect"
                                      suffixIcon={
                                        <SvgIcon
                                          name="down-arrow"
                                          viewbox="0 0 18 9"
                                        />
                                      }
                                      dropdownRender={(menu) => (
                                        <>
                                          <h3 className="title">
                                            Pick the Time
                                          </h3>
                                          {menu}
                                        </>
                                      )}
                                      options={
                                        (
                                          bookingData
                                            ?.tourPriceTransfertimeDetails
                                            ?.timeslot || []
                                        ).map((slot, index) => ({
                                          value: slot.timeSlotId,
                                          label: (
                                            <div
                                              className="time-row"
                                              key={index}
                                            >
                                              <div className="time-left">
                                                {slot.timeSlot}
                                              </div>
                                              <div className="right-price">
                                                {slot.adultPrice}
                                              </div>
                                            </div>
                                          ),
                                        })) || []
                                      }
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Item name="person" label="PERSON">
                                    <Dropdown
                                      menu={{ items }}
                                      overlayClassName="participants-drop"
                                      trigger={["click"]}
                                      visible={dropdownVisible}
                                      onVisibleChange={(flag) =>
                                        setDropdownVisible(flag)
                                      }
                                    >
                                      <Input
                                        value={selectedData}
                                        readOnly
                                        suffix={
                                          <SvgIcon
                                            name="down-arrow"
                                            viewbox="0 0 18 9"
                                          />
                                        }
                                      />
                                    </Dropdown>
                                  </Form.Item>
                                </Col>
                                <Col>
                                  <Form.Item name="pcode" label="PROMO CODE">
                                    <Input
                                      value=""
                                      placeholder="Enter"
                                      onChange={handlePromoCodeChange}
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                            </div>

                            <div className="price-info">
                              <Row>
                                <Col className="price-left">Service Charge</Col>
                                <Col className="price-right">AED 23</Col>
                              </Row>
                              <Row>
                                <Col className="price-left">Tax</Col>
                                <Col className="price-right">AED 78</Col>
                              </Row>
                              <Row className="total-row">
                                <Col className="price-left">Grand Total</Col>
                                <Col className="price-right">
                                  AED{" "}
                                  <b>
                                    {calculateTotalPrice(
                                      selectedCheckbox,
                                      counts
                                    )}
                                  </b>
                                </Col>
                              </Row>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="bottom-action mt-3">
                        <MediaQuery minWidth={767}>
                          <Button
                            type="primary"
                            onClick={handleBookNow}
                            block
                            disabled={!bookingData}
                            style={{
                              backgroundColor: !bookingData ? "gray" : "black",
                            }}
                          >
                            Book Nows
                          </Button>
                        </MediaQuery>
                        <Button
                          type="link"
                          icon={
                            <SvgIcon name="play" viewbox="0 0 41.93 41.965" />
                          }
                          block
                        >
                          Learn How to book
                        </Button>
                      </div>
                      <div
                        className="getit-touch"
                        data-aos="fade-in"
                        data-aos-duration="1400"
                      >
                        <div className="upper-row">
                          <h3>Get in touch</h3>
                        </div>
                        <p>
                          If you have any doubt please reach Out us @{" "}
                          <Link to="/">info@imcholding.com</Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="whatexpect-row-rayna">
                <h2>What to Expect</h2>
                <ul>
                  <li>
                    <div className="check-circle">
                      <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                    </div>
                    What’s Included
                  </li>
                  <li>
                    <div className="check-circle">
                      <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                    </div>
                    What’s Included
                  </li>
                  <li>
                    <div className="check-circle">
                      <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                    </div>
                    Departure & Return
                  </li>
                  <li>
                    <div className="check-circle">
                      <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                    </div>
                    Departure & Return
                  </li>
                  <li>
                    <div className="check-circle">
                      <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                    </div>
                    What To Expect
                  </li>
                  <li>
                    <div className="check-circle">
                      <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                    </div>
                    What To Expect
                  </li>
                  <li>
                    <div className="check-circle">
                      <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                    </div>
                    Additional Info
                  </li>
                  <li>
                    <div className="check-circle">
                      <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                    </div>
                    Additional Info
                  </li>
                </ul>
              </div>
              <div className="details-experiences">
                <div className="gallery-row">
                  <h2>Gallery</h2>
                  <div className="details-images">
                    <div className="showphotos-btn" onClick={showDrawer}>
                      <span>{tourDetails.rTourImageList.length}</span> SHOW
                      PHOTOS
                    </div>
                    <div className="left-image">
                      <button className="play-btn" onClick={showDrawer}>
                        <SvgIcon name="play-icon" viewbox="0 0 48 61" />
                      </button>
                      <img
                        src={tourDetails.rTourImageList[0]}
                        alt="Tour Image 1"
                      />
                    </div>
                    <div className="right-image">
                      {showAllImages
                        ? tourDetails.rTourImageList.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Tour Image ${index + 1}`}
                            />
                          ))
                        : tourDetails.rTourImageList
                            .slice(1, 6)
                            .map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`Tour Image ${index + 2}`}
                              />
                            ))}
                    </div>
                  </div>
                  {/* <MediaQuery maxWidth={767}>
                                <div className='mobile-details-slider'>
                                    <Slider {...detailSlider}>
                                        <div>
                                            <img src={DetailsImg1} alt="Experience London skyline" />
                                        </div>
                                        <div>
                                            <img src={DetailsImg2} alt="Experience London skyline" />
                                        </div>
                                        <div>
                                            <img src={DetailsImg3} alt="Experience London skyline" />
                                        </div>
                                        <div>
                                            <img src={DetailsImg4} alt="Experience London skyline" />
                                        </div>
                                        <div>
                                            <img src={DetailsImg5} alt="Experience London skyline" />
                                        </div>
                                    </Slider>
                                </div>
                            </MediaQuery> */}
                </div>
                <div className="moreDetails-row">
                  <h2>More Details</h2>
                  <ul>
                    <li>
                      <Checkbox checked />
                      <div>
                        <h3>What’s Included</h3>
                        <p>In this tour</p>
                      </div>
                      <Link to="/know-more">
                        <Button type="secondary" size="medium">
                          Know More
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Checkbox checked />
                      <div>
                        <h3>What’s Included</h3>
                        <p>In this tour</p>
                      </div>
                      <Button type="secondary">Know More</Button>
                    </li>
                    <li>
                      <Checkbox checked />
                      <div>
                        <h3>What’s Included</h3>
                        <p>In this tour</p>
                      </div>
                      <Button type="secondary">Know More</Button>
                    </li>
                    <li>
                      <Checkbox checked />
                      <div>
                        <h3>What’s Included</h3>
                        <p>In this tour</p>
                      </div>
                      <Button type="secondary">Know More</Button>
                    </li>
                  </ul>
                </div>
                <div className="visitorreview-row">
                  <h2>Visitor Reviews</h2>
                  {/* <Row className="rating-section">
                    <Col sm="6" className="rating-left">
                      <div className="rating-row">
                        <label className="left-label">5 Stars</label>
                        <Progress
                          strokeColor="#18D39E"
                          trailColor="#F5FCFC"
                          size="small"
                          percent={84}
                        />
                      </div>
                      <div className="rating-row">
                        <label className="left-label">4 Stars</label>
                        <Progress
                          strokeColor="#18D39E"
                          trailColor="#F5FCFC"
                          size="small"
                          percent={65}
                        />
                      </div>
                      <div className="rating-row">
                        <label className="left-label">3 Stars</label>
                        <Progress
                          strokeColor="#18D39E"
                          trailColor="#F5FCFC"
                          size="small"
                          percent={40}
                        />
                      </div>
                      <div className="rating-row">
                        <label className="left-label">2 Stars</label>
                        <Progress
                          strokeColor="#18D39E"
                          trailColor="#F5FCFC"
                          size="small"
                          percent={32}
                        />
                      </div>
                      <div className="rating-row">
                        <label className="left-label">1 Stars</label>
                        <Progress
                          strokeColor="#18D39E"
                          trailColor="#F5FCFC"
                          size="small"
                          percent={11}
                        />
                      </div>
                    </Col>
                    <Col sm="6" className="rating-right">
                      <h3>4.5 Out of 5</h3>
                      <div className="rating">
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-outline" viewbox="0 0 15.999 16" />
                      </div>
                    </Col>
                  </Row> */}
                  {tourDetails.tourRating && (
                    <Row className="rating-section">
                      <Col sm="6" className="rating-left">
                        {Object.keys(tourDetails.tourRating).map(
                          (key, index) => {
                            // Exclude the 'averageRating' key
                            if (key !== "averageRating") {
                              return (
                                <div className="rating-row" key={index}>
                                  <label className="left-label">
                                    {key.charAt(4)} Stars
                                  </label>
                                  <Progress
                                    strokeColor="#18D39E"
                                    trailColor="#F5FCFC"
                                    size="small"
                                    percent={tourDetails.tourRating[key]}
                                  />
                                </div>
                              );
                            }
                            return null; // Skip rendering if it's the 'averageRating' key
                          }
                        )}
                      </Col>
                      <Col sm="6" className="rating-right">
                        <h3>{tourDetails.tourRating.averageRating} Out of 5</h3>
                        <div className="rating">
                          {[
                            ...Array(
                              Math.round(
                                parseFloat(tourDetails.tourRating.averageRating)
                              )
                            ),
                          ].map((_, index) => (
                            <SvgIcon
                              key={index}
                              name="star-filled"
                              viewbox="0 0 15 15"
                            />
                          ))}
                          {[
                            ...Array(
                              5 -
                                Math.round(
                                  parseFloat(
                                    tourDetails.tourRating.averageRating
                                  )
                                )
                            ),
                          ].map((_, index) => (
                            <SvgIcon
                              key={index}
                              name="star-outline"
                              viewbox="0 0 15.999 16"
                            />
                          ))}
                        </div>
                      </Col>
                    </Row>
                  )}

                  {/* <Row>
                    <Col>
                      <ul className="reviewer-list">
                        {reviewerData.map((item) => (
                          <li key={item.key}>
                            <div className="reviewer-img">
                              <img src={item.image} alt={item.name} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <label>
                              BY {item.name} / {item.date}
                            </label>
                          </li>
                        ))}
                      </ul>
                      <div className="allreviewbtn-row">
                        <Button type="primary" ghost>
                          View all Reviews
                        </Button>
                      </div>
                    </Col>
                  </Row> */}
                  {/* Render tour reviews */}
                  {tourDetails.tourReviews &&
                    tourDetails.tourReviews.length > 0 && (
                      <Row>
                        <Col>
                          <ul className="reviewer-list">
                            {tourDetails.tourReviews
                              .slice(0, 6)
                              .map((item, index) => (
                                <li key={index}>
                                  <div className="reviewer-img">
                                    <img
                                      src={item.imagePath}
                                      alt={item.guestName}
                                    />
                                  </div>
                                  <h3>{item.reviewTitle}</h3>
                                  <p>{item.reviewContent}</p>
                                  <label>
                                    BY {item.guestName} / {item.visitMonth}
                                  </label>
                                </li>
                              ))}
                          </ul>
                          <div className="allreviewbtn-row">
                            <Button type="primary" ghost>
                              View all Reviews
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    )}
                </div>
                {/* <div className="address-row">
                  <h2 className="mb-2">Address</h2>
                  <p className="mb-4 pb-2">
                    1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, Dubai
                  </p>
                  <img className="w-100" src={MapAddress} alt="map" />
                </div> */}
                <div className="address-row">
                  <h2 className="mb-2">Address</h2>
                  <p className="mb-4 pb-2">{tourDetails.areaAddress}</p>
                  <img className="w-100" src={MapAddress} alt="map" />
                </div>
              </div>
            </Container>
          </section>
          <DownloadSection />
        </>
      )}
    </div>
  );
};

export default RaynaDetailsPage;