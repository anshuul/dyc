import React from "react";
import PropTypes from "prop-types";

import { Navbar, Footer } from "../components/layout";

const DefaultDetailsLayout = ({ children, navbar, footer }) => (
  <React.Fragment>
    <div className="detailpage-wrapper">
      {!navbar && <Navbar />}
      <main>
        {children}
      </main>
      {!footer && <Footer />}
    </div>
  </React.Fragment>
);

DefaultDetailsLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultDetailsLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultDetailsLayout;