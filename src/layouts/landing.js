import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Footer, NavbarLanding } from "../components/layout";
import { useDispatch, useSelector } from "react-redux";
import Apis from "../utility/apis";
import apiClient from "../apiConfig";
import { selectResponseData, setResponseData } from "../slice/responseSlice";

const LandingLayout = ({ children, navbar, footer }) => {
  const dispatch = useDispatch();
  const responseData = useSelector(selectResponseData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Start heat api");
        const response = await apiClient.post(Apis("key", "others", "guest"));
        const data = response.data;
        console.log("Fetched data:", data);
        // Dispatch action to store data in Redux
        dispatch(setResponseData(data));
        localStorage.setItem("responseData", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("Redux store response data:", responseData);

  return (
    <React.Fragment>
      <div className="landing-wrapper">
        {!navbar && <NavbarLanding />}
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
