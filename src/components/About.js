import React,{useEffect,useState} from 'react';
import Header from './Header'
import {useParams} from 'react-router-dom'

const About = () => {
    const {id} = useParams();
    const [about,setAbout] = useState([])
    useEffect(()=>{
        const fetchApi = async()=>{
            const key = 'f05561ad'
            const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${id}`)
           const response = await  res.json()
           setAbout(response)
        }
        fetchApi()
    },[])
    return ( 
        <>
        <Header
            title='desde ruta normal'
        />
    <h1 className="text-white">desde About con el id {id}  </h1>
    </>
     );
}
 
export default About;