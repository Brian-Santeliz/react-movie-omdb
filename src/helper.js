const apiKey = process.env.REACT_APP_API_KEY;
export const dataFetch = async(title) =>{
const url = ` http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
//query api
const res = await fetch(url);
return await res.json();
}
export const fetchApi = async(id)=>{
    const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
  return await res.json()
  
}