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

    setFormData({ ...formData, [name]: inputValue });
  };

  const generateRandomID = () => {
    // Generate a random number between 100000 and 999999 (inclusive)
    return Math.floor(Math.random() * 900000) + 100000;
  };

  const handleSignup = async (values) => {
    try {
      console.log("Start heat sign api");

      // Get the xApiKey from localStorage
      const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));

      // Set the X-API-KEY header using the xApiKey key
      const headers = {
        "X-API-KEY": xApiKey?.key || "",
      };
      console.log("headers here: ", headers);

      const { firstName, email, mobile, agree } = formData;

      // Validate form data
      if (!firstName || !email || !mobile || !agree) {
        console.error(
          "Please fill in all required fields and agree to the terms."
        );
        return;
      }

      // Concatenate appOTP with the key
      const appOTP =
        "bee36616acba2fbf75913601e0f2b69c4e6b4eca836304e60c1faca32a1d36e2" +
        "Imc@$01tma$sa1@";

      const body = {
        vEmail: email,
        vUserName: firstName,
        appOTP:
          "bee36616acba2fbf75913601e0f2b69c4e6b4eca836304e60c1faca32a1d36e2",
        UDID: generateRandomID().toString(),
        eDeviceType: "web",
        vMobileCountryCode: "+971",
        vMobileNo: mobile,
      };

      // Send the signup request
      const response = await apiClient.post(
        Apis("signUp", "others", "guest"),
        body,
        { headers }
      );

      //   Check if the response contains DATA property
      if (response.data) {
        localStorage.setItem("signUpData", JSON.stringify(response.data));
        console.log("Signup successful DATA:", response.data);
        history.push("/enter-otp");
      } else {
        console.error("Signup failed: DATA not found in response");
      }

      // Call the otpSend API
      // const otpResponse = await apiClient.post(
      //   Apis("otpSend", "others", "guest"),
      //   { vEmail: email },
      //   { headers }
      // );

      //   console.log("OTP sent successfully:", otpResponse.data);
    } catch (error) {
      console.error("Error signing up:", error);
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
                  onClick={handleSignup}
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
