import React from 'react';

const Header = ({title}) => {
    return ( 
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center color">
        <h1 className="navbar-brand mb-0 display-1">{title}</h1>
      </nav>
     );
}
 
export default Header;