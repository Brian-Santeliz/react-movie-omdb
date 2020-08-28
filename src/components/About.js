import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../helper";
import star from "./star.png";
import Spinner from './Spinner'
const About = () => {
  const { id } = useParams();
  const [about, setAbout] = useState({});
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const init = async () => {
      setLoad(true);
      const res = await fetchApi(id);
      setAbout(res);
      setLoad(false);
    };
    init();
  }, [id]);
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
      <div className="container">
        <div className="row">
          <div className="container">
              <div className="text-center ">
              {load && <Spinner/>}
              </div>
          </div>
          <div className="col-md-6 mx-auto text-center">
            <img
              src={Poster}
              alt={Title}
              className="img-fluid  mt-3 p-2 borde"
            />
          </div>
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
            <p className="text-white mt-1">
              {Runtime && `Duration: ${Runtime}`}
            </p>
            <p className="text-white mt-1">{Genre && `Genre: ${Genre}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
