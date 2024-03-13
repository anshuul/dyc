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
import Apis from "../../utility/apis";
import apiClient from "../../apiConfig";
import { useDispatch, useSelector } from "react-redux";
import { setEmail as setEmailAction } from "../../slice/authSlice";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const emailFromRedux = useSelector((state) => state.auth.email);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckEmail = async () => {
    try {
      // Set the X-API-KEY header using the xApiKey key
      // const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));
      // const headers = {
      //   "X-API-KEY": xApiKey || "",
      // };
      
      // Validate form data
      if (!emailFromRedux) {
        console.error("Please provide an email address.");
        return;
      }

      console.log("Start heating");
      // Send checkEmail request
      const response = await apiClient.post(
        Apis("checkEmailLogin", "others", "guest"),
        { vEmail: emailFromRedux },
        // { headers: headers }
      );

      // Handle the response and proceed accordingly
      if (response.data) {
        console.log("first: ", response.data);
        if (response.data.status === 1) {
          // Email is registered, navigate to enter-otp screen
          dispatch(setEmailAction(emailFromRedux));

          history.replace("/enter-otp-login");
        } else if (response.data.status === 0) {
          // Email is not registered, set error message
          setErrorMessage(response.data.MESSAGE);
        } else {
          console.error("Unknown status:", response.data.status);
        }
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
                  value={emailFromRedux || ""}
                  onChange={(e) => dispatch(setEmailAction(e.target.value))}
                />
              </Form.Item>
              {/* Display error message if present */}
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <Form.Item className="m-0 py-3">
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  onClick={handleCheckEmail}
                  disabled={!emailFromRedux}
                >
                  Log In
                </Button>
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
