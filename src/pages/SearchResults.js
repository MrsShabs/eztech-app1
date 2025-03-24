import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
    const location = useLocation();
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (location.state && location.state.results) {
            setResults(location.state.results);
        }
    }, [location.state]);

    return (
        <div className="results">
        {results.length > 0 ? (
            results.map((movie) => (
                <div key={movie.id} >
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
            ))
        ) : (
            <p>No results found</p>
        )}
        </div> 
    );
}

export default SearchResults;
