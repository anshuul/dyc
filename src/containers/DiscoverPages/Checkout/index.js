import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  SvgIcon,
  FloatLabel,
} from "../../../components/common";
import { Button, Input, Form, Select } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

import { useHistory } from "react-router-dom";
import PayImage from "../../../assets/images/checkout-img.png";
import CreditCard from "../../../assets/images/credit-card.png";
import GpayIcon from "../../../assets/images/gpay.png";
import AppleIcon from "../../../assets/images/applepay.png";
import MasterCard from "../../../assets/images/mastercard-icon.png";
import PaymentsType from "../../../assets/images/payments-type.png";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import apiClient from "../../../apiConfig";
import Apis from "../../../utility/apis";
import { useSelector } from "react-redux";
// import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from "./PaymentComponent";

const CheckoutDiscover = () => {
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  // Get individual parameters
  const tourId = searchParams.get("tourId");
  const adult = searchParams.get("adult");
  const child = searchParams.get("child");
  const infant = searchParams.get("infant");
  const promoCode = searchParams.get("tPromoCode");
  const tourOptionId = searchParams.get("tourOptionId");
  const travelDate = searchParams.get("travelDate");
  const transferId = searchParams.get("transferId");
  const timeSlotId = searchParams.get("timeSlotId");
  const grandTotal = searchParams.get("grandTotal");
  const transferType = decodeURIComponent(searchParams.get("transferType"));

  const userData = localStorage.getItem("userData");
  const userDataObj = JSON.parse(userData);
  const userObj = userDataObj.DATA;

  const selectedCity = useSelector((state) => state.citySearch.selectedCity);
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const [title, setTitle] = useState("Mr.");
  const [name, setName] = useState(userObj.vUserName);
  const [mobile, setMobile] = useState(userObj.vMobileNo);
  const [email, setEmail] = useState(userObj.vEmail);
  const [cardnumber, setCardnumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [promocode, setPromocode] = useState("");

  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await apiClient.post("/discover/discoverBookingData", {
          tourOptionId,
          travelDate,
          transferId,
        });
        console.log("response.data?.DATA: ", response.data?.DATA);
        setBookingData(response.data?.DATA || null);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    // Call fetchBookingData function
    fetchBookingData();
  }, []);

  console.log("bookingData bookingData bookingData: ", bookingData);

  console.log(
    "startTime:",
    bookingData?.tourPriceTransfertimeDetails?.startTime
  );
  const startTime = bookingData?.tourPriceTransfertimeDetails?.startTime;
