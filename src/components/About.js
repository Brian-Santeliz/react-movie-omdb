import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import { fetchApi} from '../helper'

const About = () => {
    const {id} = useParams();
    const [about,setAbout] = useState({})
    useEffect(()=>{
       
        const init = async()=>{
            const res = await  fetchApi(id)
        console.log(res)
        }
            init()
    },[id])
    return ( 
        <>
      
    <h1 className="text-white">desde About con el id {id}  </h1>
    </>
     );
}
 
export default About;