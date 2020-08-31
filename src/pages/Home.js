import React, { useState } from "react";
import InputSearch from "../components/InputSearch";
import List from "../components/List";


const Home = ()=> {
  const [movies, setMovies] = useState([])

  return (
    <>
      <InputSearch setMovies={setMovies} />
      <List
        movies={movies}
      />
    </>
  );
}
export default Home;
