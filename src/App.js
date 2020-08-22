import React, { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {

  const handleChange = e=>{
    console.log(e.target.value)
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('enviando')
  }
  return (
    <>
      <Header title="Search Movie DB" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 mx-auto bordered">
            <form onSubmit={e=>handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a title of movie..."
                  autoFocus
                  onChange={e=>handleChange(e)}
                />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-info btn-block">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
