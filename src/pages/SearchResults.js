import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../css/SearchResults.css';

function SearchResults({addToList, addToCart}) {
    const location = useLocation();
    const [results, setResults] = useState([]);
    

    useEffect(() => {
        if (location.state && location.state.results) {
            setResults(location.state.results);
        }
    }, [location.state]);

    return (
        <>
            <h2>Your Search Results Are...</h2>
            <div className="movies-container">
                <div className="row">
                    {results.length > 0 ? (
                        results.map((movie) => (
                            <div className="col-3" key={movie.id}>
                                <img
                                    className="img-responsive img-thumbnail"
                                    style={{height: "310px", width: "210px"}}
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
                                </img>
                                <div className="col-3-results-title">{movie.title}</div>
                                <div className="col-3-results-raitings">
                                    <div className="fa-layers">
                                        <FontAwesomeIcon className="movies-star" icon={faStar} size="5x" style={{ color: "#990000" }} />
                                        <span className="col">{movie.vote_average}</span>
                                    </div>
                                </div>
                                <button className="btn-movies" onClick={() => addToList(movie)}>Add to List</button>
                                <button className="btn-movies" onClick={() => addToCart(movie)}>Add to Cart</button>
                            </div>
                            
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchResults;
