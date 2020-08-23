import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";

function App() {
  const [movies, setMovies] = useState([])
  return (
    <>
      <Header title="Search Movie DB" />
      <InputSearch setMovies={setMovies}/>
    </>
  );
}
export default App;
