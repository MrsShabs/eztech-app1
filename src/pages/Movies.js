import React, { useState, useEffect } from 'react';
import Search from '../Components/Search.js';
import '../css/Movies.css';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // to display search results in UI for user
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=0849a6e86fb90fea611af2a9738f9e14&query=star+wars');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMovies(data.results); // Assuming the movies array is in data.results
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
         <div className="Movies">
                <div className="search-bar-container">
                    <Search setResults={setResults} />
                </div>
            </div>
        <ul>
            {movies.map(movie => (
                <div className="movie-info" key={movie.id}>
                    <img 
                        className="movie-page-posters" 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>    
                    </img>
                    <ul className="movie-page-li-title">{movie.title}</ul> 
                    <ul className="movie-page-li-vote">Stars: {movie.vote_average}</ul>
                </div> // Assuming the movie title is in movie.title
            ))}
            
        </ul>
           
        </>
    ); //return close bar
} // Movies close bar

export default Movies;
