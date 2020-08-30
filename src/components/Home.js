import React, { useState } from "react";
import InputSearch from "./InputSearch";
import List from "./List";

const Home = () => {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <InputSearch setMovies={setMovies} />
      <List movies={movies} />
    </>
  );
};
export default Home;
