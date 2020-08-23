import React, { useState } from "react";
import Error from './Error'

const InputSearch = ({ setMovies }) => {
    
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false)
  
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    //probar que todo funcione correcto
    const apiKey = "f05561ad";
    const url = ` http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    if (title.length === 0) {
      //valida que no este vacio y mostrar un error
      setError(true)
      console.log("debes ingresa un campo");
    
      
      return;
    }
    //consultar api
    setError(false)
    const res = await fetch(url);
    const response = await res.json();
    if (response.Response === "False") {
      console.log("esta pelicula no existe");
      
      
      setError(true)
      setTitle("");
      return;
    }
    setError(false)
    setMovies(response.Search);
    setTitle("");
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
        {error && <Error mensaje={response.Response === "False" ? 'no existwe' :'los campso'}/>}
      </div>
    </>
  );
};

export default InputSearch;
