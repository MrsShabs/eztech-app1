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
        <div className="homepage-welcome">Search Results</div>
         <div className="movies-container">
        <div className="row">
            {results.length > 0 ? (
                results.map(movie => (
                    <div className="col" key={movie.id}>
                        <div className="row">
                            <div className="col movie-title" style={{ width: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{movie.title} </div>
                        </div>
                        <div className="row">
                            <div className="fa-layers">
                                <span><FontAwesomeIcon className="movies-star" icon={faStar} size="6x" style={{ color: "#990000" }} /></span>
                                <span className="col-movies-vote"><span className="movies-vote">{movie.vote_average.toFixed(0)}</span></span>
                            </div>
                            <img
                                className="img-responsive"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </div>
                        <div className="row">
                            <div className="homepage-movies-description">{movie.overview}</div>
                            <div className="d-flex justify-content-center">
                                <button className="btn-movies" onClick={() => addToList(movie)}>Add to List</button>
                                <button className="btn-movies" onClick={() => addToCart(movie)}>Add to Cart</button>
                            </div>
                        </div>
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
