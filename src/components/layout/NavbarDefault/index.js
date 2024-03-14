import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button, Dropdown, Menu } from "antd";
import { Container, SvgIcon, DownloadAppModal } from "../../common";
import "./index.scss";

import logoImage from "../../../assets/images/logo.svg";
import aedIcon from "../../../assets/images/aed.png";
import usdIcon from "../../../assets/images/usd.png";
import gbpIcon from "../../../assets/images/gbp.png";
import inrIcon from "../../../assets/images/inr.png";
import eurIcon from "../../../assets/images/eur.png";
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

const NavbarDefault = () => {
  const location = useLocation();
  return (
    <header
      className="landing-main-header-light"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Container>
        <div className="hader-inner">
          <div className="logo-left">
            <Link to="/">
              <img src={logoImage} alt={logoImage} />
            </Link>
          </div>
          <div className="center-menu">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["3"]}
              overflowedIndicator={
                <SvgIcon name="menu" viewbox="0 0 24 17.42" />
              }
            >
              <Menu.Item key="1">
                <NavLink
                  to="/home"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About Us
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink
                  to="/blog"
                  className={location.pathname === "/blog" ? "active" : ""}
                >
                  Blog
                </NavLink>
              </Menu.Item>
            </Menu>
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

export default NavbarDefault;
