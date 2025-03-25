import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/SearchResults.css';
function SearchResults() {
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
        <div class="container-fluid">
            <div class="row">
                {results.length > 0 ? (
                    results.map((movie) => (
                        <div class="col-l-6" key={movie.id}>
                            <img
                                class="img-responsive img-thumbnail"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
                            </img>
                            <div>
                                <div className="search-results-movie-title">{movie.title}</div>
                                <div className="search-results-movie-vote">{movie.vote_average}</div>
                                <div className="search-results-movie-overview">{movie.overview}</div>
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
