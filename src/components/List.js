import React from 'react'
import Card from './Card'


const List = ({movies}) => {
    if(movies.length === 0) return null
   
    return ( 
        <div>
            {movies.map(movie=>
               
                <Card
                    movie={movie}
                />  
               
            )}
        </div>
     );
}
 
export default List;