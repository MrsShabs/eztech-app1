import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../css/StreamList.css';

function StreamList({ addToCart, addToList, user }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [setResults] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=0849a6e86fb90fea611af2a9738f9e14&query=movies');
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
            <div className="homepage-container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <div className="homepage-welcome">Welcome</div>
                    </div>
                    <h1>{user}</h1>
                </div>
            </div>
            <div className="homepage-movies-container">
                <div className="row">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div className="row">
                                <div className="col-homepage-title" style={{ width: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{movie.title} </div>
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
                                <div className="d-flex justify-content-center">
                                    <button className="btn-movies" onClick={() => addToList(movie)}>Add to List</button>
                                    <button className="btn-movies" onClick={() => addToCart(movie)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> {/* closing row */}
            </div>
        </>
    );
} // Movie.js

export default StreamList;
