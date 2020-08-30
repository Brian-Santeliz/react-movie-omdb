import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-center color">
      <h1 className="navbar-brand mb-0 display-1">{title}</h1>
    </nav>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
