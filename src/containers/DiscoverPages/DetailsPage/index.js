import React, { useEffect, useRef, useState } from "react";
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
  Card,
  Modal,
  Drawer,
  Popover,
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
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import apiClient from "../../../apiConfig";
import Apis from "../../../utility/apis";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import { format, startOfMonth, endOfMonth } from "date-fns";

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

const QaModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Q&A
      </Button>
      <Modal
        centered
        title="Q & A"
        footer={false}
        className="qa-modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Form name="basic" autoComplete="off" layout="vertical">
            <Form.Item label="Are you vaccinated?">
              <div className="small-label">Against COVID-19</div>
              <Select
                placeholder="Select option"
                popupClassName="qamodal-drop"
                suffixIcon={<SvgIcon name="down-arrow" viewbox="0 0 18 9" />}
                options={[
                  {
                    value: "s1",
                    label: "1 Shot",
                  },
                  {
                    value: "s2",
                    label: " 2 shots",
                  },
                  {
                    value: "s3",
                    label: " 3 Shots",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Your nationality?">
              <Select
                placeholder="Select option"
                popupClassName="qamodal-drop"
                suffixIcon={<SvgIcon name="down-arrow" viewbox="0 0 18 9" />}
                options={[
                  {
                    value: "yn1",
                    label: "United Emirates Arab",
                  },
                  {
                    value: "yn2",
                    label: "India",
                  },
                  {
                    value: "yn3",
                    label: " USA",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Your Date of Birth?">
              <DatePicker
                popupClassName="pickdate-drop"
                icon={false}
                suffixIcon={false}
                placeholder="DD / MM / YYYY"
              />
            </Form.Item>
            <Form.Item className="m-0 py-3">
              <QaModal2 />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

const QaModal2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" htmlType="submit" onClick={showModal} block>
        Submit
      </Button>
      <Modal
        centered
        title="Q & A"
        footer={false}
        className="qa-modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Form name="basic" autoComplete="off" layout="vertical">
            <h2>Adult (1)</h2>
            <Form.Item label="Are you vaccinated?">
              <div className="small-label">Against COVID-19</div>
              <Select
                placeholder="Select option"
                popupClassName="qamodal-drop"
                suffixIcon={<SvgIcon name="down-arrow" viewbox="0 0 18 9" />}
                options={[
                  {
                    value: "s1",
                    label: "1 Shot",
                  },
                  {
                    value: "s2",
                    label: " 2 shots",
                  },
                  {
                    value: "s3",
                    label: " 3 Shots",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Your nationality?">
              <Select
                placeholder="Select option"
                popupClassName="qamodal-drop"
                suffixIcon={<SvgIcon name="down-arrow" viewbox="0 0 18 9" />}
                options={[
                  {
                    value: "yn1",
                    label: "United Emirates Arab",
                  },
                  {
                    value: "yn2",
                    label: "India",
                  },
                  {
                    value: "yn3",
                    label: " USA",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Your Date of Birth?">
              <DatePicker
                popupClassName="pickdate-drop"
                icon={false}
                suffixIcon={false}
                placeholder="DD / MM / YYYY"
              />
            </Form.Item>
            <h2>Adult (2)</h2>
            <Form.Item label="Are you vaccinated?">
              <div className="small-label">Against COVID-19</div>
              <Select
                placeholder="Select option"
                popupClassName="qamodal-drop"
                suffixIcon={<SvgIcon name="down-arrow" viewbox="0 0 18 9" />}
                options={[
                  {
                    value: "s1",
                    label: "1 Shot",
                  },
                  {
                    value: "s2",
                    label: " 2 shots",
                  },
                  {
                    value: "s3",
                    label: " 3 Shots",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Your nationality?">
              <Select
                placeholder="Select option"
                popupClassName="qamodal-drop"
                suffixIcon={<SvgIcon name="down-arrow" viewbox="0 0 18 9" />}
                options={[
                  {
                    value: "yn1",
                    label: "United Emirates Arab",
                  },
                  {
                    value: "yn2",
                    label: "India",
                  },
                  {
                    value: "yn3",
                    label: " USA",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Your Date of Birth?">
              <DatePicker
                popupClassName="pickdate-drop"
                icon={false}
                suffixIcon={false}
                placeholder="DD / MM / YYYY"
              />
            </Form.Item>
            <Form.Item className="m-0 py-3">
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

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

const DetailsPage = () => {
  const [counts, setCounts] = useState({
    adult: 1,
    child: 0,
    perPax: 0,
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

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const [tourDetails, setTourDetails] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const productId = searchParams.get("productId");
  console.log("productId: ", productId);

  const userData = localStorage.getItem("userData");
  const selectedCity = useSelector((state) => state.citySearch.selectedCity);
  useEffect(() => {
    const fetchData = async () => {
      try {
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
            productId: productId,
          }
        );

        // Set the fetched tour details to the state
        setTourDetails(response.data?.DATA || null);
        console.log("response tourDetails: ", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  const [selectedOption, setSelectedOption] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  // Define state variables for availability data and disabled dates
  const [availabilityData, setAvailabilityData] = useState([]);
  const [disabledDates, setDisabledDates] = useState([]);
  const [discoverOptions, setDiscoverOptions] = useState(null);
  const [availabilityTimes, setAvailabilityTimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.post("/globaltix/productOptions", {
          productId: productId,
        });

        // Set the fetched tour details to the state
        setDiscoverOptions(response.data?.DATA || null);
        console.log("response tourDetails: ", response);

        // Get the current date and format it as "yyyy-MM-dd"
        const currentDate = format(new Date(), "yyyy-MM-dd");
        const endDateOfMonth = format(endOfMonth(new Date()), "yyyy-MM-dd");
        const pTicketTypeID =
          response.data?.DATA[0]?.pTicketType[0]?.pTicketTypeID;

        console.log("pTicketTypeID data sa das: ", pTicketTypeID);

        if (pTicketTypeID) {
          // Fetch productAvailability using pTicketTypeID
          const availabilityResponse = await apiClient.post(
            "/globaltix/productAvailability",
            {
              pTicketTypeID: pTicketTypeID,
              dateFrom: currentDate,
              dateTo: endDateOfMonth,
            }
          );
          // Set the availability data to state
          setAvailabilityData(availabilityResponse.data.DATA);

          const availabilityTimes = availabilityResponse.data.DATA.map(
            (item) => {
              const timeParts = item.time.split("T"); // Splitting the string at 'T'
              return timeParts[1]; // Extracting the time part
            }
          );
          setAvailabilityTimes(availabilityTimes); // Update the availabilityTimes state

          // Extract disabled dates
          const disabled = availabilityResponse.data.DATA.map(
            (item) => new Date(item.time)
          );
          setDisabledDates(disabled);
          // Handle the productAvailability response
          console.log("productAvailability: ", availabilityResponse.data.DATA);
        } else {
          console.error(
            "Error: pTicketTypeID not found in productOptions response."
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productId]);

  // Function to check if a date is disabled
  const isDateDisabled = (date) => {
    // Check if the date exists in disabledDates array
    return (
      disabledDates.findIndex(
        (d) => format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
      ) === -1
    );
  };

  const productOPtionId =
    discoverOptions && discoverOptions.length > 0
      ? discoverOptions[0].productOPtionId
      : null;

  // You can then use productOptionId in your component logic as needed
  console.log("productOptionId:", productOPtionId);

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
  const fetchBookingData = async () => {
    try {
      const response = await apiClient.post("/globaltix/productBookingData", {
        productId: productId,
        productOPtionId: productOPtionId,
      });
      setBookingData(response.data?.DATA || null);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
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

    // Fetch booking data if the date is enabled
    if (selectedOption) {
      fetchBookingData(selectedOption.tourOptionId, formattedDate);
    }
  };

  const handleOutsideClick = () => {
    setShowCalendar(false);
  };

  // const pTicketTypeID =
  //   bookingData && bookingData.pTicketType && bookingData.pTicketType.length > 0
  //     ? bookingData.pTicketType[0].id
  //     : null;

  // console.log("bookingData pTicketTypeID: ", pTicketTypeID);

  const [errorMessage, setErrorMessage] = useState("");

  const handleBookNow = () => {
    window.location.href = `/discover/checkout?productOPtionId=${productOPtionId}&productId=${productId}&grandTotal=${grandTotal}`;
  };

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

  const calculateTotalPrice = (adultCount, childCount, productOptions) => {
    if (
      !productOptions ||
      !Array.isArray(productOptions) ||
      productOptions.length === 0
    ) {
      return 0;
    }

    const adultPrice =
      parseFloat(productOptions[0]?.pTicketType[0]?.nettPrice) || 0;
    const childPrice = adultPrice; // Assuming child price is the same as adult price, modify this if needed

    const totalAdultPrice = adultCount * adultPrice;
    const totalChildPrice = childCount * childPrice;

    const grandTotal = totalAdultPrice + totalChildPrice;

    return grandTotal;
  };

  const grandTotal = calculateTotalPrice(
    counts.adult,
    counts.child,
    discoverOptions
  );
  console.log("Grand Total:", grandTotal);

  const selectedData = `${counts.adult} Adult${counts.adult > 1 ? "s" : ""}, ${
    counts.child
  } Child${counts.child > 1 ? "ren" : ""}, ${counts.perPax} perPax${
    counts.perPax > 1 ? "s" : ""
  }`;

  const ticketTypes = discoverOptions
    ? discoverOptions.reduce((types, option) => {
        const optionTicketTypes = option.pTicketType.map(
          (ticketType) => ticketType.ticketTypename
        );
        return types.concat(optionTicketTypes);
      }, [])
    : [];

  const items = ticketTypes.map((ticketType, index) => ({
    key: index.toString(),
    label: (
      <div className="participants-select">
        <h3>Participants</h3>
        <div className="participants-row">
          <div className="left-col">
            <h4>{ticketType}</h4>
            <label>
              {ticketType === "Per Pax"
                ? "Under 2"
                : ticketType === "Adult"
                ? "Age 13+"
                : "Ages 2-12"}
            </label>
          </div>
          <div className="plusminus">
            <Button onClick={() => handleDecrement(ticketType)}> - </Button>
            <div className="counts">{counts[ticketType]}</div>
            <Button onClick={() => handleIncrement(ticketType)}> + </Button>
          </div>
        </div>
      </div>
    ),
  }));

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

  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [prevMonthStart, setPrevMonthStart] = useState(null);
  const [prevMonthEnd, setPrevMonthEnd] = useState(null);

  const handleMonthChange = async ({ activeStartDate }) => {
    try {
      console.log("Month changed to:", activeStartDate);

      const startDate = format(startOfMonth(activeStartDate), "yyyy-MM-dd");
      const endDate = format(endOfMonth(activeStartDate), "yyyy-MM-dd");

      setActiveStartDate(activeStartDate);

      let fetchStartDate = startDate;
      let fetchEndDate = endDate;

      // Check if the user has moved back to the current month
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1; // Month is zero-indexed

      const activeYear = activeStartDate.getFullYear();
      const activeMonth = activeStartDate.getMonth() + 1; // Month is zero-indexed

      if (activeYear === currentYear && activeMonth === currentMonth) {
        // If the user has moved back to the current month, use the current date and end date
        fetchStartDate = format(today, "yyyy-MM-dd");
        fetchEndDate = format(endOfMonth(today), "yyyy-MM-dd");
      }

      const availabilityResponse = await apiClient.post(
        "/globaltix/productAvailability",
        {
          pTicketTypeID: "11968",
          dateFrom: fetchStartDate,
          dateTo: fetchEndDate,
        }
      );

      setAvailabilityData(availabilityResponse.data.DATA);

      const disabled = availabilityResponse.data.DATA.map(
        (item) => new Date(item.time)
      );
      setDisabledDates(disabled);

      console.log("productAvailability:", availabilityResponse.data.DATA);

      // Extract available times from the response and set them in state
      const availableTimes = availabilityResponse.data.DATA.map(
        (item) => item.time.split("T")[1]
      );
      setAvailabilityTimes(availableTimes);

      // Update previous month's start and end dates
      setPrevMonthStart(activeStartDate);
      setPrevMonthEnd(activeStartDate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="twl-details-wrapper">
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
              <Button
                type="primary"
                onClick={() => {
                  window.location.href = "/discover/checkout";
                }}
              >
                Book Now
              </Button>
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
              <Gallery
                images={
                  tourDetails &&
                  tourDetails.gProductImageList &&
                  tourDetails.gProductImageList.map((image, index) => ({
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
                tourDetails.gProductImageList &&
                tourDetails.gProductImageList.length > 0 && (
                  <MediaQuery minWidth={768}>
                    <div className="details-images">
                      <div className="showphotos-btn" onClick={showDrawer}>
                        <span>{tourDetails.gProductImageList.length}</span> SHOW
                        PHOTOS
                      </div>
                      <div className="left-image">
                        <img
                          src={tourDetails.gProductImageList[0]}
                          alt="Tour Image 1"
                        />
                      </div>
                      <div className="right-image">
                        {showAllImages
                          ? tourDetails.gProductImageList.map(
                              (image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`Tour Image ${index + 1}`}
                                />
                              )
                            )
                          : tourDetails.gProductImageList
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
                    {tourDetails.gProductImageList &&
                      tourDetails.gProductImageList.map((image, index) => (
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
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-filled" viewbox="0 0 15 15" />
                        <SvgIcon name="star-outline" viewbox="0 0 15.999 16" />
                      </div>
                      <h1>{tourDetails.productName}</h1>
                      <div className="location">
                        <SvgIcon name="map" viewbox="0 0 8.358 12.537" />
                        {tourDetails.areaName}
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
                            ? tourDetails.description
                            : `${tourDetails.description.substring(0, 424)}...`,
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
                  <div className="highlights-row">
                    <h2>Highlights</h2>
                    <ul>
                      <li>
                        <div className="left-icon">
                          <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                        </div>
                        <div>
                          Stand above the clouds as you catch a closeup view of
                          the pyramidal
                        </div>
                      </li>
                      <li>
                        <div className="left-icon">
                          <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                        </div>
                        <div>
                          Immerse yourself into discovery in the Observation
                          Deck on the 86th Floor
                        </div>
                      </li>
                      <li>
                        <div className="left-icon">
                          <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                        </div>
                        <div>
                          Standing as one of best spots to view the city of
                          Kuala Lumpur
                        </div>
                      </li>
                      <li>
                        <div className="left-icon">
                          <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                        </div>
                        <div>
                          Immerse yourself into discovery in the Observation
                          Deck on the 86th Floor
                        </div>
                      </li>
                      <li>
                        <div className="left-icon">
                          <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                        </div>
                        <div>
                          Standing as one of best spots to view the city of
                          Kuala Lumpur
                        </div>
                      </li>
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
                        {/* <div className="options-colum">
                          <h4>Options</h4>
                          <ul>
                            <li>
                              <Popover
                                placement="bottomLeft"
                                arrow={false}
                                overlayClassName="options-list-popover"
                                content={
                                  "The Tower of London, officially His Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle on the north bank of the River Thames in central London, England"
                                }
                                title="Explore Magic Imagica"
                              >
                                <Checkbox>Explore Magic Imagica</Checkbox>
                              </Popover>
                              <div className="right-col">
                                <span className="off-price">AED 523</span>
                                $50 <span>/ Person</span>
                              </div>
                            </li>
                            <li>
                              <Popover
                                placement="bottomLeft"
                                arrow={false}
                                overlayClassName="options-list-popover"
                                content={
                                  "The Tower of London, officially His Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle on the north bank of the River Thames in central London, England"
                                }
                                title="Tower Bridge"
                              >
                                <Checkbox>Tower Bridge</Checkbox>
                              </Popover>
                              <div className="right-col">
                                <span className="off-price">AED 523</span>
                                $50 <span>/ Person</span>
                              </div>
                            </li>
                            <li>
                              <Popover
                                placement="bottomLeft"
                                arrow={false}
                                overlayClassName="options-list-popover"
                                content={
                                  "The Tower of London, officially His Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle on the north bank of the River Thames in central London, England"
                                }
                                title="London Eye"
                              >
                                <Checkbox>London Eye</Checkbox>
                              </Popover>
                              <div className="right-col">
                                <span className="off-price">AED 523</span>
                                $50 <span>/ Person</span>
                              </div>
                            </li>
                          </ul>
                        </div> */}
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
                                      $
                                      {option.pTicketType[0]?.nettPrice ||
                                        "Price not available"}
                                      <span>/ Person</span>
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
                                onActiveStartDateChange={handleMonthChange}
                                tileDisabled={({ date }) =>
                                  isDateDisabled(date)
                                }
                              />
                            </div>
                          )}
                        </OutsideClickHandler>

                        <div className="availability-colum">
                          <h4>Availability</h4>
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
                                  value={selectedTimeSlot || null}
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
                                      <h3 className="title">Pick the Time</h3>
                                      {menu}
                                    </>
                                  )}
                                  options={
                                    availabilityTimes.map((time, index) => ({
                                      value: time,
                                      label: (
                                        <div className="time-row" key={index}>
                                          <div className="time-left">
                                            {time}
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
                          {/* <Row className="total-row">
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
                              </Row> */}
                          <Row className="total-row">
                            <Col className="price-left">Grand Total</Col>
                            <Col className="price-right">
                              AED <b>{grandTotal}</b>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="bottom-action mt-3">
                        <MediaQuery minWidth={767}>
                          <Button
                            type="primary"
                            onClick={handleBookNow}
                            block
                            disabled={!availabilityData}
                            style={{
                              backgroundColor: !availabilityData
                                ? "gray"
                                : "black",
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
              <div className="details-experiences">
                <div className="gallery-row">
                  <h2>Gallery</h2>
                  <div className="details-images">
                    <div className="showphotos-btn" onClick={showDrawer}>
                      <span>10</span> SHOW PHOTOS
                    </div>
                    <div className="left-image">
                      <button className="play-btn" onClick={showDrawer}>
                        <SvgIcon name="play-icon" viewbox="0 0 48 61" />
                      </button>
                      <img
                        src={tourDetails.gProductImageList[0]}
                        alt="Tour Image 1"
                      />
                    </div>
                    <div className="right-image">
                      {showAllImages
                        ? tourDetails.gProductImageList.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Tour Image ${index + 1}`}
                            />
                          ))
                        : tourDetails.gProductImageList
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
                <div className="operatinghours-row">
                  <h2>Operating Hours</h2>
                  <ul>
                    {tourDetails?.operatingHours.map((operatingHour, index) => (
                      <li key={index}>
                        {operatingHour.day}{" "}
                        <label>
                          {operatingHour.startHour} - {operatingHour.endHour}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="whatexpect-row">
                  <h2>What to Expect</h2>
                  <ul>
                    <li>
                      <div className="check-circle">
                        <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                      </div>
                      Chance to see the world’s tallest building up-close{" "}
                    </li>
                    <li>
                      <div className="check-circle">
                        <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                      </div>
                      Get access to the observation decks at 124th and 125th
                      levels{" "}
                    </li>
                    <li>
                      <div className="check-circle">
                        <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                      </div>
                      Use the cutting-edge telescopes for closer views of
                      Dubai’s major landmarks{" "}
                    </li>
                    <li>
                      <div className="check-circle">
                        <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                      </div>
                      Safety Verified as it complies with all COVID-19
                      preventive measures imposed by both WHO and the government
                    </li>
                  </ul>
                </div>
                <div className="whatexpect-row thing-note">
                  <h2>Things to Note</h2>
                  <ul>
                    <li>
                      <div className="check-circle">
                        <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                      </div>
                      Familiarize yourself with cancellation and refund policies{" "}
                    </li>
                    <li>
                      <div className="check-circle">
                        <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                      </div>
                      Check if the package can be customized to your needs.{" "}
                    </li>
                    <li>
                      <div className="check-circle">
                        <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                      </div>
                      Compare the bundled price with individual costs.{" "}
                    </li>
                    <li>
                      <div className="check-circle">
                        <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                      </div>
                      Take note of the package’s usage timeframe.
                    </li>
                  </ul>
                </div>
                <div className="visitorreview-row">
                  <h2>Visitor Reviews</h2>
                  <Row className="rating-section">
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
                  </Row>
                  {/* Render tour reviews */}
                  <Row>
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
                  </Row>
                </div>
                <div className="address-row">
                  <h2 className="mb-2">Address</h2>
                  <p className="mb-4 pb-2">
                    1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, Dubai
                  </p>
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

export default DetailsPage;
