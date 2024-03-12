import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import { Form } from "antd";
import OtpInput from "react-otp-input";
import "./index.scss";

import logoImage from "../../assets/images/logo-light.svg";
import logoImage1 from "../../assets/images/logo.svg";
import AwesomeImg from "../../assets/images/tp-left.png";
import VideoOne from "../../assets/video/bg_auth.mp4";
import apiClient from "../../apiConfig";
import Apis from "../../utility/apis";
import { SHA256 } from "crypto-js";

const EnterOTP = () => {
  const history = useHistory();
  const [OTP, setOTP] = useState("");

  const generateRandomID = () => {
    // Generate a random number between 100000 and 999999 (inclusive)
    return Math.floor(Math.random() * 900000) + 100000;
  };

  const handleDoneClick = async () => {
    try {
      console.log("Start heat sign api");

      // Get the xApiKey from localStorage
      const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));
      const formData = JSON.parse(localStorage.getItem("formData"));

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

      // Hash the appOTP using SHA256
      const hashedAppOTP = SHA256(OTP + "Imc@$01tma$sa1@").toString();
      console.log("hashedAppOTP: ", hashedAppOTP);

      const body = {
        vEmail: email,
        vUserName: firstName,
        appOTP: hashedAppOTP,
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
              Awesome! It’s easy to use and very handy. It helps a lot to save
              more. Worth every penny
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
          </div>
          <div className="right-form right-form-top">
            <Form name="basic" autoComplete="off" layout="vertical">
              <div className="otpform-inner">
                <div className="otpform-upper">
                  <h2>Enter OTP</h2>
                  <p>OTP has been sent to your email</p>
                  <Form.Item className="mt-5">
                    <OtpInput
                      className="otp-input"
                      containerStyle="otp-input-container"
                      value={OTP}
                      onChange={setOTP}
                      autoFocus
                      OTPLength={4}
                      otpType="number"
                      disabled={false}
                      secure
                    />
                  </Form.Item>
                  <div className="optsreend">
                    <span>Didn’t get it?</span>
                    <Link to="/enter-otp" className="auth-upper-btn ant-btn">
                      Resend
                    </Link>
                  </div>
                </div>
                <div className="mt-auto">
                  <Form.Item className="m-0 py-3">
                    <Link to="/profile-setting">
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={handleDoneClick}
                        block
                      >
                        Done
                      </Button>
                    </Link>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;
