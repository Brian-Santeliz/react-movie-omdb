const dataFetch = async(title) =>{
const apiKey = "f05561ad";
const url = ` http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;

//consultar api
const res = await fetch(url);
return await res.json();

}
export default dataFetch