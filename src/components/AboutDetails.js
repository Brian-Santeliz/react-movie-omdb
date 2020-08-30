import React from "react";
import star from "./star.png";
import Slide from "react-reveal";
import PropTypes from "prop-types";

const AboutDetails = ({ about }) => {
  if (Object.keys(about).length === 0) return null;
  const {
    Poster,
    Title,
    Plot,
    Actors,
    Director,
    Year,
    Runtime,
    Genre,
    imdbRating,
  } = about;
  return (
    <>
      <Slide left>
        <div className="col-md-6 mx-auto text-center">
          <img src={Poster} alt={Title} className="img-fluid  mt-3 p-2 borde" />
        </div>
      </Slide>

      <Slide right>
        <div className="col-md-6">
          <h2 className="text-white my-4 text-center">
            {Title && Year && `${Title} (${Year})`}
          </h2>
          <span className="text-white mb-2 size">
            {imdbRating && <img src={star} alt="Rating" />}
            <span> {imdbRating && `${imdbRating}/10`}</span>
          </span>
          <p className="text-justify text-white">{Plot}</p>
          <p className="text-white mt-2">
            {Director && `Directors: ${Director}`}
          </p>
          <p className="text-white mt-1">{Actors && `Actors: ${Actors}`}</p>
          <p className="text-white mt-1">{Runtime && `Duration: ${Runtime}`}</p>
          <p className="text-white mt-1">{Genre && `Genre: ${Genre}`}</p>
        </div>
      </Slide>
    </>
  );
};
AboutDetails.propTypes={
  about:PropTypes.object.isRequired,
}
export default AboutDetails;
