import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  SvgIcon,
  DownloadSection,
} from "../../components/common";
import {
  Button,
  Card,
  List,
  Dropdown,
  Checkbox,
  Slider,
  DatePicker,
} from "antd";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Sliders from "react-slick";
import "react-calendar/dist/Calendar.css";
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";

import BannerImg from "../../assets/images/landing.jpg";
import testimonialImg from "../../assets/images/testimonial.png";
import testimonialImg2 from "../../assets/images/testimonial2.png";
import testimonialImg3 from "../../assets/images/testimonial3.png";
import testimonialImg4 from "../../assets/images/testimonial4.png";
import testimonialImg5 from "../../assets/images/testimonial5.png";
import BlogImg1 from "../../assets/images/blog-1.jpg";
import BlogImg2 from "../../assets/images/blog-2.jpg";
import BlogImg3 from "../../assets/images/blog-3.jpg";
import BlogImg4 from "../../assets/images/blog-4.jpg";
import Tpimg1 from "../../assets/images/tp-img1.jpg";
import Tpimg2 from "../../assets/images/tp-img2.jpg";
import Tpimg3 from "../../assets/images/tp-img3.jpg";
import Tpimg4 from "../../assets/images/tp-img4.jpg";
import somethingImg1 from "../../assets/images/something-img1.jpg";
import somethingImg2 from "../../assets/images/something-img2.jpg";
import somethingImg3 from "../../assets/images/something-img3.jpg";
import tourImg1 from "../../assets/images/tour1.jpg";
import tourImg2 from "../../assets/images/tour2.jpg";
import tourImg3 from "../../assets/images/tour3.jpg";
import tourImg4 from "../../assets/images/tour4.jpg";
import howitworkImg from "../../assets/images/howitwork.png";
import apiClient from "../../apiConfig";
import Apis from "../../utility/apis";
import { setFeatureOfferList2, toggleFav } from "../../slice/featuredOfferList2";
import { setFeaturedOfferList } from "../../slice/featuredOfferList";
import {
  resetCheckedItems,
  selectCheckedItems,
  setCheckedItems,
} from "../../slice/checkedItemsSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { selectSelectedDate, setSelectedDate } from "../../slice/dateSlice";
import {
  selectSelectedPriceRange,
  setSelectedPriceRange,
} from "../../slice/priceRangeSlice";
import CustomLoader from "../../components/common/Loader/CustomLoader";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SvgIcon name="chevron-right" viewbox="0 0 4.029 6.932" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SvgIcon name="chevron-left" viewbox="0 0 4.029 6.932" />
    </div>
  );
}

function NextArrowClients(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SvgIcon name="chevron-right" viewbox="0 0 4.029 6.932" />
    </div>
  );
}

