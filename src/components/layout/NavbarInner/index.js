import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Select, Dropdown } from "antd";
import { Container, SvgIcon, DownloadAppModal } from "../../common";
import "./index.scss";

import userImg from "../../../assets/images/top-creator4.png";
import logoImage from "../../../assets/images/logo.svg";
import aedIcon from "../../../assets/images/aed.png";
import usdIcon from "../../../assets/images/usd.png";
import gbpIcon from "../../../assets/images/gbp.png";
import inrIcon from "../../../assets/images/inr.png";
import eurIcon from "../../../assets/images/eur.png";
import CityImage1 from "../../../assets/images/list-img-1.jpg";
import CityImage2 from "../../../assets/images/list-img-2.jpg";
import CityImage3 from "../../../assets/images/list-img-3.jpg";
import CityImage4 from "../../../assets/images/list-img-4.jpg";
import CityImage5 from "../../../assets/images/list-img-5.jpg";
import CityImage6 from "../../../assets/images/list-img-6.jpg";
import DeleteAccountModal from "../../../containers/ProfileSetting/DeleteAccountModal";
import CurrenciesDropDown from "../../common/CurrenciesDropDown";

const getAppItems = [
  {
    key: 1,
    label: <DownloadAppModal />,
  },
];

const curItems = [
  {
    key: "1",
    label: (
      <div className="category-box">
        <h3>Choose currency</h3>
        <ul>
          <li>
            <div className="left-col">
              <div className="cur-icon">
                <img src={aedIcon} alt="" />
              </div>{" "}
              AED
            </div>
            <div className="right-col">
              <span>Dirham</span> - AED
            </div>
          </li>
          <li>
            <div className="left-col">
              <div className="cur-icon">
                <img src={usdIcon} alt="" />
              </div>{" "}
              USD
            </div>
            <div className="right-col">
              <span>Dollar </span> - $
            </div>
          </li>
          <li>
            <div className="left-col">
              <div className="cur-icon">
                <img src={gbpIcon} alt="" />
              </div>{" "}
              GBP
            </div>
            <div className="right-col">
              <span>Pound </span> - £
            </div>
          </li>
          <li>
            <div className="left-col">
              <div className="cur-icon">
                <img src={inrIcon} alt="" />
              </div>{" "}
              INR
            </div>
            <div className="right-col">
              <span>Rupee </span> - ₹
            </div>
          </li>
          <li>
            <div className="left-col">
              <div className="cur-icon">
                <img src={eurIcon} alt="" />
              </div>{" "}
              EUR
            </div>
            <div className="right-col">
              <span>Euro </span> - €
            </div>
          </li>
        </ul>
      </div>
    ),
  },
];

