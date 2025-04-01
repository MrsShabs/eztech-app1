import React, { useState, useEffect } from 'react';
import Search from '../Components/Search.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../css/Movie.css';

function Movie({ addToCart, addToList, showPopup }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [setResults] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=0849a6e86fb90fea611af2a9738f9e14&query=titanic');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            {showPopup && <div className="popup-message">Movie added to the list!</div>} {/* Pop-up message */}
            <div className="container-fluid">
                <div className="search-bar-container">
                    <Search setResults={setResults} />
                </div>
            </div>
            <div className="movies-container">
                <div className="row">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <img
                                className="img-responsive img-thumbnail"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="d-flex">
                                <div className="col movie-title">{movie.title}</div>
                                <div className="fa-layers">
                                    <FontAwesomeIcon className="movies-star" icon={faStar} size="5x" style={{ color: "#990000" }} />
                                    <span className="col">{movie.vote_average}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn-movies" onClick={() => addToList(movie)}>Add to List</button> 
                                <button className="btn-movies" onClick={() => addToCart(movie)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
} // Movie.js

export default Movie;
