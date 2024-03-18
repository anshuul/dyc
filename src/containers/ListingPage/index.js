import React, { useEffect, useState } from "react";
import { Container, Row, Col, SvgIcon } from "../../components/common";
import { Button, Card, Slider, Dropdown, Checkbox } from "antd";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import "./index.scss";

import Listimg1 from "../../assets/images/list-img-1.jpg";
import Listimg2 from "../../assets/images/list-img-2.jpg";
import Listimg3 from "../../assets/images/list-img-3.jpg";
import Listimg4 from "../../assets/images/list-img-4.jpg";
import Listimg5 from "../../assets/images/list-img-5.jpg";
import Listimg6 from "../../assets/images/list-img-6.jpg";
import Listimg7 from "../../assets/images/list-img-7.jpg";
import Listimg8 from "../../assets/images/list-img-8.jpg";
import Listimg9 from "../../assets/images/list-img-9.jpg";
import Listimg10 from "../../assets/images/list-img-10.jpg";
import Listimg11 from "../../assets/images/list-img-11.jpg";
import Listimg12 from "../../assets/images/list-img-12.jpg";
import Listimg13 from "../../assets/images/list-img-13.jpg";
import Listimg14 from "../../assets/images/list-img-14.jpg";
import Listimg15 from "../../assets/images/list-img-15.jpg";
import Listimg16 from "../../assets/images/list-img-16.jpg";
import apiClient from "../../apiConfig";
import Apis from "../../utility/apis";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  resetCheckedItems,
  selectCheckedItems,
  setCheckedItems,
} from "../../slice/checkedItemsSlice";
import { selectSelectedDate, setSelectedDate } from "../../slice/dateSlice";
import {
  selectSelectedPriceRange,
  setSelectedPriceRange,
} from "../../slice/priceRangeSlice";

