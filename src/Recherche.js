import './App.css';

import React from 'react';

class Recherche extends React.Component
{
    render() 
    {
        return (
            <div> 
                <p> Choisir un titre</p>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
                <p>Il y a 10 films</p>
            </div>
        );
    
    };

}
export default Recherche;