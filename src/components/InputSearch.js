import React,{useState} from "react";


const InputSearch = ({setMovies}) => {
    
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-6 ">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Type a title of movie..."
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 ">
            <div className="form-group text-center">
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn btn-info btn-block"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputSearch;
