import React, { useState } from "react";
import { Container, Row, Col, SvgIcon } from "../../components/common";
import FavouriteTab from "./FavouriteTab";
import ProfileSettingTab from "./ProfileSettingTab";
import MyCardsTab from "./MyCardsTab";
import MyOffersTab from "./MyOffersTab";
import NotificationSettingTab from "./NotificationSettingTab";
import { Drawer, Button } from "antd";
import MediaQuery from "react-responsive";
import MyBookingsTab from "./MyBookingsTab";
import "./index.scss";

const ProfileSetting = () => {
  const [currentTab, setCurrentTab] = useState("Profile_Setting");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const tabList = [
    {
      name: "Profile_Setting",
      icon: <SvgIcon name="profile-setting-icon" viewbox="0 0 9.022 9.736" />,
      label: "Profile Setting",
      content: <ProfileSettingTab />,
    },
    {
      name: "My_Bookings",
      icon: <SvgIcon name="mybooking" viewbox="0 0 11.026 9.836" />,
      label: "My Bookings",
      content: <MyBookingsTab />,
    },
    {
      name: "Favourite",
      icon: <SvgIcon name="favourite-icon" viewbox="0 0 10.055 8.961" />,
      label: "Wishlist",
      content: <FavouriteTab />,
    },
    {
      name: "My_Cards",
      icon: <SvgIcon name="mycards-icon" viewbox="0 0 10.575 7.931" />,
      label: "My Cards",
      content: <MyCardsTab />,
    },
    {
      name: "My_Offers",
      icon: <SvgIcon name="myoffers-icon" viewbox="0 0 10.083 10.096" />,
      label: "My Offers",
      content: <MyOffersTab />,
    },
    {
      name: "Notification_Setting",
      icon: <SvgIcon name="notification-icon" viewbox="0 0 8.315 9.262" />,
      label: "Notification Setting",
      content: <NotificationSettingTab />,
    },
  ];
  return (
    <div className="profilesetting-wrapper">
      <Container>
        <Row>
          <Col sm="12">
            <div className="profilesetting-main">
              <MediaQuery minWidth={991}>
                <div className="profilesetting-left">
                  <ul>
                    {tabList.map((tab, i) => (
                      <li
                        key={i}
                        onClick={() => setCurrentTab(tab.name)}
                        className={tab.name === currentTab ? "active" : ""}
                      >
                        <button>
                          <div className="tab-icon">{tab.icon}</div>
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </MediaQuery>
              <MediaQuery maxWidth={991}>
                <Button
                  className="profilemenu-btn"
                  type="primary"
                  onClick={showDrawer}
                >
                  <SvgIcon name="menu" viewbox="0 0 24 17.42" />
                </Button>
              </MediaQuery>
              <Drawer
                className="profilesetting-drawer"
                width={290}
                placement="right"
                onClose={onClose}
                open={open}
              >
                <div className="profilesetting-left-small" onClick={onClose}>
                  <ul>
                    {tabList.map((tab, i) => (
                      <li
                        key={i}
                        onClick={() => setCurrentTab(tab.name)}
                        className={tab.name === currentTab ? "active" : ""}
                      >
                        <button>
                          <div className="tab-icon">{tab.icon}</div>
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </Drawer>

              <div className="profilesetting-right">
                {tabList.map((tab, i) => {
                  if (tab.name === currentTab) {
                    return <div key={i}>{tab.content}</div>;
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileSetting;