const NavbarInner = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const handleLogout = () => {
    localStorage.removeItem("userData");
  };
  const [isActive, setIsActive] = useState(false);
  const SearchExPand = (event) => {
    setIsActive((current) => !current);
  };
  useEffect(() => {
    document.body.classList.toggle("scroll-off", isActive);
  }, [isActive]);

  const userItems = userData
    ? [
        {
          key: "1",
          label: (
            <div className="user-upper">
              <div className="user-upper-img">
                {" "}
                <img src={userImg} alt="" />{" "}
              </div>
              <h4>Hi, {`${userData.DATA.vUserName}`}👋</h4>
            </div>
          ),
        },
        {
          key: "2",
          icon: (
            <span className="menu-icons">
              <SvgIcon name="profile-setting-icon" viewbox="0 0 9.022 9.736" />
            </span>
          ),
          label: <Link to="/profile-setting">Profile Setting</Link>,
        },
        {
          key: "3",
          icon: (
            <span className="menu-icons">
              <SvgIcon name="mybooking" viewbox="0 0 11.026 9.836" />
            </span>
          ),
          label: <Link to="/profile-setting">My Bookings</Link>,
        },
        {
          key: "4",
          icon: (
            <span className="menu-icons">
              <SvgIcon name="favourite-icon" viewbox="0 0 10.055 8.961" />
            </span>
          ),
          label: <Link to="/profile-setting">Wishlist</Link>,
        },
        {
          key: "5",
          icon: (
            <span className="menu-icons">
              <SvgIcon name="mycards-icon" viewbox="0 0 10.575 7.931" />
            </span>
          ),
          label: <Link to="/profile-setting">My Cards</Link>,
        },
        {
          key: "6",
          icon: (
            <span className="menu-icons">
              <SvgIcon name="myoffers-icon" viewbox="0 0 10.083 10.096" />
            </span>
          ),
          label: <Link to="/profile-setting">My Offers</Link>,
        },
        {
          key: "7",
          icon: (
            <span className="menu-icons">
              <SvgIcon name="notification-icon" viewbox="0 0 8.315 9.262" />
            </span>
          ),
          label: <Link to="/profile-setting">Notification Setting</Link>,
        },
        {
          key: "8",
          icon: (
            <span className="menu-icons">
              <SvgIcon name="terms" viewbox="0 0 7.55 9.38" />
            </span>
          ),
          label: <Link to="/terms-conditions">Terms & Conditions</Link>,
        },
        {
          key: "9",
          icon: (
            <span className="menu-icons">
              <SvgIcon name="mice" viewbox="0 0 13.753 13.407" />
            </span>
          ),
          label: <Link to="/contact">Need Help?</Link>,
        },
        {
          key: "10",
          label: <Link to="/login">Logout</Link>,
          onClick: handleLogout,
        },
        {
          key: "11",
          label: <DeleteAccountModal />,
        },
      ]
    : [];

  return (
    <header
      className={
        isActive
          ? "main-header main-header-search expand-search"
          : "main-header main-header-search"
      }
    >
      {isActive ? (
        <div onClick={SearchExPand} className="overlay-mask"></div>
      ) : null}
      <Container>
        <div className="hader-inner">
          <div className="logo-left">
            <Link to="/">
              <img src={logoImage} alt={logoImage} />
            </Link>
          </div>
          <div className="landing-search">
            <div className="search-icon">
              <SvgIcon name="search" viewbox="0 0 12.901 12.905" />
            </div>
            <div className="landing-search-right">
              <label className="select-label">Where to?</label>
              <Select
                defaultValue="v1"
                popupClassName="country-drop-search"
                listHeight={420}
                suffixIcon={
                  <SvgIcon name="search" viewbox="0 0 12.901 12.905" />
                }
                dropdownRender={(menu) => (
                  <>
                    <div className="drop-title">Recent Search</div>
                    {menu}
                  </>
                )}
                options={[
                  {
                    label: (
                      <>
                        <div className="city-img">
                          <SvgIcon name="dubai-flag" viewbox="0 0 42 42" />
                        </div>{" "}
                        United Emirates Arab
                      </>
                    ),
                    options: [
                      {
                        value: "v1",
                        label: (
                          <div className="drop-item">
                            <div className="city-img">
                              <img src={CityImage1} alt={CityImage1} />
                            </div>{" "}
                            Dubai
                          </div>
                        ),
                      },
                      {
                        value: "v2",
                        label: (
                          <div className="drop-item">
                            <div className="city-img">
                              <img src={CityImage2} alt={CityImage1} />
                            </div>{" "}
                            Abu Dhabi
                          </div>
                        ),
                      },
                      {
                        value: "v3",
                        label: (
                          <div className="drop-item">
                            <div className="city-img">
                              <img src={CityImage3} alt={CityImage3} />
                            </div>{" "}
                            Northern Emirates
                          </div>
                        ),
                      },
                    ],
                  },
                  {
                    label: (
                      <>
                        <div className="city-img">
                          <SvgIcon name="dubai-flag" viewbox="0 0 42 42" />
                        </div>{" "}
                        Oman
                      </>
                    ),
                    options: [
                      {
                        value: "v4",
                        label: (
                          <div className="drop-item">
                            <div className="city-img">
                              <img src={CityImage4} alt={CityImage4} />
                            </div>{" "}
                            Muscat
                          </div>
                        ),
                      },
                      {
                        value: "v5",
                        label: (
                          <div className="drop-item">
                            <div className="city-img">
                              <img src={CityImage5} alt={CityImage5} />
                            </div>{" "}
                            Sur
                          </div>
                        ),
                      },
                      {
                        value: "v6",
                        label: (
                          <div className="drop-item">
                            <div className="city-img">
                              <img src={CityImage6} alt={CityImage6} />
                            </div>{" "}
                            Southern Oman
                          </div>
                        ),
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
          <div className="hedaer-right">
            <Dropdown
              overlayClassName="tpdownload-drop"
              placement="bottomRight"
              arrow={false}
              menu={{ items: getAppItems }}
            >
              <div className="download-link">
                <SvgIcon name="phone" viewbox="0 0 12.18 20.438" /> Get the App
              </div>
            </Dropdown>
            {/* CurrenciesDropDown Component */}
            <CurrenciesDropDown />
            {!userData && (
              <Button
                onClick={() => window.open("/login", "_self")}
                className="login-btn"
                size="small"
              >
                Sign in <SvgIcon name="user-alt" viewbox="0 0 8 9" />
              </Button>
            )}
            {userData && (
              <Dropdown
                overlayClassName="user-drop-menu"
                menu={{ items: userItems }}
                placement="bottomRight"
              >
                <Button className="user-right-btn">
                  {userData ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#333",
                        }}
                      >
                        {userData.DATA.vUserName}
                      </p>
                      <div
                        className="user-rightbtn-img"
                        style={{ marginLeft: "8px" }}
                      >
                        <img src={userImg} alt="img" />
                      </div>
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </Dropdown>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavbarInner;
