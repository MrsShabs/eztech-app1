import React, { useState, useEffect } from 'react';

function Cart() {
    const [cartMovies, setCartMovies] = useState([]);

    useEffect(() => {
        // Load items from local storage or API on component mount
        const storedCartMovies = localStorage.getItem('cartMovies');
        if (storedCartMovies) {
            setCartMovies(JSON.parse(storedCartMovies));
        }
    }, []);

    useEffect(() => {
        // Save cart items to local storage whenever cartMovies changes 
        localStorage.setItem('cartMovies', JSON.stringify(cartMovies));
    }, [cartMovies]);

    // Function to change quantity of a movie
    function handleQuantityChange(movieId, quantity) {
        setCartMovies(prevMovies => prevMovies.map(movie => movie.id === movieId ? { ...movie, quantity: parseInt(quantity) } : movie));
    }

    // Function to remove movie
    const handleRemoveMovie = movieId => {
        setCartMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
    };

    // Function to calculate total
    const calculateTotal = () => {
        return cartMovies.reduce((total, movie) => total + movie.price * movie.quantity, 0);
    };

    if (cartMovies.length === 0) {
        return <p>Your cart is empty.</p>
    }
    return (
        <div>
            <h2>Your Cart</h2>
            <ul>{cartMovies.map(movie => (
                <li key={movie.id}>
                    <p>{movie.name}</p>
                    <p>Price: ${movie.price}</p>
                    <input
                        type="number"
                        min="1"
                        value={movie.quantity}
                        onChange={event => handleQuantityChange(movie.id, event.target.value)}
                    />
                    <button onClick={() => handleRemoveMovie(movie.id)}>Remove</button>
                </li>
            ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
            <button>Checkout</button>
        </div>
    ); //return closing tab
} //cart closing tab

export default Cart;
