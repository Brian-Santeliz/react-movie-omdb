import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../helper";

const About = () => {
  const { id } = useParams();
  const [about, setAbout] = useState({});
  const [load,setLoad] = useState(false)
  useEffect(() => {
    const init = async () => {
        setLoad(true)
      const res = await fetchApi(id);
      setAbout(res);
      setLoad(false)
      console.log(res)
    };
    init();
  }, [id]);
  const { Poster, Title, Plot, Actors, Director, Year, Runtime , Genre} = about;
  return (
    <>
      <div className="container">
        <div className="row">
        {load && 'Loading...'}
          <div className="col-md-6 mx-auto text-center">
            <img
              src={Poster}
              alt={Title}
              className="img-fluid  mt-3 p-2 borde"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-white my-4 text-center">{Title}</h2>
        <p className="text-justify text-white">{Plot}</p>
         <p className="text-justify text-white mt-2">{Director && `Directors: ${Director}`}</p>
         <p className="text-justify text-white mt-2">{Actors && `Actors: ${Actors}`}</p>
         <p className="text-justify text-white mt-2">{Year && `Year: ${Year}`}</p>
         <p className="text-justify text-white mt-2">{Runtime && `Duration: ${Runtime}`}</p>
         <p className="text-justify text-white mt-2">{Genre && `Genre: ${Genre}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
