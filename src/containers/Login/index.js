import React from "react";
import { SvgIcon } from "../../components/common";
import { Link } from "react-router-dom";
import { Button, Divider } from "antd";
import { Form, Input } from "antd";
import "./index.scss";

import logoImage from "../../assets/images/logo-light.svg";
import logoImage1 from "../../assets/images/logo.svg";
import AwesomeImg from "../../assets/images/tp-left.png";
import VideoOne from "../../assets/video/bg_auth.mp4";

const Login = () => {
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
                />
              </Form.Item>
              <Form.Item className="m-0 py-3">
                <Link to="/enter-otp">
                  <Button type="primary" htmlType="submit" block>
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
