import React, { useState } from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import List from "./components/List";

function App() {
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
export default App;
