import React, { useState } from "react";
import Header from "./Header";
import InputSearch from "./InputSearch";
import List from "./List";


const Home = ()=> {
  const [movies, setMovies] = useState([])

  return (
    <>
      <Header title="Search Movie DB" />
      <InputSearch setMovies={setMovies} />
      <List
        movies={movies}
      />
    </>
  );
}
export default Home;
