import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "antd";
import { Container, SvgIcon, DownloadAppModal } from "../../common";
import "./Navbar.scss";
import userImg from "../../../assets/images/top-creator4.png";
import logoImage from "../../../assets/images/logo.svg";
import aedIcon from "../../../assets/images/aed.png";
import usdIcon from "../../../assets/images/usd.png";
import gbpIcon from "../../../assets/images/gbp.png";
import inrIcon from "../../../assets/images/inr.png";
import eurIcon from "../../../assets/images/eur.png";
import DeleteAccountModal from "../../../containers/ProfileSetting/DeleteAccountModal";
import CurrenciesDropDown from "../../common/CurrenciesDropDown";
import { useDispatch, useSelector } from "react-redux";
import apiClient from "../../../apiConfig";
import { setSelectedCurrency } from "../../../slice/currencySlice";

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

const Navbar = () => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const handleLogout = () => {
    localStorage.removeItem("userData");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (userData) {
          // Fetch endpoint with userData
          response = await apiClient.get("/discover/currencyList", {
            headers: {
              iUserId: userData?.DATA?.iUserID || "",
            },
          });
        } else {
          // Fetch endpoint without userData
          response = await apiClient.get("/deal/currencyList");
        }
        const fetchedCurrencyList = response.data?.DATA || [];
        setCurrencyList(fetchedCurrencyList);


      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    setVisibleDropDown(false);
    if (selectedCurrency) {
      console.log("Selected Currency Key Object:", selectedCurrency);
    } else {
      console.log("No currency selected");
    }
  };

  const handleCurrencySelect = (currencyId) => {
    const selectedCurrency = currencyList.find(currency => currency.uCurrencyID === currencyId);
    if (selectedCurrency) {
      console.log("Selected Currency:", selectedCurrency);
      dispatch(setSelectedCurrency(selectedCurrency));
    }
  };

  const handleReset = () => {
    dispatch(setSelectedCurrency(null)); // Reset the selected currency
  };

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
    <header className="main-header" data-aos="fade-down" data-aos-delay="800">
      <Container>
        <div className="hader-inner">
          <div className="logo-left">
            <Link to="/">
              <img src={logoImage} alt={logoImage} />
            </Link>
          </div>
          <div className="center-menu"></div>
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
            {/* <CurrenciesDropDown /> */}

            <Dropdown
              overlay={
                <div className="category-box">
                  <h3>Choose currency</h3>
                  <ul>
                    {currencyList.map((currency) => (
                      <li
                        key={currency.uCurrencyID}
                        className={
                          selectedCurrency?.uCurrencyID === currency.uCurrencyID
                            ? "selected"
                            : ""
                        }
                        onClick={() => handleCurrencySelect(currency.uCurrencyID)}
                      >
                        <div className="left-col">
                          <span className="falg-img" style={{ backgroundColor: '#0d0c0c' }} />

                          {currency.uCurrency}
                        </div>
                        <div
                          className="right-col"
                          style={{ color: 'black' }}
                        >
                          <span>{currency.uCurrencySymbol}</span> -{" "}
                          {/* {currency.uCurrencyName} */}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              }
              trigger={["click"]}
              visible={visibleDropDown}
              onVisibleChange={(flag) => setVisibleDropDown(flag)}
              placement="bottom"
              overlayClassName="currencyheader-drop"
              dropdownRender={(menu) => (
                <div>
                  {menu}
                  <div className="drop-footer">
                    <Button type="text" onClick={handleReset}>
                      Reset all
                    </Button>
                    <Button type="primary" onClick={handleClick}>
                      Choose
                    </Button>
                  </div>
                </div>
              )}
            >
              <div className="currency-col" onClick={(e) => e.preventDefault()}>
                <span className="falg-img" />
                {selectedCurrency ? selectedCurrency.uCurrency : ""}
              </div>
            </Dropdown>

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

export default Navbar;
