import React, { useState } from "react";
import aedIcon from "../../../assets/images/aed.png";
import usdIcon from "../../../assets/images/usd.png";
import gbpIcon from "../../../assets/images/gbp.png";
import inrIcon from "../../../assets/images/inr.png";
import eurIcon from "../../../assets/images/eur.png";
import { Button, Dropdown } from "antd";

const currencies = [
  { id: "1", name: "AED", symbol: "Dirham", icon: aedIcon },
  { id: "2", name: "USD", symbol: "Dollar", icon: usdIcon },
  { id: "3", name: "GBP", symbol: "Pound", icon: gbpIcon },
  { id: "4", name: "INR", symbol: "Rupee", icon: inrIcon },
  { id: "5", name: "EUR", symbol: "Euro", icon: eurIcon },
];

const CurrenciesDropDown = () => {
  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const [selectedCurrencyKey, setSelectedCurrencyKey] = useState("1");

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
  return (
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
              currencies.find((currency) => currency.id === selectedCurrencyKey)
                ?.icon
            }
            alt=""
          />
        </div>
        {
          currencies.find((currency) => currency.id === selectedCurrencyKey)
            ?.name
        }
      </div>
    </Dropdown>
  );
};

export default CurrenciesDropDown;
