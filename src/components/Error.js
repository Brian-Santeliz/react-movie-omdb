import React from "react";
import PropTypes from "prop-types";

const Error = ({ error }) => {
  if (error === "") return null;
  return (
    <>
      <div className="container">
        <div className="row px-5">
          <div className="col-md-8 mx-auto">
            <div className="alert alert-danger p-3 mt-2 text-uppercase font-weight-bold">
              <p className="text-center">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Error.propTypes = {
  error : PropTypes.string.isRequired,
};
export default Error;
