import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../css/Search.css';
import '../css/Movies.css';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    
    //function to fetch data from the TMDB API
    const getMovie = async (query) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=0849a6e86fb90fea611af2a9738f9e14&query=${query}`
            );
            const data = response.data;
            setResults(data.results);
            navigate('/searchResults', { state: { results: data.results } }); 
        } catch (error) {
            console.error(`Error fetching data:`, error);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value); 
    };

    // function to make request to the API 
    const handleSubmit = (event) => {
        event.preventDefault();
        getMovie(query);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <button className="searchIcon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#990000" }} />
                    </button>
                    <input
                        className="search-input"
                        placeholder="Type to search ..."
                        value={query}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <div className="results">
                {results.length > 0 ? (
                    results.map((movie) => (
                <div key={movie.id} >
                    <img 
                        className="movie-page-posters" 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>    
                    </img>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
            ))
        ) : (
            <p>No results found</p>
        )}
        </div> 
            
        </>
    );
}

export default Search;

/*  <div className="results">
                {results.length > 0 && results.map((movie) => (
                    <div key={movie.id} className="movie">
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
*/

/*
 */