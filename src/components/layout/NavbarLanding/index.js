import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Select, Input } from "antd";
import { Container, SvgIcon, DownloadAppModal } from "../../common";
import "./index.scss";
import data from "../../../data/data.json";
import logoImage from "../../../assets/images/logo-light.svg";
import aedIcon from "../../../assets/images/aed.png";
import usdIcon from "../../../assets/images/usd.png";
import gbpIcon from "../../../assets/images/gbp.png";
import inrIcon from "../../../assets/images/inr.png";
import eurIcon from "../../../assets/images/eur.png";

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
  const [searchInput, setSearchInput] = useState("");
  const [options, setOptions] = useState([]);
  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const [selectedCurrencyKey, setSelectedCurrencyKey] = useState("1");

  useEffect(() => {
    const allCitiesAndCountries = data.DATA.reduce((acc, country) => {
      const cities = country.cityList.map((city) => ({
        value: city.iCityID,
        label: `${city.vCityName} - ${country.vCountryName}`, // Combine city and country names
        iCountryID: country.iCountryID,
        vCountryName: country.vCountryName,
        vCityName: city.vCityName,
      }));
      return [...acc, ...cities];
    }, []);

    setOptions(allCitiesAndCountries);
  }, []);

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

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearch = (inputValue) => {
    setSearchInput(inputValue);
  };

  const handleSelectChange = () => {
    setSearchInput("");
  };
  const defaultOptionValue = options.length > 0 ? options[0].value : "UAE";

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
                      />
                      {menu}
                    </>
                  )}
                  options={filteredOptions.map((option) => ({
                    value: option.value,
                    label: (
                      <div className="drop-item">
                        <div className="city-icon">
                          <SvgIcon name="map-marker" viewbox="0 0 34 48" />
                        </div>{" "}
                        {option.label}
                      </div>
                    ),
                  }))}
                  onChange={handleSelectChange} // Handle option selection
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

            <Button
              onClick={() => window.open("/login", "_self")}
              className="login-btn"
              size="small"
            >
              Sign in <SvgIcon name="user-alt" viewbox="0 0 8 9" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavbarLanding;