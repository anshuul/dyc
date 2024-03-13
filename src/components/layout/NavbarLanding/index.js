import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Select, Input } from "antd";
import { Container, SvgIcon, DownloadAppModal } from "../../common";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import userImg from "../../../assets/images/top-creator4.png";

import logoImage from "../../../assets/images/logo-light.svg";
import aedIcon from "../../../assets/images/aed.png";
import usdIcon from "../../../assets/images/usd.png";
import gbpIcon from "../../../assets/images/gbp.png";
import inrIcon from "../../../assets/images/inr.png";
import eurIcon from "../../../assets/images/eur.png";
import apiClient from "../../../apiConfig";
import Apis from "../../../utility/apis";
import {
  setSearchInput,
  setSelectedCity,
  setCountryCityList,
} from "../../../slice/citySearchSlice";
import DeleteAccountModal from "../../../containers/ProfileSetting/DeleteAccountModal";

const getAppItems = [
  {
    key: 1,
    label: <DownloadAppModal />,
  },
];

const currencies = [
  { id: "1", name: "AED", symbol: "Dirham", icon: aedIcon },
  { id: "2", name: "USD", symbol: "Dollar", icon: usdIcon },
  { id: "3", name: "GBP", symbol: "Pound", icon: gbpIcon },
  { id: "4", name: "INR", symbol: "Rupee", icon: inrIcon },
  { id: "5", name: "EUR", symbol: "Euro", icon: eurIcon },
];

const initialOptions = [
  {
    value: "v1",
    label: "London - United Kingdom",
  },
  {
    value: "v2",
    label: "Louvre Museum - Paris, France",
  },
  {
    value: "v3",
    label: "Los Angeles - United States",
  },
  {
    value: "v4",
    label: "Lucerne - Switzerland",
  },
  {
    value: "v5",
    label: "London Eye1 - United Kingdom",
  },
  {
    value: "v6",
    label: "London Eye2 - United Kingdom",
  },
  {
    value: "v7",
    label: "London Eye3 - United Kingdom",
  },
  {
    value: "v8",
    label: "London Eye4 - United Kingdom",
  },
  {
    value: "v9",
    label: "London Eye5 - United Kingdom",
  },
  {
    value: "v10",
    label: "London Eye6 - United Kingdom",
  },
  {
    value: "v11",
    label: "London Eye7 - United Kingdom",
  },
  {
    value: "v12",
    label: "London Eye8 - United Kingdom",
  },
];

const NavbarLanding = () => {
  const dispatch = useDispatch();
  // Get userData from localStorage
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("first name: ", userData.DATA.vUserName)
  const handleLogout = () => {
    localStorage.removeItem("userData");
    // localStorage.removeItem("xApiKey");
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
              <h4>Hi, {`${userData.vEmail}`}👋</h4>
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

  const searchInput = useSelector((state) => state.citySearch.searchInput);
  const selectedCity = useSelector((state) => state.citySearch.selectedCity);
  const countryCityList = useSelector(
    (state) => state.citySearch.countryCityList
  );
  const [filteredCityList, setFilteredCityList] = useState([]);

  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const [selectedCurrencyKey, setSelectedCurrencyKey] = useState("1");

  useEffect(() => {
    apiClient
      .post(Apis("countryCityList", "others", "guest"))
      .then((res) => {
        const data = res.data?.DATA || [];
        dispatch(setCountryCityList(data)); // Store the entire country city list in Redux state
        const allCities = data.flatMap((country) => country.cityList);
        setFilteredCityList(allCities);
      })
      .catch((err) => {
        console.error("Error fetching country city list:", err);
      });
  }, [dispatch]);

  // Update the filtered city list based on search input
  useEffect(() => {
    const filteredList = countryCityList.flatMap((country) =>
      country.cityList.filter((city) =>
        city.vCityName.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setFilteredCityList(filteredList);
  }, [countryCityList, searchInput]);

  const handleClick = () => {
    setVisibleDropDown(false);

    // Find the selected currency by its ID
    const selectedCurrency = currencies.find(
      (currency) => currency.id === selectedCurrencyKey
    );

    // Log the details of the selected currency
    if (selectedCurrency) {
      console.log("Selected Currency:", selectedCurrency.name);
      console.log("Symbol:", selectedCurrency.symbol);
    } else {
      console.log("No currency selected");
    }
  };

  const handleCurrencySelect = (currencyKey) => {
    setSelectedCurrencyKey(currencyKey);
  };

  const handleReset = () => {
    setSelectedCurrencyKey("1");
  };

  const handleSearch = (inputValue) => {
    dispatch(setSearchInput(inputValue));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(setSearchInput(searchInput));
    }
  };

  const handleSelectChange = (option) => {
    const cityData = option?.data; // Extract city data from option object
    if (cityData) {
      dispatch(setSelectedCity(cityData)); // Dispatch the entire city data object
      dispatch(setSearchInput(""));
      console.log("Selected City Object:", cityData);
    }
  };

  const defaultOptionValue = selectedCity
    ? `${selectedCity.vCityName}, ${selectedCity.vCountryName}`
    : "UAE";
  return (
    <header
      className="landing-main-header"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <style>
        {`
          .category-box li.selected {
            background-color: #C0C0C0;
          }
        `}
      </style>

      <Container>
        <div className="hader-inner">
          <div className="logo-left">
            <Link to="/">
              <img src={logoImage} alt={logoImage} />
            </Link>
          </div>
          <div className="center-menu">
            <div className="landing-search">
              <div className="search-icon">
                <SvgIcon name="search" viewbox="0 0 12.901 12.905" />
              </div>
              <div className="landing-search-right">
                <label className="select-label">Where to?</label>
                <Select
                  defaultValue={defaultOptionValue}
                  popupClassName="country-drop-search"
                  listHeight={420}
                  suffixIcon={
                    <SvgIcon name="search" viewbox="0 0 12.901 12.905" />
                  }
                  dropdownRender={(menu) => (
                    <>
                      <div className="drop-title">Recent Search</div>
                      <Input
                        placeholder="Search..."
                        className="ant-select-search__field"
                        value={searchInput}
                        onChange={(e) => handleSearch(e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                      {menu}
                    </>
                  )}
                  options={filteredCityList.map((city) => ({
                    value: city.iCityID,
                    label: (
                      <div className="drop-item">
                        <div className="city-icon">
                          <SvgIcon name="map-marker" viewbox="0 0 34 48" />
                        </div>{" "}
                        {`${city.vCityName}, ${city.vCountryName}`}
                      </div>
                    ),
                    data: city,
                  }))}
                  onChange={handleSelectChange}
                />
              </div>
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
            <Dropdown
              overlay={
                <div className="category-box">
                  <h3>Choose currency</h3>
                  <ul>
                    {currencies.map((currency) => (
                      <li
                        key={currency.id}
                        className={
                          selectedCurrencyKey === currency.id ? "selected" : ""
                        }
                        onClick={() => handleCurrencySelect(currency.id)}
                      >
                        <div className="left-col">
                          <div className="cur-icon">
                            <img src={currency.icon} alt="" />
                          </div>{" "}
                          {currency.name}
                        </div>
                        <div className="right-col">
                          <span>{currency.symbol}</span> - {currency.name}
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
                <div className="falg-img">
                  <img
                    src={
                      currencies.find(
                        (currency) => currency.id === selectedCurrencyKey
                      )?.icon
                    }
                    alt=""
                  />
                </div>
                {
                  currencies.find(
                    (currency) => currency.id === selectedCurrencyKey
                  )?.name
                }
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

export default NavbarLanding;
