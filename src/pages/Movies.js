import React, { useState, useEffect } from 'react';
import Search from '../Components/Search.js';
import '../css/Movies.css';

function Movies({addToCart}) {
    // state to hold movies 
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // to display search results in UI for user
    const [results, setResults] = useState([]);

    // default fetch
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=0849a6e86fb90fea611af2a9738f9e14&query=${query}');
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

    // to add movie to the Cart 
    /*const addToCart = (movie) => {
        setCart([...cart, movie]);
    };*/

    // at to the list movie
    const addToList = (movie) => {
        setList ({...list, movie});
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
         <div className="container-fluid">
                <div className="search-bar-container">
                    <Search setResults={setResults} />
                </div>
            </div>
        
            {movies.map(movie => (
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-l-4" key={movie.id}>
                            <img 
                            className="img-responsive img-thumbnail" 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>    
                            </img>
                        <div class="col-l-4">{movie.title}</div> 
                        <div class="col-l-4">Raitings: {movie.vote_average}</div>
                    
                    <button class="movies-bt"onClick={() => 
                        addToList(movie)}>Add to List</button>
                    <button class="movies-bt" onClick={() => 
                        addToCart(movie)}>Add to Cart</button>
                </div>
                </div>
                </div> 
            ))}   
      </>
    ); //return close bar
} // Movies close bar

export default Movies;
