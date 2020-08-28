import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import { fetchApi} from '../helper'

const About = () => {
    const {id} = useParams();
    const [about,setAbout] = useState({})
    useEffect(()=>{
       
        const init = async()=>{
        const res = await  fetchApi(id)
        setAbout(res)
        }
            init()
    },[id])
    const {Poster, Title, Plot, Actors} = about
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto text-center">
                    <img src={Poster} alt={Title} className="img-fluid  my-3 p-2 border"/>
                </div> 
                <div className="col-md-6">
                  <h2 className="text-white my-3">{Title}</h2>

                </div>   
            </div>    
        </div>  
    
    </>
     );
}
 
export default About;