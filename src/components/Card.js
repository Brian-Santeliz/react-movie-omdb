import React from "react";

const Card = ({ movie }) => {
  const { Title, Year, Type, Poster } = movie;

  return (
    <>
      <div className="card my-3">
        <div className="card-body">
             <img src={Poster} alt={Title} className="img-fluid" />
            <h5 className="text-center mt-3">{Title}</h5>
            <div className="d-flex justify-content-between">
                <small className="font-weight-bold">Year: {Year}</small> 
                 <small className="font-weight-bold">Type: {Type}</small>
            </div>
        </div>
      </div>
    </>
  );
};

export default Card;
