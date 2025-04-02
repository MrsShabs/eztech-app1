import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css';

function Cart({ cart: propCart, cardData }) {
    const [cart, setCart] = useState(propCart);
    const navigate = useNavigate(); // Add useNavigate hook

    useEffect(() => {
        setCart(propCart); // Update cart state when propCart changes
    }, [propCart]);

    const handleRemoveMovie = (movieId) => {
        const updatedCart = cart.filter((movie) => movie.id !== movieId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to local storage
    };

    const calculateTotal = () => {
        return cart.reduce((total, movie) => total + (movie.price || 9.99) * (movie.quantity || 1), 0);
    };

    if (cart.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    // function to direct user to add payment form and complete order
    const handleAddPayment = () => {
        navigate('/paymentForm');
    }; 
    /* 
    //function to submit payment with PaymentForm to payment processor. 
    handleSubmitPayment = (cardData) => {
        // subtotal apply the card payment infomation 
    }
*/
    return (
        <>
            <div className="cart-container row">
                {cart.map((movie) => (
                    <div className="col" key={movie.id}>
                        <p className="cart-movie-poster">
                            <img
                                className="img-responsive img-thumbnail"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </p>
                        <div className="row">
                            <div className="col">
                                <span className="cart-movie-title">{movie.title}</span>
                            </div>
                            <div className="col">
                                <span className="cart-movie-price">${movie.price || 9.99}</span>
                            </div>
                            <div className="col">
                                <button
                                    className="cart-remove-btn"
                                    onClick={() => handleRemoveMovie(movie.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col">
                <div className="checkout-container">
                    <span className="cart-subtotals">Subtotal:</span>
                    <span className="cart-total">${calculateTotal().toFixed(2)}</span>
                    <div>
                    <button className="add-payment-btn" onClick={handleAddPayment}>
                        <FontAwesomeIcon icon={faCreditCard} style={{color: "#ffffff",}} /> 
                    </button>
                    <button className="cart-checkout-btn">
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} />
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;

