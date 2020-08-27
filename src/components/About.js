import React from 'react';
import Header from './Header'
import {useParams} from 'react-router-dom'

const About = () => {
    const {id} = useParams();
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