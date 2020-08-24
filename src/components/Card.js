import React from "react";
import Fade from 'react-reveal/Fade'
const Card = ({ movie }) => {
  const { Title, Year, Type, Poster } = movie;

  return (
    <>
    <Fade>
      <div className="card my-3 card-color ">
        <img src={Poster} alt={Title} className="img-fluid card-img-top " />
        <div className="card-body">
          <div className="card-title">
              <h5 className="text-center ">{Title}</h5>
          </div>
        <a className=" btn-info btn-block my-1 card-text">More info</a>
          <div className="d-flex justify-content-between mt-2">
            <small className="font-weight-bold">Year: {Year}</small>
            <small className="font-weight-bold">Type: {Type}</small>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
};

export default Card;
