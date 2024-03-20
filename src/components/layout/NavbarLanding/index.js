import React, { useCallback, useEffect, useState } from "react";
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

import { setSelectedCity } from "../../../slice/citySearchSlice";
import DeleteAccountModal from "../../../containers/ProfileSetting/DeleteAccountModal";
import CurrenciesDropDown from "../../common/CurrenciesDropDown";
import { setSelectedCurrency } from "../../../slice/currencySlice";
import Apis from "../../../utility/apis";
import { debounce } from "lodash";

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
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("selectedCity");
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

  // New state to hold the selected item object for logging
  const [selectedItem, setSelectedItem] = useState(null);

  const [searchInput, setSearchInput] = useState("");
  const selectedCity = useSelector((state) => state.citySearch.selectedCity);

  const [countryCityList, setCountryCityList] = useState([]);
  const [filteredCityList, setFilteredCityList] = useState([]);

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);

  console.log("selectedCurrency : ", selectedCurrency);

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

  const [tourSearchResults, setTourSearchResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (userData) {
          // Fetch endpoint with userData and headers
          response = await apiClient.post("/offer/countryCityList", {
            headers: {
              iUserId: userData?.DATA?.iUserID || "",
            },
          });
        } else {
          // Fetch endpoint without userData
          response = await apiClient.post("/deal/countryCityList");
        }
        const data = response.data?.DATA || [];
        console.log("Data: ", data);
        setCountryCityList(data);
        const allCities = data.flatMap((country) => country.cityList);
        setFilteredCityList(allCities);
      } catch (error) {
        console.error("Error fetching country city list:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter city list based on search input
    const filteredList = countryCityList.flatMap((country) =>
      country.cityList.filter((city) =>
        city.vCityName.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setFilteredCityList(filteredList);
  }, [countryCityList, searchInput]);

  const handleClick = () => {
    setVisibleDropDown(false);
    if (selectedCurrency) {
      console.log("Selected Currency Key Object:", selectedCurrency);
    } else {
      console.log("No currency selected");
    }
  };

  const handleCurrencySelect = (currencyId) => {
    const selectedCurrency = currencyList.find(
      (currency) => currency.uCurrencyID === currencyId
    );
    if (selectedCurrency) {
      console.log("Selected Currency:", selectedCurrency);
      dispatch(setSelectedCurrency(selectedCurrency));
    }
  };

  const handleReset = () => {
    dispatch(setSelectedCurrency(null)); // Reset the selected currency
  };

  const handleSearch = async (inputValue) => {
    console.log("inputValue: ", inputValue);
    setSearchInput(inputValue);
    try {
      const matchingCity = countryCityList
        .flatMap((country) => country.cityList)
        .find(
          (city) => city.vCityName.toLowerCase() === inputValue.toLowerCase()
        );

      if (matchingCity) {
        // Perform the tourSearch API call with the extracted properties
        const response = await apiClient.post(
          Apis(
            "tourSearch",
            matchingCity.vCountryName,
            userData ? "loggedIn" : "guest"
          ),
          {
            sType: "All",
            iCountryID: matchingCity.iCountryID,
            Language: "en",
            dCurrentLat: matchingCity.vCityLatitude,
            dCurrentLong: matchingCity.vCityLatitude,
            searchKey: inputValue.toLowerCase(),
          }
        );
        setTourSearchResults(response.data?.DATA || []);
        console.log("response tourDetails: ", response);
      } else {
        console.log("No matching city found.");
      }
    } catch (error) {
      console.error("Error searching for tours:", error);
    }
  };

  console.log("countryCityList DATA: ", countryCityList);

  const debouncedHandleSearch = useCallback(
    debounce((inputValue) => {
      if (inputValue.trim() !== "") {
        handleSearch(inputValue);
      }
    }, 3000),
    console.log("searching"),
    []
  );

  const handleSearchInput = (inputValue) => {
    console.log("Input value:", inputValue);
    setSearchInput(inputValue);
    debouncedHandleSearch(inputValue);
  };

  const handleSelectChange = (value, option) => {
    const selectedCity = option.data;
    setSearchInput(""); // Clear search input
    setSelectedItem(selectedCity); // Set selected item for logging
    console.log("Selected Item:", selectedCity); // Log the selected item

    // Find the selected item from allCities
    const foundItem = filteredCityList.find(
      (city) =>
        city.vCityName === selectedCity.vCityName &&
        city.vCountryName === selectedCity.vCountryName
    );

    // Dispatch action to store the found item in Redux state and local storage
    if (foundItem) {
      dispatch(setSelectedCity(foundItem));
    }
  };

  // const defaultOptionValue = selectedCity || "UAE";
  const defaultOptionValue =
    selectedCity?.iCityID ||
    (filteredCityList.length > 0 ? filteredCityList[0].iCityID : "Dubai, UAE");

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
                    <div
                      className="menu-container"
                      // style={{ maxHeight: "300px", overflowY: "auto" }}
                    >
                      <div className="drop-title">Recent Search</div>
                      <Input
                        placeholder="Search..."
                        className="ant-select-search__field"
                        value={searchInput}
                        onChange={(e) => handleSearchInput(e.target.value)}
                      />
                      {menu}
                    </div>
                  )}
                  options={[
                    ...filteredCityList.map((city) => ({
                      value: city.iCityID,
                      label: (
                        <div className="drop-item">
                          <div className="city-icon">
                            <SvgIcon name="map-marker" viewbox="0 0 34 48" />
                          </div>{" "}
                          {`${city.vCityName}, ${city.vCountryName}`}
                        </div>
                      ),
                      data: {
                        vCityName: city.vCityName,
                        vCountryName: city.vCountryName,
                      },
                    })),
                    ...tourSearchResults.map((tour) => ({
                      value: tour.tourOptionId, // Assuming tourOptionId is unique
                      label: (
                        <div className="drop-item">
                          <div className="city-icon">
                            <img src={tour.rTourImage} alt="Tour Image" />{" "}
                            {/* Use tour image here */}
                          </div>{" "}
                          {tour.tourName} {/* Use tour name here */}
                        </div>
                      ),
                      data: {
                        // Include any other data you need
                        tourId: tour.tourId,
                        tourName: tour.tourName,
                      },
                    })),
                  ]}
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
                        onClick={() =>
                          handleCurrencySelect(currency.uCurrencyID)
                        }
                      >
                        <div className="left-col">
                          <span className="falg-img" />
                          {currency.uCurrency}
                        </div>
                        <div className="right-col">
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
                {/* {
                  currencyList.find(
                    (currency) => currency.uCurrencyID === selectedCurrency
                  )?.uCurrency || ""
                } */}
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

export default NavbarLanding;
