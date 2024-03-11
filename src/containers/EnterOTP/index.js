import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Form } from "antd";
import OtpInput from "react-otp-input";
import "./index.scss";

import logoImage from "../../assets/images/logo-light.svg";
import logoImage1 from "../../assets/images/logo.svg";
import AwesomeImg from "../../assets/images/tp-left.png";
import VideoOne from "../../assets/video/bg_auth.mp4";

const EnterOTP = () => {
  const [OTP, setOTP] = useState("");
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
                      <Button type="primary" htmlType="submit" block>
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
