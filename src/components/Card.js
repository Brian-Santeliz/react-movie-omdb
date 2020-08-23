import React from "react";
import Fade from 'react-reveal/Fade'
const Card = ({ movie }) => {
  const { Title, Year, Type, Poster } = movie;

  return (
    <>
      <div className="card my-3 card-color">
        <img src={Poster} alt={Title} className="img-fluid card-img-top " />
        <div className="card-body">
          <h5 className="text-center">{Title}</h5>
          <div className="d-flex justify-content-between ">
            <small className="font-weight-bold">Year: {Year}</small>
            <small className="font-weight-bold">Type: {Type}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
