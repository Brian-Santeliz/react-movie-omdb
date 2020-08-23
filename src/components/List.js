import React from "react";
import Card from "./Card";

const List = ({ movies }) => {
  if (movies.length === 0) return null;

  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
          <div className="col-md-4" key={movie.imdbID}>
            <Card  movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