const [stripeData, setStripeData] = useState({})
  const fetchData = async () => {
    try {
      const response = await apiClient.post(
        // Fetch data from API
        Apis(
          "transactionPrepare",
          selectedCity.vCountryName,
          userData ? "loggedIn" : "guest"
        ),
        {
          tourId: tourId,
          tourOptionId: tourOptionId,
          adultCount: adult,
          childCount: child,
          infantCount: infant,
          tourDate: travelDate,
          timeSlotId: timeSlotId,
          startTime: startTime || "16:00:00",
          pickup: "",
          adultRate: "19.0",
          childRate: "19.0",
          serviceTotal: "19.0",
          serviceType: "Tour",
          prefix: title,
          firstName: "Discover Your",
          lastName: "City",
          email: userObj.vEmail,
          mobile: userObj.vMobileNo,
          nationality: "",
          message: "",
          leadPassenger: "1",
          paxType: "Adult",
          clientReferenceNo: "3252628751",
          currency: selectedCurrency.uCurrency || "AED",
          tPromoCode: "",
          transferId: transferId,
        }
      );

      console.log(
        "transactionPrepare response status : ",
        response?.data?.DATA.stripeData
      );
      setStripeData(
        response?.data?.DATA.stripeData
      )

      if (response.data?.status === 1) {
        // history.push("/discover/successfully");
      } else {
        history.push("/discover/booking-failed");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePayAndConfirm = () => {
    fetchData(); // Call fetchData function
  };

  // Function to format time or default to 12pm
  const formatTime = (time) => {
    if (!time) return "12pm";
    // Add formatting logic if needed
    return time;
  };

  return (
    <div className="checkout-discover-wrapper">
      {/* <PaymentComponent stripeData={stripeData} /> */}
      <div className="checkoutdiscover-inner">
        <Container>
          <Row>
            <Col>
              <Form name="basic" autoComplete="off" layout="vertical">
                <div className="twl-row">
                  <div className="checkout-left">
                    <div
                      className="twl-header"
                      data-aos="fade-in"
                      data-aos-duration="800"
                    >
                      <Link to="/details">
                        <SvgIcon name="arrow-left" viewbox="0 0 12.251 8.653" />
                      </Link>
                      <h2>Confirm and Pay</h2>
                    </div>
                    <div className="twl-content">
                      <div className="twlcontent-inner">
                        <div className="confirm-details">
                          <h3>Details</h3>
                          <div className="dtl-row">
                            <div className="dtl-left">
                              <p>{travelDate}</p>
                              <label>Date</label>
                            </div>
                            <div className="dtl-right">
                              <Button type="text">Edit</Button>
                            </div>
                          </div>
                          <div className="dtl-row">
                            <div className="dtl-left">
                              <p>12pm</p>
                              <label>Time</label>
                            </div>
                            <div className="dtl-right">
                              <Button type="text">Edit</Button>
                            </div>
                          </div>
                          <div className="dtl-row">
                            <div className="dtl-left">
                              <p>
                                {parseInt(adult) +
                                  parseInt(child) +
                                  parseInt(infant)}
                              </p>
                              <label>Participants</label>
                            </div>
                            <div className="dtl-right">
                              <Button type="text">Edit</Button>
                            </div>
                          </div>
                          <div className="dtl-row">
                            <div className="dtl-left">
                              <p>{transferType}</p>
                              <label>Transfer Type</label>
                            </div>
                            <div className="dtl-right">
                              <Button type="text">Edit</Button>
                            </div>
                          </div>
                        </div>

                        <div className="participants-details">
                          <h3>Participants</h3>
                          <Row className="pt-2">
                            <Col className="colum" sm="2">
                              <Form.Item className="icon-less">
                                <FloatLabel
                                  label="TITLE"
                                  name="title"
                                  value={title}
                                >
                                  <Select
                                    value={title}
                                    suffixIcon={
                                      <SvgIcon
                                        name="down-arrow"
                                        viewbox="0 0 18 9"
                                      />
                                    }
                                    onChange={(value) => setTitle(value)}
                                    options={[
                                      { value: "Mr", label: "Mr" },
                                      { value: "Mrs", label: "Mrs" },
                                    ]}
                                  />
                                </FloatLabel>
                              </Form.Item>
                            </Col>
                            <Col className="colum" sm="4">
                              <Form.Item className="icon-less">
                                <FloatLabel
                                  label="Name"
                                  name="name"
                                  value={name}
                                >
                                  <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />
                                </FloatLabel>
                              </Form.Item>
                            </Col>
                            <Col className="colum" sm="6">
                              <Form.Item className="icon-less">
                                <FloatLabel
                                  label="MOBILE"
                                  name="mobile"
                                  value={mobile}
                                >
                                  <Input
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                  />
                                </FloatLabel>
                              </Form.Item>
                            </Col>
                            <Col className="colum" sm="6">
                              <Form.Item className="icon-less">
                                <FloatLabel
                                  label="EMAIL"
                                  name="email"
                                  value={email}
                                >
                                  <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </FloatLabel>
                              </Form.Item>
                            </Col>
                          </Row>
                        </div>

                        <div className="payment-details">
                          <h3>Payment</h3>
                          <img
                            className="paymenttype-img"
                            src={PaymentsType}
                            alt="Payment"
                          />
                          <Form.Item>
                            <Select
                              defaultValue="cc"
                              suffixIcon={
                                <SvgIcon name="down-arrow" viewbox="0 0 18 9" />
                              }
                              menuItemSelectedIcon={
                                <SvgIcon
                                  name="check"
                                  viewbox="0 0 9.344 7.199"
                                />
                              }
                              popupClassName="payment-drop"
                              options={[
                                {
                                  value: "mc",
                                  label: (
                                    <div className="paymenttype-item">
                                      <img src={MasterCard} alt="Credit Card" />{" "}
                                      ****3759{" "}
                                    </div>
                                  ),
                                },
                                {
                                  value: "cc",
                                  label: (
                                    <div className="paymenttype-item">
                                      <img src={CreditCard} alt="Credit Card" />{" "}
                                      Credit Card or debit Card{" "}
                                    </div>
                                  ),
                                },
                                {
                                  value: "gpay",
                                  label: (
                                    <div className="paymenttype-item">
                                      <img src={GpayIcon} alt="Credit Card" />{" "}
                                      Google Pay{" "}
                                    </div>
                                  ),
                                },
                                {
                                  value: "aply",
                                  label: (
                                    <div className="paymenttype-item">
                                      <img src={AppleIcon} alt="Credit Card" />{" "}
                                      Apple Pay
                                    </div>
                                  ),
                                },
                              ]}
                            />
                          </Form.Item>
                          <Row>
                            <Col className="colum" sm="12">
                              <Form.Item className="icon-less">
                                <FloatLabel
                                  label="Name"
                                  name="cardnumber"
                                  value={cardnumber}
                                >
                                  <Input
                                    value={cardnumber}
                                    onChange={(e) =>
                                      setCardnumber(e.target.value)
                                    }
                                  />
                                </FloatLabel>
                              </Form.Item>
                            </Col>
                            <Col className="colum" sm="6">
                              <Form.Item className="icon-less">
                                <FloatLabel
                                  label="Expiration"
                                  name="expiration"
                                  value={expiration}
                                >
                                  <Input
                                    value={expiration}
                                    onChange={(e) =>
                                      setExpiration(e.target.value)
                                    }
                                  />
                                </FloatLabel>
                              </Form.Item>
                            </Col>
                            <Col className="colum" sm="6">
                              <Form.Item className="icon-less">
                                <FloatLabel label="CVV" name="cvv" value={cvv}>
                                  <Input
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                  />
                                </FloatLabel>
                              </Form.Item>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-right">
                    <div className="twl-content">
                      <div className="twlcontent-inner">
                        <ul
                          className="summary-list"
                          data-aos="fade-left"
                          data-aos-duration="800"
                        >
                          <li>
                            <div className="image-col">
                              <img src={PayImage} alt="Explore Magic Imagica" />
                            </div>
                            <div className="list-left">
                              <h3>Explore Magic Imagica</h3>
                              <p>
                                <SvgIcon
                                  name="map"
                                  viewbox="0 0 8.358 12.537"
                                />{" "}
                                Royal residence in London, United Kingdom
                              </p>
                            </div>
                          </li>
                        </ul>
                        <div
                          className="payment-details"
                          data-aos="fade-left"
                          data-aos-duration="1200"
                        >
                          <Row className="discount-row">
                            <Col>Service Charge</Col>
                            <Col className="text-right">AED 23</Col>
                          </Row>
                          <Row className="discount-row">
                            <Col>Tax</Col>
                            <Col className="text-right">AED 78</Col>
                          </Row>
                          <Row className="willpay-row">
                            <Col>Grand Total</Col>
                            <Col className="text-right">
                              AED <b>{grandTotal}</b>
                            </Col>
                          </Row>
                        </div>
                        {/* <Link to="/discover/successfully"> */}
                        <Button
                          className="pay-btn"
                          data-aos="fade-left"
                          data-aos-duration="1250"
                          type="secondary"
                          block
                          onClick={handlePayAndConfirm}
                        >
                          Pay and Confirm
                        </Button>
                        {/* </Link> */}
                        <div
                          data-aos="fade-left"
                          data-aos-duration="800"
                          className="w-100"
                        >
                          <Form.Item className="">
                            <div className="coupon-wrapper">
                              <FloatLabel
                                label="ENTER PROMO CODE"
                                name="promocode"
                                value={promocode}
                              >
                                <Input
                                  prefix={
                                    <SvgIcon
                                      name="promo-code"
                                      viewbox="0 0 14.611 10.163"
                                    />
                                  }
                                  value={promocode}
                                  onChange={(e) => setPromocode(e.target.value)}
                                />
                              </FloatLabel>
                              <Button type="primary">Check</Button>
                            </div>
                            <div className="error-msg">
                              <SvgIcon name="error-icon" viewbox="0 0 12 12" />{" "}
                              Code is invalid
                            </div>
                            <div className="success-msg">
                              <SvgIcon
                                name="success-icon"
                                viewbox="0 0 12 12"
                              />{" "}
                              Code is valid
                            </div>
                          </Form.Item>
                        </div>
                        <Button
                          className="learn-btn"
                          data-aos="fade-left"
                          data-aos-duration="1300"
                          type="link"
                          icon={
                            <SvgIcon name="play" viewbox="0 0 41.93 41.965" />
                          }
                          block
                        >
                          Learn How to book
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
          {bookingData && (
            <Row>
              <Col className="cancelpolicy-info">
                <h3>Description</h3>
                <p className="mb-4">{bookingData?.optionDescription}</p>

                <h3>How to use</h3>
                <p className="mb-4">
                  Get Ready to enjoy At The Top Level 124th Floor & Sky View
                  Observatory tickets at the sky view Address Towers
                </p>

                <h3>Inclusions</h3>
                <ul>
                  <li>
                    Familiarize yourself with cancellation and refund policies.
                  </li>
                  <li>
                    Check if the package can be customized to your needs.{" "}
                  </li>
                  <li>Compare the bundled price with individual costs.</li>
                </ul>

                <h3>Exclusions</h3>
                <ul>
                  <li>
                    Familiarize yourself with cancellation and refund policies.{" "}
                  </li>
                  <li>
                    Check if the package can be customized to your needs.{" "}
                  </li>
                  <li>Compare the bundled price with individual costs.</li>
                </ul>

                <h3>Cancellation Policy</h3>
                <p className="mb-4">
                  {
                    bookingData?.tourPriceTransfertimeDetails
                      ?.cancellationPolicy
                  }
                </p>
                <ul>
                  {bookingData?.tourPriceTransfertimeDetails?.cancellationPolicyDescription
                    ?.replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
                    ?.split("\n") // Split the string by new lines
                    .filter((item) => item.trim() !== "") // Remove empty strings
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>Terms and Condition</h3>
                <ul>
                  <li>Capacity Ticket</li>
                  <li>Non cancellable and non refundable</li>
                  <li>
                    All baggage and personal items MUST go through the Security
                    Scanning Machine
                  </li>
                </ul>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
};

export default CheckoutDiscover;
