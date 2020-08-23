import React, { useState } from "react";
// import Error from './Error'
import dataFetch from "../helper";
const InputSearch = ({ setMovies }) => {
    
  const [title, setTitle] = useState("");
  const [error, setError] = useState('')
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length === 0) {
      //valida que no este vacio y mostrar un error
      setError("debes ingresa un campo");
      return;
    }
    setError('')
  const response = await dataFetch(title)
     if (response.Response === "False") {
       setError("esta pelicula no existe");
       setTitle("");
       return;
     }
     setMovies(response.Search);
     setTitle("");
     setError('')
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row p-3 input">
          <div className="col-md-6 ">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group  px-4  ">
                <input
                  type="text"
                  className="form-control form "
                  placeholder="Type a title of movie..."
                  autoFocus
                  onChange={(e) => handleChange(e)}
                  value={title}
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 ">
            <div className="form-group text-center px-4">
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn btn-info btn-block btn-submit"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {error !== '' ? error : null}
      </div>
    </>
  );
};

export default InputSearch;
