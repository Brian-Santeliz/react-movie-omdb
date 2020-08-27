import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Card = ({ movie }) => {
  const { Title, Year, Type, Poster, imdbID } = movie;

  return (
    <>
      <Fade>
        <div className="card my-3 card-color ">
          <img src={Poster} alt={Title} className="img-fluid card-img-top " />
          <div className="card-body">
            <div className="card-title">
              <h5 className="text-center ">{Title}</h5>
            </div>

            <Link
              className="btn  btn-info btn-block my-1 card-text mt-3"
              to={`/about/${imdbID}`}
            >
              More info
            </Link>
            <div className="d-flex justify-content-between mt-2">
              <small className="font-weight-normal">
                Year: <span className=" font-weight-bold">{Year}</span>
              </small>
              <small className="font-weight-normal">
                Type: <span className="font-weight-bold">{Type}</span>
              </small>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Card;
