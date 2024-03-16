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
import GroupImg from "../../assets/images/group-img.jpg";
import { useSelector } from "react-redux";
import apiClient from "../../apiConfig";
import Apis from "../../utility/apis";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const GroupListingPage = () => {
  const ListData = [
    { key: 1, name: "Iconic Markets Meander", image: Listimg1 },
    { key: 2, name: "Iconic Markets Meander", image: Listimg2 },
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
  ];

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

  const items = [
    {
      key: "1",
      label: (
        <div className="category-box">
          <h3>Category</h3>
          <ul>
            <li>
              City Tour <Checkbox />
            </li>
            <li>
              Attractions <Checkbox />
            </li>
            <li>
              Water Sport <Checkbox />
            </li>
            <li>
              Art and culture <Checkbox />
            </li>
            <li>
              Heritage <Checkbox />
            </li>
            <li>
              Food and Drinks <Checkbox />
            </li>
            <li>
              Wellness <Checkbox />
            </li>
            <li>
              Entertainment <Checkbox />
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const dateItems = [
    {
      key: "1",
      label: (
        <div className="category-box">
          <h3>Planning your trip?</h3>
          <div className="planning-time">
            <Calendar />
          </div>
        </div>
      ),
    },
  ];

  const priceRangeItems = [
    {
      key: "1",
      label: (
        <div className="category-box">
          <h3>Price Range</h3>
          <div className="price-range">
            <div className="minmax-row">
              <div className="colum">
                <label>$10</label>
                <p>Minimum</p>
              </div>
              <div className="colum">
                <label>$10</label>
                <p>Maximum</p>
              </div>
            </div>
            <Slider range marks={marks} defaultValue={[10, 50]} />
          </div>
        </div>
      ),
    },
  ];

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const param = searchParams.get("rgroupId");
  console.log("param: ", param)

  const userData = localStorage.getItem("userData");
  const [groupData, setGroupData] = useState([]);
  const [groupTitle, setGroupTitle] = useState("");
  const [groupImage, setGroupImage] = useState("");
  const selectedCity = useSelector((state) => state.citySearch.selectedCity);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.post(
          // Fetch data from API
          Apis("listByGroup", selectedCity.vCountryName, userData ? "loggedIn" : "guest"),
          {
            iCountryID: selectedCity.iCountryID,
            dCurrentLat: selectedCity.vCityLatitude,
            dCurrentLong: selectedCity.vCityLongitude,
            iCityID: selectedCity.iCityID,
            Language: "en",
            rgroup_id: param,
          },
          {
            headers: {
              uCurrency: "AED",
            },
          }
        );

        // Extracting rgroup_title and rgroup_image2023 from response
        const { rgroup_title, rgroup_image2023, DATA } = response.data;

        // Set group title and image
        setGroupTitle(rgroup_title);
        setGroupImage(rgroup_image2023);

        // Set group data
        setGroupData(DATA);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData function
    fetchData();
  }, [selectedCity]);

  return (
    <div className="twl-listing-wrapper">
      <section className="listing-bottom">
        <div className="upperfilters-row">
          <Dropdown
            menu={{ items }}
            overlayClassName="filter-drop"
            trigger={["click"]}
            dropdownRender={(menu) => (
              <div>
                {menu}
                <div className="drop-footer">
                  <Button type="text">Reset all</Button>
                  <Button type="primary">Show results</Button>
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
            overlayClassName="filter-drop"
            trigger={["click"]}
            dropdownRender={(menu) => (
              <div>
                {menu}
                <div className="drop-footer">
                  <Button type="text">Reset all</Button>
                  <Button type="primary">Show results</Button>
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
            overlayClassName="filter-drop"
            trigger={["click"]}
            dropdownRender={(menu) => (
              <div>
                {menu}
                <div className="drop-footer">
                  <Button type="text">Reset all</Button>
                  <Button type="primary">Show results</Button>
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
              {groupImage && groupTitle && (
                <div className="group-list-upper">
                  <div className="left-img">
                    <img src={groupImage} alt={groupTitle} />
                  </div>
                  <div className="right-dtls">
                    <h1>{groupTitle}</h1>
                    <div className="bottom-row">
                      <div className="group-stats">
                        <div className="group-stats-img">
                          {/* Display a default image or placeholder if needed */}
                          {/* <img src={Listimg1} alt="" /> */}
                          <img src={groupImage} alt="" />
                        </div>
                        <div>
                          <label>Next</label>
                          <h4>Trending places</h4>
                        </div>
                      </div>
                      <Button>
                        Explore{" "}
                        <SvgIcon name="arrow-right" viewbox="0 0 14 9" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="listing-row">
                {groupData &&
                  groupData.map((item) => (
                    <Card
                      key={item.tourId} // Assuming tourId is unique
                      className="tp-item-card"
                      cover={<img alt="TP List" src={item.rTourImage} />} // Use rTourImage from item
                      extra={
                        <Button>
                          <SvgIcon name="heart" viewbox="0 0 10.238 9.131" />
                        </Button>
                      }
                      onClick={() => window.open("/details", "_self")}
                    >
                      <div className="bottom-row">
                        <div className="left-col">
                          <h3>{item.tourName}</h3>{" "}
                          {/* Use tourName from item */}
                          <div className="price-col">
                            From{" "}
                            <span className="bottomprice">
                              AED {item.adultPrice}
                            </span>{" "}
                            / person {/* Use adultPrice from item */}
                            <span className="off-price">
                              AED {item.orginalPrice}
                            </span>{" "}
                            {/* Use orginalPrice from item */}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
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

export default GroupListingPage;
