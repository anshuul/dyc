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
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';
const { Option } = Select;

const Signup = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyC8OG3HH3zqvLLTzQhJXk6Yn9uiyvJ3h8Q",
    authDomain: "dyc-test-44274.firebaseapp.com",
    projectId: "dyc-test-44274",
    storageBucket: "dyc-test-44274.appspot.com",
    messagingSenderId: "451000592924",
    appId: "1:451000592924:web:e050c5fdcb3a31eda24dd9",
    measurementId: "G-0KB2PJEQXE"
  };
  firebase.initializeApp(firebaseConfig);
  console.log(firebase,"appppp");
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
      // Set the X-API-KEY header using the xApiKey key
      // const xApiKey = JSON.parse(localStorage.getItem("xApiKey"));
      // const headers = {
      //   "X-API-KEY": xApiKey?.key || "",
      // };
      // Validate form data
      const { email } = formData;
      if (!email) {
        console.error("Please provide an email address.");
        return;
      }

      // Send checkEmail request
      const response = await apiClient.post(
        "/admin/checkEmail",
        { vEmail: email },
        // { headers: headers }
      );

      // Handle the response and proceed accordingly
      if (response.data) {
        // Check the MESSAGE and status conditions
        if (
          response.data.MESSAGE ===
            "Looks like you have registered with us already, please login with your email." ||
          response.data.status === 0
        ) {
          // Navigate to login screen
          history.push("/login");
        } else {
          // Navigate to enter-otp screen
          history.push("/enter-otp");
        }
      } else {
        console.error("Check email failed: DATA not found in response");
      }
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  const authUser = async (email, token) => {
    let user = await apiClient.post('/admin/doLoginWithIdToken',{
      vEmail:email,
      idToken:token
    })
    console.log(user);
  }

  
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      console.log('Google Sign-In Successful:', result);
      authUser(result.user.email,result.credential.idToken)
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };
  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      console.log('Facebook Sign-In Successful:', result.user);
    } catch (error) {
      console.error('Facebook Sign-In Error:', error);
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
                <Button onClick={handleGoogleSignIn}>
                  <SvgIcon name="google" viewbox="0 0 28.688 29.243" />
                </Button>
              </li>
              <li>
                <Button onClick={handleFacebookSignIn}>
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
