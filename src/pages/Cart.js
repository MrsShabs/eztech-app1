import React, { useState, useEffect } from 'react';

function Cart({ cart }) {

    const moviePrice = 9.99;
    // manipulate the list to adjust to quantatiy 
 
    const movieQt = 1;
   
   /* const [cart, setCart] = useState([]);

    // Load items from local storage or API on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart items to local storage whenever cart changes   
    useEffect(() => {
        if (cart.length > 0) { 
        localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

   

    // Function to change quantity of a movie
    function handleQuantityChange(movieId, quantity) {
        setCart(prevMovie => prevMovie.map(movie => movie.id === movieId ? { ...movie, quantity: parseInt(quantity) } : movie));
    }

    // Function to remove movie
    const handleRemoveMovie = movieId => {
        setCart(prevMovie => prevMovie.filter(movie => movie.id !== movieId));
    };

    // Function to calculate total
    const calculateTotal = () => {
        return cart.reduce((total, movie) => total + movie.price * movie.quantity, 0);
    };
 */
    if (cart.length === 0) {
        return <p>Your cart is empty.</p>
    }
    return (
        <div>
            <h2>Your Cart</h2>
            <ul>{cart.map(movie => (
                <li key={movie.id}>
                   {/** <img 
                        className="movie-page-posters" 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>    
                    </img>  */}
                    <p>{movie.title}</p>
                    <p>Price: ${moviePrice}</p>
                    <input
                        type="number"
                        min="1"
                        value={movieQt}
                        /* onChange={event => handleQuantityChange(movie.id, event.target.value)} */
                    />
                    {/*<button onClick={() => handleRemoveMovie(movie.id)}>Remove</button>*/}
                </li>
            ))}
            </ul>
                    <p>Total: {/* ${calculateTotal()} */} </p> 
            <button>Checkout</button>
        </div>
    ); //return closing tab
} //cart closing tab

export default Cart;
