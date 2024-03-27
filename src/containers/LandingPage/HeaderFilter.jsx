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
const HeaderFilter = () => {
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
  );
};

export default HeaderFilter;
