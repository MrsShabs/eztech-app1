import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faList, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';


export default function About () {

    return (
    
    <>
    <h1></h1>
    
    <h2> StreamList is a platform for movie fanatics who looking for safe place to watch, download, and share movies. </h2>
    
    
    <FontAwesomeIcon className = "icon"icon={faMagnifyingGlass} size="2xl" style={{color: "#990000",}} />
    <h2>Users can search for movies and TV shows by genre, title, or actor. 
    </h2>
    
    <FontAwesomeIcon className = "icon" icon={faList} size="2xl" style={{color: "#990000",}} />    
    <h2>
    Users can also create and customized lists of their favorite movies. Lists can be shared with other users.
    </h2>

    <FontAwesomeIcon className = "icon" icon={faCartPlus} size="2xl" style={{color: "#990000",}} />  
    <h2>
    Users can also add movies to cart and checkout.
    </h2>

    <FontAwesomeIcon className = "icon" icon={faUser} style={{color: "#990000",}} />   
    <h2>
    Users can also view their profile and update their information.
    </h2>


</>
    );
}