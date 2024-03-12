import React, { useState } from "react";
import { SvgIcon } from "../../components/common";
import { Link, useHistory } from "react-router-dom";
import { Button, Divider } from "antd";
import { Form, Input } from "antd";
import "./index.scss";

import logoImage from "../../assets/images/logo-light.svg";
import logoImage1 from "../../assets/images/logo.svg";
import AwesomeImg from "../../assets/images/tp-left.png";
import VideoOne from "../../assets/video/bg_auth.mp4";
import { SHA256 } from "crypto-js";
import Apis from "../../utility/apis";
import apiClient from "../../apiConfig";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();

  const handleCheckEmail = async () => {
    try {
      const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));

      // Set the X-API-KEY header using the xApiKey key
      const headers = {
        "X-API-KEY": xApiKey?.key || "",
      };
      // Validate form data

      if (!email) {
        console.error("Please provide an email address.");
        return;
      }

      console.log("Start heating");
      // Send checkEmail request
      const response = await apiClient.post(
        Apis("checkEmailLogin", "others", "guest"),
        { vEmail: email },
        { headers: headers }
      );

      // Handle the response and proceed accordingly
      if (response.data) {
        // Store necessary information for OTP verification
        // localStorage.setItem(
        //   "otpVerificationData",
        //   JSON.stringify(response.data)
        // );
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
            <div className="upper-inner">
              <h2>Login</h2>
              <div className="right-head">
                <span>Don't have an account?</span>
                <Link to="/signup" className="auth-upper-btn ant-btn">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="right-form">
            <Form name="basic" autoComplete="off" layout="vertical">
              <Form.Item label="Email">
                <Input
                  prefix={<SvgIcon name="email-icon" viewbox="0 0 30 30" />}
                  placeholder="Enter"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item className="m-0 py-3">
                <Link to="/enter-otp">
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    onClick={handleCheckEmail}
                  >
                    Log In
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
          <div className="auth-right-footer">
            <Divider>Or Log In with Email</Divider>
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

export default Login;
