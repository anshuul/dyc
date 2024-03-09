import React from "react";
import PropTypes from "prop-types";

import { NavbarDefault, Footer } from "../components/layout";

const DefaultPagesLayout = ({ children, navbar, footer }) => (
  <React.Fragment>
    <div className="defaultpages-wrapper">
      {!navbar && <NavbarDefault />}
      <main>
        {children}
      </main>
      {!footer && <Footer />}
    </div>
  </React.Fragment>
);

DefaultPagesLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultPagesLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultPagesLayout;