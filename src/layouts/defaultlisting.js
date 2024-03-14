import React from "react";
import PropTypes from "prop-types";

import { NavbarInner, FooterSmall, NavbarLanding } from "../components/layout";

const DefaultListingLayout = ({ children, navbar, footer }) => (
  <React.Fragment>
    <div className="listing-wrapper">
      {/* {!navbar && <NavbarInner />} */}
      {!navbar && <NavbarLanding />}
      <main>
        {children}
      </main>
      {!footer && <FooterSmall />}
    </div>
  </React.Fragment>
);

DefaultListingLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultListingLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultListingLayout;