import React from "react";
import PropTypes from "prop-types";

import { Footer, NavbarLanding } from "../components/layout";

const LandingLayout = ({ children, navbar, footer }) => (
  <React.Fragment>
    <div className="landing-wrapper">
      {!navbar && <NavbarLanding />}
      <main>
        {children}
      </main>
      {!footer && <Footer />}
    </div>
  </React.Fragment>
);

LandingLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

LandingLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default LandingLayout;