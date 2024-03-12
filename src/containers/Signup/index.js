import React, { useState } from "react";
import { SvgIcon } from "../../components/common";
import { Link, useHistory } from "react-router-dom";
import { Button, Divider, Checkbox } from "antd";
import { Form, Input, Select } from "antd";
import "./index.scss";

import logoImage from "../../assets/images/logo-light.svg";
import logoImage1 from "../../assets/images/logo.svg";
import AwesomeImg from "../../assets/images/tp-left.png";
import VideoOne from "../../assets/video/bg_auth.mp4";
import apiClient from "../../apiConfig";
import Apis from "../../utility/apis";
import currenciesData from "../../data/currenciesData.json";

const { Option } = Select;

const Signup = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobile: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    let inputValue = value;

    // Handle select input separately
    if (type === "checkbox") {
      inputValue = checked;
    } else if (type === "select-one") {
      inputValue = e;
    }

    // Update form data and store in localStorage
    const updatedFormData = { ...formData, [name]: inputValue };
    setFormData(updatedFormData);

    // Store in localStorage
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };


  const handleCheckEmail = async () => {
    try {
      const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));

      // Set the X-API-KEY header using the xApiKey key
      const headers = {
        "X-API-KEY": xApiKey?.key || "",
      };
      // Validate form data
      const { email } = formData;
      if (!email) {
        console.error("Please provide an email address.");
        return;
      }

      console.log("Start heating");
      // Send checkEmail request
      const response = await apiClient.post(
        Apis("checkEmail", "others", "guest"),
        { vEmail: email },
        { headers: headers }
      );

      // Handle the response and proceed accordingly
      if (response.data) {
        // Store necessary information for OTP verification
        localStorage.setItem(
          "otpVerificationData",
          JSON.stringify(response.data)
        );
        console.log("first: ", response.data);
        // Navigate to enter-otp screen
        history.push("/enter-otp");
      } else {
        console.error("Check email failed: DATA not found in response");
      }
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="authleft-inner">
          <div>
            <div className="dextop-logo">
              <Link to="/">
                <img src={logoImage} alt={logoImage} />
              </Link>
            </div>
            <h1>
              Discover <br />
              Your City
            </h1>
          </div>
          <div>
            <div className="awse-img">
              <img src={AwesomeImg} alt="Awesome" />
            </div>
            <h3>Awesome!</h3>
            <p>
              It's easy to use and very handy. It helps a lot to save more.
              Worth every penny
            </p>
            <div className="left-name">Nikol</div>
          </div>
        </div>
        <video playsInline autoPlay muted loop className="banner-video">
          <source src={VideoOne} />
        </video>
      </div>
      <div className="auth-right">
        <div className="authright-inner">
          <div className="right-upper">
            <div className="mobile-logo">
              <Link to="/">
                <img src={logoImage1} alt={logoImage1} />
              </Link>
            </div>
            <div className="upper-inner">
              <h2>Register</h2>
              <div className="right-head">
                <span>Already have an account?</span>
                <Link to="/login" className="auth-upper-btn ant-btn">
                  Log In
                </Link>
              </div>
            </div>
          </div>
          <div className="right-form">
            <Form name="basic" autoComplete="off" layout="vertical">
              <Form.Item label="First Name">
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  prefix={<SvgIcon name="user" viewbox="0 0 15.381 15.381" />}
                  placeholder="Enter"
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  prefix={<SvgIcon name="email-icon" viewbox="0 0 30 30" />}
                  placeholder="Enter"
                />
              </Form.Item>
              <Form.Item label="Mobile">
                <Input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  addonBefore={
                    <Select
                      defaultValue="+971"
                      onChange={(value) => {
                        // Update formData or perform other actions based on the selected value
                        console.log(value);
                      }}
                    >
                      {currenciesData.DATA.map((currency) => (
                        <Option key={currency.code} value={currency.dial_code}>
                          <img
                            src={currency.image}
                            alt={currency.name}
                            style={{ width: "20px", marginRight: "5px" }}
                          />
                          {currency.dial_code}
                        </Option>
                      ))}
                    </Select>
                  }
                />
              </Form.Item>
              <Form.Item className="agree-check">
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                >
                  I agree to the{" "}
                  <span className="terms-link">Terms and Conditions</span>
                </Checkbox>
              </Form.Item>
              <Form.Item className="m-0 py-3">
                <Button
                  type="primary"
                  htmlType="button"
                  block
                  onClick={handleCheckEmail}
                  disabled={
                    !formData.firstName ||
                    !formData.email ||
                    !formData.mobile ||
                    !formData.agree
                  }
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="auth-right-footer">
            <Divider>Or Sign up with your details</Divider>
            <ul>
              <li>
                <Button>
                  <SvgIcon name="apple" viewbox="0 0 22.982 28.234" />
                </Button>
              </li>
              <li>
                <Button>
                  <SvgIcon name="google" viewbox="0 0 28.688 29.243" />
                </Button>
              </li>
              <li>
                <Button>
                  <SvgIcon name="facebook" viewbox="0 0 8.106 17.344" />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