const ListingPage = () => {
  const history = useHistory();
  const userData = localStorage.getItem("userData");
  const dispatch = useDispatch();

  const ListData = [
    { key: 1, name: "Iconic Markets Meander", image: Listimg1 },
    { key: 2, name: "Iconic Markets Meander", image: Listimg2, rayna: true },
    { key: 3, name: "Iconic Markets Meander", image: Listimg3 },
    { key: 4, name: "Iconic Markets Meander", image: Listimg4 },
    { key: 5, name: "Iconic Markets Meander", image: Listimg5 },
    { key: 6, name: "Iconic Markets Meander", image: Listimg6 },
    { key: 7, name: "Iconic Markets Meander", image: Listimg7 },
    { key: 8, name: "Iconic Markets Meander", image: Listimg8 },
    { key: 9, name: "Iconic Markets Meander", image: Listimg9 },
    { key: 10, name: "Iconic Markets Meander", image: Listimg10 },
    { key: 11, name: "Iconic Markets Meander", image: Listimg11 },
    { key: 12, name: "Iconic Markets Meander", image: Listimg12 },
    { key: 13, name: "Iconic Markets Meander", image: Listimg13 },
    { key: 14, name: "Iconic Markets Meander", image: Listimg14 },
    { key: 15, name: "Iconic Markets Meander", image: Listimg15 },
    { key: 16, name: "Iconic Markets Meander", image: Listimg16 },
    { key: 17, name: "Iconic Markets Meander", image: Listimg11 },
    { key: 18, name: "Iconic Markets Meander", image: Listimg12 },
    { key: 19, name: "Iconic Markets Meander", image: Listimg1 },
    { key: 20, name: "Iconic Markets Meander", image: Listimg2 },
    { key: 21, name: "Iconic Markets Meander", image: Listimg3 },
    { key: 22, name: "Iconic Markets Meander", image: Listimg4 },
    { key: 23, name: "Iconic Markets Meander", image: Listimg5 },
    { key: 24, name: "Iconic Markets Meander", image: Listimg6 },
    { key: 25, name: "Iconic Markets Meander", image: Listimg7 },
    { key: 26, name: "Iconic Markets Meander", image: Listimg8 },
    { key: 27, name: "Iconic Markets Meander", image: Listimg9 },
    { key: 28, name: "Iconic Markets Meander", image: Listimg10 },
    { key: 29, name: "Iconic Markets Meander", image: Listimg11 },
    { key: 30, name: "Iconic Markets Meander", image: Listimg12 },
    { key: 31, name: "Iconic Markets Meander", image: Listimg13 },
    { key: 32, name: "Iconic Markets Meander", image: Listimg14 },
    { key: 33, name: "Iconic Markets Meander", image: Listimg15 },
    { key: 34, name: "Iconic Markets Meander", image: Listimg16 },
    { key: 35, name: "Iconic Markets Meander", image: Listimg11 },
    { key: 36, name: "Iconic Markets Meander", image: Listimg12 },
    { key: 37, name: "Iconic Markets Meander", image: Listimg1 },
    { key: 38, name: "Iconic Markets Meander", image: Listimg2 },
    { key: 39, name: "Iconic Markets Meander", image: Listimg3 },
    { key: 40, name: "Iconic Markets Meander", image: Listimg4 },
    { key: 41, name: "Iconic Markets Meander", image: Listimg5 },
    { key: 42, name: "Iconic Markets Meander", image: Listimg6 },
    { key: 43, name: "Iconic Markets Meander", image: Listimg7 },
    { key: 44, name: "Iconic Markets Meander", image: Listimg8 },
    { key: 45, name: "Iconic Markets Meander", image: Listimg9 },
    { key: 46, name: "Iconic Markets Meander", image: Listimg10 },
    { key: 47, name: "Iconic Markets Meander", image: Listimg11 },
    { key: 48, name: "Iconic Markets Meander", image: Listimg12 },
    { key: 49, name: "Iconic Markets Meander", image: Listimg13 },
    { key: 50, name: "Iconic Markets Meander", image: Listimg14 },
    { key: 51, name: "Iconic Markets Meander", image: Listimg15 },
    { key: 52, name: "Iconic Markets Meander", image: Listimg16 },
    { key: 53, name: "Iconic Markets Meander", image: Listimg11 },
    { key: 54, name: "Iconic Markets Meander", image: Listimg12 },
    { key: 55, name: "Iconic Markets Meander", image: Listimg12 },
    { key: 56, name: "Iconic Markets Meander", image: Listimg1 },
    { key: 57, name: "Iconic Markets Meander", image: Listimg2 },
    { key: 58, name: "Iconic Markets Meander", image: Listimg3 },
    { key: 59, name: "Iconic Markets Meander", image: Listimg4 },
    { key: 60, name: "Iconic Markets Meander", image: Listimg5 },
    { key: 61, name: "Iconic Markets Meander", image: Listimg6 },
    { key: 62, name: "Iconic Markets Meander", image: Listimg7 },
    { key: 63, name: "Iconic Markets Meander", image: Listimg8 },
    { key: 64, name: "Iconic Markets Meander", image: Listimg9 },
    { key: 65, name: "Iconic Markets Meander", image: Listimg10 },
    { key: 66, name: "Iconic Markets Meander", image: Listimg11 },
    { key: 67, name: "Iconic Markets Meander", image: Listimg12 },
    { key: 68, name: "Iconic Markets Meander", image: Listimg13 },
    { key: 69, name: "Iconic Markets Meander", image: Listimg14 },
    { key: 70, name: "Iconic Markets Meander", image: Listimg15 },
    { key: 71, name: "Iconic Markets Meander", image: Listimg16 },
    { key: 72, name: "Iconic Markets Meander", image: Listimg11 },
  ];

  const selectedCity = useSelector((state) => state.citySearch.selectedCity);

  const [categoryList, setCategoryList] = useState([]);
  const checkedItems = useSelector(selectCheckedItems);

  console.log("checkedItems: ", checkedItems);

  useEffect(() => {
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
    setVisibleDate(false);
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
    setVisibleDate(false);
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
              value={selectedDate} // Set the value prop to the selectedDate
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

  const handleShowPriceClick = () => {
    setVisiblePrice(false);
  };

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
      const checkedCategoryNames = checkedItems.map(
        (item) => item.rCategoryName
      );
      queryParams.push(`categories=${checkedCategoryNames.join(",")}`);
    }

    // Check if date is selected
    if (selectedDate) {
      const { day, date, month, year } = selectedDate;
      const dateParam = `${day} ${month} ${date} ${year}`;
      queryParams.push(`selectedDate=${encodeURIComponent(dateParam)}`);
    }

    // Check if price range is selected
    if (selectedPriceRange.start !== 0 || selectedPriceRange.limit !== 100) {
      const { start, limit } = selectedPriceRange;
      queryParams.push(`start=${start}&limit=${limit}`);
    }

    // Construct the query string
    const queryString = queryParams.join("&");

    // Redirect to listing-page with query parameters
    history.push(`/listing-page${queryString ? `?${queryString}` : ""}`);
    setVisible(false);
  };

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const param = searchParams.get("gCategoryID");

  const categoriesParam = searchParams.get("categories");
  const selectedDateParam = searchParams.get("selectedDate");
  console.log("categoriesParam: ", categoriesParam)
  console.log("selectedDateParam: ", selectedDateParam)
  const startParam = searchParams.get("start");
  const limitParam = searchParams.get("limit");

  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.post(
          // Fetch data from API
          Apis(
            "tourList",
            selectedCity.vCountryName,
            userData ? "loggedIn" : "guest"
          ),
          // Apis("listByGroup", selectedCity.vCountryName, "guest"),
          {
            iCountryID: selectedCity.iCountryID,
            dCurrentLat: selectedCity.vCityLatitude,
            dCurrentLong: selectedCity.vCityLongitude,
            vCityName: selectedCity.vCityName,
            iCityID: selectedCity.iCityID,
            rCategoryID: categoriesParam,
            bookingDate: selectedDateParam,
            Language: "en",
          },
          {
            headers: {
              uCurrency: "AED",
            },
          }
        );

        console.log("response,response: ", response);
        // Update ListData state with the received data
        setListData(response.data?.DATA || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function
    fetchData();
  }, [param]);

  return (
    <div className="twl-listing-wrapper">
      <section className="listing-bottom">
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
                                onChange={() => handleCheckboxChange(category)}
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
        <Container className="listing-container">
          <Row>
            <Col>
              <div className="listing-row">
                {listData.map((item) => (
                  <Card
                    className="tp-item-card"
                    key={item.productId}
                    cover={<img alt="TP List" src={item.rTourImage} />}
                    extra={
                      <Button>
                        <SvgIcon name="heart" viewbox="0 0 10.238 9.131" />
                      </Button>
                    }
                    onClick={() =>
                      window.open(
                        `${
                          item.rayna
                            ? "/rayna-details"
                            : `/rayna-details?tourId=${item.tourId}`
                        }`,
                        "_self"
                      )
                    }
                    // onClick={() => {
                    //   if (item.tourId) {
                    //     window.open(`/details?tourId=${item.tourId}`, "_self");
                    //   } else {
                    //     window.open(
                    //       `/rayna-details?productId=${item.productId}`,
                    //       "_self"
                    //     );
                    //   }
                    // }}
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
                          <span className="off-price">
                            AED {item.originalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                {/* {ListData.map(item =>
                                    <Card
                                        className='tp-item-card'
                                        cover={<img alt="TP List" src={item.image} />}
                                        extra={<Button><SvgIcon name='heart' viewbox='0 0 10.238 9.131' /></Button>}
                                        onClick={() => window.open(`${item.rayna ? "/rayna-details" : "/details"}`, "_self")}
                                    >
                                        <div className='bottom-row'>
                                            <div className='left-col'>
                                                <h3>{item.name}</h3>
                                                <div className='price-col'>
                                                    From <span className='bottomprice'>AED 340</span> / person <span className='off-price'>AED 523</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                )} */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                type="primary"
                className="map-btn"
                onClick={() => window.open("/listing-page-map", "_self")}
              >
                Map <SvgIcon name="map-icon" viewbox="0 0 14.855 14.695" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ListingPage;
