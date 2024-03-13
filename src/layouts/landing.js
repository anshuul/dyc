import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Footer, NavbarLanding, NavbarLogged } from "../components/layout";
import Apis from "../utility/apis";
import apiClient from "../apiConfig";

const LandingLayout = ({ children, navbar, footer }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Start heat api");
        const response = await apiClient.post(Apis("key", "others", "guest"));
        const data = response.data;
        console.log("Fetched datass:", data);
        // Dispatch action to store data in Redux
        localStorage.setItem("xApiKey", JSON.stringify(data.key));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Check if userData is present in localStorage
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <React.Fragment>
      <div className="landing-wrapper">
        {userData ? <NavbarLogged /> : <NavbarLanding />}
        <main>{children}</main>
        {!footer && <Footer />}
      </div>
    </React.Fragment>
  );
};

LandingLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool,
};

LandingLayout.defaultProps = {
  navbar: false,
  footer: false,
};

export default LandingLayout;
