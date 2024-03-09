import React from "react";
import PropTypes from "prop-types";

import { NavbarLogged } from "../components/layout";

const DefaultLayout = ({ children, navbar, footer }) => (
  <React.Fragment>
    <div className="landing-wrapper">
      {!navbar && <NavbarLogged />}
      <main>
        {children}
      </main>
    </div>
  </React.Fragment>
);

DefaultLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultLayout;