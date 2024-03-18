import React, { useEffect, useState } from "react";
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

const DetailsPage = () => {
  const [tourDetails, setTourDetails] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const param = searchParams.get("tourId");
  console.log("param: ", param);

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
            Language: "en",
            tourId: param,
          },
          {
            headers: {
              uCurrency: "AED",
            },
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

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

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

  const items = [
    {
      key: "1",
      label: (
        <div className="participants-select">
          <h3>Participants</h3>
          {/* Your other components */}
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

  const handleDateChange = (date, dateString) => {
    console.log("Selected Date:", dateString);
  };

  const handlePromoCodeChange = (e) => {
    const promoCodeValue = e.target.value;
    console.log("Entered Promo Code:", promoCodeValue);
  };

  const selectedData = `${counts.adult} Adult${counts.adult > 1 ? "s" : ""}, ${
    counts.child
  } Child${counts.child > 1 ? "ren" : ""}, ${counts.infant} Infant${
    counts.infant > 1 ? "s" : ""
  }`;

  console.log("Selected Data:", selectedData);

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
                  window.location.href = `/discover/checkout?tourId=${param}`;
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
                        <div className="options-colum">
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
                        </div>
                        <div className="availability-colum">
                          <h4>Availability</h4>
                          <Row>
                            <Col>
                              <Form.Item name="date" label="DATE">
                                <DatePicker
                                  popupClassName="pickdate-drop"
                                  onChange={handleDateChange}
                                  icon={false}
                                  suffixIcon={false}
                                  placeholder="DD / MM / YYYY"
                                />
                              </Form.Item>
                            </Col>
                            <Col>
                              <Form.Item name="time" label="TIME">
                                <Select
                                  placement="bottomRight"
                                  defaultValue="option1"
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
                                  options={[
                                    {
                                      value: "option1",
                                      label: (
                                        <div className="time-row">
                                          <div className="time-left">
                                            12 <span>pm</span>
                                          </div>
                                          <div className="right-price">$50</div>
                                        </div>
                                      ),
                                    },
                                    {
                                      value: "option2",
                                      label: (
                                        <div className="time-row">
                                          <div className="time-left">
                                            12 <span>pm</span>
                                          </div>
                                          <div className="right-price">$50</div>
                                        </div>
                                      ),
                                    },
                                    {
                                      value: "option3",
                                      label: (
                                        <div className="time-row">
                                          <div className="time-left">
                                            12 <span>pm</span>
                                          </div>
                                          <div className="right-price">$50</div>
                                        </div>
                                      ),
                                    },
                                  ]}
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
                              AED <b>101</b>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="bottom-action mt-3">
                        <MediaQuery minWidth={767}>
                          <Button
                            type="primary"
                            onClick={() => {
                              window.location.href = `/discover/checkout?tourId=${param}`;
                            }}
                            block
                          >
                            Book Now
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
                </div>

                <div className="operatinghours-row">
                  <h2>Operating Hours</h2>
                  <ul>
                    <li>
                      Monday <label>10:00 - 19:00</label>
                    </li>
                    <li>
                      Tuesday <label>10:00 - 19:00</label>
                    </li>
                    <li>
                      Wednesday <label>10:00 - 19:00</label>
                    </li>
                    <li>
                      Thursday <label>10:00 - 19:00</label>
                    </li>
                    <li>
                      Friday <label>10:00 - 19:00</label>
                    </li>
                    <li>
                      Saturday <label>10:00 - 19:00</label>
                    </li>
                    <li>
                      Sunday <label>10:00 - 19:00</label>
                    </li>
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

                {/* <div className="whatexpect-row">
                  <h2>What to Expect</h2>
                  <ul>
                    {tourDetails && tourDetails.whatsInThisTour ? (
                      parseHtmlStringToArray(tourDetails.whatsInThisTour).map((item, index) => (
                        <li key={index}>
                          <div className="check-circle">
                            <SvgIcon name="check" viewbox="0 0 10.289 9.742" />
                          </div>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))
                    ) : (
                      <li>No information available</li>
                    )}
                  </ul>
                </div> */}

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

export default DetailsPage;
