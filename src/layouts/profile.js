import React from "react";
import PropTypes from "prop-types";

import { NavbarLogged } from "../components/layout";

const ProfileLayout = ({ children, navbar }) => (
  <React.Fragment>
    <div className="landing-wrapper profile-wrapper">
      {!navbar && <NavbarLogged />}
      <main>
          {children}
      </main>
    </div>
  </React.Fragment>
);

ProfileLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

ProfileLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default ProfileLayout;