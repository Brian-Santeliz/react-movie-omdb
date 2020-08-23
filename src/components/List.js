import React from 'react'


const List = ({movies}) => {
    if(movies.length === 0) return null
    console.log(movies)
    return ( 
        <h1>desde moves</h1>
     );
}
 
export default List;