import React, { useState } from "react";
import Error from "./Error";
import { dataFetch } from "../helper";
import PropTypes from "prop-types";
const InputSearch = ({ setMovies }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length === 0) {
      //validate the error
      setError("Must type a title to search");
      return;
    }
    setError("");
    const response = await dataFetch(title);
    if (response.Response === "False") {
      setError("This movie doesn't exist");
      setTitle("");
      return;
    }
    setMovies(response.Search);
    setTitle("");
    setError("");
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row p-3 input">
          <div className="col-md-6 ">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group  form-div px-4  ">
                <input
                  type="text"
                  className=" form "
                  placeholder="Type a title of movie..."
                  autoFocus
                  onChange={(e) => handleChange(e)}
                  value={title}
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 ">
            <div className="form-group text-center px-4">
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn btn-info btn-block btn-submit"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <Error error={error} />
    </>
  );
};
InputSearch.propTypes = {
  setMovies: PropTypes.func.isRequired,
};
export default InputSearch;