function PrevArrowClients(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SvgIcon name="chevron-left" viewbox="0 0 4.029 6.932" />
    </div>
  );
}
const LandingPage = () => {
  const history = useHistory();
  const [showLoader, setshowLoader] = useState(false)
  const userData = localStorage.getItem("userData");
  const dispatch = useDispatch();
  const featuredOfferList = useSelector(
    (state) => state.featuredOfferListSlice
  );
  const featuredOfferList2 = useSelector(
    (state) => state.featureOfferList2State
  );

  console.log("featuredOfferList: ", featuredOfferList);
  console.log("featuredOfferList2: ", featuredOfferList2);
  const selectedCity = useSelector((state) => state.citySearch.selectedCity);

  
  const handleFavToggle = (index, innerIndex, value,tourId) => {
    dispatch(toggleFav({index, innerIndex, value }));
    apiClient
    .post(
      Apis(
        "toggleFavTour",
        selectedCity.vCountryName,
        userData ? "loggedIn" : "guest"
      ),
      {
        tourId,
        productId:tourId,
        favourite:value
      }
    )
    
  }

  useEffect(() => {
    if (selectedCity) {
      setshowLoader(true)
      apiClient
        .post(
          Apis(
            "featuredOfferList",
            selectedCity.vCountryName,
            userData ? "loggedIn" : "guest"
          ),
          {
            iCountryID: selectedCity.iCountryID,
            dCurrentLat: selectedCity.vCityLatitude,
            dCurrentLong: selectedCity.vCityLongitude,
            vCityName: selectedCity.vCityName,
            iCityID: selectedCity.iCityID,
            Language: "en",
          }
        )
        .then((res) => {
          let FD = res.data.DATA.find((e) => {
            return e.type === "Group Banner";
          }).DATA.discoverbanner;
          dispatch(setFeaturedOfferList(FD));
        })

        .catch((err) => console.log(err));
      apiClient
        .post(
          Apis(
            "featuredOfferList2",
            selectedCity.vCountryName,
            userData ? "loggedIn" : "guest"
          ),
          {
            iCountryID: selectedCity.iCountryID,
            dCurrentLat: selectedCity.vCityLatitude,
            dCurrentLong: selectedCity.vCityLongitude,
            vCityName: selectedCity.vCityName,
            iCityID: selectedCity.iCityID,
            Language: "en",
          }
        )
        .then((res) => {
          let result = res.data.DATA;
          dispatch(setFeatureOfferList2(result));
        })
        .catch((err) => console.log(err))
        .finally(() => setshowLoader(false))
    }
    return () => { };
  }, [selectedCity]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if xApiKey already exists in localStorage
        const existingApiKey = localStorage.getItem("xApiKey");
        if (existingApiKey) {
          console.log("xApiKey already exists:", existingApiKey);
          return;
        }

        // If xApiKey doesn't exist, fetch it
        console.log("Start heating api");
        const response = await apiClient.post("/key");
        const data = response.data;
        console.log("Fetched data:", data);

        // Dispatch action to store data in Redux
        localStorage.setItem("xApiKey", JSON.stringify(data.key));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // fetch("https://discover-city.com/wsDiscover1.2Test/key",{method:"POST",headers:{"X-API-KEY":"7t9f798b765gge89f45e5ef9150fa073f8a61b78"}}).then(r => r.json()).then(e => console.log(e,"eerrrrr"))
    fetchData();
  }, []);

  const Blogdata = [
    {
      title: "The Ultimate Children’s Playground",
      avatar: BlogImg2,
      date: "NOV 29 - 5 MIN READ",
    },
    {
      title: "Time to head to The Dubai Mall",
      avatar: BlogImg3,
      date: "DEC 02 - 9 MIN READ",
    },
    {
      title: "Time for something new",
      avatar: BlogImg4,
      date: "JAN 08 - 10 MIN READ",
    },
  ];

  const settingsClients = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowClients />,
    prevArrow: <PrevArrowClients />,
  };

  const settingsHandpickedCollections = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settingsTourSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: 10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TourData = [
    { key: 1, name: "Vintage London Voyage", image: tourImg1 },
    { key: 2, name: "Royal Revelry Tour", image: tourImg2 },
    { key: 3, name: "Majestic Museums Marvel", image: tourImg3 },
    { key: 4, name: "Gastronomic Grandeur Tour", image: tourImg4 },
    { key: 5, name: "Gastronomic Grandeur Tour", image: tourImg1 },
  ];

  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

  const [categoryList, setCategoryList] = useState([]);
  const checkedItems = useSelector(selectCheckedItems);

  console.log("checkedItems: ", checkedItems);

  useEffect(() => {
    if (selectedCity && selectedCity.iCountryID && selectedCity.iCityID) {
      apiClient
        .post("/deal/categoryListDiscover", {
          iCountryID: selectedCity.iCountryID,
          iCityID: selectedCity.iCityID,
        })
        .then((res) => {
          const categoryListData = res.data?.DATA || [];
          console.log("Category List:", categoryListData);
          setCategoryList(categoryListData);
        })
        .catch((err) => {
          console.error("Error fetching category list:", err);
        });
    }
  }, [selectedCity]);

  const handleCheckboxChange = (category) => {
    const isAlreadyChecked = checkedItems.some(
      (item) => item.rCategoryID === category.rCategoryID
    );

    let updatedCheckedItems = [];

    if (isAlreadyChecked) {
      updatedCheckedItems = checkedItems.filter(
        (item) => item.rCategoryID !== category.rCategoryID
      );
    } else {
      updatedCheckedItems = [...checkedItems, category];
    }

    console.log("updatedCheckedItems: ", updatedCheckedItems);
    dispatch(setCheckedItems(updatedCheckedItems));
  };

  const handleResetClick = () => {
    dispatch(resetCheckedItems());
  };

  // const handleShowResultsClick = () => {
  //   // Extract rCategoryName values from checkedItems
  //   const checkedCategoryNames = checkedItems.map((item) => item.rCategoryName);

  //   // Join rCategoryName values with commas
  //   const checkedCategoryNamesString = checkedCategoryNames.join(",");

  //   // Redirect to listing-page with query parameters
  //   history.push(`/listing-page?categories=${checkedCategoryNamesString}`);
  //   setVisible(false);
  // };

  const [visible, setVisible] = useState(false);

  const selectedDate = useSelector(selectSelectedDate);
  const [visibleDate, setVisibleDate] = useState(false);

  const handleShowDateClick = () => {
    // setVisibleDate(false);
    console.log("Selected Date:", selectedDate);
  };

  const handleDateChange = (date) => {
    const formattedDate = {
      day: date.toLocaleDateString("en", { weekday: "short" }),
      date: date.getDate(),
      month: date.toLocaleDateString("en", { month: "short" }),
      year: date.getFullYear(),
    };
    dispatch(setSelectedDate(formattedDate));
    // setVisibleDate(false);
  };

  console.log("selectedDate: ", selectedDate);

  const dateItems = [
    {
      key: "1",
      label: (
        <div className="category-box">
          <h3>Planning your trip?</h3>
          <div className="planning-time">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate?.day ? new Date(`${selectedDate?.day} ${selectedDate?.month} ${selectedDate?.date} ${selectedDate?.year}`) : ""} // Set the value prop to the selectedDate
              onClickDay={handleShowDateClick} // If needed, toggle visibility on day click
              showWeekNumbers
              showNeighboringMonth={false}
              locale="en"
              minDate={new Date()}
            />
          </div>
        </div>
      ),
    },
  ];

  const selectedPriceRange = useSelector(selectSelectedPriceRange);
  const [visiblePrice, setVisiblePrice] = useState(false);

  const marks = {
    0: "0",
    5: "5",
    10: "10",
    15: "15",
    20: "20",
    25: "25",
    30: "30",
    35: "35",
    40: "40",
    45: "45",
    50: "50",
    55: "55",
    60: "60",
    65: "65",
    70: "70",
    75: "75",
    80: "80",
    85: "85",
    90: "90",
    95: "95",
    100: "100",
  };

  const priceRangeItems = [
    {
      key: "1",
      label: (
        <div className="category-box">
          <h3>Price Range</h3>
          <div className="price-range">
            <div className="minmax-row">
              <div className="column">
                <label>${selectedPriceRange.start}</label>
                <p>Minimum</p>
              </div>
              <div className="column">
                <label>${selectedPriceRange.limit}</label>
                <p>Maximum</p>
              </div>
            </div>
            <Slider
              range
              marks={marks}
              defaultValue={[
                selectedPriceRange.start,
                selectedPriceRange.limit,
              ]}
              onChange={(values) =>
                dispatch(
                  setSelectedPriceRange({ start: values[0], limit: values[1] })
                )
              }
            />
          </div>
        </div>
      ),
    },
  ];

  // Handler for clicking "Show Results"
  const handleShowResultsClick = () => {
    let queryParams = [];

    // Check if categories are selected
    if (checkedItems.length > 0) {
      const checkedCategoryNames = checkedItems.map((item) => item.rCategoryID);
      queryParams.push(`categories=${checkedCategoryNames.join(",")}`);
    }

    // Check if date is selected
    if (
      selectedDate &&
      selectedDate.year &&
      selectedDate.month &&
      selectedDate.date
    ) {
      const dateString = `${selectedDate.day} ${selectedDate.month} ${selectedDate.date} ${selectedDate.year}`;
      queryParams.push(`selectedDate=${encodeURIComponent(dateString)}`);
    }

    // Check if price range is selected and not default
    if (
      (selectedPriceRange.start !== 0 || selectedPriceRange.limit !== 100) &&
      (selectedPriceRange.start !== marks[0] ||
        selectedPriceRange.limit !== marks[100])
    ) {
      const { start, limit } = selectedPriceRange;
      queryParams.push(`start=${start}&limit=${limit}`);
    }

    // Construct the query string
    const queryString = queryParams.join("&");

    // Redirect to listing-page with query parameters if any
    if (queryString) {
      history.push(`/listing-page?${queryString}`);
    } else {
      history.push(`/listing-page`);
    }

    setVisible(false);
  };

  return (
    <div className="twl-landing-wrapper">
      {showLoader && <CustomLoader />}
      <section className="landing-banner">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${BannerImg})` }}
        ></div>
        <Container>
          <div className="upperfilters-row">
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <div className="category-box" key="category-box">
                        <h3>Category</h3>
                        <ul>
                          {categoryList.length > 0 ? (
                            categoryList.map((category) => (
                              <li key={category.rCategoryID}>
                                {category.rCategoryName}{" "}
                                <Checkbox
                                  checked={checkedItems.some(
                                    (item) =>
                                      item.rCategoryID === category.rCategoryID
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(category)
                                  }
                                />
                              </li>
                            ))
                          ) : (
                            <li>No categories found</li>
                          )}
                        </ul>
                      </div>
                    ),
                  },
                ],
              }}
              visible={visible}
              onVisibleChange={(flag) => setVisible(flag)}
              overlayClassName="filter-drop"
              trigger={["click"]}
              dropdownRender={(menu) => (
                <div>
                  {menu}
                  <div className="drop-footer">
                    <Button type="text" onClick={handleResetClick}>
                      Reset all
                    </Button>
                    <Button type="primary" onClick={handleShowResultsClick}>
                      Show results
                    </Button>
                  </div>
                </div>
              )}
            >
              <button onClick={(e) => e.preventDefault()}>
                Category <SvgIcon name="chevron-bottom" viewbox="0 0 13 8" />
              </button>
            </Dropdown>

            <Dropdown
              menu={{ items: dateItems }}
              visible={visibleDate}
              onVisibleChange={(flag) => setVisibleDate(flag)}
              overlayClassName="filter-drop"
              trigger={["click"]}
              dropdownRender={(menu) => (
                <div>
                  {menu}
                  <div className="drop-footer">
                    <Button type="text">Reset all</Button>
                    <Button type="primary" onClick={handleShowResultsClick}>
                      Show results
                    </Button>
                  </div>
                </div>
              )}
            >
              <button onClick={(e) => e.preventDefault()}>
                Date <SvgIcon name="chevron-bottom" viewbox="0 0 13 8" />
              </button>
            </Dropdown>
            <Dropdown
              menu={{ items: priceRangeItems }}
              visible={visiblePrice}
              onVisibleChange={(flag) => setVisiblePrice(flag)}
              overlayClassName="filter-drop"
              trigger={["click"]}
              dropdownRender={(menu) => (
                <div>
                  {menu}
                  <div className="drop-footer">
                    <Button type="text">Reset all</Button>
                    <Button type="primary" onClick={handleShowResultsClick}>
                      Show results
                    </Button>
                  </div>
                </div>
              )}
            >
              <button onClick={(e) => e.preventDefault()}>
                Price Range <SvgIcon name="chevron-bottom" viewbox="0 0 13 8" />
              </button>
            </Dropdown>
          </div>
          <div className="banner-row">
            <h1 data-aos="fade-right" data-aos-duration="900">
              Get ready for <br /> global adventures
            </h1>
          </div>
        </Container>
      </section>
      <section className="handpickscollection-section">
        <Container>
          <Row>
            <Col>
              <h2
                className="heading"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                Something <br /> for you
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Sliders
                className="handpicks-collection-slider"
                {...settingsHandpickedCollections}
              >
                {/* <div>
                  <Card
                    cover={<img alt="example" src={somethingImg1} />}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                  >
                    <div className="meta-row">
                      <div className="meta-left">
                        <h2>
                          Super 10 <br /> Attractions
                        </h2>
                      </div>
                      <Button
                        onClick={() =>
                          window.open("/group-listing-page", "_self")
                        }
                      >
                        {" "}
                        Explore{" "}
                        <SvgIcon name="arrow-right" viewbox="0 0 14 9" />
                      </Button>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card
                    cover={<img alt="example" src={somethingImg2} />}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                  >
                    <div className="meta-row">
                      <div className="meta-left">
                        <h2>
                          Trending <br /> places
                        </h2>
                      </div>
                      <Button
                        onClick={() =>
                          window.open("/group-listing-page", "_self")
                        }
                      >
                        {" "}
                        Explore{" "}
                        <SvgIcon name="arrow-right" viewbox="0 0 14 9" />
                      </Button>
                    </div>
                  </Card>
                </div> */}
                {featuredOfferList &&
                  featuredOfferList.map((e, i) => (
                    <div key={i}>
                      <Card
                        cover={
                          <img alt="example" src={e.discoverBannerImage} />
                        }
                        data-aos="fade-in"
                        data-aos-duration="1000"
                      >
                        <div className="meta-row">
                          <div className="meta-left">
                            <h2>{e.rgroup_title}</h2>
                          </div>
                          <Button
                            onClick={() =>
                              window.open(
                                `/group-listing-page?rgroupId=${e.rgroup_id}`,
                                "_self"
                              )
                            }
                          >
                            Explore{" "}
                            <SvgIcon name="arrow-right" viewbox="0 0 14 9" />
                          </Button>
                        </div>
                      </Card>
                    </div>
                  ))}
              </Sliders>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="tour-section">
        <Container>
          <Row className="align-items-center mb-2">
            <Col>
              <h1>City Tour</h1>
            </Col>
            <Col className="text-right">
              <Link to="/listing-page">
                <Button className="more-btn" size="small">
                  More
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Sliders className="tour-slider" {...settingsTourSlider}>
                {TourData.map((item) => (
                  <div key={item.key}>
                    <Card
                      className="tp-item-card"
                      cover={<img alt="TP List" src={item.image} />}
                      extra={
                        <Button>
                          <SvgIcon name="heart" viewbox="0 0 10.238 9.131" />
                        </Button>
                      }
                      onClick={() => window.open("/details", "_self")}
                    >
                      <div className="bottom-row">
                        <div className="left-col">
                          <h3>{item.name}</h3>
                          <div className="price-col">
                            From <span className="bottomprice">AED 340</span> /
                            person <span className="off-price">AED 523</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </Sliders>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="tour-section">
        <Container>
          <Row className="align-items-center mb-2">
            <Col>
              <h1>City Tour</h1>
            </Col>
            <Col className="text-right">
              <Link to="/listing-page">
                <Button className="more-btn" size="small">
                  More
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Sliders className="tour-slider" {...settingsTourSlider}>
                {TourData.map((item) => (
                  <div key={item.key}>
                    <Card
                      className="tp-item-card"
                      cover={<img alt="TP List" src={item.image} />}
                      extra={
                        <Button>
                          <SvgIcon name="heart" viewbox="0 0 10.238 9.131" />
                        </Button>
                      }
                      onClick={() => window.open("/details", "_self")}
                    >
                      <div className="bottom-row">
                        <div className="left-col">
                          <h3>{item.name}</h3>
                          <div className="price-col">
                            From <span className="bottomprice">AED 340</span> /
                            person <span className="off-price">AED 523</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </Sliders>
            </Col>
          </Row>
        </Container>
      </section> */}

      {featuredOfferList2 &&
        featuredOfferList2.map((e, i) => (
          <section className="tour-section" key={i}>
            <Container>
              <Row className="align-items-center mb-2">
                <Col>
                  <h1>{e.rCategoryName || e.gCategoryName}</h1>
                </Col>
                <Col className="text-right">
                  <Link
                    to={`/listing-page?gCategoryID=${e.rCategoryID || e.gCategoryID
                      }`}
                  >
                    <Button className="more-btn" size="small">
                      More
                    </Button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Sliders className="tour-slider" {...settingsTourSlider}>
                    {e.topTenDeals.map((item, key) => (
                      <div key={key} >
                        <div style={{ position: 'relative' }}>
                          <Button style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "30px",
                            padding: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: "15px",
                            right: "15px",
                            zIndex: "1",
                          }}
                            onClick={() => {
                              handleFavToggle(i, key, item.isFavouriteOffer === 0 ? 1 : 0, item.tourId)
                            }}
                          >
                            <SvgIcon
                              name="heart"
                              viewbox="0 0 10.238 9.131"
                              fill={item.isFavouriteOffer === 0 ? "#000" : "#FF5D5D"}
                            />
                          </Button>
                          <Card
                            className="tp-item-card"
                            cover={
                              <img
                                alt="TP List"
                                src={item.rTourImage || item.gProductImage}
                              />
                            }
                            // extra={
                            //   <Button>
                            //     <SvgIcon
                            //       name="heart"
                            //       viewbox="0 0 10.238 9.131"
                            //     />
                            //   </Button>
                            // }
                            onClick={() => {
                              if (item.tourId) {
                                window.open(
                                  `/rayna-details?tourId=${item.tourId}`,
                                  "_self"
                                );
                              } else {
                                window.open(
                                  `/details?productId=${item.productId}`,
                                  "_self"
                                );
                              }
                            }}
                          >
                            <div className="bottom-row">
                              <div className="left-col">
                                <h3>{item.tourName}</h3>
                                <div className="price-col">
                                  From{" "}
                                  <span className="bottomprice">
                                    AED {item.adultPrice}
                                  </span>{" "}
                                  / person{" "}
                                  <span className="off-price">AED 523</span>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </Sliders>
                </Col>
              </Row>
            </Container>
          </section>
        ))}

      <section className="howitwork-section">
        <Container>
          <Row className="align-items-center">
            <Col md="6" className="howworkimg-left">
              <label data-aos="fade-right" data-aos-duration="700">
                HOW IT WORKS
              </label>
              <h2 data-aos="fade-right" data-aos-duration="800">
                Experience cities across the globe like never before with
                Discover Your City
              </h2>
              <div
                className="social-links"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <Button>
                  <SvgIcon name="instagram" viewbox="0 0 17.137 17.137" />
                </Button>
                <Button>
                  <SvgIcon name="facebook" viewbox="0 0 8.106 17.344" />
                </Button>
                <Button>
                  <SvgIcon name="linkedin" viewbox="0 0 16.165 16.137" />
                </Button>
                <Button>
                  <SvgIcon name="youtube" viewbox="0 0 11 9" />
                </Button>
                <Button>
                  <SvgIcon name="tiktok" viewbox="0 0 11 13" />
                </Button>
                <Button>
                  <SvgIcon name="medium" viewbox="0 0 17.135 14.163" />
                </Button>
              </div>
            </Col>
            <Col md="6">
              <div
                className="howworkimg-card"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <Button>
                  <SvgIcon name="play-alt" viewbox="0 0 30.001 30" /> Watch
                </Button>
                <img src={howitworkImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blog-section">
        <Container>
          <Row>
            <Col>
              <div className="blog-upper">
                <Row>
                  <Col lg="6" data-aos="fade-right" data-aos-duration="800">
                    <img className="blog-img" src={BlogImg1} alt="Blog" />
                  </Col>
                  <Col lg="6" data-aos="fade-left" data-aos-duration="800">
                    <label>Blogs</label>
                    <h3>Your perfect plan for an unforgettable holidays</h3>
                    <p>
                      People of the UAE, Eid Holidays are approaching. So,
                      planning the ultimate Eid weekend is what is on most of
                      our minds as we all want to make the most out of this Eid
                      weekend.
                    </p>
                    <Button
                      type="primary"
                      className="with-icon"
                      icon={
                        <SvgIcon
                          name="chevron-right"
                          viewbox="0 0 4.029 6.932"
                        />
                      }
                    >
                      Read More
                    </Button>
                    <div className="bottom-text">Nov 29 - 3 min read</div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <List
                data-aos="fade-up"
                data-aos-duration="800"
                itemLayout="horizontal"
                dataSource={Blogdata}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button>
                        {" "}
                        <SvgIcon
                          name="chevron-right"
                          viewbox="0 0 4.029 6.932"
                        />{" "}
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<img src={item.avatar} alt="" />}
                      title={item.title}
                      description={item.date}
                    />
                  </List.Item>
                )}
              />
              <div className="more-blog">
                <ul>
                  <li>
                    <img src={Tpimg1} alt="Blog More" />
                  </li>
                  <li>
                    <img src={Tpimg2} alt="Blog More" />
                  </li>
                  <li>
                    <img src={Tpimg3} alt="Blog More" />
                  </li>
                  <li>
                    <img src={Tpimg4} alt="Blog More" />
                  </li>
                </ul>
                <Button type="link">+ 23 Blogs</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="letsjoin-section">
        <Container>
          <Row>
            <Col>
              <div
                className="letsjoin-row"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <div className="letsjoin-card">
                  <h3>
                    Thrilling <br /> Experiences
                  </h3>
                  <SvgIcon name="bus" viewbox="0 0 56 34" />
                  <p className="mb-0 upto-text">
                    <small>Up to</small>
                  </p>
                  <h2>30% OFF</h2>
                  <p>On experiences</p>
                  <Button type="secondary" size="medilum">
                    Book Now
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="testomonial-section">
        <Container>
          <ParallaxProvider>
            <Row>
              <Col sm="12" className="mb-4">
                <Parallax disabled={isMobile}>
                  <h1 className="heading mb-0">What they say</h1>
                  <p className="heading-p-tag">*App Store Reviews</p>
                </Parallax>
              </Col>
              <Col sm="12">
                <Sliders className="testomonial-slider" {...settingsClients}>
                  <div>
                    <div className="testomonial-row">
                      <Parallax speed={10} disabled={isMobile}>
                        <img
                          className="testomonial-image"
                          src={testimonialImg}
                          alt="Testimonial"
                        />
                      </Parallax>
                      <div className="right-text">
                        <Parallax speed={14} disabled={isMobile}>
                          <p>
                            I just wanted to share a quick note and let you know
                            that you guys do a really good job. I’m glad I
                            decided to work with you. It’s really great how easy
                            your websites are to update and manage.
                          </p>
                        </Parallax>
                        <Parallax speed={10} disabled={isMobile}>
                          <h3>Amelia Kimani</h3>
                        </Parallax>
                        <Parallax speed={9} disabled={isMobile}>
                          <hr />
                        </Parallax>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testomonial-row">
                      <Parallax speed={10} disabled={isMobile}>
                        <img
                          className="testomonial-image"
                          src={testimonialImg2}
                          alt="Testimonial"
                        />
                      </Parallax>
                      <div className="right-text">
                        <Parallax speed={14} disabled={isMobile}>
                          <p>
                            Worth it! <br />
                            Highly recommend this app over most available in the
                            market today. I have been using it for 3 years now
                            and am super happy with my savings. The new
                            interface of the app makes it easy to navigate and
                            find the best options close to you!
                          </p>
                        </Parallax>
                        <Parallax speed={10} disabled={isMobile}>
                          <h3>Karthik</h3>
                        </Parallax>
                        <Parallax speed={9} disabled={isMobile}>
                          <hr />
                        </Parallax>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testomonial-row">
                      <Parallax speed={10} disabled={isMobile}>
                        <img
                          className="testomonial-image"
                          src={testimonialImg3}
                          alt="Testimonial"
                        />
                      </Parallax>
                      <div className="right-text">
                        <Parallax speed={14} disabled={isMobile}>
                          <p>
                            Excellent customer service <br />
                            Had an issue with one of the restaurants while using
                            TravellerPass. TravellerPass resolved this through
                            their persistent follow-up with the restaurant. The
                            restaurant called and even offered a free dish.
                            Five-star customer service indeed from
                            TravellerPass.
                          </p>
                        </Parallax>
                        <Parallax speed={10} disabled={isMobile}>
                          <h3>Marvina</h3>
                        </Parallax>
                        <Parallax speed={9} disabled={isMobile}>
                          <hr />
                        </Parallax>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testomonial-row">
                      <Parallax speed={10} disabled={isMobile}>
                        <img
                          className="testomonial-image"
                          src={testimonialImg4}
                          alt="Testimonial"
                        />
                      </Parallax>
                      <div className="right-text">
                        <Parallax speed={14} disabled={isMobile}>
                          <p>
                            Great Experience <br />
                            Have been using this app over last year and a half;
                            amazing experience, covers all the major outlet in
                            Dubai with amazing deals in all. Strongly recommend
                            everyone to download the app and open up the great
                            offers….
                          </p>
                        </Parallax>
                        <Parallax speed={10} disabled={isMobile}>
                          <h3>Jamie</h3>
                        </Parallax>
                        <Parallax speed={9} disabled={isMobile}>
                          <hr />
                        </Parallax>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testomonial-row">
                      <Parallax speed={10} disabled={isMobile}>
                        <img
                          className="testomonial-image"
                          src={testimonialImg5}
                          alt="Testimonial"
                        />
                      </Parallax>
                      <div className="right-text">
                        <Parallax speed={14} disabled={isMobile}>
                          <p>
                            Awesome! <br />
                            It’s easy to use and very handy. It helps a lot to
                            save more. Worth every penny😍
                          </p>
                        </Parallax>
                        <Parallax speed={10} disabled={isMobile}>
                          <h3>Nikol</h3>
                        </Parallax>
                        <Parallax speed={9} disabled={isMobile}>
                          <hr />
                        </Parallax>
                      </div>
                    </div>
                  </div>
                </Sliders>
              </Col>
            </Row>
          </ParallaxProvider>
        </Container>
      </section>
      <DownloadSection />
    </div>
  );
};

export default LandingPage;
