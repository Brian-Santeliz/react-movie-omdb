import React,{useState} from "react";


const InputSearch = ({setMovies}) => {
    const [title,setTitle] = useState('')
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async(e) => {
    const apiKey = 'f05561ad'
    const url =` http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
    e.preventDefault();
    if(title.length === 0){
        //valida que no este vacio y mostrar un error
        console.log('debes ingresa un campo')
        return 
    }
    //consultar api
    const res = await fetch(url)
    const response = await res.json()
    if(response.Response === 'False'){
        console.log('esta pelicula no existe')
        setTitle('')
        return 
    }
    setMovies(response.Search)
    setTitle('')
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
                  value={title}
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
