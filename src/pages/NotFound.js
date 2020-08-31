import React from "react";
import ButtonHome from "../components/ButtonHome";
import Slide from "react-reveal";

const NotFound = () => {
  return (
    <>
      <Slide top>
        <div className="text-center text-white my-5">
          <h1>Error 404</h1>
          <p>Page not found :(</p>
        </div>
      </Slide>
      <ButtonHome />
    </>
  );
};

export default NotFound;
